import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Full-Stack Developer · Flipkart",
    text: "ITQHUB didn't just teach me to code — they taught me to think like an engineer. The mentorship was a game-changer.",
  },
  {
    name: "Rahul Verma",
    role: "Android Developer · Swiggy",
    text: "The project-based approach sets ITQHUB apart. By interview time, I had three production apps in my portfolio.",
  },
  {
    name: "Ananya Gupta",
    role: "Security Analyst · Deloitte",
    text: "Coming from a non-tech background, the structured curriculum and weekly mentorship made the transition seamless.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-28 border-t border-white/[0.03]">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-[11px] uppercase tracking-[0.15em] text-text-muted mb-3">
            Testimonials
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-[-0.02em] text-metallic sm:text-4xl">
            From our alumni
          </h2>
        </motion.div>

        <div className="grid gap-3 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-glow rounded-xl border border-white/[0.05] bg-surface-raised p-6"
            >
              <p className="text-[13px] leading-relaxed text-text-secondary">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 border-t border-white/[0.04] pt-4">
                <div className="text-[13px] font-medium text-white">{t.name}</div>
                <div className="mt-0.5 text-[11px] text-text-muted">{t.role}</div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
