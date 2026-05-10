/**
 * ITQHUB — Sheryians-Premium Design Tokens
 *
 * Deep Obsidian base. ITQHUB Blue accents. Live Red pulses.
 * Geist Sans / Geist Mono. Glassmorphism material.
 */

const colors = {
  surface: {
    DEFAULT: "#030712",          // Deep Obsidian
    raised: "#0A0F1A",           // Card bg — slightly lifted
    overlay: "#111827",          // Modals / overlays
    muted: "#060B14",            // Alternate sections
    glass: "rgba(3, 7, 18, 0.6)", // Glassmorphism fill
  },
  border: {
    DEFAULT: "rgba(255, 255, 255, 0.06)",
    strong: "rgba(255, 255, 255, 0.10)",
    hover: "#2563EB",            // ITQHUB Blue on hover
    glass: "rgba(255, 255, 255, 0.10)", // Glass border
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#94A3B8",        // Slate-400 — softer grey
    muted: "#475569",            // Slate-600
  },
  accent: {
    DEFAULT: "#2563EB",          // ITQHUB Blue
    light: "#60A5FA",            // Blue-400
    dark: "#1D4ED8",             // Blue-700
    muted: "rgba(37, 99, 235, 0.10)",
    glow: "rgba(37, 99, 235, 0.08)",
  },
  live: {
    DEFAULT: "#EF4444",          // Live Red
    light: "#F87171",
    pulse: "rgba(239, 68, 68, 0.15)",
  },
  warm: {
    DEFAULT: "#F59E0B",
    light: "#FBBF24",
  },
  status: {
    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
  },
};

const typography = {
  fontFamily: {
    sans: ['"Geist Sans"', '"Inter"', "system-ui", "sans-serif"],
    heading: ['"Geist Sans"', '"Inter"', "system-ui", "sans-serif"],
    mono: ['"Geist Mono"', '"JetBrains Mono"', "monospace"],
  },
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.25rem" }],
    base: ["1rem", { lineHeight: "1.6" }],
    lg: ["1.125rem", { lineHeight: "1.75rem" }],
    xl: ["1.25rem", { lineHeight: "1.75rem" }],
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
    "5xl": ["3rem", { lineHeight: "1.1" }],
    "6xl": ["3.75rem", { lineHeight: "1.05" }],
    "7xl": ["4.5rem", { lineHeight: "1" }],
  },
};

const shape = {
  borderRadius: {
    sm: "4px",
    DEFAULT: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "20px",
    full: "9999px",
  },
  boxShadow: {
    subtle: "0 1px 2px rgba(0, 0, 0, 0.8)",
    card: "inset 0 1px 0 rgba(255,255,255,0.04)",
    elevated: "0 8px 32px rgba(0, 0, 0, 0.8)",
    "inner-glow": "inset 0 0 60px rgba(37, 99, 235, 0.04)",
    glow: "0 0 1px rgba(37, 99, 235, 0.5)",
    "glass": "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
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
