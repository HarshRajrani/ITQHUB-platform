import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "./Toast";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[6-9]\d{9}$/;

export default function EnquiryModal({ isOpen, onClose }) {
  const addToast = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "General Enquiry" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name || form.name.trim().length < 2) e.name = "Name must be at least 2 characters";
    if (!emailRegex.test(form.email)) e.email = "Enter a valid email";
    if (!phoneRegex.test(form.phone)) e.phone = "Enter a valid 10-digit number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        addToast({ message: data.message, type: "success" });
        setForm({ name: "", email: "", phone: "", course: "General Enquiry" });
        onClose();
      } else {
        addToast({ message: data.error, type: "error" });
      }
    } catch {
      addToast({ message: "Network error. Please try again.", type: "error" });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `w-full rounded-lg border bg-black/50 px-4 py-2.5 text-[13px] text-white placeholder-text-muted outline-none transition-all duration-200 focus:ring-1 ${
      errors[field]
        ? "border-red-500/40 focus:border-red-500/60 focus:ring-red-500/20"
        : "border-white/[0.08] focus:border-accent/40 focus:ring-accent/20"
    }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-[101] w-full max-w-md rounded-2xl border border-white/[0.06] bg-surface-raised p-8 shadow-elevated"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-[11px] uppercase tracking-[0.15em] text-accent font-medium mb-1">
              Quick Enquiry
            </div>
            <h3 className="text-xl font-bold text-white tracking-[-0.01em]">
              Get in touch
            </h3>
            <p className="mt-1 text-[13px] text-text-secondary">
              We'll reach out within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass("name")}
                />
                {errors.name && <p className="mt-1 text-[11px] text-red-400">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass("email")}
                />
                {errors.email && <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone number (10 digits)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                  className={inputClass("phone")}
                />
                {errors.phone && <p className="mt-1 text-[11px] text-red-400">{errors.phone}</p>}
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex w-full items-center justify-between rounded-lg border bg-zinc-900/50 px-4 py-2.5 text-[13px] text-zinc-100 outline-none transition-all duration-200 ${
                    dropdownOpen 
                      ? "border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]" 
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <span className="font-mono">{form.course}</span>
                  <svg className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-cyan-400" : "text-zinc-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-[105] mt-2 max-h-60 w-full overflow-y-auto rounded-lg border border-white/10 bg-zinc-900 p-1 shadow-elevated backdrop-blur-xl"
                    >
                      {["General Enquiry", "Full-Stack Web Development", "Android Development", "Cyber Security", "AI & Machine Learning", "Cloud & DevOps", "Data Science"].map((opt) => (
                        <li key={opt}>
                          <button
                            type="button"
                            onClick={() => {
                              setForm({ ...form, course: opt });
                              setDropdownOpen(false);
                            }}
                            className={`w-full rounded-md px-3 py-2 text-left font-mono text-[13px] transition-colors ${
                              form.course === opt
                                ? "bg-cyan-500/10 text-cyan-400"
                                : "text-zinc-300 hover:bg-white/10 hover:text-zinc-100"
                            }`}
                          >
                            {opt}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 rounded-lg bg-white px-6 py-2.5 text-[13px] font-semibold text-black transition-all duration-200 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
