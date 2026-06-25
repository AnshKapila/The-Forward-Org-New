import React from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export function ValueProp() {
  const points = [
    {
      num: "01",
      title: "Built from the Inside, Not the Slide",
      desc: "We don't sell armies of junior consultants or hand over theoretical frameworks. Our strategy is built by advisors who have designed, scaled, and managed complex AI systems inside the world's most demanding enterprises.",
    },
    {
      num: "02",
      title: "Aligned with EBITDA, Not the Sprawl",
      desc: "Most AI initiatives are isolated developer playground experiments. We connect technological investments directly to your balance sheet, ensuring every model deployed expands your net margin.",
    },
    {
      num: "03",
      title: "Operational Hardening, Not Just Pilots",
      desc: "Moving past infinite, expensive pilots requires structural discipline. We establish the governance frameworks, compliance checkpoints, and organizational models needed to make AI standard, reliable infrastructure.",
    },
  ];

  return (
    <section id="value-prop" className="relative bg-white py-24 md:py-32 overflow-hidden border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header section */}
        <ScrollReveal duration={0.65}>
          <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <span className="font-sans font-semibold text-xs text-gold uppercase tracking-[0.2em] block mb-3">
              THE VALUE PROPOSITION
            </span>
            <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.15] font-bold text-ink text-balance">
              Why Leading Firms Partner With Us
            </h2>
          </div>
        </ScrollReveal>

        {/* Three column grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
            {points.map((point, idx) => (
              <div key={idx} className="h-full">
                <StaggerItem index={idx}>
                  <div className="flex flex-col text-left space-y-4 p-8 border border-gold/10 hover:border-gold/30 bg-[#F7F4EF]/10 hover:bg-[#F7F4EF]/20 transition-all duration-300 rounded-[2px] h-full justify-between">
                    <div className="space-y-4">
                      {/* Golden bold number */}
                      <span className="font-mono text-xs font-bold text-gold tracking-widest uppercase block">
                        {point.num}
                      </span>
                      {/* Serif Heading */}
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-ink leading-snug">
                        {point.title}
                      </h3>
                      {/* Sans Body text */}
                      <p className="font-sans text-[15px] text-ink-muted leading-[1.65] font-light">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </div>
            ))}
          </div>
        </StaggerContainer>

      </div>
    </section>
  );
}
