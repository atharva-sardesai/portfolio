"use client"

interface ContrastPairProps {
  leftLabel: string
  leftValue: string
  leftSub?: string
  rightLabel: string
  rightValue: string
  rightSub?: string
  source?: string
  sourceUrl?: string
}

export function ContrastPair({
  leftLabel, leftValue, leftSub,
  rightLabel, rightValue, rightSub,
  source, sourceUrl
}: ContrastPairProps) {
  return (
    <div className="contrast-pair-grid" style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1px",
      background: "var(--color-border)",
      margin: "48px 0",
      maxWidth: "580px",
    }}>
      {[
        { label: leftLabel, value: leftValue, sub: leftSub, accent: false },
        { label: rightLabel, value: rightValue, sub: rightSub, accent: true },
      ].map((col, i) => (
        <div key={i} style={{
          background: col.accent
            ? "var(--color-dark-bg)"
            : "var(--color-bg-card)",
          padding: "32px 28px",
        }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: col.accent
              ? "var(--color-accent)"
              : "var(--color-text-tertiary)",
            marginBottom: "16px",
          }}>
            {col.label}
          </div>
          <div style={{
            fontFamily: "var(--font-heading)",
            fontSize: "22px",
            fontWeight: 700,
            color: col.accent
              ? "var(--color-dark-text, #F5F1EB)"
              : "var(--color-text-primary)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: col.sub ? "10px" : "0",
          }}>
            {col.value}
          </div>
          {col.sub && (
            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: col.accent
                ? "rgba(245,241,235,0.6)"
                : "var(--color-text-secondary)",
              lineHeight: 1.5,
            }}>
              {col.sub}
            </div>
          )}
        </div>
      ))}
      {source && (
        <div style={{
          gridColumn: "1 / -1",
          background: "var(--color-bg-subtle)",
          padding: "10px 28px",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-text-tertiary)",
        }}>
          {sourceUrl ? (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--color-accent)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--color-text-tertiary)"}
            >
              Source: {source} ↗
            </a>
          ) : `Source: ${source}`}
        </div>
      )}
    </div>
  )
}
