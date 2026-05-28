import React, { useState } from "react";
import { useLocation } from "wouter";
import { InteractiveButton } from "../components/InteractiveButton";
import { ScrollReveal } from "../components/ScrollReveal";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
    <div className="bg-white min-h-screen text-ink">
      {/* Hero Block — Redesigned for exact 100vh viewport fitting */}
      <section className="w-full max-w-7xl mx-auto text-center px-6 md:px-12 flex flex-col justify-center min-h-screen pt-24 pb-12">
        <ScrollReveal duration={0.6}>
          <div className="space-y-5 sm:space-y-6">
            <span className="font-sans font-bold text-xs text-gold uppercase tracking-[0.25em] block animate-fade-in">
              THE AI ALIGNMENT INDEX
            </span>
            
            <h2 className="font-serif text-[24px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.2] font-bold text-ink text-balance">
              Your organization is using AI. The question is whether the infrastructure underneath it is built to make it stick.
            </h2>
            
            <p className="font-sans text-[15px] sm:text-[17px] text-ink-muted leading-[1.7] max-w-[680px] mx-auto">
              A 15-question diagnostic across five organizational dimensions. Used by senior leaders to find the exact gaps between AI investment and AI results.
            </p>

            {/* Two stats inline (small, horizontal) */}
            <div className="flex justify-center items-center gap-4 text-[13px] sm:text-[14px] font-sans font-medium text-[#1A3C34] py-1">
              <span>15 questions</span>
              <span className="text-gold/50">•</span>
              <span>5 dimensions</span>
              <span className="text-gold/50">•</span>
              <span>3 minutes</span>
            </div>

            <div className="flex justify-center pt-3">
              <InteractiveButton
                onClick={() => setLocation("/scorecard")}
                variant="gold"
                id="cta-take-index"
              >
                Take the Index
              </InteractiveButton>
            </div>
          </div>
        </ScrollReveal>
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
