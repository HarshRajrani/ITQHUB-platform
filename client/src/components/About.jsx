import { motion } from "framer-motion";
import Logo from "./Logo";

const FEATURES = [
  {
    title: "Learn From Industry Experts",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Internship",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Practical Oriented Learning",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Well Designed Curriculum",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-zinc-950 px-6 py-28 overflow-hidden border-t border-white/[0.03]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Left Column: Image & Widgets */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            {/* Main Image Base */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/[0.05] bg-zinc-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Student learning"
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            </div>

            {/* Widget 1: Weekly Spent Hours */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-32 z-10 w-48 rounded-xl border border-white/10 bg-zinc-900/80 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:-left-12"
            >
              <div className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">Weekly Spent Hours</div>
              <div className="mt-1 text-sm font-bold text-cyan-500">40 hrs 50 mins</div>
              <div className="mt-4 flex h-10 items-end gap-1.5">
                {[40, 70, 45, 90, 60, 30, 80].map((height, i) => (
                  <div key={i} className="w-full rounded-t-sm bg-cyan-500/20 relative overflow-hidden" style={{ height: '100%' }}>
                     <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                        className="absolute bottom-0 w-full bg-cyan-500 rounded-t-sm" 
                     />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Widget 2: 10K+ Active Students */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 bottom-32 z-10 flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-900/80 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:-right-12"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-zinc-100">10K+</div>
                <div className="text-[11px] font-medium text-zinc-400">Active Students</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 flex items-center gap-2">
              <Logo hideText={true} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-500">
                ITQHUB
              </span>
            </div>
            
            <h2 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
              Develop Your Skills, Learn Something New, and Grow Your Career!
            </h2>
            
            <p className="mb-10 text-[15px] leading-relaxed text-zinc-400 font-sans">
              With a network of skilled professionals from many different fields, ITqHub helps students upgrade their skills according to industry demand. We train people to work in the industry in a way that helps them move up their career ladder faster. We give students the skills that are needed in every industry.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 rounded-xl border border-white/5 bg-zinc-900/50 p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-zinc-800/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    {feature.icon}
                  </div>
                  <span className="text-[13px] font-semibold leading-tight text-zinc-100">
                    {feature.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
