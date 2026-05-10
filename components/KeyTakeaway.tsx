interface KeyTakeawayProps {
  text: string
}

export function KeyTakeaway({ text }: KeyTakeawayProps) {
  return (
    <div style={{
      borderLeft: "3px solid var(--color-accent)",
      paddingLeft: "24px",
      margin: "48px 0 0",
    }}>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--color-accent)",
        marginBottom: "12px",
      }}>
        The takeaway
      </div>
      <p style={{
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(18px, 2.5vw, 24px)",
        fontStyle: "italic",
        fontWeight: 400,
        color: "var(--color-text-primary)",
        lineHeight: 1.4,
        letterSpacing: "-0.01em",
        margin: 0,
      }}>
        "{text}"
      </p>
    </div>
  )
}
