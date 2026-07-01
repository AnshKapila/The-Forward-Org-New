import React from "react";
import { useLocation } from "wouter";
import { ScrollReveal } from "./ScrollReveal";
import { InteractiveButton } from "./InteractiveButton";

export function HowItWorks() {
  const [, setLocation] = useLocation();

  const stages = [
    {
      letter: "E",
      title: "Evaluate",
      description: "Understand your current organizational reality."
    },
    {
      letter: "V",
      title: "Visualize",
      description: "Define what the future needs to look like."
    },
    {
      letter: "O",
      title: "Organize",
      description: "Align leadership, teams, and systems."
    },
    {
      letter: "L",
      title: "Lead",
      description: "Drive adoption across the organization."
    },
    {
      letter: "V",
      title: "Validate",
      description: "Measure what is actually working."
    },
    {
      letter: "E",
      title: "Embody",
      description: "Sustain transformation at the leadership level."
    }
  ];

  return (
    <section id="how-it-works" className="relative bg-[#F7F4EF]/25 py-20 border-b border-gold/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal duration={0.65}>
          {/* Header Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
            <div className="lg:col-span-7 text-left">
              <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block mb-3">
                HOW WE WORK
              </span>
              <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.15] font-bold text-ink mb-6">
                The Forward Org Blueprint™
              </h2>
              <p className="font-serif text-xl md:text-2xl text-teal leading-relaxed font-semibold">
                A structured approach to turning AI from isolated activity into organizational capability.
              </p>
            </div>
            
            <div className="lg:col-span-5 text-left lg:pt-8">
              <p className="font-sans text-[16px] text-ink-muted leading-[1.75] font-light mb-4">
                Most organizations try to layer AI onto existing structures.
              </p>
              <p className="font-sans text-[16px] text-ink-muted leading-[1.75] font-light">
                We help redesign the operating system of your org — so AI can scale, sustain, and deliver measurable outcomes. It is the blueprint for creating AI-native transformation.
              </p>
            </div>
          </div>

          {/* EVOLVE Trademark block */}
          <div className="bg-white/80 border border-gold/15 p-8 md:p-12 text-left mb-16">
            <div className="max-w-3xl mb-12">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1A3C34] mb-3 inline-flex items-center">
                EVOLVE™
              </h3>
              <p className="font-sans text-base text-ink-muted leading-relaxed font-light">
                Each stage of EVOLVE™ moves your organization from scattered pilots to an AI-native culture — with governance built in and leadership ready to hold it.
              </p>
            </div>

            {/* Stage Letters Diagram Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {stages.map((stage, idx) => (
                <div 
                  key={idx}
                  className="relative group bg-[#F7F4EF]/30 border border-gold/10 p-6 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:bg-[#1A3C34] hover:border-transparent"
                >
                  {/* Big background letter watermark */}
                  <span className="absolute top-4 right-6 font-serif text-[72px] font-bold text-gold/10 group-hover:text-gold/5 leading-none select-none transition-colors duration-300">
                    {stage.letter}
                  </span>

                  {/* Letter Header */}
                  <div>
                    <span className="font-serif text-[36px] font-extrabold text-gold block leading-none mb-4 group-hover:text-white transition-colors duration-300">
                      {stage.letter}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-ink group-hover:text-white transition-colors duration-300">
                      {stage.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-[13px] text-ink-muted leading-relaxed mt-4 group-hover:text-white/80 transition-colors duration-300">
                    {stage.description}
                  </p>

                  {/* Bottom Index Line */}
                  <div className="w-full h-[2px] bg-gold/20 group-hover:bg-gold transition-all duration-300 mt-6" />
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="flex flex-col items-center justify-center text-center space-y-6 pt-4">
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
