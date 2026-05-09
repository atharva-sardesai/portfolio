export default function Navbar() {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      borderBottom: "1px solid var(--color-border)",
      background: "rgba(245, 241, 235, 0.85)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
    }}>
      <div style={{
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <a href="/" style={{
          fontFamily: "var(--font-heading)",
          fontSize: "16px",
          fontWeight: 700,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.02em",
        }}>
          Atharva Sardesai
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--color-text-tertiary)",
            letterSpacing: "0.06em",
          }} className="hidden md:block">
            Enterprise Security
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="/blog" style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500, color: "var(--color-text-secondary)" }}>Writing</a>
            <a href="/#about" style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500, color: "var(--color-text-secondary)" }}>About</a>
          </div>
        </div>
      </div>
    </nav>
  )
} 
