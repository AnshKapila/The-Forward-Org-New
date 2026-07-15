import React, { useState, useRef } from "react";
import { Link } from "wouter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Option B Interactive Card Sub-component with premium hover states
function OptionBCard({ step, idx, imageSrc }: { step: any; idx: number; imageSrc: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [willChangeActive, setWillChangeActive] = useState(true);

  // Link destinations
  const buttonPath = idx === 0 ? "/index" : "/book-a-call"; 

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
        <div className="absolute bottom-0 left-0 p-8 z-20 text-left pr-12">
          <h3 className="font-serif text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-white tracking-wide leading-tight">
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
            className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-between text-left"
            style={{
              background: "linear-gradient(to top, rgba(18, 45, 39, 0.98) 0%, rgba(18, 45, 39, 0.7) 60%, rgba(18, 45, 39, 0.3) 100%)"
            }}
          >
            {/* Top Area: Step number & Step Title with glass reveal animation */}
            <motion.div 
               initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
               animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
               transition={{ duration: 0.38, ease: "easeOut", delay: 0.06 }}
               className="pt-2 shrink-0 space-y-2"
            >
              <h3 className="font-serif text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-white tracking-wide leading-tight">
                {step.title}
              </h3>
              <p className="font-serif italic text-base sm:text-lg text-gold font-normal leading-normal">
                {step.subheading}
              </p>
            </motion.div>

            {/* Scrollable Middle Area for description */}
            <div className="flex-1 my-4 overflow-y-auto pr-1 select-text" style={{ scrollbarWidth: "none" }}>
              <motion.div 
                initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.38, ease: "easeOut", delay: 0.12 }}
                className="space-y-4"
              >
                <p className="font-sans text-[13px] md:text-[14px] text-[#FAFAF8]/80 leading-[1.6]">
                  {step.description}
                </p>
              </motion.div>
            </div>

            {/* Bottom Area: Luxury Golden Button CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.18 }}
              className="pt-2 shrink-0"
            >
              <Link href={buttonPath}>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-ink font-sans text-xs font-bold capitalize tracking-wider hover:bg-white hover:text-teal duration-300 transition-all shadow-md active:scale-95">
                  <span>{step.cta}</span>
                  <span>→</span>
                </div>
              </Link>
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
      title: "Become an AI-First Leader",
      subheading: "Join Forward Leader Accelerator™",
      description: "Develop the confidence, systems, and strategic thinking to become the leader your organization trusts to navigate AI.\nDesigned for ambitious senior leaders preparing to influence strategy, lead adoption, and accelerate their careers in the Age of AI.",
      question: "Become the first Forward Leader inside your company.",
      cta: "Take The Forward Score™"
    },
    {
      num: "02",
      title: "Align Leaders. Transform Culture.",
      subheading: "Leadership & Organizational Alignment",
      description: "Technology doesn't transform organizations. Leaders do.\nWe partner with executive teams to build leadership alignment, reduce resistance, develop AI champions, and create the organizational capability required for AI adoption at scale.",
      question: "Your people and your AI, moving in the same direction.",
      cta: "Book an Alignment Conversation"
    },
    {
      num: "03",
      title: "Build an Organization Ready for AI",
      subheading: "AI Strategy & Governance",
      description: "AI creates value only when strategy, governance, and decision-making evolve together.\nWe help executive teams define enterprise AI priorities, establish governance frameworks, evaluate risk, and create practical roadmaps that enable responsible, scalable transformation.",
      question: "Confidence at the board level. Clarity at every level.",
      cta: "Book a Strategy Conversation"
    },
  ];

  const optionBImages = [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800", // Assess
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", // Architect
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"  // Activate
  ];

  return (
    <section id="how-it-works" className="relative bg-[#F7F4EF]/25 py-8 md:py-12 lg:py-16 xl:py-[60px] 2xl:py-[80px] overflow-hidden border-b border-gold/15">
      <div className="w-full px-6 lg:px-[120px]">
        <ScrollReveal duration={0.6}>
          <div className="mb-12 flex flex-col gap-4">
            <div className="text-left">
              <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.15] font-bold text-ink max-w-2xl text-balance">
                Three Ways to Begin Your AI Transformation
              </h2>
              <p className="font-sans text-sm md:text-base text-ink-muted mt-3 max-w-4xl leading-relaxed">
                Three focused ways to use the Forward Org Blueprint to turn AI from a source of pressure, fragmentation, or risk into a practical organizational business advantage.
              </p>
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
  );
}

