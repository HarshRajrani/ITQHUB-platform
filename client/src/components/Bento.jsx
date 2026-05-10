import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Animated Number Counter ─────────────────────── */
function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

/* ── Bento Cards ─────────────────────────────────── */
export default function Bento() {
  return (
    <section id="features" className="noise relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="text-[11px] uppercase tracking-[0.15em] text-text-muted mb-3">
            Why ITQHUB
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-[-0.02em] text-metallic sm:text-4xl">
            Built for outcomes
          </h2>
        </motion.div>

        {/* Bento Grid — 3 columns */}
        <div className="grid gap-3 lg:grid-cols-3">
          {/* CARD 1 — Wide (2/3): Placement Stats with animated counters */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-glow lg:col-span-2 rounded-xl border border-white/[0.05] bg-surface-raised p-8 sm:p-10"
          >
            <div className="text-[11px] uppercase tracking-[0.1em] text-accent font-medium mb-2">
              Real Results
            </div>
            <h3 className="text-lg font-semibold text-white tracking-[-0.01em]">
              Placement Statistics
            </h3>
            <p className="mt-2 text-[13px] text-text-secondary max-w-md">
              Our numbers speak louder than promises. Every metric is verified and updated quarterly.
            </p>

            {/* Stats grid */}
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <div className="font-heading text-3xl font-bold text-white">
                  <AnimatedCounter target={500} suffix="+" />
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.1em] text-text-muted">
                  Students Placed
                </div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-white">
                  <AnimatedCounter target={95} suffix="%" />
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.1em] text-text-muted">
                  Placement Rate
                </div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-white">
                  <AnimatedCounter target={8} suffix=" LPA" duration={1500} />
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.1em] text-text-muted">
                  Avg. Package
                </div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-white">
                  <AnimatedCounter target={24} suffix=" LPA" duration={1500} />
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.1em] text-text-muted">
                  Highest Package
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2 — Small (1/3): Live Mentorship */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="card-glow rounded-xl border border-white/[0.05] bg-surface-raised p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] uppercase tracking-[0.1em] text-accent font-medium">
                  Live Mentorship
                </span>
                {/* Pulsing green dot */}
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-[10px] text-green-500 font-medium">Online</span>
              </div>
              <h3 className="text-lg font-semibold text-white tracking-[-0.01em]">
                1-on-1 Mentorship
              </h3>
              <p className="mt-2 text-[13px] text-text-secondary">
                Weekly sessions with developers from top companies. Personal guidance, not automated replies.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex -space-x-2">
                {["RK", "AS", "PM"].map((initials, i) => (
                  <div
                    key={initials}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-surface-raised bg-surface-overlay text-[9px] font-semibold text-text-secondary"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-[11px] text-text-muted">50+ mentors active</span>
            </div>
          </motion.div>

          {/* CARD 3 — Small: Industry Curriculum */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="card-glow rounded-xl border border-white/[0.05] bg-surface-raised p-8"
          >
            <div className="text-[11px] uppercase tracking-[0.1em] text-accent font-medium mb-2">
              Curriculum
            </div>
            <h3 className="text-lg font-semibold text-white tracking-[-0.01em]">
              Industry-Designed
            </h3>
            <p className="mt-2 text-[13px] text-text-secondary">
              Co-created with CTOs from Flipkart, Razorpay, and Swiggy. Zero outdated theory.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {["React", "Node.js", "Python", "AWS", "Kotlin", "Docker"].map((t) => (
                <span
                  key={t}
                  className="rounded border border-white/[0.05] px-2 py-0.5 text-[10px] uppercase tracking-wider text-text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CARD 4 — Wide (2/3): Projects */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card-glow lg:col-span-2 rounded-xl border border-white/[0.05] bg-surface-raised p-8"
          >
            <div className="text-[11px] uppercase tracking-[0.1em] text-accent font-medium mb-2">
              Portfolio
            </div>
            <h3 className="text-lg font-semibold text-white tracking-[-0.01em]">
              Ship Real Products
            </h3>
            <p className="mt-2 text-[13px] text-text-secondary max-w-md">
              No todo apps. You'll build SaaS platforms, production mobile apps, and security audit tools that real users depend on.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {["SaaS Dashboard", "E-commerce App", "Security Scanner"].map((project) => (
                <div
                  key={project}
                  className="rounded-lg border border-white/[0.04] bg-black/50 px-3 py-4 text-center"
                >
                  <div className="text-[11px] text-text-muted">{project}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
