import React, { useState, useRef } from "react";
import { useLocation } from "wouter";
import { InteractiveButton } from "../components/InteractiveButton";
import { ScrollReveal } from "../components/ScrollReveal";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface DimensionItem {
  num: string;
  name: string;
  weight: number;
  weightLabel: string;
  measures: string;
  matters: string;
}

export default function IndexPage() {
  const [location, setLocation] = useLocation();
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  // Parallax Scroll Elements configuration targetting image wrapper viewports
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

  // Scroll parallax transforms: actual image height is 1.5x (h-[150%]) of viewport bounding boxes
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

  const dimensions: DimensionItem[] = [
    {
      num: "01",
      name: "Strategy & Vision",
      weight: 100, // full bar or equivalent representation
      weightLabel: "30% Complexity Cap",
      measures: "Direct alignment of artificial intelligence investments with core profit-margin expansion targets, board-level efficiency goals, and defensible market differentiation.",
      matters: "Without strategic alignment, companies spend millions on isolated AI pilots that generate positive internal press but fail to move corporate EBITDA or build durable equity value.",
    },
    {
      num: "02",
      name: "Governance & Risk",
      weight: 85,
      weightLabel: "25% Complexity Cap",
      measures: "Active compliance containment gates, rigorous data leakage security rules, user endpoints auditing, and model training bias controls.",
      matters: "Deploying generative technologies without structural containment leaves the enterprise directly vulnerable to catastrophic IP contamination, data loss liability, and costly compliance headlines.",
    },
    {
      num: "03",
      name: "Leadership Alignment",
      weight: 70,
      weightLabel: "20% Complexity Cap",
      measures: "Cross-functional consensus among executive sponsors and department heads regarding investment priority, budget accountability, and technology roadmaps.",
      matters: "Siloed, departmental AI experiments create fragmented enterprise architectures, redundant software license fees, and executive friction that halts broad adoption.",
    },
    {
      num: "04",
      name: "Workforce Adoption KPI",
      weight: 55,
      weightLabel: "15% Complexity Cap",
      measures: "Proactive redesign of daily frontline procedures alongside transparent, automated feedback logs measuring exact hour-reductions and output quality improvements.",
      matters: "The most sophisticated artificial intelligence stack delivers exactly zero return if workforce resistance, lack of trust, or rigid habits prevent models from being integrated into day-to-day procedures.",
    },
    {
      num: "05",
      name: "Roadmap & ROI Trace",
      weight: 40,
      weightLabel: "10% Complexity Cap",
      measures: "Attribution mechanisms tracing capital costs directly from compute and vendor licensing to verifiable balance-sheet improvements and workforce hours saved.",
      matters: "Without structured ROI attribution, technology spend remains a speculative operational cost center subject to cost-cutting rather than a highly compounding capital asset.",
    },
  ];

  return (
    <div className="bg-canvas min-h-screen text-ink">
      {/* Hero Block — Redesigned for exact viewport fitting including Nav spacing and avoiding cropping */}
      <section className="relative w-full min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-96px)] flex flex-col justify-between pt-12 pb-16 bg-[#FAF9F5]">
        <div className="absolute inset-0 bg-[#1A3C34]/[0.015] bg-[linear-gradient(rgba(26,60,52,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(26,60,52,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Upper Content - Symmetrically proportioned */}
        <div className="w-full max-w-4xl mx-auto text-center px-6 md:px-12 flex-grow flex flex-col justify-center relative z-10 py-6 mb-8">
          <ScrollReveal duration={0.6}>
            <div className="space-y-4 md:space-y-6">
              
              {/* Category tag as structurally shown inside the reference image */}
              <div className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-pulse" />
                <span className="font-sans font-bold text-[10px] md:text-xs text-gold uppercase tracking-[0.25em] block">
                  The AI Transformation Readiness Index
                </span>
              </div>
              
              <h1 className="font-serif text-[32px] sm:text-[44px] md:text-[52px] lg:text-[58px] leading-[1.12] font-semibold text-[#1A3C34] tracking-tight text-balance">
                Find Out Exactly Where Your AI <span className="font-serif italic font-normal text-gold">Transformation</span> Stands
              </h1>
              
              <p className="font-sans text-xs sm:text-sm md:text-base text-ink-muted leading-[1.65] max-w-[650px] mx-auto font-light">
                A 15-question diagnostic that shows you where your organization is aligned, where it's exposed, and what to fix first to turn AI investment into measurable business outcomes.
              </p>

              {/* Stats Inline Info Row */}
              <div className="flex justify-center items-center gap-3 md:gap-4 text-[11px] font-sans font-medium text-[#1A3C34]/75 tracking-wider py-1 select-none flex-wrap">
                <span className="bg-[#1A3C34]/5 py-1 px-3 rounded-none border border-[#1A3C34]/10">15 questions</span>
                <span className="text-gold/50">•</span>
                <span className="bg-[#1A3C34]/5 py-1 px-3 rounded-none border border-[#1A3C34]/10">5 dimensions</span>
                <span className="text-gold/50">•</span>
                <span className="bg-[#1A3C34]/5 py-1 px-3 rounded-none border border-[#1A3C34]/10">3 minutes</span>
              </div>

              {/* Golden primary CTA directly above images below text */}
              <div className="flex justify-center pt-3">
                <InteractiveButton
                  onClick={() => setLocation("/scorecard")}
                  variant="gold"
                  className="px-10 py-3.5 uppercase tracking-[0.18em] text-xs font-bold shadow-sm"
                  id="cta-take-index"
                >
                  Begin Your Readiness Assessment
                </InteractiveButton>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Three-Column Images Section matching structure from screenshot */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-3 gap-4 md:gap-8 items-start">
            
            {/* Piece 1: Large company interacting with tech */}
            <motion.div 
              ref={imageRef1}
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-xl md:rounded-2xl border border-[#D4C9B8]/40 bg-[#1A3C34]/5 group"
              style={{ transform: "translateZ(0)", isolation: "isolate" }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                alt="Large corporations analyzing technology trends"
                className="absolute inset-x-0 top-0 w-full h-[150%] object-cover object-center"
                style={{ y: yVal1, scale: scaleVal1, transformOrigin: "center center", willChange: "transform" }}
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Piece 2: C-Suite person in leadership leading team with tech */}
            <motion.div 
              ref={imageRef2}
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-xl md:rounded-2xl border border-[#D4C9B8]/40 bg-[#1A3C34]/5 group"
              style={{ transform: "translateZ(0)", isolation: "isolate" }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200"
                alt="C-suite executives leading operations"
                className="absolute inset-x-0 top-0 w-full h-[150%] object-cover object-center"
                style={{ y: yVal2, scale: scaleVal2, transformOrigin: "center center", willChange: "transform" }}
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Piece 3: Growth of the team in corporate world */}
            <motion.div 
              ref={imageRef3}
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-xl md:rounded-2xl border border-[#D4C9B8]/40 bg-[#1A3C34]/5 group"
              style={{ transform: "translateZ(0)", isolation: "isolate" }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
                alt="Corporate team growth and collaboration"
                className="absolute inset-x-0 top-0 w-full h-[150%] object-cover object-center"
                style={{ y: yVal3, scale: scaleVal3, transformOrigin: "center center", willChange: "transform" }}
                referrerPolicy="no-referrer"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Five Dimensions Section — Change 5 Luxury Redesign */}
      <section className="bg-[#F7F4EF] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal duration={0.55}>
            <div className="text-left mb-16 md:mb-20">
              <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block mb-3">
                ASSESSMENT BREAKDOWN
              </span>
              <h2 className="font-serif text-[32px] md:text-[44px] leading-tight font-bold text-ink max-w-2xl">
                The Five Dimensions of AI Alignment
              </h2>
              <p className="font-sans text-base text-ink-muted leading-relaxed max-w-xl mt-4">
                We measure your organization across these functional disciplines to map exact operational gaps between capital deployment and positive bottom-line margin expansion.
              </p>
            </div>
          </ScrollReveal>

          {/* Luxury Expanding Row List */}
          <div className="border-t border-[#1A3C34]/15 divide-y divide-[#1A3C34]/15">
            {dimensions.map((dim, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <div 
                  key={idx}
                  onMouseEnter={() => setExpandedIndex(idx)}
                  onMouseLeave={() => setExpandedIndex(-1)}
                  className={`group transition-all duration-200 ${isExpanded ? "bg-[#1A3C34]/[0.02]" : "hover:bg-[#1A3C34]/[0.01]"}`}
                >
                  {/* Row Trigger Header */}
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                    className="w-full text-left py-8 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-1 select-none"
                    aria-expanded={isExpanded}
                    aria-controls={`dimension-info-${idx}`}
                  >
                    {/* Left: Oversized number and Title */}
                    <div className="flex items-center gap-6 md:gap-8 flex-1">
                      <span className="font-serif text-[32px] md:text-[38px] font-bold text-gold/40 select-none w-10 shrink-0 leading-none">
                        {dim.num}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-ink group-hover:text-[#1A3C34] transition-colors duration-150">
                        {dim.name}
                      </h3>
                    </div>

                    {/* Right: Progress outline meter and expand Indicator */}
                    <div className="flex items-center gap-8 justify-between md:justify-end shrink-0 w-full md:w-auto">
                      {/* Outline Progress Weight Meter */}
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted text-right">
                          {dim.weightLabel}
                        </span>
                        {/* Micro horizontal meter */}
                        <div className="w-16 h-1.5 bg-transparent border border-[#1A3C34]/20 p-[1px] inline-block">
                          <div 
                            className="bg-gold h-full transition-all duration-500"
                            style={{ width: `${dim.weight}%` }}
                          />
                        </div>
                      </div>

                      {/* Rotating Toggle Chevron */}
                      <ChevronDown
                        size={20}
                        strokeWidth={1.5}
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        className={`text-gold transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}
                      />
                    </div>
                  </button>

                  {/* Expansion Area */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`dimension-info-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        {/* Interactive Contents */}
                        <div className="px-4 sm:px-6 pb-10 pt-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-b border-[#1A3C34]/5 ml-0 md:ml-16">
                          {/* Column 1 - Measures */}
                          <div className="space-y-3">
                            <span className="font-sans font-bold text-[10px] text-[#1A3C34] uppercase tracking-widest block">
                              What We Measure
                            </span>
                            <p className="font-sans text-[15px] text-ink leading-relaxed font-normal">
                              {dim.measures}
                            </p>
                          </div>

                          {/* Column 2 - Matters */}
                          <div className="space-y-3">
                            <span className="font-sans font-bold text-[10px] text-gold uppercase tracking-widest block">
                              Why It Matters
                            </span>
                            <p className="font-serif text-[14px] italic text-ink-muted leading-relaxed">
                              {dim.matters}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
