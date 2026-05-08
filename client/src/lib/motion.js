/**
 * ITQHUB — Framer Motion Presets
 *
 * Reusable animation variants & transitions derived from the Obsidian Dark
 * motion tokens in shared/design-tokens.js
 */

export const easeOut = [0.16, 1, 0.3, 1];

export const transitions = {
  fast: { duration: 0.15, ease: easeOut },
  base: { duration: 0.3, ease: easeOut },
  slow: { duration: 0.5, ease: easeOut },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
