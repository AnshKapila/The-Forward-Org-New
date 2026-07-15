import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { InteractiveButton } from "./InteractiveButton";
import { submitToBrevo } from "../utils/submitToBrevo";

interface FreebieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FreebieModal({ isOpen, onClose }: FreebieModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileMissing, setFileMissing] = useState(false);

  const handleClose = () => {
    setFileMissing(false);
    onClose();
  };

  const handleDownloadClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      const response = await fetch("/downloads/ai-readiness-framework.pdf", { method: "HEAD" });
      if (response.status === 404) {
        e.preventDefault();
        setFileMissing(true);
      }
    } catch (err) {
      e.preventDefault();
      setFileMissing(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    try {
      const rawEnvListId = import.meta.env.VITE_BREVO_LIST_FREEBIE;
      console.log("Resolved VITE_BREVO_LIST_FREEBIE:", rawEnvListId);
      const listId = Number(rawEnvListId) || 5;
      const attributes = {
        FIRSTNAME: name,
        SOURCE: "freebie_download"
      };
      
      console.log("Calling submitToBrevo with:", email, listId, JSON.stringify(attributes));
      const { success } = await submitToBrevo(email, listId, attributes);

      if (success) {
        setIsSuccess(true);
      } else {
        setIsSuccess(true);
      }
    } catch (err) {
      console.error("Submission failed, continuing to PDF download", err);
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
            onClick={handleClose}
            className="absolute inset-0 bg-[#1A1C1A]/70 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white border border-[#E8D5B5] text-ink p-12 shadow-2xl z-10 rounded-[2px]"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button: top-right, thin × in --color-ink-faint, hover -> --color-ink, 150ms */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-1 text-[#1A1C1A]/40 hover:text-ink transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-gold cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-8 text-left">
                <div className="space-y-3">
                  {/* Headline: Libre Baskerville Bold, 28px, --color-ink */}
                  <h3 className="font-serif text-[28px] font-bold tracking-tight text-ink leading-tight">
                    Get The AI Transformation Readiness Framework
                  </h3>
                  
                  {/* Subline: Figtree Regular, 16px, --color-ink-muted */}
                  <p className="font-sans text-[16px] text-ink-muted leading-relaxed font-normal">
                    The Executive Diagnostic for Identifying the Leadership, Governance, and Adoption Gaps Limiting your AI Transformation at 2x instead of 10x
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

                <div className="pt-2 flex flex-col items-center">
                  <a
                    href="/downloads/ai-readiness-framework.pdf"
                    download="AI_Transformation_Readiness_Framework.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDownloadClick}
                    className="inline-flex justify-center items-center py-4 px-8 bg-gold hover:bg-gold-hover text-ink font-sans font-semibold text-[15px] cursor-pointer transition-all"
                  >
                    Download Framework (PDF)
                  </a>
                  {fileMissing && (
                    <p className="font-sans font-normal text-[13px] text-[#C9A55A] text-center mt-3 max-w-xs">
                      The framework is being prepared. We'll email it to you within 24 hours.
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleClose}
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
