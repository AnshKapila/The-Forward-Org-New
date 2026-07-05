import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

interface AnimatedBorderProps {
  isHovered: boolean;
  color: string;
}

function AnimatedBorder({ isHovered, color }: AnimatedBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      if (containerRef.current) {
        setCoords({
          w: containerRef.current.offsetWidth,
          h: containerRef.current.offsetHeight,
        });
      }
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const { w, h } = coords;

  if (w === 0 || h === 0) {
    return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
  }

  const r = 24; // border radius (approx 1.5rem which is 24px)
  const sw = 2; // stroke width
  const offset = sw / 2;

  // Clockwise path starting at top-center and ending at bottom-center with rounded corners
  const path1 = `
    M ${w / 2} ${offset}
    L ${w - r} ${offset}
    A ${r - offset} ${r - offset} 0 0 1 ${w - offset} ${r}
    L ${w - offset} ${h - r}
    A ${r - offset} ${r - offset} 0 0 1 ${w - r} ${h - offset}
    L ${w / 2} ${h - offset}
  `;

  // Counter-clockwise path starting at top-center and ending at bottom-center with rounded corners
  const path2 = `
    M ${w / 2} ${offset}
    L ${r} ${offset}
    A ${r - offset} ${r - offset} 0 0 0 ${offset} ${r}
    L ${offset} ${h - r}
    A ${r - offset} ${r - offset} 0 0 0 ${r} ${h - offset}
    L ${w / 2} ${h - offset}
  `;

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-20 rounded-[1.5rem]">
      <svg className="absolute inset-0 w-full h-full animate-none" fill="none">
        {/* Clockwise stroke */}
        <motion.path
          d={path1}
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        {/* Counter-clockwise stroke */}
        <motion.path
          d={path2}
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

export function TheProblem() {
  const [imageError, setImageError] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredFig, setHoveredFig] = useState<number | null>(null);

  const problemItems = [
    {
      surface: "“We’re exploring what AI can do for us.”",
      underneath: "No shared direction- teams are moving in different directions."
    },
    {
      surface: "“We haven’t fully defined our AI strategy yet.”",
      underneath: "Uncertainty spreads, creates job fear and culture begins to decay quietly."
    },
    {
      surface: "“We’re running multiple AI initiatives.”",
      underneath: "No clear link to business outcomes, ROI remains unproven."
    },
    {
      surface: "“Our leadership team is aligned on AI.”",
      underneath: "All top leaders has different views on where the org is going with AI."
    },
    {
      surface: "“We’re upskilling our teams.”",
      underneath: "Learning isn’t translating into real execution."
    }
  ];

  return (
    <section id="the-problem" className="relative bg-canvas py-8 md:py-12 lg:py-16 xl:py-[60px] 2xl:py-[80px] border-b border-gold/15 overflow-hidden">
      <div className="w-full px-6 lg:px-[120px]">
        <ScrollReveal duration={0.65}>
          {/* Main wireframe layout: Left column (Image) + Right column (Content) with brand rounded corners */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_2.3fr] gap-10 lg:gap-14 items-start w-full min-w-0">
            
            {/* Left Column: Sourced Image with a balanced aspect ratio, following guidelines */}
            <div className="flex flex-col w-full lg:sticky lg:top-28">
              <div 
                className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-sand/30 shadow-xl border border-gold/10"
              >
                {!imageError ? (
                  <>
                    <img
                      src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800"
                      alt="Empty executive meeting room seen through glass"
                      className="w-full h-full object-cover rounded-[1.5rem]"
                      onError={() => {
                        setImageError(true);
                      }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent pointer-events-none" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 select-none border border-gold/40 rounded-[1.5rem]">
                    <span className="font-mono text-xs text-[#C9A55A] font-bold uppercase tracking-widest block mb-2">
                      Executive Room
                    </span>
                    <p className="font-serif text-sm italic text-ink max-w-[280px]">
                      "Empty executive meeting room seen through glass. Chairs arranged around a table."
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Title + Comparative Cards + Figures */}
            <div className="flex flex-col justify-between space-y-8 lg:space-y-10 w-full text-left">
              
              {/* Heading */}
              <div className="space-y-2">
                <span className="font-sans font-semibold text-xs text-gold uppercase tracking-[0.2em] block">
                  THE CONTEXT
                </span>
                <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[40px] leading-[1.15] font-bold text-ink text-balance">
                  Organizations are struggling to access AI, they are struggling to align with it.
                </h2>
              </div>

              {/* Comparative Wireframe Cards - Brand Rounded Corners */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                
                {/* Card 1: On the Surface (Cream background, rounded) */}
                <div className="bg-[#F7F4EF] rounded-[1.5rem] p-6 lg:p-8 border border-gold/15 flex flex-col h-full shadow-md">
                  <h3 className="font-serif text-[18px] lg:text-[20px] font-bold text-ink mb-6 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-none bg-gold" />
                    On the surface
                  </h3>
                  <div className="flex-1 flex flex-col justify-between gap-5">
                    {problemItems.map((item, index) => (
                      <div 
                        key={index}
                        className={`transition-all duration-300 rounded-lg p-2 -mx-2 cursor-pointer ${
                          hoveredIndex === index 
                            ? "bg-gold/10 scale-[1.02] translate-x-1" 
                            : hoveredIndex !== null 
                              ? "opacity-35" 
                              : ""
                        }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className="flex gap-3 items-start">
                          <span className="font-sans text-xs text-gold font-bold mt-1">
                            {`0${index + 1}`}
                          </span>
                          <p className="font-serif text-[15px] lg:text-[16px] text-ink leading-relaxed italic">
                            {item.surface}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 2: Underneath the Surface (Forest Green, rounded) */}
                <div className="bg-[#1A3C34] text-[#F7F4EF] rounded-[1.5rem] p-6 lg:p-8 border border-[#235048]/30 flex flex-col h-full shadow-md">
                  <h3 className="font-serif text-[18px] lg:text-[20px] font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-none bg-gold" />
                    Underneath the surface
                  </h3>
                  <div className="flex-1 flex flex-col justify-between gap-5">
                    {problemItems.map((item, index) => (
                      <div 
                        key={index}
                        className={`transition-all duration-300 rounded-lg p-2 -mx-2 cursor-pointer ${
                          hoveredIndex === index 
                            ? "bg-[#235048] scale-[1.02] -translate-x-1" 
                            : hoveredIndex !== null 
                              ? "opacity-35" 
                              : ""
                        }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className="flex gap-3 items-start">
                          <span className="font-sans text-xs text-gold font-bold mt-1">
                            {`0${index + 1}`}
                          </span>
                          <p className="font-sans text-[14px] lg:text-[15px] text-[#E8F0EE] leading-relaxed font-light">
                            {item.underneath}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Figures Row - Styled individually per requirements */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                
                {/* Fig 1: 88% - Pure White background with animated 50% opacity green border on hover */}
                <div 
                  onMouseEnter={() => setHoveredFig(1)}
                  onMouseLeave={() => setHoveredFig(null)}
                  className="relative bg-white text-ink rounded-[1.5rem] p-6 border border-[#1A3C34]/15 flex flex-col justify-between text-left h-[150px] cursor-pointer transition-shadow shadow-sm"
                >
                  <AnimatedBorder isHovered={hoveredFig === 1} color="rgba(26, 60, 52, 0.5)" />
                  <span className="font-serif text-[36px] lg:text-[42px] font-bold text-[#1A3C34] leading-none z-10">
                    88%
                  </span>
                  <p className="font-sans text-[13px] text-ink-muted mt-3 leading-snug font-light z-10">
                    of companies report AI use
                  </p>
                </div>

                {/* Fig 2: 40% - Pure White background with animated 50% opacity green border on hover */}
                <div 
                  onMouseEnter={() => setHoveredFig(2)}
                  onMouseLeave={() => setHoveredFig(null)}
                  className="relative bg-white text-ink rounded-[1.5rem] p-6 border border-[#1A3C34]/15 flex flex-col justify-between text-left h-[150px] cursor-pointer transition-shadow shadow-sm"
                >
                  <AnimatedBorder isHovered={hoveredFig === 2} color="rgba(26, 60, 52, 0.5)" />
                  <span className="font-serif text-[36px] lg:text-[42px] font-bold text-[#1A3C34] leading-none z-10">
                    40%
                  </span>
                  <p className="font-sans text-[13px] text-ink-muted mt-3 leading-snug font-light z-10">
                    actually generate real value
                  </p>
                </div>

                {/* Fig 3: 10x - Green background with gold text and animated gold border on hover */}
                <div 
                  onMouseEnter={() => setHoveredFig(3)}
                  onMouseLeave={() => setHoveredFig(null)}
                  className="relative bg-[#1A3C34] rounded-[1.5rem] p-6 border border-[#235048]/50 flex flex-col justify-between text-left h-[150px] cursor-pointer transition-shadow shadow-sm"
                >
                  <AnimatedBorder isHovered={hoveredFig === 3} color="#C9A55A" />
                  <span className="font-serif text-[36px] lg:text-[42px] font-bold text-[#C9A55A] leading-none z-10">
                    10x
                  </span>
                  <p className="font-sans text-[13px] text-[#C9A55A]/90 mt-3 leading-snug font-light z-10">
                    output in forward organizations
                  </p>
                </div>

              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
