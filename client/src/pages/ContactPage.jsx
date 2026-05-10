import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import { useToast } from "../components/Toast";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[6-9]\d{9}$/;

const INFO_CARDS = [
  {
    title: "Head Office Address",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    content: (
      <p className="text-zinc-400 text-[13px] leading-relaxed font-sans">
        1st Floor, HIG 129, Pramani Plaza, Phase 3, KPHB,<br />
        Kukatpally, Hyderabad - 500072 Telangana.
      </p>
    )
  },
  {
    title: "Get in Touch",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    content: (
      <div className="space-y-4 text-[13px] font-sans">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-cyan-500/80 uppercase tracking-widest mb-1">Email_Address</span>
          <span className="text-zinc-400">info@itqhub.com</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-cyan-500/80 uppercase tracking-widest mb-1">Contact_Number</span>
          <span className="text-zinc-400">+91 9281433641, +91 9281433642</span>
        </div>
      </div>
    )
  },
  {
    title: "Opening Hours",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: (
      <div className="space-y-2 text-[13px] font-sans">
        <p className="text-zinc-100 font-medium">Monday to Saturday</p>
        <p className="text-zinc-400">10AM to 6PM</p>
      </div>
    )
  }
];

export default function ContactPage() {
  const addToast = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [focusedField, setFocusedField] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessLog, setShowSuccessLog] = useState(false);

  const validate = () => {
    const errors = {};
    if (!form.name || form.name.trim().length < 1) errors.name = "// ! Required: This parameter cannot be null.";
    if (!form.email || !emailRegex.test(form.email)) errors.email = "// ! Invalid: Email string does not match expected pattern.";
    if (!form.phone || !phoneRegex.test(form.phone)) errors.phone = "// ! Invalid: Phone must be a valid 10-digit sequence.";
    if (!form.message || form.message.trim().length < 1) errors.message = "// ! Required: Message field cannot be empty.";
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (submitting) return;

    setShowSuccessLog(false);
    const isValid = validate();
    
    if (!isValid) {
      console.log("Validation failed", fieldErrors);
      return;
    }

    setSubmitting(true);
    setFieldErrors({});

    try {
      const payload = {
        ...form,
        course: "Terminal_Contact"
      };

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setShowSuccessLog(true);
        if (addToast) addToast({ message: "// Inquiry enqueued. Status: 200 OK.", type: "success" });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setFieldErrors({ api: `// ! API_ERROR: ${data.error || "Unknown server error"}` });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setFieldErrors({ network: "// ! NETWORK_ERROR: Failed to establish handshake with server." });
    } finally {
      setSubmitting(false);
    }
  };

  const renderLine = (lineNumber, fieldName, isLast = false) => {
    const isFocused = focusedField === fieldName;
    const hasError = fieldErrors[fieldName];

    return (
      <div className="flex flex-col">
        <div 
          className={`flex items-center transition-all duration-300 ${isFocused ? 'bg-cyan-500/10 shadow-[inset_4px_0_0_0_rgba(6,182,212,0.5)]' : 'hover:bg-white/[0.02]'}`}
        >
          <div className="w-12 shrink-0 text-right pr-4 select-none text-zinc-600">{lineNumber}</div>
          <div className="flex-1 flex items-center py-1">
            <span className="text-zinc-400 pl-4 whitespace-pre">  </span>
            <span className="text-[#61afef] font-mono">{fieldName}</span>
            <span className="text-zinc-400 mr-2">:</span>
            <span className="text-zinc-400">"</span>
            <div className="flex-1 flex items-center relative">
              <input
                type="text"
                value={form[fieldName]}
                onChange={(e) => {
                  if (fieldName === "phone") {
                    setForm({ ...form, [fieldName]: e.target.value.replace(/\D/g, "").slice(0, 10) });
                  } else {
                    setForm({ ...form, [fieldName]: e.target.value });
                  }
                }}
                onFocus={() => {
                  setFocusedField(fieldName);
                  setFieldErrors(prev => {
                    const newErrors = { ...prev };
                    delete newErrors[fieldName];
                    return newErrors;
                  });
                }}
                onBlur={() => setFocusedField(null)}
                spellCheck="false"
                className="bg-transparent text-orange-300 outline-none w-full placeholder-orange-300/10 font-mono"
                placeholder={`...`}
              />
              {isFocused && (
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-[8px] h-[15px] bg-[#d19a66] ml-0.5"
                />
              )}
            </div>
            <span className="text-zinc-400">"{!isLast ? "," : ""}</span>
          </div>
        </div>
        <AnimatePresence>
          {hasError && (
            <motion.div 
              key={`${fieldName}-error`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center bg-red-500/5"
            >
              <div className="w-12 shrink-0 pr-4" />
              <div className="flex-1 py-1 pl-12 text-red-500 text-[12px] font-mono font-medium">
                {hasError}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <SEO 
        title="Terminal | Contact ITQHUB" 
        description="Connect with our engineering team via the developer terminal."
      />
      <div className="relative min-h-screen bg-zinc-950 px-6 pt-32 pb-20 flex flex-col items-center overflow-x-hidden">
        
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full bg-zinc-900/40 blur-[120px]" />
        </div>

        {/* Terminal Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl rounded-xl border border-white/10 bg-[#0d1117]/95 backdrop-blur-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex h-12 items-center justify-between border-b border-white/10 bg-white/[0.02] px-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center gap-2 text-[11px] text-zinc-400 select-none font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Active: Average response {'<'} 2 hours
            </div>
          </div>

          <div className="p-4 sm:p-6 text-[13px] sm:text-[15px] leading-relaxed">
            {/* Line 1 */}
            <div className="flex items-center py-1">
              <div className="w-12 shrink-0 text-right pr-4 select-none text-zinc-600 font-mono">1</div>
              <div className="flex-1 font-mono">
                <span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">inquiry</span> <span className="text-zinc-400">= {"{"}</span>
              </div>
            </div>

            {renderLine(2, "name")}
            {renderLine(3, "email")}
            {renderLine(4, "phone")}
            {renderLine(5, "message", true)}

            {/* Line 6 */}
            <div className="flex items-center py-1">
              <div className="w-12 shrink-0 text-right pr-4 select-none text-zinc-600 font-mono">6</div>
              <div className="flex-1 text-zinc-400 font-mono">{"};"}</div>
            </div>

            {/* Line 7 */}
            <div className="flex items-center py-1">
              <div className="w-12 shrink-0 text-right pr-4 select-none text-zinc-600 font-mono">7</div>
              <div className="flex-1"></div>
            </div>

            {/* Line 8 */}
            <div className="flex items-center py-1">
              <div className="w-12 shrink-0 text-right pr-4 select-none text-zinc-600 font-mono">8</div>
              <div className="flex-1 font-mono">
                <span className="text-[#c678dd]">await</span> <span className="text-[#61afef]">submitEnquiry</span>
                <span className="text-zinc-400">(inquiry.name, inquiry.email, inquiry.phone, inquiry.message);</span>
              </div>
            </div>

            {/* Action Area */}
            <div className="mt-8 flex flex-col gap-4 pl-12">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="group relative inline-flex w-fit items-center gap-2 rounded-md border border-cyan-500/50 bg-cyan-500/10 px-6 py-2.5 font-mono text-[13px] font-bold text-cyan-400 transition-all hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-95"
              >
                <span>[</span>
                {submitting ? "Executing..." : "Execute Inquiry"}
                <span>]</span>
              </button>

              <AnimatePresence>
                {showSuccessLog && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 border-t border-white/5 pt-6 space-y-1 font-mono text-[13px]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-600 italic">10</span>
                      <span className="text-zinc-400">{">"} Handshake established...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-600 italic">11</span>
                      <span className="text-green-400">{">"} POST /api/leads [SUCCESS]</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-600 italic">12</span>
                      <span className="text-cyan-400">{">"} Forge response: We will reach out within 24 hours.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {(fieldErrors.api || fieldErrors.network) && (
                <div className="mt-4 text-red-500 text-[13px] font-mono italic font-medium">
                  {fieldErrors.api || fieldErrors.network}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Operations Information Section */}
        <section className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-20 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INFO_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-2xl transition-all duration-500 hover:border-cyan-500/30 hover:bg-zinc-900/60"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-cyan-400 p-2 rounded-lg bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors">
                    {card.icon}
                  </div>
                  <h4 className="text-[15px] font-bold text-zinc-100 tracking-tight">
                    {card.title}
                  </h4>
                </div>
                {card.content}
                
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                     style={{ background: 'radial-gradient(400px circle at center, rgba(34, 211, 238, 0.05), transparent)' }} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
