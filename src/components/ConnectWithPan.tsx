import React from "react";
import { PanImage } from "./PanImage";
import { ScrollReveal } from "./ScrollReveal";
import { Calendar } from "lucide-react";
import { InteractiveButton } from "./InteractiveButton";
import prof1Img from "../assets/images/prof1.jpg";

// Premium high-fidelity likeness representing a South Asian female advisor with a warm wooden library/bookshelf background
const PAN_PORTRAIT_FALLBACK = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=750";

export function ConnectWithPan() {
  const handleScrollToCall = () => {
    const el = document.getElementById("book-a-call");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="connect-with-pan" className="relative bg-canvas py-8 md:py-12 lg:py-16 xl:py-[60px] 2xl:py-[80px] overflow-hidden border-t border-[#1A3C34]/5">
      {/* Secondary background paper texture blended with sand/canvas */}
      <img
        src="/images/texture-paper.jpg"
        alt="Fine Grain Linen Paper Texture"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-10 mix-blend-multiply z-0"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        referrerPolicy="no-referrer"
      />
      <div className="w-full px-6 lg:px-[120px] relative z-10">
        <ScrollReveal duration={0.65}>
          {/* Main Rounded Frame inspired by the reference image, using our premium teal palette */}
          <div className="bg-teal text-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 lg:p-14 shadow-2xl relative overflow-hidden border border-[#235048]/30">
            
            {/* Subtle light reflections inside the card for that premium finish */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-light/10 rounded-full blur-2xl pointer-events-none" />

            {/* Grid Layout conforming to the three key sections of the image */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-10 lg:gap-14 lg:items-stretch items-center">
              
              {/* Left Column (Component 1): Founder image with premium bookshelf background */}
              <div className="flex justify-center lg:justify-start lg:items-center">
                <div className="relative w-full aspect-[4/5] max-w-[280px] rounded-[1.5rem] overflow-hidden shadow-[0_20px_50px_rgba(18,43,36,0.5)] border border-white/10 bg-teal-dim/40 image-hover-wrapper">
                  <PanImage
                    src={prof1Img}
                    fallbackSrc={PAN_PORTRAIT_FALLBACK}
                    alt="Pan Seth - Founder"
                    className="w-full h-full object-cover rounded-[1.5rem]"
                  />
                  <div className="hover-overlay" />
                </div>
              </div>

              {/* Middle Column (Component 2): Beautiful biography text with enhanced spacing & typography */}
              <div className="text-left lg:h-full lg:flex lg:flex-col lg:justify-between lg:py-2">
                <div className="space-y-3">
                  <span className="font-mono text-[11px] font-bold text-gold uppercase tracking-[0.25em] block leading-none">
                    THE FOUNDER
                  </span>
                  <h2 className="font-serif text-[36px] md:text-[46px] font-bold text-white leading-none tracking-tight">
                    Pan Seth
                  </h2>
                  <p className="font-sans text-[15px] md:text-[16px] font-medium text-gold uppercase tracking-wider block">
                    FOUNDER · AI STRATEGY & LEADERSHIP ADVISOR
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5 lg:mt-auto">
                  <p className="font-sans text-[15px] md:text-[16px] text-white/85 leading-relaxed font-normal max-w-xl">
                    Pan spent a decade building and governing real AI systems at Citi, PagerDuty, and NielsenIQ, driving $600M+ in revenue impact and filing two patents. Having witnessed brilliant technology scale and critical initiatives fail, she knows success depends on aligning the people, not just the models. Today, she helps leaders build the practical strategy, governance, and organizational culture needed to deliver the AI return your board expects.
                  </p>
                </div>
              </div>

              {/* Right Column: High-contrast responsive booking widget card */}
              <div className="lg:h-full flex items-stretch">
                <div className="bg-ink text-off-white rounded-[1.5rem] p-6 lg:p-8 border border-white/5 shadow-2xl flex flex-col justify-between gap-6 w-full min-h-[220px] lg:min-h-0 text-left relative overflow-hidden">
                  
                  {/* Subtle inner card pattern */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                    </svg>
                  </div>

                  <div className="relative z-10 space-y-4">
                    {/* Circle wrapper icon matching the visual from the image */}
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                      <Calendar size={20} strokeWidth={1.5} />
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-sans font-bold text-sm text-white tracking-wide">
                        30-min AI transformation strategy session
                      </h3>
                      
                      {/* Live calendar status indicator */}
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                        </span>
                        <span className="font-mono text-[9px] font-bold tracking-widest text-gold uppercase">
                          CALENDAR OPEN
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Booking trigger action */}
                  <div className="relative z-10 pt-2 space-y-2">
                    <InteractiveButton
                      variant="primary"
                      className="w-full text-center"
                      data-cal-link="pan-seth/focused-aireadiness-debrief"
                      data-cal-namespace="focused-aireadiness-debrief"
                      data-cal-config='{"layout":""}'
                    >
                      Book your call
                    </InteractiveButton>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

