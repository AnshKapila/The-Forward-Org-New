import React, { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { InteractiveButton } from "./InteractiveButton";
import { Mail, User, MessageSquare, Check, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ContactSection({ title = "Get in touch.", subtitle = "REACH THE TEAM" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "error" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    // Simulate C-Suite grade communication latency
    setTimeout(() => {
      setStatus("success");
      // Persist locally in localStorage as structured telemetry queue for later back-end synchronization
      try {
        const existingEntries = JSON.parse(localStorage.getItem("contact_inquiries") || "[]");
        existingEntries.push({
          ...formData,
          timestamp: new Date().toISOString(),
          id: crypto.randomUUID(),
        });
        localStorage.setItem("contact_inquiries", JSON.stringify(existingEntries));
      } catch (err) {
        console.error("Local queue failed", err);
      }
    }, 1000);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setStatus("idle");
  };

  return (
    <section id="contact-section" className="relative bg-[#F7F4EF]/60 py-16 md:py-24 border-t border-gold/20 overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A3C34]/5 rounded-full blur-[100px] pointer-events-none -mr-48 -mt-24" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A55A]/5 rounded-full blur-[100px] pointer-events-none -ml-48 -mb-24" />

      <div className="max-w-[620px] mx-auto px-6 relative z-14">
        <ScrollReveal duration={0.6}>
          <div className="text-center mb-10">
            <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block mb-3">
              {subtitle}
            </span>
            <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-[#1A3C34] leading-tight mb-4">
              {title}
            </h2>
            <p className="font-sans text-sm text-ink-muted leading-relaxed max-w-[480px] mx-auto font-light">
              Submit your inquiry or email below. The advisory coordinator will review and establish communication lines.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal duration={0.8} delay={0.1}>
          <div className="bg-canvas border border-[#D4C9B8] p-6 sm:p-10 relative">
            
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center py-8 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1A3C34]/5 border border-[#1A3C34]/20 flex items-center justify-center mb-6">
                    <Check className="text-[#1A3C34]" size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-[22px] font-bold text-[#1A3C34] mb-2">
                    Inquiry logged.
                  </h3>
                  <p className="font-sans text-xs text-ink-muted leading-relaxed max-w-[340px] mb-8 font-light">
                    Your inquiry has been placed securely into the dispatch queue. We will contact you at <strong className="text-pink-dark font-medium">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="text-xs font-sans uppercase tracking-wider text-[#1A3C34] hover:text-gold transition-colors py-1 border-b border-[#1A3C34]/30 hover:border-gold focus:outline-none"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form-fields"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Name field */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="contact-name" className="block text-[11px] font-sans font-bold uppercase tracking-wider text-ink-muted">
                      Enter name <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink/35">
                        <User size={15} strokeWidth={1.5} />
                      </div>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Marcus Aurelius"
                        disabled={status === "submitting"}
                        className="w-full pl-10 pr-4 py-3.5 border border-[#D4C9B8] bg-canvas font-sans text-sm text-ink placeholder-ink/30 focus:border-[#1A3C34] focus:outline-none transition-all duration-200 rounded-none w-full"
                        required
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="contact-email" className="block text-[11px] font-sans font-bold uppercase tracking-wider text-ink-muted">
                      Your email <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink/35">
                        <Mail size={15} strokeWidth={1.5} />
                      </div>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. marcus@firm.com"
                        disabled={status === "submitting"}
                        className="w-full pl-10 pr-4 py-3.5 border border-[#D4C9B8] bg-canvas font-sans text-sm text-ink placeholder-ink/30 focus:border-[#1A3C34] focus:outline-none transition-all duration-200 rounded-none w-full"
                        required
                      />
                    </div>
                  </div>

                  {/* Message field (optional) */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="contact-message" className="block text-[11px] font-sans font-bold uppercase tracking-wider text-ink-muted flex justify-between">
                      <span>Message</span>
                      <span className="text-[10px] text-ink-muted/50 font-normal italic lowercase">Optional</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 flex items-center pointer-events-none text-ink/35">
                        <MessageSquare size={15} strokeWidth={1.5} />
                      </div>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help optimize your C-suite initiatives?"
                        disabled={status === "submitting"}
                        className="w-full pl-10 pr-4 py-3.5 border border-[#D4C9B8] bg-canvas font-sans text-sm text-ink placeholder-ink/30 focus:border-[#1A3C34] focus:outline-none transition-all duration-200 rounded-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Error Prompt */}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 bg-red-500/5 border border-red-500/20 text-red-600 flex items-center gap-2.5 text-xs text-left"
                    >
                      <AlertCircle size={15} className="shrink-0" />
                      <p className="font-sans font-medium">{errorMessage}</p>
                    </motion.div>
                  )}

                  {/* Submit Trigger */}
                  <div className="pt-2">
                    <InteractiveButton
                      type="submit"
                      variant="outline-teal"
                      disabled={status === "submitting"}
                      className="w-full py-4 text-center justify-center uppercase tracking-wider text-xs font-semibold"
                    >
                      {status === "submitting" ? "Transmitting..." : "Submit Inquiry"}
                    </InteractiveButton>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
