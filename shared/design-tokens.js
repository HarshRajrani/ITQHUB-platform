/**
 * ITQHUB — Obsidian Dark Design Tokens
 *
 * Single source of truth for all design values.
 * Consumed by:  client/tailwind.config.js
 *               client/src/lib/motion.js
 *               server (email templates, etc.)
 */

const colors = {
  obsidian: {
    DEFAULT: "#0B0F19",
    light: "#121829",
    lighter: "#1A2138",
  },
  slate: {
    border: "#2A3250",
  },
  brand: {
    cyan: "#00E5FF",
    purple: "#7C3AED",
    pink: "#F472B6",
  },
  text: {
    primary: "#F1F5F9",
    secondary: "#94A3B8",
    tertiary: "#64748B",
  },
  status: {
    success: "#34D399",
    warning: "#FBBF24",
    error: "#F87171",
  },
};

const typography = {
  fontFamily: {
    sans: ['"Inter"', "sans-serif"],
    heading: ['"Outfit"', "sans-serif"],
  },
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.25rem" }],
    base: ["1rem", { lineHeight: "1.5rem" }],
    lg: ["1.25rem", { lineHeight: "1.75rem" }],
    xl: ["1.563rem", { lineHeight: "2rem" }],
    "2xl": ["1.953rem", { lineHeight: "2.25rem" }],
    "3xl": ["2.441rem", { lineHeight: "2.75rem" }],
    "4xl": ["3.052rem", { lineHeight: "3.25rem" }],
  },
};

const shape = {
  borderRadius: {
    sm: "6px",
    DEFAULT: "8px",
    md: "10px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },
  boxShadow: {
    card: "0 4px 24px rgba(0, 0, 0, 0.4)",
    glow: "0 0 20px rgba(0, 229, 255, 0.15)",
    "glow-purple": "0 0 20px rgba(124, 58, 237, 0.15)",
  },
};

const motion = {
  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
  duration: {
    fast: "150ms",
    base: "300ms",
    slow: "500ms",
  },
};

module.exports = { colors, typography, shape, motion };
