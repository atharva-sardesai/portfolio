/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        bg: "#F5F1EB",
        "bg-subtle": "#EDE8DF",
        "bg-card": "#E8E2D8",
        "dark-bg": "#1C1917",
        "dark-surface": "#28251F",
        "dark-border": "#3D3830",
        "dark-text": "#F5F1EB",
        "dark-muted": "#A09488",
        "text-primary": "#18181B",
        "text-secondary": "#6B6560",
        "text-tertiary": "#A09B95",
        accent: {
          DEFAULT: "#C4391C",
          hover: "#A82E16",
          muted: "rgba(196, 57, 28, 0.12)",
          foreground: "#F5F1EB",
        },
        "accent-hover": "#A82E16",
        "border-strong": "#C0BAB1",
        border: "#D9D4CC",
        input: "#D9D4CC",
        ring: "#C4391C",
        background: "#F5F1EB",
        foreground: "#18181B",
        primary: {
          DEFAULT: "#C4391C",
          foreground: "#F5F1EB",
        },
        secondary: {
          DEFAULT: "#EDE8DF",
          foreground: "#18181B",
        },
        destructive: {
          DEFAULT: "#C4391C",
          foreground: "#F5F1EB",
        },
        muted: {
          DEFAULT: "#EDE8DF",
          foreground: "#6B6560",
        },
        popover: {
          DEFAULT: "#F5F1EB",
          foreground: "#18181B",
        },
        card: {
          DEFAULT: "#E8E2D8",
          foreground: "#18181B",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        gutter: "var(--gutter)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
