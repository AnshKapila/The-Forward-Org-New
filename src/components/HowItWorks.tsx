import React, { useState, useRef } from "react";
import { Link } from "wouter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { LoopingArrow } from "./InteractiveButton";
import { motion, AnimatePresence, useInView } from "motion/react";

// Option B Interactive   Card Sub-component with premium hover states
function OptionBCard({ step, idx, imageSrc }: { step: any; idx: number; imageSrc: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [willChangeActive, setWillChangeActive] = useState(true);

  // Link destinations
  const buttonPath = "/index"; 
  const buttonText = idx === 0 ? "Take the Index" : "Get Started";

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
      className="relative w-full h-[90vh] overflow-hidden bg-teal-dim/10 shadow-xl border border-teal/15 group cursor-pointer transition-shadow"
      style={{
        transform: "translateZ(0)",
        isolation: "isolate"
      }}
    >
      {/* Step Image */}
      <motion.img
        initial={{ scale: 1.2 }}
        animate={isInView ? { scale: 1.0 } : {}}
        onAnimationComplete={() => setWillChangeActive(false)}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        src={imageSrc}
        alt={step.title}
        className="w-full h-full object-cover grayscale contrast-[1.12] brightness-[0.82]"
        style={{
          transformOrigin: "center center",
          willChange: willChangeActive ? "transform" : "auto",
        }}
        referrerPolicy="no-referrer"
      />

      {/* Default Overlay & Heading (visible when NOT hovered) */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-teal/95 via-teal/30 to-black/15 transition-opacity duration-300 ease-in-out" 
        style={{ opacity: isHovered ? 0 : 0.85 }}
      />

      {/* Top-Right White Square Badge for Step Num & sleek arrow indicator */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-white flex flex-col items-center justify-center border-l border-b border-[#1A3C34]/10 z-30">
        <span className="font-mono text-xs font-bold text-ink leading-none">
          {step.num}
        </span>
        <span className="font-sans text-[10px] text-gold font-bold leading-none mt-0.5">
          ↗
        </span>
      </div>

      {/* Static Step Title at the bottom left (visible when NOT hovered) */}
      {!isHovered && (
        <div className="absolute bottom-0 left-0 p-8 z-20 text-left">
          <h3 className="font-serif text-[32px] md:text-[38px] font-bold text-white tracking-wide leading-none">
            {step.title}
          </h3>
        </div>
      )}

      {/* Hover State: Glassmorphism Blur Overlay with custom bottom-to-top gradient holding the images always visible */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)", backdropFilter: "blur(0px)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", backdropFilter: "blur(12px)" }}
            exit={{ clipPath: "inset(100% 0% 0% 0%)", backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.42, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-between text-left"
            style={{
              background: "linear-gradient(to top, rgba(18, 45, 39, 0.95) 0%, rgba(18, 45, 39, 0.55) 60%, rgba(18, 45, 39, 0.18) 100%)"
            }}
          >
            {/* Top Area: Step number & Step Title with glass reveal animation */}
            <motion.div 
              initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.38, ease: "easeOut", delay: 0.06 }}
              className="pt-4"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-gold font-semibold block mb-1">
                STEP {step.num}
              </span>
              <h3 className="font-serif text-[32px] md:text-[40px] font-bold text-white tracking-wide leading-tight">
                {step.title}
              </h3>
            </motion.div>

            {/* Bottom Area: Description & Golden Button CTA with staggered glass reveal effect */}
            <motion.div 
              initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.38, ease: "easeOut", delay: 0.12 }}
              className="space-y-6"
            >
              <p className="font-sans text-[15px] sm:text-[16px] text-white/90 leading-[1.7] max-w-sm">
                {idx === 0 
                  ? "The AI Alignment Index: 15 questions, 5 dimensions, a precise picture of where your AI strategy has gaps." 
                  : step.description}
              </p>

              {/* Luxury Golden Button CTA */}
              <div className="pt-2">
                <Link href={buttonPath}>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-ink font-sans text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-teal duration-300 transition-all shadow-md active:scale-95">
                    <span>{buttonText}</span>
                    <span>→</span>
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Diagnose",
      iconPath: "/images/icon-diagnostic.svg",
      iconAim: "Abstract: a compass or measuring instrument",
      description: (
        <>
          The AI Alignment Index: 15 questions, 5 dimensions, a precise picture of where your AI strategy has gaps.{" "}
          <Link href="/index">
            <motion.span 
              className="text-gold font-medium hover:underline inline-flex items-center gap-1 cursor-pointer select-none"
              initial="initial"
              whileHover="hover"
            >
              <span>Take the Index</span>
              <LoopingArrow className="text-gold" size={13} />
            </motion.span>
          </Link>
        </>
      ),
    },
    {
      num: "02",
      title: "Design",
      iconPath: "/images/icon-design.svg",
      iconAim: "Abstract: a grid or blueprint motif",
      description: "A structured AI integration plan built around your leadership team, your industry, and your actual decision-making architecture.",
    },
    {
      num: "03",
      title: "Deploy",
      iconPath: "/images/icon-deploy.svg",
      iconAim: "Abstract: an upward arrow or expanding shape",
      description: "Execution support through leadership alignment, cultural adoption, and governance that makes AI stick beyond the pilot.",
    },
  ];

  const optionBImages = [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800", // Diagnose
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", // Design
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"  // Deploy
  ];

  return (
    <>
      {/* Option A: Minimalist Line Process */}
      <section id="how-it-works" className="relative bg-canvas py-12 md:py-16 overflow-hidden border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal duration={0.6}>
            <div className="mb-20">
              <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block mb-3">
                THE PROCESS — OPTION A (MINIMALIST)
              </span>
              <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.15] font-bold text-ink text-left max-w-xl text-balance">
                How we work together
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-14 relative">
              
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <StaggerItem index={idx}>
                    <div className="relative group flex flex-col pt-14 pb-4">
                      
                      {/* Oversized gold background numeral (z-index layering) */}
                      <div className="absolute top-0 left-0 font-serif font-bold text-[180px] leading-none text-gold opacity-15 select-none pointer-events-none z-0 transform -translate-y-8 -translate-x-2">
                        {step.num}
                      </div>

                      {/* Step Title (overlaid on numeral) */}
                      <h3 className="font-serif text-[28px] font-bold text-teal mb-4 relative z-10 select-none text-left">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="font-sans text-[16px] text-ink-muted leading-[1.75] relative z-10 max-w-xs text-left min-h-[110px]">
                        {step.description}
                      </p>

                      {/* Small vector Illustration Container (80px x 80px) */}
                      <div className="relative w-20 h-20 bg-teal/5 border border-teal/15 group-hover:border-teal transition-all duration-300 z-10 mt-6 select-none flex items-center justify-center">
                        <img
                          src={step.iconPath}
                          alt={step.title}
                          className="absolute inset-0 w-full h-full p-4 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        
                        {/* Premium inline fallback vectors styled as abstract lines render automatically */}
                        <div className="w-full h-full p-4 flex flex-col items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-200 text-teal">
                          {step.num === "01" && (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                              <circle cx="12" cy="12" r="9" />
                              <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="1 1" />
                              <line x1="2" y1="12" x2="22" y2="12" strokeDasharray="1 1" />
                              <polygon points="12,5 15,12 12,19 9,12" strokeWidth="2" />
                            </svg>
                          )}
                          {step.num === "02" && (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                              <rect x="3" y="3" width="18" height="18" rx="1" />
                              <line x1="3" y1="9" x2="21" y2="9" />
                              <line x1="3" y1="15" x2="21" y2="15" />
                              <line x1="9" y1="3" x2="9" y2="21" />
                              <line x1="15" y1="3" x2="15" y2="21" />
                            </svg>
                          )}
                          {step.num === "03" && (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                              <polyline points="17 11 12 6 7 11" strokeWidth="2.5" />
                              <line x1="12" y1="6" x2="12" y2="18" strokeWidth="2" />
                              <path d="M5 18 H19" strokeWidth="2" />
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Connection Arrow logic for desktop */}
                      {idx < 2 && (
                        <div className="hidden md:block absolute top-[40%] right-[-15%] lg:right-[-20%] w-10 md:w-12 lg:w-16 z-20 pointer-events-none opacity-50">
                          <svg
                            viewBox="0 0 60 12"
                            fill="none"
                            stroke="var(--color-gold)"
                            strokeWidth="1"
                            className="w-full"
                          >
                            <line x1="0" y1="6" x2="52" y2="6" strokeDasharray="3 3" />
                            <polyline points="47 1 52 6 47 11" />
                          </svg>
                        </div>
                      )}

                    </div>
                  </StaggerItem>
                </div>
              ))}

            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Option B: Editorial Image Wireframe Block */}
      <section id="how-it-works-cards" className="relative bg-[#F7F4EF]/25 py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal duration={0.6}>
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="text-left">
                <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block mb-3">
                  THE PROCESS — OPTION B (EDITORIAL GRID)
                </span>
                <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.15] font-bold text-ink max-w-xl text-balance">
                  How we work together
                </h2>
              </div>
            </div>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-2 lg:gap-2 relative">
              
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col">
                  <StaggerItem index={idx}>
                    <OptionBCard
                      step={step}
                      idx={idx}
                      imageSrc={optionBImages[idx]}
                    />
                  </StaggerItem>
                </div>
              ))}

            </div>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
