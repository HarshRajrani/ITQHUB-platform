import { motion } from "framer-motion";

/* ── Icon: Checkmark (green) ──────────────────────── */
function CheckIcon() {
  return (
    <span className="flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-full bg-status-success/15 border border-status-success/30">
      <svg className="h-3.5 w-3.5 text-status-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

/* ── Icon: Cross (red) ────────────────────────────── */
function CrossIcon() {
  return (
    <span className="flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-full bg-live/15 border border-live/30">
      <svg className="h-3.5 w-3.5 text-live" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
}

/* ── Data ─────────────────────────────────────────── */
const ITQHUB_POINTS = [
  "Highly Affordable, No Quality Cuts",
  "Project-Based, Skill-First Learning",
  "Continuously Updated With Industry Trends",
  "Internal Hackathons, Challenges & Face-Offs",
  "Industry-Relevant, Job-Oriented Curriculum",
];

const OTHERS_POINTS = [
  "High Fees With Compromised Quality",
  "Theory-Centric Learning",
  "Outdated, Static Curriculum",
  "No Competitive Learning Environment",
  "Limited Practical Exposure",
];

/* ── Comparison Row Animation ─────────────────────── */
const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ── Main Component ───────────────────────────────── */
export default function Comparison() {
  return (
    <section className="noise relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <div className="mx-auto mb-3 inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] text-accent font-medium">
            Comparison
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-[-0.02em] text-metallic sm:text-4xl lg:text-5xl">
            What Sets ITQHUB{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              *Apart*
            </span>{" "}
            From Others
          </h2>
        </motion.div>

        {/* Comparison Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl border border-white/[0.06] bg-surface-raised overflow-hidden"
        >
          {/* Subtle accent glow on top-left */}
          <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-accent/[0.04] blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-2">
            {/* ── ITQHUB Column ── */}
            <div className="relative p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/[0.06]">
              {/* Left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-accent via-status-success to-accent-light" />

              {/* Column header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-accent/10 border border-accent/20">
                  <svg className="h-7 w-7 text-accent-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.12em] text-accent font-semibold mb-0.5">ITQHUB</div>
                  <div className="text-2xl font-bold text-white tracking-tight">Learning Hub</div>
                </div>
              </div>

              {/* Points */}
              <div className="space-y-5">
                {ITQHUB_POINTS.map((point, i) => (
                  <motion.div
                    key={point}
                    custom={i}
                    variants={rowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3.5"
                  >
                    <CheckIcon />
                    <span className="text-[15px] font-medium text-white/90 tracking-tight">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Others Column ── */}
            <div className="relative p-8 md:p-10">
              {/* Column header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <svg className="h-5 w-5 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.12em] text-text-muted font-semibold mb-0.5">Traditional</div>
                  <div className="text-lg font-bold text-white/60 tracking-tight">Others</div>
                </div>
              </div>

              {/* Points */}
              <div className="space-y-5">
                {OTHERS_POINTS.map((point, i) => (
                  <motion.div
                    key={point}
                    custom={i}
                    variants={rowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3.5"
                  >
                    <CrossIcon />
                    <span className="text-[15px] font-medium text-white/50 tracking-tight">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
