import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import panHeroImg from "../assets/images/regenerated_image_1779884368446.png";

export function Hero() {
  const phrases = [
    "CLARITY. STRATEGY. EXECUTION.",
    "AI. WITHOUT THE CHAOS.",
    "BUILT TO LEAD.",
    "INTELLIGENCE. STRUCTURE. DIRECTION.",
  ];

  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [phrases.length]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Entry animation parameters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // premium cubic-bezier ease
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen bg-ink pt-24 md:pt-0 flex flex-col justify-between overflow-hidden">
      
      {/* Absolute Background image of founder with accessible dark gradient fallback mapping */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={panHeroImg}
          alt="Pan Seth, Corporate Strategy Advisor"
          className="w-full h-full object-cover object-right lg:object-[85%_center] opacity-100"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1920&h=1080";
          }}
          referrerPolicy="no-referrer"
        />
        {/* Deep, smooth left-aligned dark gradient to protect text legibility, keeping right side completely clean & raw */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[55%] lg:w-[48%] bg-gradient-to-r from-ink via-ink/75 to-transparent hidden md:block z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-transparent md:hidden z-10 pointer-events-none" />
      </div>

      <div className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center pt-20 md:pt-16 pb-8 text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8 max-w-3xl"
        >
          {/* Tagline Ticker with gold font-sans wrapper */}
          <div className="h-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIdx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="font-sans font-bold text-xs text-gold uppercase tracking-[0.2em] block"
              >
                {phrases[phraseIdx]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Heading H1 set strictly at 56px based on design Decisions of Elyte layout */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-[36px] sm:text-[46px] md:text-[56px] leading-[1.12] font-bold tracking-tight text-white text-balance"
          >
            I help leadership teams integrate AI into how they think, decide, and operate.
          </motion.h1>

          {/* Subheadline description with white-dimmed styling for accessibility */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-[17px] md:text-[19px] text-off-white/80 leading-relaxed font-light max-w-xl"
          >
            Without the chaos, the guesswork, or the wasted experiments.
          </motion.p>

          {/* Double Active Hero Action Buttons side-by-side inspired by the wireframe */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2"
          >
            {/* Primary Action Button (White filled) */}
            <button
              onClick={() => handleScrollTo("ai-index")}
              className="py-4 px-8 bg-off-white hover:bg-white text-ink font-sans font-bold text-xs uppercase tracking-wider select-none cursor-pointer flex items-center justify-center gap-1.5 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 text-center"
            >
              Take the AI Alignment Index <ArrowUpRight size={14} className="text-teal" />
            </button>
            
            {/* Secondary Action Button (Outline transparent) */}
            <button
              onClick={() => handleScrollTo("book-a-call")}
              className="py-4 px-8 border border-white/20 hover:border-white/50 bg-transparent text-white font-sans font-bold text-xs uppercase tracking-wider select-none cursor-pointer transition-all duration-150 text-center hover:bg-white/5"
            >
              Book a Call
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Ticker bottom bar inspired by the wireframe footer strip */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
            <span className="font-mono text-xs tracking-wider text-off-white/50 uppercase">
              Build with intention
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs tracking-wider text-off-white/50 uppercase">
              Scale with alignment
            </span>
            <span className="w-1.5 h-1.5 bg-teal-light rounded-full"></span>
          </div>
        </div>
      </div>

    </section>
  );
}
