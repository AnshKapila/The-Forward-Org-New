import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Loader2 } from "lucide-react";
import { InteractiveButton } from "../components/InteractiveButton";
import { submitToBrevo } from "../utils/submitToBrevo";

export default function BookCallPage() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [purpose, setPurpose] = useState("");
  
  const [errors, setErrors] = useState<{ email?: string; role?: string; purpose?: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formState, setFormState] = useState<1 | 2>(1);
  const calendarRef = useRef<HTMLDivElement>(null);

  const [expandedDebriefIndex, setExpandedDebriefIndex] = useState<number | null>(0);

  const debriefAccordionItems = [
    {
      num: "01",
      title: "Walk through your three highest-priority gaps and what they are costing your organization",
      description: "We will analyze the friction points in your current AI workflows, security, or data readiness, quantifying the operational overhead and lost leverage they represent."
    },
    {
      num: "02",
      title: "Show you exactly how organizations at your stage close those gaps systematically",
      description: "Learn the specific, battle-tested playbooks used by leading enterprises to address technical debt and build robust AI foundations without interrupting daily operations."
    },
    {
      num: "03",
      title: "Map out what a clear path forward looks like for your specific industry and team",
      description: "Receive a tailored, actionable plan outlining the exact timeline, required skillsets, and architectural milestones customized for your sector."
    }
  ];

  // Validation function
  const validateForm = () => {
    const newErrors: { email?: string; role?: string; purpose?: string } = {};
    
    if (!email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!role.trim()) {
      newErrors.role = "Please enter your role and organization.";
    } else if (role.trim().length < 10) {
      newErrors.role = "Minimum 10 characters required (e.g. CEO at Enterprise Corp).";
    }

    if (!purpose.trim()) {
      newErrors.purpose = "Please enter the purpose of this conversation.";
    } else if (purpose.trim().length < 30) {
      newErrors.purpose = "Minimum 30 characters required. Please provide more context.";
    } else if (purpose.trim().length > 500) {
      newErrors.purpose = "Maximum 500 characters allowed.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");
    try {
      const listId = Number(import.meta.env.VITE_BREVO_LIST_CALL_REQUESTS);
      const attributes = {
        JOB_TITLE: role.trim(),
        SOURCE: "call_request",
        NOTES: "Call purpose: " + purpose.trim()
      };
      
      console.log("Calling submitToBrevo with:", email.trim(), listId, JSON.stringify(attributes));
      const { success } = await submitToBrevo(email.trim(), listId, attributes);

      if (success) {
        setStatus("success");
        setFormState(2);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Booking pre-qualification submission failed", err);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (formState === 2) {
      // Inject the Lunacal embed script for Direct Call page
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.id = "lunacal-inline-direct-script";
      script.innerHTML = `(function(L,U,N){let p=(a,ar)=>a.q.push(ar),d=L.document;L.Lunacal=L.Lunacal||function(){let lun=L.Lunacal,ar=arguments;if(!lun.loaded){lun.ns={};lun.q=lun.q||[];d.head.appendChild(d.createElement("script")).src=U;lun.loaded=!0}if(ar[0]===N){const api=function(){p(api,arguments)};const ns=ar[1];api.q=api.q||[];if(typeof ns==="string"){lun.ns[ns]=lun.ns[ns]||api;p(lun.ns[ns],ar);p(lun,["initNamespace",ns])}else p(lun,ar);return}p(lun,ar)};if(!L.Cal)L.Cal=L.Lunacal})(window,"https://app.lunacal.ai/embed/embed.js","init");Lunacal("init","focused-aireadiness-debrief",{origin:"https://app.lunacal.ai"});
                    // Enable auto-forwarding of query parameters
                    Lunacal.config = Lunacal.config || {};
                    Lunacal.config.forwardQueryParams = true;
                    
          Lunacal.ns["focused-aireadiness-debrief"]("inline", {
            elementOrSelector:"#my-lunacal-inline-focused-aireadiness-debrief-direct",
            config: {"layout":""},
            calLink: "pan-seth/focused-aireadiness-debrief",
          });
          Lunacal.ns["focused-aireadiness-debrief"]("preload", { calLink: "pan-seth/focused-aireadiness-debrief", type: "inline", options: { prerenderIframe: true } });
          Lunacal.ns["focused-aireadiness-debrief"]("ui", {"theme":"light","styles":{"branding":{}},"hideEventTypeDetails":false,"layout":"","cssVarsPerTheme":{"light":{"theme-border":"#E4E4E7","theme-background-primary":"#C9A55A","theme-background-secondary":"#F4F4F5","theme-background-card":"#ffffff","theme-background-base":"#ffffff","theme-text-primary":"#111827","theme-text-secondary":"#4B5563","theme-text-card":"#111827","theme-text-base":"#111827","theme-rounded-base":"0px","theme-rounded-calendar":"0px","theme-rounded-timeslot":"4px","theme-rounded-day":"4px","theme-rounded-button":"0px","theme-shadow-calendar":"none","theme-shadow-button":"none","theme-shadow-timeslot":"none","theme-font-family":"Figtree"},"dark":{"theme-border":"#E4E4E7","theme-background-primary":"#C9A55A","theme-background-secondary":"#F4F4F5","theme-background-card":"#ffffff","theme-background-base":"#ffffff","theme-text-primary":"#111827","theme-text-secondary":"#4B5563","theme-text-card":"#111827","theme-text-base":"#111827","theme-rounded-base":"0px","theme-rounded-calendar":"0px","theme-rounded-timeslot":"4px","theme-rounded-day":"4px","theme-rounded-button":"0px","theme-shadow-calendar":"none","theme-shadow-button":"none","theme-shadow-timeslot":"none","theme-font-family":"Figtree"}},"displayedContent":{"image":true,"name":true,"designation":true,"description":true,"eventName":true,"highlightBar":false},"background":{"type":"plain"},"stylePreset":""});`;
      document.body.appendChild(script);

      // On mobile, scroll smoothly to the top of the calendar area
      const timer = setTimeout(() => {
        if (window.innerWidth < 1024 && calendarRef.current) {
          calendarRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);

      return () => {
        clearTimeout(timer);
        const existingScript = document.getElementById("lunacal-inline-direct-script");
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [formState]);

  const trustSignals = [
    "30 minutes. No pitch.",
    "Pan confirms every booking personally within 24 hours.",
    "If a call is not the right next step, she will tell you what is."
  ];

  const label = formState === 1 ? "BOOK A STRATEGY CALL" : "SELECT YOUR TIME";
  const headline = formState === 1 
    ? "Before we talk, help us understand where you are." 
    : "Choose a time that works for you.";
  const bodyText = formState === 1
    ? "Pan reviews every call request personally. Two questions help her prepare for your specific situation — so the conversation starts where it matters, not from scratch."
    : "Pan will review your answers before the call. You will receive a confirmation within 24 hours of selecting your slot.";

  const formVariants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { 
      opacity: 0, 
      y: -15, 
      transition: { duration: 0.2, ease: "easeIn" } 
    }
  };

  const calendarVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.15, duration: 0.3, ease: "easeOut" } 
    },
    exit: { opacity: 0 }
  };

  return (
    <div className="bg-canvas min-h-screen py-12 md:py-20 px-6 md:px-12 text-ink selection:bg-gold selection:text-ink">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context copy (Sticky on desktop) */}
          <div className="lg:sticky lg:top-28 space-y-6 text-left">
            <span className="font-sans font-semibold text-xs text-[#C9A55A] uppercase tracking-[0.25em] block leading-none">
              {label}
            </span>
            <h1 className="font-serif text-[36px] md:text-[44px] font-bold text-[#1A3C34] leading-[1.1] tracking-tight">
              {headline}
            </h1>
            <p className="font-sans text-[15px] text-[#1A322C]/75 leading-relaxed font-light">
              {bodyText}
            </p>

            {/* AI Readiness Debrief Accordion Block */}
            <div className="mt-8 pt-8 border-t border-[#1A3C34]/10 space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl font-bold text-[#1A3C34]">AI Readiness Debrief</h2>
                <span className="bg-[#C9A55A]/10 text-[#C9A55A] font-mono text-[11px] font-bold px-2.5 py-1 uppercase tracking-wider select-none">
                  30 Min
                </span>
              </div>
              
              <div className="space-y-2">
                <p className="font-sans text-[15px] text-[#1A322C]/75 leading-relaxed font-light">
                  You've completed the AI Readiness Assessment. This session is where your results come to life.
                </p>
                <p className="font-sans text-xs font-semibold text-[#1A3C34] tracking-[0.1em] uppercase pt-1">
                  In 30 minutes we will:
                </p>
              </div>

              {/* Accordion List with the website's exact styling */}
              <div className="border-t border-[#1A3C34]/15 divide-y divide-[#1A3C34]/15 mt-4">
                {debriefAccordionItems.map((item, idx) => {
                  const isExpanded = expandedDebriefIndex === idx;

                  return (
                    <div
                      key={idx}
                      onClick={() => setExpandedDebriefIndex(isExpanded ? null : idx)}
                      className={`py-4 cursor-pointer group transition-all duration-200 text-left ${
                        isExpanded ? "px-2 bg-[#1A3C34]/[0.02]" : "hover:bg-[#1A3C34]/[0.01]"
                      }`}
                    >
                      {/* Row Header */}
                      <div className="flex justify-between items-start gap-4 w-full">
                        <div className="flex gap-2 items-start text-left">
                          <span className="font-sans text-xs text-[#C9A55A] font-semibold mt-1 select-none">
                            &rarr;
                          </span>
                          <h3 className={`font-serif text-[15px] sm:text-base font-bold transition-colors duration-200 leading-snug ${
                            isExpanded ? "text-[#1A3C34]" : "text-ink group-hover:text-[#1A3C34]"
                          }`}>
                            {item.title}
                          </h3>
                        </div>
                        <span className="font-sans text-[12px] text-ink-muted/65 font-medium select-none shrink-0 pt-0.5">
                          {item.num}
                        </span>
                      </div>

                      {/* Animated Drawer Body */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="font-sans text-sm text-ink-muted leading-[1.6] pt-2.5 pb-1 pl-6 pr-4 max-w-xl">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Conclusion Text */}
              <div className="pt-3 border-t border-[#1A3C34]/5">
                <p className="font-sans text-sm text-[#1A322C]/80 italic leading-relaxed font-light">
                  "You will leave with clarity on your single most important next move - regardless of what you decide after."
                </p>
              </div>
            </div>

            {/* Short gold horizontal rule */}
            <div className="w-16 h-[2px] bg-[#C9A55A] my-6" />

            {/* Trust signals */}
            <div className="space-y-4 pt-4">
              {trustSignals.map((signal, idx) => (
                <div key={idx} className="flex gap-3 items-start text-left">
                  <Check size={16} className="text-[#C9A55A] shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="font-sans text-sm text-[#1A322C]/75 leading-snug">{signal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interaction Window */}
          <div ref={calendarRef} className="w-full">
            <AnimatePresence mode="wait">
              {formState === 1 ? (
                <motion.div
                  key="qualification-form"
                  variants={formVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="bg-white border border-[#D4C9B8] py-8 px-6 sm:p-10 md:p-12 shadow-sm text-left rounded-none"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Field 1: Email */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="email" className="block text-[12px] font-sans font-semibold text-[#1A3C34] tracking-wide">
                        YOUR EMAIL ADDRESS*
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                        }}
                        placeholder="name@organization.com"
                        disabled={status === "submitting"}
                        className="w-full font-sans text-sm text-[#1A3C34] bg-white border border-[#D4C9B8] px-4 py-3.5 placeholder-ink/30 focus:border-[#1A3C34] focus:ring-1 focus:ring-[#1A3C34]/20 focus:outline-none transition-all duration-200 rounded-none"
                        required
                      />
                      {errors.email && (
                        <div className="text-red-600 text-xs flex items-center gap-1 mt-1.5 font-sans font-medium">
                          <AlertCircle size={13} className="shrink-0" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    {/* Field 2: Role and Organization */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="role" className="block text-[12px] font-sans font-semibold text-[#1A3C34] tracking-wide">
                        YOUR ROLE AND ORGANIZATION*
                      </label>
                      <input
                        id="role"
                        type="text"
                        value={role}
                        onChange={(e) => {
                          setRole(e.target.value);
                          if (errors.role) setErrors(prev => ({ ...prev, role: undefined }));
                        }}
                        placeholder="e.g. VP of Operations at Meridian Health"
                        disabled={status === "submitting"}
                        className="w-full font-sans text-sm text-[#1A3C34] bg-white border border-[#D4C9B8] px-4 py-3.5 placeholder-ink/30 focus:border-[#1A3C34] focus:ring-1 focus:ring-[#1A3C34]/20 focus:outline-none transition-all duration-200 rounded-none"
                        required
                      />
                      <p className="text-[11px] text-ink-muted/60 mt-1 font-sans">
                        This helps Pan understand your organizational context before the call.
                      </p>
                      {errors.role && (
                        <div className="text-red-600 text-xs flex items-center gap-1 mt-1.5 font-sans font-medium">
                          <AlertCircle size={13} className="shrink-0" />
                          <span>{errors.role}</span>
                        </div>
                      )}
                    </div>

                    {/* Field 3: Purpose of Call */}
                    <div className="space-y-2 text-left relative">
                      <div className="flex justify-between items-center">
                        <label htmlFor="purpose" className="block text-[12px] font-sans font-semibold text-[#1A3C34] tracking-wide">
                          WHAT WOULD YOU LIKE TO GET FROM THIS CONVERSATION?*
                        </label>
                        <span className="text-[11px] font-sans text-ink-muted/50 font-medium">
                          {purpose.length} / 500
                        </span>
                      </div>
                      <textarea
                        id="purpose"
                        rows={4}
                        value={purpose}
                        maxLength={500}
                        onChange={(e) => {
                          setPurpose(e.target.value);
                          if (errors.purpose) setErrors(prev => ({ ...prev, purpose: undefined }));
                        }}
                        placeholder="e.g. We have been running AI pilots for six months with mixed results. I want to understand whether our approach is structurally sound or whether we need to rethink it."
                        disabled={status === "submitting"}
                        className="w-full font-sans text-sm text-[#1A3C34] bg-white border border-[#D4C9B8] px-4 py-3.5 placeholder-ink/30 focus:border-[#1A3C34] focus:ring-1 focus:ring-[#1A3C34]/20 focus:outline-none transition-all duration-200 rounded-none resize-none"
                        required
                      />
                      <p className="text-[11px] text-ink-muted/60 mt-1 font-sans">
                        Be specific. The more context you provide, the more useful the conversation will be.
                      </p>
                      {errors.purpose && (
                        <div className="text-red-600 text-xs flex items-center gap-1 mt-1.5 font-sans font-medium">
                          <AlertCircle size={13} className="shrink-0" />
                          <span>{errors.purpose}</span>
                        </div>
                      )}
                    </div>

                    {/* Webhook Error */}
                    {status === "error" && (
                      <div className="p-3.5 bg-red-500/5 border border-red-500/20 text-red-600 flex items-center gap-2.5 text-xs text-left font-sans">
                        <AlertCircle size={15} className="shrink-0" />
                        <p className="font-medium">Something went wrong. Please try again or contact us directly.</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2 text-left">
                      <InteractiveButton
                        type="submit"
                        variant="gold"
                        disabled={status === "submitting"}
                        className="w-full uppercase tracking-[0.15em] text-xs font-bold select-none flex items-center justify-center gap-2"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 size={14} className="animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <span>Continue to Schedule</span>
                        )}
                      </InteractiveButton>
                    </div>

                    <p className="text-[11px] text-center text-ink-muted/60 mt-4 leading-relaxed font-sans">
                      Pan reviews every request within 24 hours. Selecting a time slot does not automatically confirm your call.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="calendar-embed"
                  variants={calendarVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-4"
                >
                  {/* Confirmation banner above the calendar */}
                  <div className="bg-[#E8F0EE]/80 border border-[#1A3C34]/15 text-[#1A3C34] p-4 flex items-center gap-3 rounded-none mb-4 text-sm text-left font-sans shadow-sm">
                    <Check size={18} className="shrink-0 text-[#1A3C34]" strokeWidth={2} />
                    <p className="font-medium leading-normal">
                      Your details have been received. Select a time and Pan will confirm within 24 hours.
                    </p>
                  </div>

                  {/* Inline Lunacal Embed */}
                  <div className="relative bg-white p-4 sm:p-6 rounded-none shadow-sm border border-[#D4C9B8] overflow-hidden">
                    <div 
                      id="my-lunacal-inline-focused-aireadiness-debrief-direct" 
                      style={{ width: "100%", height: "680px", overflow: "hidden" }} 
                      className="relative z-10"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
