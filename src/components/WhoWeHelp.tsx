import { useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

// IMAGE: Use architectural/environmental photography.
// NO stock business people. NO AI/robot imagery.
// Preferred: boardrooms, glass architecture, 
// structural details, natural light office spaces.
// Pan's own photos for sections 07 and 12 only.

export function WhoWeHelp() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const targets = [
    {
      role: "The Regulated CEO",
      pain: "My board wants an AI strategy by Q3. I need one that won't create the next compliance headline.",
      shift: "From defensible activity to defensible results.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      aim: "Dark boardroom table, dramatic side lighting, no people visible"
    },
    {
      role: "The Scaling CEO",
      pain: "We have spent real money on AI tools. I cannot tell my investors what they are producing.",
      shift: "From scattered experiments to structured, measurable ROI.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      aim: "Editorial, high contrast, minimal architecture"
    },
    {
      role: "The CIO or CDO",
      pain: "I can build the technology stack. Getting leadership to actually use it is the problem nobody prepared me for.",
      shift: "From technical authority to organizational impact.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      aim: "Editorial abstract structural architecture"
    },
  ];

  return (
    <section
      id="who-we-help"
      className="relative bg-teal py-32 md:pb-52 overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
      }}
    >
      {/* Inline SVG faint geometric grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#FFFFFF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal duration={0.6}>
          <div className="mb-16 md:mb-24">
            <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block mb-3">
              WHO THIS IS FOR
            </span>
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[1.1] font-bold text-off-white text-balance max-w-3xl">
              Built for leaders who are already in the room.
            </h2>
          </div>
        </ScrollReveal>

        {/* CSS Clustered Grid with staggered desktop padding */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">
            
            {targets.map((target, idx) => {
              const desktopStaggerStyle =
                idx === 1
                  ? { paddingTop: "40px" }
                  : idx === 2
                  ? { paddingTop: "20px" }
                  : { paddingTop: "0px" };

              return (
                <div key={idx} className="relative flex">
                  {/* Vertical rule logic: Show on desktop between columns */}
                  {idx > 0 && (
                    <div className="hidden md:block absolute left-0 top-12 bottom-12 w-[1px] bg-gold/15" />
                  )}

                  <div
                    style={desktopStaggerStyle}
                    className="flex flex-col flex-1 px-0 md:px-10 lg:px-12 pb-6 text-left"
                  >
                    <StaggerItem>
                      {/* Image container above role column */}
                      <div className="relative w-full h-[200px] mb-6 overflow-hidden group bg-teal-dim/40 cursor-pointer">
                        {!imageErrors[idx] ? (
                          <img
                            src={target.image}
                            alt={target.role}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                            onError={() => {
                              setImageErrors(prev => ({ ...prev, [idx]: true }));
                            }}
                          />
                        ) : (
                          /* Placeholder fallback text card matching specifications */
                          <div className="absolute inset-0 bg-[#122B24]/60 flex flex-col justify-center items-center text-center p-5 z-10">
                            <span className="font-mono text-[9px] text-[#C9A55A] font-bold uppercase tracking-widest block mb-2">
                              {target.role}
                            </span>
                            <span className="font-serif text-[12px] italic text-[#F0E6D3]/90">
                              {target.aim}
                            </span>
                          </div>
                        )}
                        {/* Forest Green overlay at 20% opacity. Reduces to 8% on hover. */}
                        <div className="absolute inset-0 bg-[#1A3C34]/20 group-hover:bg-[#1A3C34]/8 transition-all duration-300 z-20 pointer-events-none" />
                      </div>

                      {/* Large role title */}
                      <h3 className="font-serif text-2xl md:text-[28px] font-bold text-off-white mb-4 leading-snug">
                        {target.role}
                      </h3>
                      
                      {/* Gold separator rule */}
                      <div className="w-10 h-[1px] bg-gold mb-6" />

                      {/* Pain Point */}
                      <p className="font-sans text-[16px] text-off-white/75 leading-[1.75] mb-8 min-h-[50px]">
                        {target.pain}
                      </p>

                      {/* What Shift */}
                      <div className="mt-auto flex items-start gap-2">
                        <span className="text-gold text-lg select-none shrink-0" aria-hidden="true">→</span>
                        <p className="font-sans font-medium text-[15px] text-off-white leading-[1.6]">
                          {target.shift}
                        </p>
                      </div>
                    </StaggerItem>
                  </div>
                </div>
              );
            })}

          </div>
        </StaggerContainer>
      </div>

      <style>{`
        @media (max-width: 767px) {
          #who-we-help {
            clip-path: none !important;
            padding-bottom: 6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
