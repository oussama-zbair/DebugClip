import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ds: {
          bg:       "#020617",
          surface:  "#0f172a",
          raised:   "#1e293b",
          border:   "#1e293b",
          text:     "#f1f5f9",
          textSub:  "#94a3b8",
          textMuted:"#475569",
          blue:     "#38bdf8",
          indigo:   "#6366f1",
          purple:   "#a855f7",
          error:    "#f87171",
          success:  "#34d399",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "Consolas", "monospace"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #38bdf8 0%, #6366f1 50%, #a855f7 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp: { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
      },
    },
  },
  plugins: [],
};

export default config;
