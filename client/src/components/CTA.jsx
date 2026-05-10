import { motion } from "framer-motion";

export default function CTA({ onEnquiryOpen }) {
  return (
    <section className="relative px-6 py-28 border-t border-white/[0.03] overflow-hidden">
      {/* Background Depth: Central Cyan Radial Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent opacity-50" />

      <div className="mx-auto max-w-5xl relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/60 backdrop-blur-2xl p-12 text-center sm:p-20 transition-all duration-500 hover:border-cyan-500/40 group"
        >
          {/* Grid Overlay: Engineering Blueprint Texture */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none" 
            style={{ 
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, 
              backgroundSize: '40px 40px' 
            }} 
          />

          {/* Internal Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Vertical light beam (Legacy refinement) */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent" />

          <div className="relative z-10">
            {/* Text Glow Heading */}
            <h2 className="font-heading text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">
              Ready to start?
            </h2>
            
            <p className="mx-auto mt-6 max-w-md text-[16px] text-zinc-400 leading-relaxed font-sans">
              Join 500+ students who made the leap into top tech companies.
              Your journey starts with one decision.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={onEnquiryOpen}
                className="group/btn inline-flex items-center gap-2 rounded-xl bg-white px-9 py-4 text-[14px] font-bold text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                Start Learning Free
                <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            <p className="mt-6 text-[11px] text-zinc-500 tracking-[0.1em] uppercase font-bold select-none">
              No credit card required · Free tier available
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
