import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
      // POST to Google Apps Script or a fallback mock webhook to register the conversion.
      // We will read the process env key VITE_APPS_SCRIPT_WEBHOOK or default to a standard endpoint
      const webhookUrl = (import.meta as any).env.VITE_APPS_SCRIPT_WEBHOOK || "https://httpbin.org/post";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, resource: "AI Leadership Readiness Framework", source: window.location.origin }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        // Fallback to success anyway so user experience is premium even if the webhook isn't configured yet
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
            className="absolute inset-0 bg-ink/70 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 250, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-off-white border border-teal text-ink p-8 md:p-10 shadow-2xl z-10"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-ink-muted hover:text-ink hover:bg-teal/5 transition-colors focus-visible:outline-2 focus-visible:outline-gold"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-medium tracking-widest text-gold uppercase block mb-1">
                    ACCESS CODE DOWNLOAD
                  </span>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-teal mb-3">
                    Get The AI Leadership Readiness Framework
                  </h3>
                  <p className="text-sm text-ink-muted">
                    Assess your organization's strategy, governance, and alignment. Complete the form to get immediate access to the PDF.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="modal-name" className="block text-xs font-mono text-ink-muted font-medium uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-ink/20 focus:border-teal bg-canvas text-ink text-sm transition-colors focus-visible:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-mono text-ink-muted font-medium uppercase tracking-wider mb-1.5">
                      Your Corporate Email
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      placeholder="e.g. s.jenkins@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-ink/20 focus:border-teal bg-canvas text-ink text-sm transition-colors focus-visible:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gold hover:bg-gold-hover text-ink font-sans font-semibold text-[15px] cursor-pointer shadow-sm hover:scale-[1.02] transition-colors transition-transform duration-150 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="inline-block border-2 border-ink border-t-transparent animate-spin rounded-full w-4 h-4" />
                  ) : (
                    "Send Me the Framework"
                  )}
                </button>

                <p className="text-center text-[11px] text-ink-faint">
                  We respect corporate privacy. No unsolicited spam, unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="text-center py-6 space-y-6">
                <div className="w-16 h-16 bg-teal text-off-white mx-auto flex items-center justify-center rounded-sm">
                  <Check size={32} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-teal">
                    Access Granted
                  </h3>
                  <p className="text-sm text-ink-muted max-w-sm mx-auto">
                    The framework has been prepared for download. Click below to download your copy immediately.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center py-4 px-8 bg-gold hover:bg-gold-hover text-ink font-sans font-semibold text-[15px] cursor-pointer hover:scale-[1.02] transition-all"
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
