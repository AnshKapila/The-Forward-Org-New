import React, { useRef } from "react";
import { useLocation } from "wouter";
import { InteractiveButton } from "../components/InteractiveButton";
import { ScrollReveal } from "../components/ScrollReveal";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

import scorecardLeft from "../assets/images/scorecard_left.png";
import scorecardMid from "../assets/images/scorecard_mid.png";
import scorecardRight from "../assets/images/scorecard_right.png";

export default function IndexPage() {
  const [_, setLocation] = useLocation();

  // Parallax Scroll Elements configuration targeting image wrapper viewports
  const imageRef1 = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);
  const imageRef3 = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scrollY1 } = useScroll({
    target: imageRef1,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollY2 } = useScroll({
    target: imageRef2,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollY3 } = useScroll({
    target: imageRef3,
    offset: ["start end", "end start"],
  });

  const shouldReduceMotion = useReducedMotion();

  // Scroll parallax transforms
  const yParallax1 = useTransform(scrollY1, [0, 1], ["-15%", "15%"]);
  const yParallax2 = useTransform(scrollY2, [0, 1], ["-25%", "8%"]);
  const yParallax3 = useTransform(scrollY3, [0, 1], ["-10%", "20%"]);

  const scaleZoom1 = useTransform(scrollY1, [0, 1], [1.02, 1.18]);
  const scaleZoom2 = useTransform(scrollY2, [0, 1], [1.0, 1.25]);
  const scaleZoom3 = useTransform(scrollY3, [0, 1], [1.05, 1.15]);

  const yVal1 = shouldReduceMotion ? "0%" : yParallax1;
  const yVal2 = shouldReduceMotion ? "0%" : yParallax2;
  const yVal3 = shouldReduceMotion ? "0%" : yParallax3;

  const scaleVal1 = shouldReduceMotion ? 1.0 : scaleZoom1;
  const scaleVal2 = shouldReduceMotion ? 1.0 : scaleZoom2;
  const scaleVal3 = shouldReduceMotion ? 1.0 : scaleZoom3;

  return (
    <div className="bg-canvas min-h-screen text-ink">
      {/* Hero Block — Redesigned for exact viewport fitting including Nav spacing and avoiding cropping */}
      <section className="relative w-full min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-96px)] flex flex-col justify-between pt-12 pb-16 bg-[#FAF9F5]">
        <div className="absolute inset-0 bg-[#1A3C34]/[0.015] bg-[linear-gradient(rgba(26,60,52,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(26,60,52,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Upper Content - Symmetrically proportioned */}
        <div className="w-full max-w-4xl mx-auto text-center px-6 md:px-12 flex-grow flex flex-col justify-center relative z-10 py-6 mb-8">
          <ScrollReveal duration={0.6}>
            <div className="space-y-4 md:space-y-6">
              
              <h1 className="font-serif text-[32px] sm:text-[44px] md:text-[52px] lg:text-[58px] leading-[1.12] font-semibold text-[#1A3C34] tracking-tight text-balance">
                Measure the Four Leadership Capabilities That Drive AI <span className="font-serif italic font-normal text-gold">Transformation</span>
              </h1>
              
              <p className="font-sans text-xs sm:text-sm md:text-base text-ink-muted leading-[1.65] max-w-[650px] mx-auto font-light">
                Not how much AI you know. <span className="font-serif italic font-normal text-[#1A3C34]">But how prepared you are to lead through it.</span>
              </p>

              {/* Stats Inline Info Row */}
              <div className="flex justify-center items-center gap-3 md:gap-4 text-[11px] font-sans font-medium text-[#1A3C34]/75 tracking-wider py-1 select-none flex-wrap">
                <span className="bg-[#1A3C34]/5 py-1 px-3 rounded-none border border-[#1A3C34]/10">12 questions</span>
                <span className="text-gold/50">•</span>
                <span className="bg-[#1A3C34]/5 py-1 px-3 rounded-none border border-[#1A3C34]/10">4 capabilities</span>
                <span className="text-gold/50">•</span>
                <span className="bg-[#1A3C34]/5 py-1 px-3 rounded-none border border-[#1A3C34]/10">3 minutes</span>
              </div>

              {/* Golden primary CTA directly above images */}
              <div className="flex justify-center pt-3">
                <InteractiveButton
                  onClick={() => setLocation("/scorecard")}
                  variant="gold"
                  className="px-10 py-3.5 capitalize tracking-[0.18em] text-xs font-bold shadow-sm"
                  id="cta-take-index"
                >
                  Check Your AI Readiness
                </InteractiveButton>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Three-Column Images Section matching structure from screenshot */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-3 gap-4 md:gap-8 items-start">
            
            {/* Piece 1: Speaking at Podium */}
            <motion.div 
              ref={imageRef1}
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-xl md:rounded-2xl border border-[#D4C9B8]/40 bg-[#1A3C34]/5 group"
              style={{ transform: "translateZ(0)", isolation: "isolate" }}
            >
              <motion.img
                src={scorecardLeft}
                alt="Pan speaking at podium with corporate team listening"
                className="absolute inset-x-0 top-0 w-full h-[150%] object-cover object-center"
                style={{ y: yVal1, scale: scaleVal1, transformOrigin: "center center", willChange: "transform" }}
              />
            </motion.div>

            {/* Piece 2: Whiteboard Meeting (Zoomed & cropped 50% top-left) */}
            <motion.div 
              ref={imageRef2}
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-xl md:rounded-2xl border border-[#D4C9B8]/40 bg-[#1A3C34]/5 group"
              style={{ transform: "translateZ(0)", isolation: "isolate" }}
            >
              <motion.img
                src={scorecardMid}
                alt="Corporate strategy whiteboard discussion zoomed"
                className="absolute inset-x-0 top-0 w-full h-[150%] object-cover object-center"
                style={{ y: yVal2, scale: scaleVal2, transformOrigin: "center center", willChange: "transform" }}
              />
            </motion.div>

            {/* Piece 3: Code on Laptop Screen */}
            <motion.div 
              ref={imageRef3}
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-xl md:rounded-2xl border border-[#D4C9B8]/40 bg-[#1A3C34]/5 group"
              style={{ transform: "translateZ(0)", isolation: "isolate" }}
            >
              <motion.img
                src={scorecardRight}
                alt="Development environment codebase editor visualization"
                className="absolute inset-x-0 top-0 w-full h-[150%] object-cover object-center"
                style={{ y: yVal3, scale: scaleVal3, transformOrigin: "center center", willChange: "transform" }}
              />
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
