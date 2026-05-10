import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "Who can enroll in these programs?",
    answer: "Our programs are designed for everyone—from college students starting their coding journey to working professionals looking to upskill or transition into tech. No prior coding experience is required for our beginner-friendly tracks.",
  },
  {
    question: "Will I get a certificate after completion?",
    answer: "Yes! Upon successful completion of the program and required projects, you will receive an industry-recognized certificate from ITQHUB Learning Hub that you can showcase on your resume and LinkedIn.",
  },
  {
    question: "Are the classes live or pre-recorded?",
    answer: "We offer a hybrid learning model. You get access to high-quality, structured pre-recorded lectures for self-paced learning, combined with live doubt-solving sessions, weekend masterclasses, and interactive hackathons.",
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Absolutely. We provide comprehensive placement support, including resume building, portfolio review, mock interviews with industry experts, and direct referrals to our hiring partners.",
  },
  {
    question: "What if I get stuck while learning?",
    answer: "You're never alone. We have a dedicated community and discord channels where you can ask questions anytime. Our teaching assistants and mentors are always active to resolve your technical doubts quickly.",
  },
  {
    question: "How long do I have access to the course materials?",
    answer: "You get lifetime access to the course contents, including all future updates to the curriculum. You can always revisit the materials whenever you need a quick refresher.",
  },
];

function FAQItem({ faq, index, isOpen, toggleOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={`border-b border-white/[0.06] last:border-0 overflow-hidden transition-colors duration-300 ${
        isOpen ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
      }`}
    >
      <button
        onClick={toggleOpen}
        className="flex w-full items-center justify-between py-5 px-4 md:px-6 text-left focus:outline-none"
      >
        <span className="font-medium text-lg text-white/90 pr-4">
          {faq.question}
        </span>
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "border-accent bg-accent/10 text-accent-light rotate-180"
              : "border-white/10 text-white/40"
          }`}
        >
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pb-6 px-4 md:px-6 text-base leading-relaxed text-white/70">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  return (
    <section className="noise relative px-6 py-24 border-t border-white/[0.04]">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-3 inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] text-accent font-medium">
            FAQ
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-[-0.02em] text-metallic sm:text-4xl">
            Got Questions? We've Got{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Answers
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-lg text-[15px] text-text-secondary">
            Everything you need to know about our programs and how we help you succeed.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="rounded-2xl border border-white/[0.06] bg-surface-raised overflow-hidden">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              toggleOpen={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
