import { useState } from "react";
import { FreebieModal } from "./FreebieModal";
import { ScrollReveal } from "./ScrollReveal";
import { InteractiveButton } from "./InteractiveButton";

export function Freebie() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="freebie" className="relative bg-teal py-24 md:py-32 overflow-hidden">
        
        {/* Fine gold horizontal rule divider top */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gold opacity-30" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal duration={0.65}>
            <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 md:gap-8 items-center text-left">
              
              {/* Left Column: Context & Editorial Title */}
              <div className="space-y-4">
                <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block">
                  FREE RESOURCE
                </span>
                
                <h2 className="font-serif text-3xl md:text-[40px] font-bold text-off-white leading-[1.2] text-balance">
                  The AI Leadership Readiness Framework
                </h2>
                
                <p className="font-sans text-base md:text-[17px] text-off-white/80 leading-[1.7] max-w-xl">
                  A structured self-assessment used by senior leaders to identify where AI investments are stalling, and what to address first.
                </p>
              </div>

              {/* Right Column: CTA & Instant Action */}
              <div className="md:flex md:flex-col md:items-start lg:items-center justify-center space-y-3.5 w-full sm:w-auto">
                <InteractiveButton
                  onClick={() => setModalOpen(true)}
                  variant="gold"
                  className="w-full sm:w-auto text-center"
                >
                  Get It Now
                </InteractiveButton>
                
                <p className="font-sans text-xs text-off-white/60 tracking-normal text-left md:text-left lg:text-center block">
                  Instant PDF download. No spam.
                </p>
              </div>

            </div>
          </ScrollReveal>
        </div>

        {/* Fine background arc element backdrop */}
        <div className="absolute right-0 bottom-0 w-64 h-32 border-t border-l border-gold/10 rounded-tl-full pointer-events-none select-none" />
      </section>

      {/* Freebie modal portal anchor */}
      <FreebieModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
