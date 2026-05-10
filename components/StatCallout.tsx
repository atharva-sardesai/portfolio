"use client"

interface StatCalloutProps {
  stat: string
  label: string
  context?: string
  source: string
  sourceUrl?: string
}

export function StatCallout({
  stat, label, context, source, sourceUrl
}: StatCalloutProps) {
  return (
    <div style={{
      background: "var(--color-bg-card)",
      borderTop: "2px solid var(--color-accent)",
      padding: "36px 40px",
      margin: "48px 0",
      maxWidth: "580px",
    }}>
      <div style={{
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(52px, 8vw, 80px)",
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: "-0.03em",
        color: "var(--color-text-primary)",
        marginBottom: "8px",
      }}>
        {stat}
      </div>
      <div style={{
        fontFamily: "var(--font-body)",
        fontSize: "17px",
        fontWeight: 500,
        color: "var(--color-text-primary)",
        lineHeight: 1.4,
        marginBottom: context ? "12px" : "24px",
      }}>
        {label}
      </div>
      {context && (
        <div style={{
          fontFamily: "var(--font-body)",
          fontSize: "15px",
          color: "var(--color-text-secondary)",
          lineHeight: 1.65,
          marginBottom: "24px",
        }}>
          {context}
        </div>
      )}
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.08em",
        color: "var(--color-text-tertiary)",
        textTransform: "uppercase",
        borderTop: "1px solid var(--color-border)",
        paddingTop: "12px",
      }}>
        {sourceUrl ? (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--color-text-tertiary)",
              textDecoration: "none",
              transition: "color 0.18s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--color-accent)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--color-text-tertiary)"}
          >
            Source: {source} ↗
          </a>
        ) : (
          `Source: ${source}`
        )}
      </div>
    </div>
  )
}
