import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export function WhoWeHelp() {
  const targets = [
    {
      role: "Regulated Industry CEO",
      pain: "Your board wants an AI strategy. You want one that won't create compliance exposure.",
      shift: "From defensible activity to defensible results.",
    },
    {
      role: "Scaling Company CEO",
      pain: "You've invested in AI tools. You cannot show what they're producing.",
      shift: "From experimentation to structured ROI.",
    },
    {
      role: "CIO or CDO",
      pain: "You can build the technology. Getting the organization to actually use it is the harder problem.",
      shift: "From technical depth to organizational authority.",
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
              // Stagger offsets on desktop: col 2 starts 40px lower, col 3 starts 20px lower
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

      {/* Avoid clipping issues on smaller browsers / standard responsive reset */}
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
