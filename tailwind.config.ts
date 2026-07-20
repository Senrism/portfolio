import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Deep space canvas — near-black, slightly blue-shifted so it reads
        // as "ink" rather than muddy grey.
        ink: {
          950: "#08090B",
          900: "#0B0D10",
          800: "#101318",
          700: "#171B21",
          600: "#1F242C",
          500: "#2A3039",
        },
        // Single accent. Used sparingly — restraint is what keeps this
        // professional instead of gamer-RGB.
        accent: {
          DEFAULT: "#00E5C7",
          dim: "#00B39C",
          deep: "#00806F",
        },
        fg: {
          DEFAULT: "#E8EAED",
          muted: "#8B919B",
          dim: "#5A616D",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.18em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0,229,199,0.20), 0 0 32px -8px rgba(0,229,199,0.35)",
        lift: "0 24px 48px -24px rgba(0,0,0,0.9)",
      },
      backgroundImage: {
        grid: `linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)`,
      },
      backgroundSize: {
        // Distinct key from backgroundImage.grid — same name would generate
        // two conflicting `bg-grid` utilities.
        "grid-cell": "72px 72px",
      },
      transitionTimingFunction: {
        // Slow-out expo. Everything eases with this for a single motion voice.
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
