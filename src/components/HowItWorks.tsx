import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Diagnose",
      description: (
        <>
          The AI Alignment Index — 15 questions, 5 dimensions, a precise picture of where your AI strategy has gaps.{" "}
          <button
            onClick={() => {
              const el = document.getElementById("ai-index");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gold font-medium hover:underline inline-block cursor-pointer focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-1 select-none"
          >
            Take the Index →
          </button>
        </>
      ),
    },
    {
      num: "02",
      title: "Design",
      description: "A structured AI integration plan built around your leadership team, your industry, and your actual decision-making architecture.",
    },
    {
      num: "03",
      title: "Deploy",
      description: "Execution support through leadership alignment, cultural adoption, and governance that makes AI stick beyond the pilot.",
    },
  ];

  return (
    <section id="how-it-works" className="relative bg-canvas py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal duration={0.6}>
          <div className="mb-20">
            <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block mb-3">
              THE PROCESS
            </span>
            <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.15] font-bold text-ink text-left max-w-xl text-balance">
              How we work together
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-14 relative">
            
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <StaggerItem>
                  <div className="relative group flex flex-col pt-14 pb-4">
                    
                    {/* Oversized gold background numeral (z-index layering) */}
                    <div className="absolute top-0 left-0 font-serif font-bold text-[180px] leading-none text-gold opacity-15 select-none pointer-events-none z-0 transform -translate-y-8 -translate-x-2">
                      {step.num}
                    </div>

                    {/* Step Title (overlaid on numeral) */}
                    <h3 className="font-serif text-[28px] font-bold text-teal mb-4 relative z-10 select-none">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="font-sans text-[16px] text-ink-muted leading-[1.75] relative z-10 max-w-xs">
                      {step.description}
                    </p>

                    {/* Connection Arrow logic for desktop */}
                    {idx < 2 && (
                      <div className="hidden md:block absolute top-[40%] right-[-15%] lg:right-[-20%] w-10 md:w-12 lg:w-16 z-20 pointer-events-none opacity-50">
                        <svg
                          viewBox="0 0 60 12"
                          fill="none"
                          stroke="var(--color-gold)"
                          strokeWidth="1"
                          className="w-full"
                        >
                          <line x1="0" y1="6" x2="52" y2="6" strokeDasharray="3 3" />
                          <polyline points="47 1 52 6 47 11" />
                        </svg>
                      </div>
                    )}

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
