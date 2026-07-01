import React from "react";
import { useLocation } from "wouter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { InteractiveButton } from "./InteractiveButton";

export function OurOfferings() {
  const [, setLocation] = useLocation();

  const offerings = [
    {
      num: "01",
      title: "AI STRATEGY & COMPLIANCE BLUEPRINT™",
      description: "A defensible strategy and clear roadmap designed to satisfy your board, align your leadership, and secure approval from legal and compliance teams."
    },
    {
      num: "02",
      title: "WORKFLOW & WORKFORCE BLUEPRINT™",
      description: "A comprehensive diagnostic and redesign of roles, procedures, and training to move AI from experimental pilots to margin-expanding standard practice."
    },
    {
      num: "03",
      title: "THE DEDICATED ADVISORY",
      description: "Direct, ongoing strategic advisory for CEOs, boards, and digital leaders who need continuous, practitioner-level guidance through a complex transition."
    }
  ];

  return (
    <section id="offerings" className="relative bg-white py-24 md:py-32 overflow-hidden border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <ScrollReveal duration={0.65}>
          <div className="max-w-3xl text-left mb-16 md:mb-20">
            <span className="font-sans font-semibold text-xs text-gold uppercase tracking-[0.2em] block mb-3">
              OUR OFFERINGS
            </span>
            <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.15] font-bold text-ink mb-6">
              What We Do
            </h2>
            <p className="font-sans text-lg text-ink-muted leading-relaxed font-light">
              Our work is highly customized, but typically centers on three main outcomes:
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Column Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 mb-16">
            {offerings.map((off, idx) => (
              <div key={idx} className="h-full">
                <StaggerItem index={idx}>
                  <div className="flex flex-col text-left space-y-6 p-8 border border-gold/10 hover:border-gold/30 bg-[#F7F4EF]/10 hover:bg-[#F7F4EF]/25 transition-all duration-300 rounded-none h-full justify-between">
                    <div className="space-y-4">
                      {/* Offering Index */}
                      <span className="font-sans text-xs font-bold text-gold tracking-widest uppercase block">
                        {off.num}
                      </span>
                      {/* Title */}
                      <h3 className="font-serif text-lg md:text-xl font-bold text-ink leading-snug">
                        {off.title}
                      </h3>
                      {/* Divider */}
                      <div className="w-10 h-[1px] bg-gold/20" />
                      {/* Description */}
                      <p className="font-sans text-sm md:text-[15px] text-ink-muted leading-[1.65] font-light">
                        {off.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </div>
            ))}
          </div>
        </StaggerContainer>

        {/* Bottom CTA Button */}
        <ScrollReveal duration={0.65}>
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <InteractiveButton 
              variant="primary"
              onClick={() => setLocation("/index")}
            >
              Discover Your AI Transformation Readiness
            </InteractiveButton>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
