import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { InteractiveButton } from "./InteractiveButton";
import { submitToBrevo } from "../utils/submitToBrevo";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    try {
      const rawEnvListId = import.meta.env.VITE_BREVO_LIST_FREEBIE;
      const listId = Number(rawEnvListId) || 5;
      const attributes = {
        FIRSTNAME: name,
        SOURCE: "newsletter_subscription"
      };
      
      const { success } = await submitToBrevo(email, listId, attributes);
      setIsSuccess(true);
    } catch (err) {
      console.error("Submission failed", err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
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
            {/* Close Button */}
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
                  <h3 className="font-serif text-[28px] font-bold tracking-tight text-ink leading-tight">
                    Subscribe to our newsletter
                  </h3>
                  <p className="font-sans text-[16px] text-ink-muted leading-relaxed font-normal">
                    Get weekly insights on AI leadership, organizational transformation, and the future of work delivered directly to your inbox.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="nl-name" className="block text-[13px] font-semibold text-teal capitalize tracking-wide">
                      Full Name
                    </label>
                    <input
                      id="nl-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-ink/15 focus:border-teal bg-white text-ink text-[15px] focus-visible:outline-none rounded-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="nl-email" className="block text-[13px] font-semibold text-teal capitalize tracking-wide">
                      Email Address
                    </label>
                    <input
                      id="nl-email"
                      type="email"
                      required
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-ink/15 focus:border-teal bg-white text-ink text-[15px] focus-visible:outline-none rounded-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <InteractiveButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="gold"
                    className="w-full py-4 text-center text-sm font-bold capitalize tracking-wider"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                  </InteractiveButton>
                </div>

                <p className="text-center text-[11px] text-ink-faint">
                  Conducted with absolute confidentiality. No marketing spam, guaranteed.
                </p>
              </form>
            ) : (
              <div className="text-center space-y-6 py-6">
                <div className="inline-flex items-center justify-center bg-[#1A3C34] text-white rounded-full w-12 h-12 shadow-sm">
                  <Check size={24} strokeWidth={3} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-ink">You're Subscribed!</h3>
                  <p className="font-sans text-sm text-ink-muted leading-relaxed">
                    Thank you for subscribing. We will send you weekly insights on AI leadership and strategy.
                  </p>
                </div>
                <div className="pt-4">
                  <InteractiveButton onClick={handleClose} variant="teal" className="px-8 py-3">
                    Close Window
                  </InteractiveButton>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
