"use client"

import { useEffect, useState } from "react"

const observations = [
  "Most enterprise security programs fail at the calendar, not the threat model.",
  "AI governance is three problems, not one.",
  "The audit was green. The breach happened anyway.",
  "Least privilege in theory. Inherited access in practice.",
]

export function ObservationStrip() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) return

    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % observations.length)
        setVisible(true)
      }, 500)
    }, 9000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      marginTop: "32px",
      paddingTop: "24px",
      borderTop: "1px solid var(--color-border)",
      maxWidth: "520px",
    }}>
      <span style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--color-text-tertiary)",
        display: "block",
        marginBottom: "8px",
      }}>
        Currently thinking about
      </span>
      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: "15px",
        fontStyle: "italic",
        color: "var(--color-text-secondary)",
        lineHeight: "1.6",
        margin: 0,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}>
        "{observations[index]}"
      </p>
    </div>
  )
}
