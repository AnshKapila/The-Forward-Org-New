import React, { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Download } from "lucide-react";
import { InteractiveButton } from "./InteractiveButton";
import { FreebieModal } from "./FreebieModal";

// Abstract monochromatic checklist/planner image
const CHECKLIST_IMAGE = "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600&h=750";

export function FreeResource() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="free-resource" className="relative bg-canvas py-8 md:py-12 lg:py-16 overflow-hidden border-t border-[#1A3C34]/5">
      <div className="w-full px-6 lg:px-[120px] relative z-10">
        <ScrollReveal duration={0.65}>
          {/* Main Rounded Frame */}
          <div className="bg-teal text-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 lg:p-14 shadow-2xl relative overflow-hidden border border-[#235048]/30">
            
            {/* Light reflections */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-light/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-10 lg:gap-14 lg:items-stretch items-center">
              
              {/* Left Column: Abstract growth image */}
              <div className="flex justify-center lg:justify-start lg:items-center">
                <div className="relative w-full aspect-[4/5] max-w-[280px] rounded-[1.5rem] overflow-hidden shadow-[0_20px_50px_rgba(18,43,36,0.5)] border border-white/10 bg-teal-dim/40 image-hover-wrapper">
                  <img
                    src={CHECKLIST_IMAGE}
                    alt="2x to 10x Checklist Concept"
                    className="w-full h-full object-cover rounded-[1.5rem]"
                  />
                  <div className="hover-overlay" />
                </div>
              </div>

              {/* Middle Column: Text content */}
              <div className="text-left lg:h-full lg:flex lg:flex-col lg:justify-between lg:py-2">
                <div className="space-y-3">
                  <span className="font-mono text-[11px] font-bold text-gold capitalize tracking-[0.25em] block leading-none">
                    Free Resource
                  </span>
                  <h2 className="font-serif text-[36px] md:text-[46px] font-bold text-white leading-none tracking-tight">
                    The 2x to 10x Checklist
                  </h2>
                  <p className="font-sans text-[15px] md:text-[16px] font-medium text-gold capitalize tracking-wider block">
                    Checklist · Performance Diagnostic
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5 lg:mt-auto">
                  <p className="font-sans text-[15px] md:text-[16px] text-white/85 leading-relaxed font-normal max-w-xl">
                    You have the same AI tools as the leaders pulling ahead. So why are they at 10x while you're stuck at 2x? 10 gaps. One checklist. Find yours before your CEO asks why.
                  </p>
                </div>
              </div>

              {/* Right Column: Download Card Widget */}
              <div className="lg:h-full flex items-stretch">
                <div className="bg-ink text-off-white rounded-[1.5rem] p-6 lg:p-8 border border-white/5 shadow-2xl flex flex-col justify-between gap-6 w-full min-h-[220px] lg:min-h-0 text-left relative overflow-hidden">
                  
                  <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                    </svg>
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                      <Download size={20} strokeWidth={1.5} />
                    </div>

                    <div className="space-y-1.5">
                      <p className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-white tracking-wide leading-snug">
                        Instant PDF download & diagnostic
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 pt-2">
                    <InteractiveButton
                      variant="gold"
                      className="w-full text-center"
                      onClick={() => setModalOpen(true)}
                    >
                      Get It Now →
                    </InteractiveButton>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>

      <FreebieModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
