export default function HeroSection() {
  return (
    <section
      style={{
        background: "#eef7e8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "52px 60px",
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Full-section background pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(140,190,120,0.15) 40px),
          repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(140,190,120,0.15) 40px)
        `,
        pointerEvents: "none",
      }} />

      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 40,
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Left: text content ── */}
        <div style={{ flex: 1, minWidth: 280 }}>

          {/* Title + avatars */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 56px)",
                fontWeight: 900,
                margin: 0,
                color: "#1f2937",
                letterSpacing: -1.5,
                lineHeight: 1,
              }}
            >
              EZPECS
            </h1>

            {/* Avatar circles — replace each div with <img> when you have photos */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {["A", "B", "C"].map((letter, i) => (
                <div
                  key={i}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: ["#e8a598", "#d4845a", "#c97b6e"][i],
                    border: "2px solid #e1f5d7",
                    marginLeft: i === 0 ? 0 : -8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    color: "#fff",
                    fontWeight: 700,
                    flexShrink: 0,
                    overflow: "hidden",
                  }}
                >
                  {letter}
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: 16,
              color: "#1f2937",
              lineHeight: 1.7,
              marginBottom: 28,
              maxWidth: 420,
              fontWeight: 400,
            }}
          >
            Professional AAC platform combining PECS visual cards with voice
            output and comprehensive analytics. Built for children, parents,
            specialists, and therapy organizations.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
            <button
              style={{
                background: "transparent",
                border: "1.5px solid #2d6a35",
                color: "#2d6a35",
                padding: "9px 20px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "inherit",
                transition: "background 0.18s, color 0.18s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#2d6a35";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#2d6a35";
              }}
            >
              Watch Demo ▶
            </button>
            <button
              style={{
                background: "#3a7d44",
                border: "none",
                color: "#fff",
                padding: "9px 20px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "inherit",
                boxShadow: "0 2px 10px rgba(58,125,68,0.30)",
                transition: "background 0.18s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#2d6a35")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#3a7d44")}
            >
              Start Free Trial ↗
            </button>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", alignItems: "center" }}>

            {/* 100+ Users */}
            <div style={{ paddingRight: 20 }}>
              <div style={{ fontWeight: 800, fontSize: 18, color: "#1a2e1a", lineHeight: 1.2 }}>
                100+
              </div>
              <div style={{ fontSize: 12, color: "#4a7c59", fontWeight: 500, marginTop: 1 }}>
                Users
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: 1, height: 32, background: "rgba(45,90,39,0.2)", marginRight: 20 }} />

            {/* 4.8/5 Rating */}
            <div style={{ paddingRight: 20 }}>
              <div style={{ fontWeight: 800, fontSize: 18, color: "#1a2e1a", lineHeight: 1.2 }}>
                4.8/5
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 3, marginTop: 2 }}>
                {[1, 2, 3, 4].map((s) => (
                  <svg key={s} width="11" height="11" viewBox="0 0 24 24" fill="#f5a623">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <svg width="11" height="11" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="halfStar">
                      <stop offset="50%" stopColor="#f5a623" />
                      <stop offset="50%" stopColor="#d4d4d4" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#halfStar)" />
                </svg>
                <span style={{ fontSize: 11, color: "#4a7c59", fontWeight: 500, marginLeft: 1 }}>Rating</span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: 1, height: 32, background: "rgba(45,90,39,0.2)", marginRight: 20 }} />

            {/* 30+ Centers */}
            <div>
              <div style={{ fontWeight: 800, fontSize: 18, color: "#1a2e1a", lineHeight: 1.2 }}>
                30+
              </div>
              <div style={{ fontSize: 12, color: "#4a7c59", fontWeight: 500, marginTop: 1 }}>
                Centers
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: tablet image — bleeds out and gets cropped by section overflow:hidden ── */}
        <div style={{
          flexShrink: 0,
          width: 500,
          marginRight: -60,
          marginTop: -52,
          marginBottom: -52,
          position: "relative",
          alignSelf: "stretch",
          display: "flex",
          alignItems: "center",
        }}>
          {/* Blurred copy as background */}
          <img
            src="/images/tablet-mockup.png"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "left center",
              filter: "blur(18px)",
              transform: "scale(1.5)",
              opacity: 0.85,
            }}
          />
          {/* Sharp image on top */}
          <img
            src="/images/tablet-mockup.png"
            alt="EZPECS tablet mockup"
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}