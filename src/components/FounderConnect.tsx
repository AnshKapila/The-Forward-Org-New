import React from "react";
import { PanImage } from "./PanImage";
import { ScrollReveal } from "./ScrollReveal";
import { Calendar } from "lucide-react";
import { InteractiveButton } from "./InteractiveButton";
import { useLocation } from "wouter";
import prof1Img from "../assets/images/prof1.jpg";

const PAN_PORTRAIT_FALLBACK = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=750";

export function FounderConnect() {
  const [_, setLocation] = useLocation();

  return (
    <section id="connect-with-pan" className="relative bg-white py-12 md:py-16 lg:py-20 overflow-hidden border-t border-[#1A3C34]/10">
      <div className="w-full px-6 lg:px-[120px] relative z-10">
        <ScrollReveal duration={0.65}>
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Founder image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[4/5] max-w-[280px] rounded-[1.5rem] overflow-hidden shadow-lg border border-teal/10 image-hover-wrapper bg-sand">
                <PanImage
                  src={prof1Img}
                  fallbackSrc={PAN_PORTRAIT_FALLBACK}
                  alt="Pan Seth - Founder"
                  className="w-full h-full object-cover rounded-[1.5rem]"
                />
                <div className="hover-overlay" />
              </div>
            </div>

            {/* Middle Column: Bio info */}
            <div className="text-left space-y-4">
              <div className="space-y-2">
                <span className="font-mono text-[11px] font-bold text-gold capitalize tracking-[0.25em] block leading-none">
                  The Founder
                </span>
                <h2 className="font-serif text-[36px] md:text-[46px] font-bold text-ink leading-none tracking-tight">
                  Pan Seth
                </h2>
                <p className="font-sans text-[15px] md:text-[16px] font-medium text-teal capitalize tracking-wider block">
                  Founder · AI Strategy & Leadership Advisor
                </p>
              </div>

              <div className="border-t border-[#1A3C34]/10 pt-4">
                <p className="font-sans text-[15px] md:text-[16px] text-ink-muted leading-relaxed font-normal">
                  Pan spent a decade building and governing real AI systems at Citi, PagerDuty, and NielsenIQ, driving $600M+ in revenue impact and filing two patents. Having witnessed brilliant technology scale and critical initiatives fail, she knows success depends on aligning the people, not just the models. Today, she helps leaders build the practical strategy, governance, and organizational culture needed to deliver the AI return your board expects.
                </p>
              </div>
            </div>

            {/* Right Column: Booking widget */}
            <div className="flex items-stretch">
              <div className="bg-[#FAFAF8] text-ink rounded-[1.5rem] p-6 lg:p-8 border border-teal/20 shadow-md flex flex-col justify-between gap-6 w-full min-h-[220px]">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-teal/5 border border-teal/10 flex items-center justify-center text-teal">
                    <Calendar size={20} strokeWidth={1.5} />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-sans font-bold text-sm text-ink tracking-wide">
                      30-min AI transformation strategy session
                    </h3>
                    
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
                      </span>
                      <span className="font-mono text-[9px] font-bold tracking-widest text-teal capitalize">
                        Calendar Open
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <InteractiveButton
                    variant="teal"
                    className="w-full text-center"
                    onClick={() => setLocation("/book-a-call")}
                  >
                    Book your call
                  </InteractiveButton>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
