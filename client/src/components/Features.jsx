import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Industry-Led Curriculum",
    description: "Designed with CTOs and senior engineers. No outdated theory — only what gets you hired.",
  },
  {
    title: "100% Placement Support",
    description: "Mock interviews, resume building, direct referrals. We don't stop until you're placed.",
  },
  {
    title: "Real Projects, Not Tutorials",
    description: "Ship production apps with real users. SaaS platforms, mobile apps, security audits.",
  },
  {
    title: "Live + Self-Paced",
    description: "Weekend live batches or HD recordings. Full flexibility, zero compromise on quality.",
  },
  {
    title: "1-on-1 Mentorship",
    description: "Weekly sessions with senior developers. Personal guidance, not chatbot replies.",
  },
  {
    title: "Lifetime Community",
    description: "500+ alumni across top tech companies. Referrals, collaborations, lifelong connections.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-28 border-t border-white/[0.03]">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="text-[11px] uppercase tracking-[0.15em] text-text-muted mb-3">
            Why ITQHUB
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-[-0.02em] text-metallic sm:text-4xl">
            Not just another course platform
          </h2>
        </motion.div>

        <div className="grid gap-px bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden border border-white/[0.05]">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-black p-7 transition-colors duration-300 hover:bg-surface-raised"
            >
              <div className="mb-3 text-[11px] uppercase tracking-[0.1em] text-accent font-medium">
                0{i + 1}
              </div>
              <h3 className="text-[14px] font-semibold text-white tracking-[-0.01em]">
                {feat.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
