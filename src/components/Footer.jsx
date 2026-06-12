export default function Footer() {
  return (
    <footer
      style={{
        background: "#1a2e1a",
        color: "#fff",
        padding: "60px 24px 32px",
        fontFamily: "Inter, system-ui, sans-serif",
        marginTop: 80,
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 40,
          marginBottom: 48,
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 22 }}>🌿</span>
            <span style={{ fontWeight: 900, fontSize: 20, letterSpacing: -0.5 }}>EZPECS</span>
          </div>
          <p style={{ color: "#a8d5a2", fontSize: 14, lineHeight: 1.65, marginBottom: 16 }}>
            Call us during business hours (Mon-Fri, 8:00–16:00) — our team will
            be happy to answer your questions.
          </p>
          <p style={{ color: "#a8d5a2", fontSize: 14, marginBottom: 20, whiteSpace: "nowrap", display: "flex", alignItems: "center"}}>
            <svg
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ marginRight: 8 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
             +7 (777) 957-99-00
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {[
              {
                label: "YouTube",
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
              },
              {
                label: "Instagram",
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
              },
              {
                label: "X",
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>,
              },
              {
                label: "Telegram",
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
              },
            ].map(({ label, svg }) => (
              <div
                key={label}
                title={label}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              >
                {svg}
              </div>
            ))}
          </div>
        </div>

        {/* Our Product */}
        <div>
          <h4 style={{ fontWeight: 700, fontSize: 16, marginBottom: 18, color: "#fff" }}>
            Our Product
          </h4>
          {["Features", "Pricing", "Demo", "Main"].map((link) => (
            <p key={link} style={{ marginBottom: 10 }}>
              <a
                href="#"
                style={{ color: "#a8d5a2", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a8d5a2")}
              >
                {link}
              </a>
            </p>
          ))}
        </div>

        {/* Resources */}
        <div>
          <h4 style={{ fontWeight: 700, fontSize: 16, marginBottom: 18, color: "#fff" }}>
            Resources
          </h4>
          {["Help Center", "Changelog", "Team", "Trust Center"].map((link) => (
            <p key={link} style={{ marginBottom: 10 }}>
              <a
                href="#"
                style={{ color: "#a8d5a2", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a8d5a2")}
              >
                {link}
              </a>
            </p>
          ))}
        </div>
      </div>

      {/* Download buttons */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 40,
          paddingTop: 32,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <p style={{ color: "#a8d5a2", fontSize: 14, fontWeight: 600, marginBottom: 16 }}>
          Download the App
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          {/* App Store */}
          <button
            style={{ background: "#4a7c59", border: "none", color: "#fff", padding: "12px 28px", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, fontFamily: "inherit", transition: "background 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2d5a27")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#4a7c59")}
          >
            <svg width="20" height="20" viewBox="0 0 814 1000" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.9 135.7-318 269-318 71.2 0 130.5 46.8 175 46.8 42.3 0 108.4-49.8 190.5-49.8zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
            </svg>
            App Store
          </button>

          {/* Google Play */}
          <button
            style={{ background: "#4a7c59", border: "none", color: "#fff", padding: "12px 28px", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, fontFamily: "inherit", transition: "background 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2d5a27")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#4a7c59")}
          >
            <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l2.7 1.6 247.2-247v-5.8L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.8 17.1-26 0-35.8l-1.2-.9zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="white"/>
            </svg>
            Google Play
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ color: "#a8d5a2", fontSize: 13 }}>Copyright © 2026 EZPECS</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Subscription Policy", "Privacy Policy"].map((link) => (
            <a
              key={link}
              href="#"
              style={{ color: "#a8d5a2", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a8d5a2")}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}