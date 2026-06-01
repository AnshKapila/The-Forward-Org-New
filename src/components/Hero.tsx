import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useLocation } from "wouter";
import { InteractiveButton } from "./InteractiveButton";
import panHeroImg from "../../hero2.png";

export function Hero() {
  const [location, setLocation] = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Scale zooms in +20% as the hero drives down (from scale 1.0 to 1.2)
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.2]);
  const scaleValue = shouldReduceMotion ? 1.0 : scrollScale;

  const phrases = [
    "YOUR BOARD IS WATCHING.",
    "THE GAP IS NOT THE TOOLS.",
    "AI WITHOUT THE CHAOS.",
    "BUILT FOR WHAT'S NEXT.",
  ];

  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [phrases.length]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Delay setting hasEntered to allow the 1.2s entry animation to finish first.
    const timer = setTimeout(() => {
      setHasEntered(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToCall = () => {
    const el = document.getElementById("book-a-call");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      setLocation("/");
      setTimeout(() => {
        const target = document.getElementById("book-a-call");
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  // Entry animation   parameters
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
    hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2, // 1200-millisecond animation
        ease: [0.16, 1, 0.3, 1], // premium cubic-bezier ease
      },
    },
  };

  return (
    <section 
      ref={heroRef} 
      id="hero" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-screen bg-ink pt-24 md:pt-0 flex flex-col justify-between overflow-hidden"
    >
      
      {/* Absolute Background image of founder with accessible dark gradient fallback mapping */}
      <div 
        className="absolute inset-0 z-0 select-none overflow-hidden"
        style={{ transform: "translateZ(0)", isolation: "isolate" }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ scale: isHovered ? 1.05 : 1.0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transformOrigin: "center center",
            willChange: "transform",
          }}
        >
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            src={panHeroImg}
            alt="Pan Seth, Corporate Strategy Advisor"
            className="w-full h-full object-cover object-right lg:object-[85%_center] opacity-100"
            style={{
              objectPosition: isMobile ? "80% center" : undefined,
              scale: hasEntered ? scaleValue : undefined,
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1920&h=1080";
            }}
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Deep, smooth left-aligned dark gradient to protect text legibility, keeping right side completely clean & raw */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[55%] lg:w-[48%] bg-gradient-to-r from-ink via-ink/75 to-transparent hidden md:block z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent md:hidden z-10 pointer-events-none" />
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 md:px-12 z-20 text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col items-start"
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

          {/* Heading H1 set strictly fluid using custom --text-hero property clamp */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-hero leading-[1.12] font-bold tracking-tight text-white text-balance mt-3 md:mt-4"
          >
            Your AI investments deserve more than another pilot.
          </motion.h1>

          {/* Subheadline description with white-dimmed styling for accessibility */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-[17px] md:text-[19px] text-off-white/80 leading-relaxed font-light max-w-2xl mt-3 md:mt-4"
          >
            Most organizations are running AI experiments. Forward ones are building the leadership infrastructure that makes AI irreversible and measurably profitable.
          </motion.p>

          {/* Double Active Hero Action Buttons side-by-side inspired by the wireframe */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-[24px] items-stretch sm:items-center mt-8 pt-0 w-full"
          >
            {/* Primary Action Button (White filled) */}
            <InteractiveButton
              onClick={() => setLocation("/index")}
              variant="primary"
              className="text-center"
            >
              Take the AI Alignment Index
            </InteractiveButton>
            
            {/* Secondary Action Button (Outline transparent) */}
            <InteractiveButton
              onClick={handleScrollToCall}
              variant="secondary"
              className="text-center"
            >
              Book a Call
            </InteractiveButton>
          </motion.div>

          {/* New Trust Line below CTAs */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-xs md:text-sm text-off-white/60 mt-6 tracking-wide text-left"
          >
            Used by CEOs and C-suite leaders who are done experimenting and ready to build.
          </motion.p>
        </motion.div>
      </div>

    </section>
  );
}
