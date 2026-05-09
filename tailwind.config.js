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
        bg: "#F7F4EF",
        "bg-subtle": "#EFEBE4",
        "text-primary": "#1A1A1A",
        "text-secondary": "#6B6560",
        "text-tertiary": "#9C9590",
        accent: {
          DEFAULT: "#C4391C",
          hover: "#A82E16",
          foreground: "#F7F4EF",
        },
        "accent-hover": "#A82E16",
        "border-strong": "#C8C3BC",
        border: "#E2DDD8",
        input: "#E2DDD8",
        ring: "#C4391C",
        background: "#F7F4EF",
        foreground: "#1A1A1A",
        primary: {
          DEFAULT: "#C4391C",
          foreground: "#F7F4EF",
        },
        secondary: {
          DEFAULT: "#EFEBE4",
          foreground: "#1A1A1A",
        },
        destructive: {
          DEFAULT: "#C4391C",
          foreground: "#F7F4EF",
        },
        muted: {
          DEFAULT: "#EFEBE4",
          foreground: "#6B6560",
        },
        popover: {
          DEFAULT: "#F7F4EF",
          foreground: "#1A1A1A",
        },
        card: {
          DEFAULT: "#EFEBE4",
          foreground: "#1A1A1A",
        },
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
