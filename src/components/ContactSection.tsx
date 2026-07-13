import React, { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { InteractiveButton } from "./InteractiveButton";
import { Mail, Linkedin, Check, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactSection({ title = "Drop Us a Message", subtitle = "REACH THE TEAM" }) {
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

    // Simulate advisory communications connection
    setTimeout(() => {
      setStatus("success");
      // Log submission data to console instead of using localStorage
      console.log("Contact Inquiry Details:", {
        ...formData,
        timestamp: new Date().toISOString(),
      });
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setStatus("idle");
  };

  return (
    <section id="contact-section" className="relative bg-[#F4F1EA]/80 py-8 md:py-12 lg:py-16 xl:py-[60px] 2xl:py-[80px] border-t border-[#E5DEC9] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A3C34]/3 rounded-full blur-[100px] pointer-events-none -mr-48 -mt-24" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A55A]/3 rounded-full blur-[100px] pointer-events-none -ml-48 -mb-24" />

      <div className="w-full px-6 lg:px-[120px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Contact details and headers as structurally modeled */}
          <div className="md:col-span-5 flex flex-col justify-between h-full space-y-10">
            <ScrollReveal duration={0.6} delay={0.1}>
              <div className="space-y-6">
                <span className="font-sans font-semibold text-xs text-[#C9A55A] capitalize tracking-[0.25em] block">
                  {subtitle}
                </span>
                
                <h2 className="font-serif text-[38px] md:text-[50px] font-bold text-[#1A3C34] leading-[1.1] tracking-tight">
                  Drop Us a <span className="font-serif italic font-normal text-[#C9A55A]">Message</span>
                </h2>
                
                <p className="font-sans text-sm md:text-base text-[#1A322C]/75 leading-relaxed font-light max-w-[440px]">
                  We're always happy to hear from you and will get back to you as soon as possible with thoughtful, prompt, and helpful support.
                </p>
              </div>
            </ScrollReveal>

            {/* Interactive Contact cards list aligned strictly to the bottom */}
            <ScrollReveal duration={0.8} delay={0.2} className="md:mt-auto">
              {/* Decorative line separator */}
              <div className="w-full h-[1px] bg-[#D4C9B8] my-8" />

              <div className="space-y-6">
                
                {/* Email Item */}
                <a 
                  href="mailto:pan@theforwardorg.com" 
                  className="flex items-center gap-5 p-2 rounded-sm hover:bg-[#1A3C34]/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1A3C34]/10 flex items-center justify-center shrink-0 border border-[#1A3C34]/20 group-hover:bg-[#1A3C34] group-hover:text-white transition-all duration-300">
                    <Mail 
                      size={18} 
                      className="text-[#1A3C34] group-hover:text-white transition-colors duration-300" 
                      strokeWidth={1.5} 
                    />
                  </div>
                  <div>
                    <span className="block text-[11px] font-sans font-bold capitalize tracking-wider text-ink-muted leading-tight mb-0.5">
                      Email
                    </span>
                    <span className="font-serif text-sm sm:text-base font-bold text-[#1A3C34] underline decoration-gold/45 group-hover:text-[#C9A55A] transition-colors">
                      pan@theforwardorg.com
                    </span>
                  </div>
                </a>

                {/* LinkedIn Item */}
                <a 
                  href="https://www.linkedin.com/in/pan-seth/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-5 p-2 rounded-sm hover:bg-[#1A3C34]/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1A3C34]/10 flex items-center justify-center shrink-0 border border-[#1A3C34]/20 group-hover:bg-[#1A3C34] group-hover:text-white transition-all duration-300">
                    <Linkedin 
                      size={18} 
                      className="text-[#1A3C34] group-hover:text-white transition-colors duration-300" 
                      strokeWidth={1.5} 
                    />
                  </div>
                  <div>
                    <span className="block text-[11px] font-sans font-bold capitalize tracking-wider text-ink-muted leading-tight mb-0.5">
                      LinkedIn
                    </span>
                    <span className="font-serif text-sm sm:text-base font-bold text-[#1A3C34] underline decoration-gold/45 group-hover:text-[#C9A55A] transition-colors">
                      linkedin.com/in/pan-seth
                    </span>
                  </div>
                </a>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Premium Form Card modeled after reference */}
          <div className="md:col-span-7">
            <ScrollReveal duration={0.8} delay={0.2} className="h-full">
              <div className="bg-[#FAF9F5] border border-[#D4C9B8] py-8 px-6 sm:p-10 md:p-12 shadow-sm relative h-full flex flex-col justify-center">
                
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success-card"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="text-center py-10 flex flex-col items-center justify-center h-full"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#1A3C34]/5 border border-[#1A3C34]/20 flex items-center justify-center mb-6">
                        <Check className="text-[#1A3C34]" size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-[24px] font-bold text-[#1A3C34] mb-3">
                        Inquiry logged successfully.
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed max-w-[360px] mb-8 font-light">
                        We're happy to connect. The advisory team will respond at <strong className="text-pink-dark font-semibold">{formData.email}</strong> as soon as possible.
                      </p>
                      <button
                        onClick={handleReset}
                        className="text-xs font-sans capitalize tracking-wider text-[#1A3C34] hover:text-[#C9A55A] transition-colors py-1.5 border-b border-[#1A3C34]/30 hover:border-[#C9A55A] focus:outline-none"
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
                      {/* Name input */}
                      <div className="space-y-2 text-left">
                        <label htmlFor="contact-name" className="block text-[12px] font-sans font-semibold text-[#1A3C34] tracking-wide">
                          Full name*
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          disabled={status === "submitting"}
                          className="w-full font-sans text-sm text-[#1A3C34] bg-white border border-[#D4C9B8] px-4 py-3.5 placeholder-ink/30 focus:border-[#1A3C34] focus:ring-1 focus:ring-[#1A3C34]/20 focus:outline-none transition-all duration-200 rounded-none"
                          required
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2 text-left">
                        <label htmlFor="contact-email" className="block text-[12px] font-sans font-semibold text-[#1A3C34] tracking-wide">
                          Email address*
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter email address"
                          disabled={status === "submitting"}
                          className="w-full font-sans text-sm text-[#1A3C34] bg-white border border-[#D4C9B8] px-4 py-3.5 placeholder-ink/30 focus:border-[#1A3C34] focus:ring-1 focus:ring-[#1A3C34]/20 focus:outline-none transition-all duration-200 rounded-none"
                          required
                        />
                      </div>

                      {/* Message input */}
                      <div className="space-y-2 text-left">
                        <label htmlFor="contact-message" className="block text-[12px] font-sans font-semibold text-[#1A3C34] tracking-wide flex justify-between">
                          <span>Write your message</span>
                          <span className="text-[10px] text-ink-muted/50 font-normal italic lowercase tracking-wider">Optional</span>
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="I want to collaborate"
                          disabled={status === "submitting"}
                          className="w-full font-sans text-sm text-[#1A3C34] bg-white border border-[#D4C9B8] px-4 py-3.5 placeholder-ink/30 focus:border-[#1A3C34] focus:ring-1 focus:ring-[#1A3C34]/20 focus:outline-none transition-all duration-200 rounded-none resize-none"
                        />
                      </div>

                      {/* Error Banner */}
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

                      {/* Submit Trigger (Send Message) */}
                      <div className="pt-2 text-left">
                        <InteractiveButton
                          type="submit"
                          variant="gold"
                          disabled={status === "submitting"}
                          className="px-8 py-3.5 capitalize tracking-[0.15em] text-xs font-semibold select-none flex items-center gap-2"
                        >
                          <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                        </InteractiveButton>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
                
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
