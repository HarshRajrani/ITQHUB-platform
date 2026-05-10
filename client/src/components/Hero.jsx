import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ── SVG Dot Grid with Flashlight Effect ─────────── */
function FlashlightGrid() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", () => setMousePos({ x: -1000, y: -1000 }));
    }
    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMove);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-auto absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Dot grid pattern — only visible near the cursor */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dotGrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.4)" />
          </pattern>
          <radialGradient id="flashlight">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="60%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="flashlightMask">
            <rect width="100%" height="100%" fill="black" />
            <circle
              cx={mousePos.x}
              cy={mousePos.y}
              r="200"
              fill="url(#flashlight)"
            />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#dotGrid)"
          mask="url(#flashlightMask)"
        />
      </svg>

      {/* Subtle glow at cursor center */}
      <div
        className="absolute h-[300px] w-[300px] rounded-full transition-[left,top] duration-100 ease-out"
        style={{
          left: mousePos.x - 150,
          top: mousePos.y - 150,
          background: "radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/* ── Animated word reveal ─────────────────────────── */
function RevealLine({ children, delay = 0, className = "" }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Hero({ onEnquiryOpen }) {
  return (
    <section
      id="home"
      className="noise relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <FlashlightGrid />

      {/* ── Depth lighting layers (hero-local) ──────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Overhead radial wash — simulates a soft ceiling light */}
        <div
          className="absolute -top-[30%] left-1/2 -translate-x-1/2 h-[80vh] w-[90vw] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.025) 0%, transparent 60%)",
          }}
        />

        {/* Right-side cool orb — very soft blue presence */}
        <div
          className="absolute top-[20%] -right-[5%] h-[350px] w-[350px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(56,189,248,0.03) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        {/* Left-side warm orb — barely-there warmth */}
        <div
          className="absolute top-[50%] -left-[8%] h-[300px] w-[250px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(148,163,184,0.025) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        {/* Center ground bloom — pulls the eye to the CTA area */}
        <div
          className="absolute bottom-[15%] left-1/2 -translate-x-1/2 h-[200px] w-[500px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(56,189,248,0.02) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1.5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="text-[11px] font-medium tracking-wide text-text-secondary uppercase">
            Enrollments Open · 2026 Batch
          </span>
        </motion.div>

        {/* Main headline — oversized */}
        <h1 className="font-heading text-5xl font-bold leading-[1] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <RevealLine delay={0.1} className="text-metallic">
            Master the Craft.
          </RevealLine>
        </h1>

        {/* Subheadline — thinner weight */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-5 max-w-lg text-[15px] font-light leading-relaxed text-text-secondary tracking-[-0.01em]"
        >
          ITQHUB is the elite forge for the next generation of engineers.
          Industry-led programs with{" "}
          <span className="text-accent font-normal">100% placement support</span>.
        </motion.p>

        {/* Pill CTA — white-to-transparent gradient */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            to="/programs"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-3 text-[13px] font-semibold text-white transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 100%)",
              backdropFilter: "blur(2px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span className="relative z-10">Explore Programs</span>
            <svg className="relative z-10 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            {/* Hover shimmer */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </Link>

          <button
            onClick={onEnquiryOpen}
            className="inline-flex items-center gap-2 text-[13px] text-text-secondary transition-colors duration-200 hover:text-white"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
            </svg>
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
