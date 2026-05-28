import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { InteractiveButton } from "./InteractiveButton";

interface FreebieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FreebieModal({ isOpen, onClose }: FreebieModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    try {
      const webhookUrl = (import.meta as any).env.VITE_APPS_SCRIPT_WEBHOOK || "https://httpbin.org/post";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          name, 
          email, 
          resource: "AI Leadership Readiness Framework", 
          source: window.location.origin 
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsSuccess(true);
      }
    } catch (err) {
      console.error("Webhook POST failed, continuing to PDF download", err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1A1C1A]/70 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 250, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white border border-[#E8D5B5] text-ink p-12 shadow-2xl z-10 rounded-[2px]"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button: top-right, thin × in --color-ink-faint, hover -> --color-ink, 150ms */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-1 text-[#1A1C1A]/40 hover:text-ink transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-gold cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-8 text-left">
                <div className="space-y-3">
                  {/* Headline: Libre Baskerville Bold, 28px, --color-ink */}
                  <h3 className="font-serif text-[28px] font-bold tracking-tight text-ink leading-tight">
                    Get The AI Leadership Readiness Framework
                  </h3>
                  
                  {/* Subline: Figtree Regular, 16px, --color-ink-muted */}
                  <p className="font-sans text-[16px] text-ink-muted leading-relaxed font-normal">
                    Assess your organization's strategy, governance, and alignment. Complete the form to get immediate access to the PDF.
                  </p>
                </div>

                {/* Fields on separate rows, full width. Label above each field */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label 
                      htmlFor="modal-name" 
                      className="block text-[13px] font-medium tracking-wide text-teal"
                    >
                      Your Name
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-ink/15 focus:border-teal bg-white text-ink text-[15px] rounded-[1px] transition-colors focus-visible:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label 
                      htmlFor="modal-email" 
                      className="block text-[13px] font-medium tracking-wide text-teal"
                    >
                      Your Corporate Email
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      placeholder="s.jenkins@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-ink/15 focus:border-teal bg-white text-ink text-[15px] rounded-[1px] transition-colors focus-visible:outline-none"
                    />
                  </div>
                </div>

                <InteractiveButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="gold"
                  className="w-full text-center py-4"
                >
                  {isSubmitting ? "Sending..." : "Send Me the Framework"}
                </InteractiveButton>

                <p className="text-center text-[11px] text-ink-faint">
                  We respect corporate privacy. No unsolicited spam, unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <div className="w-12 h-12 text-teal border border-teal/20 mx-auto flex items-center justify-center rounded-[1px]">
                  <Check size={24} strokeWidth={1.5} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-[28px] font-bold tracking-tight text-ink">
                    Access Granted
                  </h3>
                  <p className="font-sans text-[16px] text-ink-muted max-w-sm mx-auto">
                    The framework has been prepared for download. Click below to download your copy immediately.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center py-4 px-8 bg-gold hover:bg-gold-hover text-ink font-sans font-semibold text-[15px] cursor-pointer transition-all"
                  >
                    Download Framework (PDF)
                  </a>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-sans text-ink-muted underline hover:text-ink block mx-auto mt-4"
                >
                  Back to Website
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
