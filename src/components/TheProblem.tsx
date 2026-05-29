import { useState } from "react";
import { useLocation } from "wouter";
import { ScrollReveal } from "./ScrollReveal";
import { InteractiveButton } from "./InteractiveButton";

// IMAGE: Use architectural/environmental photography.
// NO stock business people. NO AI/robot imagery.
// Preferred: boardrooms, glass architecture, 
// structural details, natural light office spaces.
// Pan's own photos for sections 07 and 12 only.

export function TheProblem() {
  const [imageError, setImageError] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <section id="the-problem" className="relative bg-canvas py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal duration={0.65}>
          <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-12 md:gap-14 items-center">
            
            {/* Left 45%: Large Sourced Image with shadow offset */}
            <div 
              className="relative w-full h-[320px] md:h-[480px] bg-sand/30 image-hover-wrapper"
              style={{
                boxShadow: "6px 6px 0 0 #C9A55A"
              }}
            >
              {!imageError ? (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800"
                    alt="Empty executive meeting room seen through glass"
                    className="w-full h-full object-cover transform transition-all duration-300"
                    onError={() => {
                      setImageError(true);
                    }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="hover-overlay" />
                </>
              ) : (
                /* Sourced metadata fallback description visual block */
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 select-none border border-gold/40">
                  <span className="font-mono text-xs text-[#C9A55A] font-bold uppercase tracking-widest block mb-2">
                    Executive Room
                  </span>
                  <p className="font-serif text-sm italic text-ink max-w-[280px]">
                    "Empty executive meeting room seen through glass. Chairs arranged around a table. No people. Morning light. Minimal and slightly austere."
                  </p>
                </div>
              )}
            </div>

            {/* Right 55%: Existing Copy and Editorial Typography */}
            <div className="space-y-6 md:pl-6 text-left">
              <div>
                <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block mb-2">
                  THE CONTEXT
                </span>
                <h2 className="font-serif text-[32px] md:text-[40px] leading-[1.1] font-bold text-ink">
                  The Situation
                </h2>
              </div>

              {/* Premium Pull Quote */}
              <blockquote className="font-serif italic text-2xl md:text-[28px] leading-relaxed text-teal text-balance">
                "Your teams are using AI. Your board is asking about AI. But the results are not matching the investment, and you already know why."
              </blockquote>

              {/* Body Text */}
              <p className="font-sans text-[17px] text-ink-muted leading-[1.75] font-light">
                The gap is never the technology. It is always what sits underneath it: whether your leadership team is aligned, whether your governance can handle the speed, whether your people have been given permission to actually change how they work. That is what we fix.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <InteractiveButton 
                  variant="outline-teal"
                  onClick={() => setLocation("/scorecard")}
                  id="problem-take-index-btn"
                >
                  Take the Index
                </InteractiveButton>
              </div>

              {/* McKinsey Stat Chips */}
              <div className="pt-4 space-y-3">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 w-full">
                  {/* Chip 1 */}
                  <div className="flex-1 flex flex-col justify-start items-start text-left">
                    <span className="font-serif text-[32px] md:text-[36px] font-bold text-gold leading-none">88%</span>
                    <span className="font-sans text-[13px] text-ink-muted mt-2 leading-tight">of companies report AI use</span>
                  </div>
                  {/* Chip 2 */}
                  <div className="flex-1 flex flex-col justify-start items-start text-left">
                    <span className="font-serif text-[32px] md:text-[36px] font-bold text-gold leading-none">40%</span>
                    <span className="font-sans text-[13px] text-ink-muted mt-2 leading-tight">actually generate real value</span>
                  </div>
                  {/* Chip 3 */}
                  <div className="flex-1 flex flex-col justify-start items-start text-left">
                    <span className="font-serif text-[32px] md:text-[36px] font-bold text-gold leading-none">10x</span>
                    <span className="font-sans text-[13px] text-ink-muted mt-2 leading-tight">output in forward organizations</span>
                  </div>
                </div>
                <div className="text-left pt-1">
                  <span className="font-sans text-[11px] text-ink-faint">Source: McKinsey Global AI Report</span>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
