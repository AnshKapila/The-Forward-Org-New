import { Link } from "wouter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

// IMAGE: Use architectural/environmental photography.
// NO stock business people. NO AI/robot imagery.
// Preferred: boardrooms, glass architecture, 
// structural details, natural light office spaces.
// Pan's own photos for sections 07 and 12 only.

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Diagnose",
      iconPath: "/images/icon-diagnostic.svg",
      iconAim: "Abstract: a compass or measuring instrument",
      description: (
        <>
          The AI Alignment Index: 15 questions, 5 dimensions, a precise picture of where your AI strategy has gaps.{" "}
          <Link href="/index">
            <span className="text-gold font-medium hover:underline inline-block cursor-pointer select-none">
              Take the Index →
            </span>
          </Link>
        </>
      ),
    },
    {
      num: "02",
      title: "Design",
      iconPath: "/images/icon-design.svg",
      iconAim: "Abstract: a grid or blueprint motif",
      description: "A structured AI integration plan built around your leadership team, your industry, and your actual decision-making architecture.",
    },
    {
      num: "03",
      title: "Deploy",
      iconPath: "/images/icon-deploy.svg",
      iconAim: "Abstract: an upward arrow or expanding shape",
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
                    <h3 className="font-serif text-[28px] font-bold text-teal mb-4 relative z-10 select-none text-left">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="font-sans text-[16px] text-ink-muted leading-[1.75] relative z-10 max-w-xs text-left min-h-[110px]">
                      {step.description}
                    </p>

                    {/* Small vector Illustration Container (80px x 80px) */}
                    <div className="relative w-20 h-20 bg-teal/5 border border-teal/15 group-hover:border-teal transition-all duration-300 z-10 mt-6 select-none flex items-center justify-center">
                      <img
                        src={step.iconPath}
                        alt={step.title}
                        className="absolute inset-0 w-full h-full p-4 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      
                      {/* Premium inline fallback vectors styled as abstract lines render automatically */}
                      <div className="w-full h-full p-4 flex flex-col items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-200 text-teal">
                        {step.num === "01" && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                            <circle cx="12" cy="12" r="9" />
                            <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="1 1" />
                            <line x1="2" y1="12" x2="22" y2="12" strokeDasharray="1 1" />
                            <polygon points="12,5 15,12 12,19 9,12" strokeWidth="2" />
                          </svg>
                        )}
                        {step.num === "02" && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                            <rect x="3" y="3" width="18" height="18" rx="1" />
                            <line x1="3" y1="9" x2="21" y2="9" />
                            <line x1="3" y1="15" x2="21" y2="15" />
                            <line x1="9" y1="3" x2="9" y2="21" />
                            <line x1="15" y1="3" x2="15" y2="21" />
                          </svg>
                        )}
                        {step.num === "03" && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                            <polyline points="17 11 12 6 7 11" strokeWidth="2.5" />
                            <line x1="12" y1="6" x2="12" y2="18" strokeWidth="2" />
                            <path d="M5 18 H19" strokeWidth="2" />
                          </svg>
                        )}
                      </div>
                    </div>

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
