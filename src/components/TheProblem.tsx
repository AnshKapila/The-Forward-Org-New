import React from "react";
import { useLocation } from "wouter";
import { ScrollReveal } from "./ScrollReveal";
import { InteractiveButton } from "./InteractiveButton";

export function TheProblem() {
  const [, setLocation] = useLocation();

  const rows = [
    {
      surface: "“We’re exploring what AI can do for us.”",
      underneath: "No shared direction—teams are moving in different directions."
    },
    {
      surface: "“We haven’t fully defined our AI strategy yet.”",
      underneath: "Uncertainty spreads, creates job fear and culture begins to decay quietly."
    },
    {
      surface: "“We’re running multiple AI initiatives.”",
      underneath: "No clear link to business outcomes, ROI remains unproven."
    },
    {
      surface: "“Our leadership team is aligned on AI.”",
      underneath: "All top leaders has different views on where the org is going with AI."
    },
    {
      surface: "“We’re upskilling our teams.”",
      underneath: "Learning isn’t translating into real execution."
    }
  ];

  return (
    <section id="the-problem" className="relative bg-canvas py-20 border-b border-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal duration={0.65}>
          {/* Header */}
          <div className="max-w-3xl mb-16 text-left">
            <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block mb-3">
              THE CONTEXT
            </span>
            <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.15] font-bold text-ink mb-6">
              The Organization You See Isn't Always the Organization You Have
            </h2>
            <div className="space-y-4">
              <p className="font-serif text-xl md:text-2xl text-teal leading-relaxed font-semibold">
                Most executive teams see AI activity.
              </p>
              <p className="font-sans text-lg text-ink-muted leading-relaxed font-light">
                We help them understand organizational readiness.
              </p>
            </div>
          </div>

          {/* 5 Comparison Rows */}
          <div className="space-y-6 mb-20">
            {rows.map((row, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch border-l-2 border-gold/20 pl-4 md:pl-6 py-2 transition-all duration-300 hover:border-gold"
              >
                {/* Surface */}
                <div className="flex flex-col justify-center text-left py-2 pr-4">
                  <span className="font-sans text-[11px] font-bold text-ink-muted uppercase tracking-[0.12em] mb-1">
                    On the surface
                  </span>
                  <p className="font-serif italic text-lg text-ink font-medium">
                    {row.surface}
                  </p>
                </div>
                
                {/* Underneath */}
                <div className="flex flex-col justify-center text-left py-2 pl-0 md:pl-6 border-t md:border-t-0 md:border-l border-gold/10">
                  <span className="font-sans text-[11px] font-bold text-gold uppercase tracking-[0.12em] mb-1">
                    Underneath
                  </span>
                  <p className="font-sans text-[15px] md:text-base text-ink-muted leading-relaxed">
                    {row.underneath}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion and CTA Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-gold/10">
            <div className="lg:col-span-7 text-left space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink leading-snug">
                This is where most organizations misread the situation.
              </h3>
              <p className="font-sans text-lg text-ink-muted leading-relaxed font-light">
                What looks like progress on the surface is often misalignment underneath. And misalignment doesn’t stay contained. <strong className="text-teal font-semibold">It compounds.</strong>
              </p>
              
              <div className="pt-2">
                <InteractiveButton 
                  variant="primary"
                  onClick={() => setLocation("/index")}
                  id="problem-take-index-btn"
                >
                  Discover Your AI Transformation Readiness
                </InteractiveButton>
              </div>
            </div>

            {/* Statistics Sidebar Column */}
            <div className="lg:col-span-5 bg-sand/20 border border-gold/15 p-8 md:p-10 text-left space-y-8">
              {/* Stat 1 */}
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-[42px] md:text-[52px] font-bold text-gold leading-none">88%</span>
                  <span className="font-sans text-xs text-ink-muted italic">HBR, Feb 2026</span>
                </div>
                <p className="font-sans text-sm text-ink-muted mt-2 leading-relaxed">
                  of companies report regular AI use.
                </p>
              </div>

              {/* Divider line */}
              <div className="h-[1px] bg-gold/15 w-full" />

              {/* Stat 2 */}
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-[42px] md:text-[52px] font-bold text-gold leading-none">60%</span>
                  <span className="font-sans text-xs text-ink-muted italic">BCG, Dec 2025</span>
                </div>
                <p className="font-sans text-sm text-ink-muted mt-2 leading-relaxed">
                  generate zero material value from that investment.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
