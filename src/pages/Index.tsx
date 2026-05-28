import React from "react";
import { useLocation } from "wouter";
import { InteractiveButton } from "../components/InteractiveButton";
import { ScrollReveal } from "../components/ScrollReveal";

export default function IndexPage() {
  const [location, setLocation] = useLocation();

  const dimensions = [
    {
      name: "Strategy & Vision",
      desc: "Aligning AI priorities directly with business model margin expanders and board goals.",
    },
    {
      name: "Governance & Risk",
      desc: "Establishing active compliance check-gates and monitoring live employee endpoints.",
    },
    {
      name: "Leadership Alignment",
      desc: "Ensuring executive team unity and a cohesive, shared long-term corporate roadmap.",
    },
    {
      name: "Workforce Adoption KPI",
      desc: "Redesigning frontline procedures around AI-powered workflows with verified usage tracking.",
    },
    {
      name: "Roadmap & ROI",
      desc: "Tracing return on AI spend directly to quantifiable performance and balance-sheet line items.",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-ink">
      {/* Hero Block — Redesigned for exact 100vh viewport fitting */}
      <section className="w-full max-w-5xl mx-auto text-center px-6 md:px-12 pt-28 pb-12 flex flex-col justify-center md:min-h-[calc(100vh-80px)]">
        <ScrollReveal duration={0.6}>
          <div className="space-y-5 sm:space-y-6">
            <span className="font-sans font-bold text-xs text-gold uppercase tracking-[0.25em] block">
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
              >
                Take the Index
              </InteractiveButton>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Five Dimensions Section */}
      <section className="bg-[#F7F4EF] py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal duration={0.5}>
            <div className="text-center mb-12">
              <span className="font-sans font-bold text-xs text-teal uppercase tracking-widest block mb-2">
                ASSESSMENT BREAKDOWN
              </span>
              <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-ink">
                What We Measure
              </h2>
            </div>

            {/* Grid of dimensions: row of 3 + row of 2 centered */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dimensions.slice(0, 3).map((dim, i) => (
                <div
                  key={i}
                  className="p-8 bg-white border border-teal/40 flex flex-col justify-between transition-all duration-300 hover:border-gold hover:-translate-y-1"
                >
                  <div>
                    <h3 className="font-serif text-[22px] font-semibold text-teal mb-3">
                      {dim.name}
                    </h3>
                    <p className="font-sans text-[14px] text-ink-muted leading-relaxed">
                      {dim.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-[730px] mx-auto">
              {dimensions.slice(3).map((dim, i) => (
                <div
                  key={i}
                  className="p-8 bg-white border border-teal/40 flex flex-col justify-between transition-all duration-300 hover:border-gold hover:-translate-y-1"
                >
                  <div>
                    <h3 className="font-serif text-[22px] font-semibold text-teal mb-3">
                      {dim.name}
                    </h3>
                    <p className="font-sans text-[14px] text-ink-muted leading-relaxed">
                      {dim.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
