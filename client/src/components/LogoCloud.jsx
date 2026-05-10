import { motion } from "framer-motion";

/* Real company names styled as text logos — dimmed at 30%, full on hover */
const LOGOS = [
  "Google", "Microsoft", "Amazon", "Flipkart", "Swiggy",
  "Deloitte", "Infosys", "TCS", "Wipro", "Razorpay",
  "Zomato", "Paytm", "PhonePe", "Freshworks", "Zoho",
];

function LogoItem({ name }) {
  return (
    <div className="flex-shrink-0 px-8 py-3 cursor-default">
      <span className="text-[13px] font-semibold tracking-[0.04em] text-white whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function LogoCloud() {
  // Duplicate for seamless loop
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section className="relative border-y border-white/[0.04] py-6 overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#030712] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#030712] to-transparent" />

      {/* Scrolling track */}
      <motion.div
        className="flex"
        animate={{ x: [0, -50 * LOGOS.length] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {doubled.map((name, i) => (
          <LogoItem key={`${name}-${i}`} name={name} />
        ))}
      </motion.div>

      {/* Label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-text-muted bg-[#030712] px-3">
          Where our alumni work
        </span>
      </div>
    </section>
  );
}
