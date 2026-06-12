import { useState, useRef } from "react";

// ── Card data split into three groups ─────────────────────────────────────────
// Replace `img: null` with a real URL or import when you have the photos.
const GROUPS = [
  {
    id: "subject",
    label: "Subject",
    cards: [
      { id: "i", label: "I", img: null },
    ],
  },
  {
    id: "verb",
    label: "Verb",
    cards: [
      { id: "want",  label: "want",  img: null },
      { id: "need",  label: "need",  img: null },
      { id: "like",  label: "like",  img: null },
    ],
  },
  {
    id: "object",
    label: "Action / Object",
    cards: [
      { id: "play",  label: "play",  img: null },
      { id: "eat",   label: "eat",   img: null },
      { id: "drink", label: "drink", img: null },
      { id: "sleep", label: "sleep", img: null },
    ],
  },
];

const ALL_CARDS = GROUPS.flatMap((g) => g.cards);

// ── Single PECS card ───────────────────────────────────────────────────────────
function PECSCard({ card, onDragStart, dragging, inSentence, onClick }) {
  const size = inSentence ? 68 : 96;
  const imgSize = size - (inSentence ? 16 : 22);

  return (
    <div
      draggable={!inSentence}
      onDragStart={onDragStart ? (e) => onDragStart(e, card) : undefined}
      onClick={onClick ? () => onClick(card) : undefined}
      title={inSentence ? "Click to remove" : `Add "${card.label}"`}
      style={{
        background: "#fff",
        borderRadius: 10,
        padding: inSentence ? "8px 6px 6px" : "10px 8px 8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        cursor: inSentence ? "pointer" : "grab",
        boxShadow: dragging
          ? "0 8px 28px rgba(0,0,0,0.22)"
          : "0 2px 10px rgba(0,0,0,0.10)",
        transform: dragging ? "scale(1.06) rotate(-2deg)" : "scale(1)",
        transition: "box-shadow 0.15s, transform 0.15s",
        userSelect: "none",
        width: size,
        flexShrink: 0,
        opacity: dragging ? 0.7 : 1,
        border: "1.5px solid #e4e4e4",
        position: "relative",
      }}
    >
      {/* Photo placeholder — replace img: null with a real src to show a photo */}
      <div
        style={{
          width: imgSize,
          height: imgSize,
          borderRadius: 6,
          background: "#e2ebe3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          flexShrink: 0,
          border: "1px dashed #b0c8b3",
        }}
      >
        {card.img ? (
          <img
            src={card.img}
            alt={card.label}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            draggable={false}
          />
        ) : (
          <span style={{
            fontSize: inSentence ? 8 : 10,
            color: "#8aaa8e",
            fontWeight: 600,
            textAlign: "center",
            padding: "0 4px",
            lineHeight: 1.3,
          }}>
            photo
          </span>
        )}
      </div>

      <span style={{
        fontSize: inSentence ? 10 : 12,
        fontWeight: 700,
        color: "#1a2e1a",
        letterSpacing: 0.1,
      }}>
        {card.label}
      </span>

      {/* Red × badge when card is in the sentence strip */}
      {inSentence && (
        <div style={{
          position: "absolute",
          top: -6,
          right: -6,
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "#e05252",
          color: "#fff",
          fontSize: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          lineHeight: 1,
        }}>
          ×
        </div>
      )}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function LiveDemo() {
  const [sentence, setSentence]     = useState([]);
  const [draggingId, setDraggingId] = useState(null);
  const [isPlaying, setIsPlaying]   = useState(false);
  const [dropHighlight, setDropHighlight] = useState(false);

  const usedIds = new Set(sentence.map((c) => c.id));

  const handleDragStart = (e, card) => {
    setDraggingId(card.id);
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("cardId");
    const card = ALL_CARDS.find((c) => c.id === cardId);
    if (card && !usedIds.has(cardId)) {
      setSentence((prev) => [...prev, card]);
    }
    setDraggingId(null);
    setDropHighlight(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDropHighlight(true);
  };

  const handleCardClick = (card) => {
    if (!usedIds.has(card.id)) setSentence((prev) => [...prev, card]);
  };

  const removeFromSentence = (cardId) => {
    setSentence((prev) => prev.filter((c) => c.id !== cardId));
  };

  const handlePlay = () => {
    if (sentence.length === 0 || isPlaying) return;
    const text = sentence.map((c) => c.label).join(" ");
    if ("speechSynthesis" in window) {
      const utt = new SpeechSynthesisUtterance(text);
      utt.rate = 0.85;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utt);
      utt.onend = () => setIsPlaying(false);
    }
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), Math.max(1800, text.length * 120));
  };

  return (
    <section style={{ background: "#f7f5f0", padding: "72px 24px 80px", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>

        {/* ── Header ── */}
        <p style={{ textAlign: "center", color: "#4a7c59", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
          Live Demo
        </p>
        <h2 style={{ textAlign: "center", fontSize: "clamp(28px,5vw,42px)", fontWeight: 800, margin: "0 0 12px", color: "#1a2e1a", lineHeight: 1.2 }}>
          <em style={{ fontStyle: "italic", fontWeight: 800 }}>Try it</em>{" "}
          <span style={{ fontWeight: 300 }}>right now.</span>
        </h2>
        <p style={{ textAlign: "center", color: "#555", fontSize: 16, marginBottom: 40 }}>
          Drag cards into the sentence bar and tap play to hear the phrase. No signup required
        </p>

        {/* ── Browser chrome mock ── */}
        <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 40px rgba(0,0,0,0.13)", overflow: "hidden", border: "1px solid #e0e0e0" }}>

          {/* Fake browser bar */}
          <div style={{ background: "#f0f0f0", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #ddd" }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
            <div style={{ flex: 1, background: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 13, color: "#888", border: "1px solid #ddd", marginLeft: 12 }}>
              ezpecs.com
            </div>
          </div>

          <div style={{ padding: "28px 24px 24px" }}>

            {/* ── Step 1: Card tray ── */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ background: "#4a7c59", color: "#fff", width: 26, height: 26, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>1</span>
                <span style={{ color: "#4a7c59", fontWeight: 600, fontSize: 15 }}>Step 1: Pick cards</span>
              </div>
              <p style={{ fontWeight: 700, fontSize: 16, margin: "0 0 14px", color: "#1a2e1a" }}>Available cards</p>

              {/* Green tray — three columns separated by vertical lines */}
              <div style={{ background: "#4a7c59", borderRadius: 14, padding: "20px 0", display: "flex", alignItems: "stretch", minHeight: 170, overflow: "hidden" }}>
                {GROUPS.map((group, gi) => {
                  const available = group.cards.filter((c) => !usedIds.has(c.id));
                  return (
                    <div
                      key={group.id}
                      style={{
                        flex: group.id === "object" ? 2 : 1,
                        padding: "0 16px",
                        borderRight: gi < GROUPS.length - 1 ? "2px solid rgba(255,255,255,0.3)" : "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                      }}
                    >
                      {/* Column label */}
                      <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase" }}>
                        {group.label}
                      </span>

                      {/* Cards */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "flex-start" }}>
                        {available.map((card) => (
                          <PECSCard
                            key={card.id}
                            card={card}
                            onDragStart={handleDragStart}
                            dragging={draggingId === card.id}
                            onClick={handleCardClick}
                          />
                        ))}
                        {available.length === 0 && (
                          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, margin: 0 }}>All added ✓</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Step 2: Sentence strip ── */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ background: "#F5A623", color: "#fff", width: 26, height: 26, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>2</span>
                <span style={{ color: "#c47d0e", fontWeight: 600, fontSize: 15 }}>Step 2: Hear the sentence</span>
              </div>
              <p style={{ fontWeight: 700, fontSize: 16, margin: "0 0 14px", color: "#1a2e1a" }}>Your sentence</p>

              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={() => setDropHighlight(false)}
                style={{
                  background: "#F5A623",
                  borderRadius: 14,
                  padding: "16px 14px",
                  minHeight: 108,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  border: dropHighlight ? "3px dashed rgba(255,255,255,0.8)" : "3px dashed transparent",
                  transition: "border 0.2s",
                }}
              >
                {sentence.length === 0 && (
                  <div style={{ border: "2px dashed rgba(255,255,255,0.7)", borderRadius: 10, width: 76, height: 80, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)", fontSize: 11, textAlign: "center", padding: 8, flexShrink: 0 }}>
                    Drop cards here
                  </div>
                )}

                <div style={{ display: "flex", gap: 10, flex: 1, flexWrap: "wrap", alignItems: "center" }}>
                  {sentence.map((card) => (
                    <PECSCard
                      key={card.id}
                      card={card}
                      onDragStart={() => {}}
                      inSentence
                      onClick={() => removeFromSentence(card.id)}
                    />
                  ))}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginLeft: "auto", flexShrink: 0 }}>
                  <button
                    onClick={handlePlay}
                    disabled={sentence.length === 0}
                    style={{ background: isPlaying ? "#fff" : "rgba(255,255,255,0.25)", border: "2px solid rgba(255,255,255,0.6)", borderRadius: 10, width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center", cursor: sentence.length === 0 ? "not-allowed" : "pointer", transition: "background 0.2s, transform 0.15s", transform: isPlaying ? "scale(1.1)" : "scale(1)", opacity: sentence.length === 0 ? 0.4 : 1 }}
                  >
                    <span style={{ fontSize: 18 }}>{isPlaying ? "🔊" : "▶"}</span>
                  </button>
                  <button
                    onClick={() => setSentence([])}
                    style={{ background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.4)", borderRadius: 10, width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                  >
                    <span style={{ fontSize: 16 }}>🗑</span>
                  </button>
                </div>
              </div>

              {isPlaying && (
                <div style={{ marginTop: 12, padding: "10px 16px", background: "#fff3cd", borderRadius: 8, fontSize: 14, color: "#856404", fontWeight: 600, textAlign: "center" }}>
                  🔊 Playing: "{sentence.map((c) => c.label).join(" ")}"
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}