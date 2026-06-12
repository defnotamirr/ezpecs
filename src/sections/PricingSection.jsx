import { useState } from "react";

const PLANS = [
  {
    name: "Parent Premium",
    price: "3 990",
    highlight: false,
    features: [
      "Number of children: 5",
      "Number of boards: Unlimited",
      "PECS sentence playback: Unlimited",
      "CBoard: Unlocked",
      "Analytics: Full access",
      "Create new categories: Yes",
      "Export PDF reports: Yes",
    ],
  },
  {
    name: "Specialist",
    price: "4 990",
    highlight: true,
    badge: "Most Popular",
    features: [
      "All Parent Premium features",
      "Tailored for individual specialists",
    ],
  },
  {
    name: "Organization",
    price: "9 990",
    highlight: false,
    features: [
      "Number of children: 50",
      "Number of specialists: 10",
      "Number of boards: Unlimited",
      "PECS sentence playback: Unlimited",
      "CBoard: Unlocked",
      "Analytics: Full access",
      "Create new categories: Yes",
      "Export PDF reports: Yes",
    ],
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section
      style={{
        background: "#f7f5f0",
        padding: "80px 24px 0",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            color: "#4a7c59",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Plans
        </p>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(28px,5vw,44px)",
            fontWeight: 800,
            margin: "0 0 10px",
            color: "#1a2e1a",
          }}
        >
          <span style={{ color: "#4a7c59", fontStyle: "italic" }}>
            Transparent pricing
          </span>{" "}
          <span style={{ fontWeight: 300 }}>for everyone.</span>
        </h2>
        <p style={{ textAlign: "center", color: "#555", fontSize: 16, marginBottom: 32 }}>
          All plans include a 14-day free trial. No credit card required.
        </p>

        {/* Billing toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: 48,
          }}
        >
          <span
            style={{
              fontWeight: billing === "monthly" ? 700 : 400,
              color: billing === "monthly" ? "#1a2e1a" : "#888",
              fontSize: 15,
            }}
          >
            Monthly
          </span>
          <div
            onClick={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}
            style={{
              width: 48,
              height: 26,
              background: billing === "yearly" ? "#4a7c59" : "#ccc",
              borderRadius: 13,
              position: "relative",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 3,
                left: billing === "yearly" ? 25 : 3,
                width: 20,
                height: 20,
                background: "#fff",
                borderRadius: "50%",
                transition: "left 0.3s",
                boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
              }}
            />
          </div>
          <span
            style={{
              fontWeight: billing === "yearly" ? 700 : 400,
              color: billing === "yearly" ? "#1a2e1a" : "#888",
              fontSize: 15,
            }}
          >
            Yearly
          </span>
        </div>

        {/* Pricing cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            alignItems: "center",
          }}
        >
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.highlight ? "#1a2e1a" : "#fff",
                borderRadius: 20,
                padding: "32px 28px",
                border: plan.highlight ? "2px solid #4a7c59" : "2px solid #e8e8e8",
                position: "relative",
                boxShadow: plan.highlight
                  ? "0 12px 48px rgba(74,124,89,0.25)"
                  : "0 2px 16px rgba(0,0,0,0.06)",
                transform: plan.highlight ? "scale(1.04)" : "scale(1)",
                transition: "transform 0.2s",
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#4a7c59",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "4px 14px",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                  }}
                >
                  {plan.badge}
                </div>
              )}
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 17,
                  color: plan.highlight ? "#a8d5a2" : "#555",
                  marginBottom: 6,
                }}
              >
                {plan.name}
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 28 }}>
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: 900,
                    color: plan.highlight ? "#fff" : "#1a2e1a",
                    letterSpacing: -1,
                  }}
                >
                  {billing === "yearly"
                    ? Math.round(parseInt(plan.price.replace(" ", "")) * 0.8)
                        .toLocaleString("en")
                        .replace(",", " ")
                    : plan.price}
                </span>
                <span style={{ color: plan.highlight ? "#a8d5a2" : "#888", fontSize: 14 }}>
                  ₸ / month
                </span>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      marginBottom: 10,
                      fontSize: 14,
                      color: plan.highlight ? "#d4ead0" : "#444",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "#4a7c59", fontWeight: 900, flexShrink: 0, fontSize: 16, lineHeight: 1.4 }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                style={{
                  width: "100%",
                  padding: "13px 0",
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                  border: plan.highlight ? "none" : "2px solid #2d5a27",
                  background: plan.highlight ? "#4a7c59" : "transparent",
                  color: plan.highlight ? "#fff" : "#2d5a27",
                  fontFamily: "inherit",
                  transition: "background 0.2s, color 0.2s",
                  boxShadow: plan.highlight ? "0 4px 16px rgba(74,124,89,0.4)" : "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#2d5a27";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = plan.highlight ? "#4a7c59" : "transparent";
                  e.currentTarget.style.color = plan.highlight ? "#fff" : "#2d5a27";
                }}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}