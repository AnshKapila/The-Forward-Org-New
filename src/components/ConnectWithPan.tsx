import React from "react";
import { PanImage } from "./PanImage";
import { ScrollReveal } from "./ScrollReveal";
import { Calendar } from "lucide-react";
import { InteractiveButton } from "./InteractiveButton";
import panFounderImg from "../assets/images/regenerated_image_1779884368446.png";

export function ConnectWithPan() {
  const handleScrollToCall = () => {
    const el = document.getElementById("book-a-call");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="connect-with-pan" className="relative bg-canvas py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal duration={0.65}>
          {/* Main Rounded Frame inspired by the reference image, using our premium teal palette */}
          <div className="bg-teal text-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-14 shadow-xl relative overflow-hidden">
            
            {/* Subtle light reflections inside the card for that premium finish */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-light/20 rounded-full blur-2xl pointer-events-none" />

            {/* Grid Layout conforming to the three key sections of the image */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 lg:gap-12 xl:gap-14 items-center">
              
              {/* Left Column: highly rounded founder image frame inspired by the image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full aspect-[4/5] max-w-[280px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-teal-dim/30">
                  <PanImage
                    src={panFounderImg}
                    fallbackSrc="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600&h=700"
                    alt="Pan Seth"
                    className="w-full h-full object-cover rounded-[2rem]"
                  />
                </div>
              </div>

              {/* Middle Column: beautiful executive biography text */}
              <div className="space-y-4 text-left">
                <div className="space-y-2">
                  <span className="font-sans font-bold text-xs text-gold uppercase tracking-[0.25em] block">
                    THE FOUNDER
                  </span>
                  <h2 className="font-serif text-[40px] md:text-[52px] font-bold text-white leading-tight italic">
                    Pan Seth
                  </h2>
                  <p className="font-sans text-lg md:text-xl font-medium text-gold">
                    Founder & Strategy Advisor
                  </p>
                </div>

                <p className="font-sans text-[15px] md:text-[16px] text-off-white/90 leading-relaxed font-light max-w-xl">
                  Pan spent a decade building AI infrastructure inside Citi, PagerDuty, and NielsenIQ — before advising the leaders navigating the same challenges from the outside. She holds 2 AI patents and has seen, firsthand, what separates organizations that make AI work from those that keep piloting it.
                </p>
              </div>

              {/* Right Column: high-contrast dark booking widget card from the image */}
              <div className="h-full">
                <div className="bg-ink text-off-white rounded-[2rem] p-6 lg:p-8 border border-white/5 shadow-2xl flex flex-col justify-between gap-8 h-full min-h-[220px] lg:min-h-[260px] text-left relative overflow-hidden">
                  
                  {/* Subtle inner card pattern */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                    </svg>
                  </div>

                  <div className="relative z-10 space-y-4">
                    {/* Circle wrapper icon matching the visual from the image */}
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                      <Calendar size={20} />
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-sans font-bold text-sm text-white tracking-wide">
                        30-min strategy session
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

                  {/* Stunning stark button trigger */}
                  <div className="relative z-10 pt-2">
                    <InteractiveButton
                      onClick={handleScrollToCall}
                      variant="primary"
                      className="w-full text-center"
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
