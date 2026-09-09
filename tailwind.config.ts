import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /**
         * Monochrome only. There is no accent color in this system — the
         * hierarchy is carried by weight, size, and rule thickness instead.
         * Adding a hue back would undo the whole look, so don't.
         */
        paper: {
          DEFAULT: "#FAF9F6", // window interiors
          desk: "#E9E8E3", // desktop canvas, one step darker so windows lift
          sunk: "#DFDDD6", // sidebars, inset panels, pressed states
          edge: "#CFCCC2", // hairlines inside a window
        },
        ink: {
          DEFAULT: "#0B0B0B", // all outlines and primary text
          muted: "#4A4845",
          dim: "#8A8781",
        },
      },
      fontFamily: {
        // Display serif — the single most recognizable part of the look.
        serif: ["var(--font-lora)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      borderWidth: {
        3: "3px",
      },
      letterSpacing: {
        label: "0.18em",
      },
      boxShadow: {
        // Windows sit on the desk with a soft contact shadow, not a glow.
        window: "0 18px 40px -20px rgba(0,0,0,0.55)",
        // Hard offset for pressed/retro affordances (buttons, chips).
        hard: "3px 3px 0 0 #0B0B0B",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "caret-blink": {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        // Uses `transform` only. Windows carry their drag offset on the
        // separate `translate` property, so the two never collide.
        "window-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.1s step-end infinite",
        "window-in": "window-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
