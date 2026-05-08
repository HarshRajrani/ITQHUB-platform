import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Animated Loading Screen ──────────────────────── */
function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow ring */}
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Outer spinning ring */}
        <motion.div
          className="absolute h-28 w-28 rounded-full border-2 border-transparent"
          style={{
            borderTopColor: "#00E5FF",
            borderRightColor: "#7C3AED",
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />

        {/* Inner pulsing dot */}
        <motion.div
          className="h-4 w-4 rounded-full bg-brand-cyan"
          animate={{
            scale: [1, 1.6, 1],
            boxShadow: [
              "0 0 0px rgba(0,229,255,0.4)",
              "0 0 30px rgba(0,229,255,0.6)",
              "0 0 0px rgba(0,229,255,0.4)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>

      {/* Brand name */}
      <motion.h1
        className="mt-10 font-heading text-3xl font-bold tracking-wider"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink bg-clip-text text-transparent">
          ITQHUB
        </span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="mt-3 text-sm text-text-secondary"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Initializing experience…
      </motion.p>
    </motion.div>
  );
}

/* ── Main App Shell ───────────────────────────────── */
export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.main
          className="flex min-h-screen flex-col items-center justify-center bg-obsidian px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Hero */}
          <h1 className="font-heading text-5xl font-extrabold tracking-tight md:text-7xl">
            <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              ITQHUB
            </span>
          </h1>

          <p className="mt-4 max-w-md text-center text-lg text-text-secondary">
            The future of tech is loading. Stay tuned.
          </p>

          {/* Accent bar */}
          <motion.div
            className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Status badge */}
          <div className="mt-10 flex items-center gap-2 rounded-full border border-slate-border bg-obsidian-light px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-success opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-status-success" />
            </span>
            <span className="text-xs text-text-secondary">
              Systems operational
            </span>
          </div>
        </motion.main>
      )}
    </>
  );
}
