import { createRequire } from "module";
const require = createRequire(import.meta.url);
const tokens = require("../shared/design-tokens");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...tokens.colors,
      },
      fontFamily: {
        ...tokens.typography.fontFamily,
      },
      fontSize: {
        ...tokens.typography.fontSize,
      },
      borderRadius: {
        ...tokens.shape.borderRadius,
      },
      boxShadow: {
        ...tokens.shape.boxShadow,
      },
      backdropBlur: {
        "2xl": "48px",
        "3xl": "64px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "live-pulse": "livePulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        livePulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(239, 68, 68, 0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(239, 68, 68, 0)" },
        },
      },
    },
  },
  plugins: [],
};
