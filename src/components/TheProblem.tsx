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
      surface: "“We’re running multiple AI initiatives.”",
      underneath: "No clear link to business outcomes, ROI remains unproven."
    },
    {
      surface: "“Our leadership team is aligned on AI.”",
      underneath: "Every leader holds a different picture of where AI is taking the company."
    },
    {
      surface: "“We're upskilling our teams.”",
      underneath: "Learning isn't turning into execution."
    }
  ];

  return (
    <section id="the-problem" className="relative bg-canvas py-8 md:py-12 lg:py-16 xl:py-[60px] 2xl:py-[80px] border-b border-gold/15 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="w-full px-6 lg:px-[120px]">
        <ScrollReveal duration={0.65}>
          <div className="w-full flex flex-col text-left">
            {/* Heading row (Full-width) */}
            <div className="space-y-2 mb-10">
              <span className="font-sans font-semibold text-xs text-gold capitalize tracking-[0.2em] block">
                The Context
              </span>
              <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[40px] leading-[1.15] font-bold text-ink text-balance">
                Most organizations don't have an AI problem.<br />They have an organizational alignment problem.
              </h2>
            </div>

            {/* 3-Column Grid: Image, Card 1, Card 2 (Equal Height Alignment) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full min-w-0">
              
              {/* Column 1: Image container */}
              <div className="flex flex-col h-full w-full">
                <div 
                  className="relative w-full h-full min-h-[350px] rounded-[1.5rem] overflow-hidden bg-sand/30 shadow-xl border border-gold/10"
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
                      <span className="font-mono text-xs text-[#C9A55A] font-bold capitalize tracking-widest block mb-2">
                        Executive Room
                      </span>
                      <p className="font-serif text-sm italic text-ink max-w-[280px]">
                        "Empty executive meeting room seen through glass. Chairs arranged around a table."
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Column 2: On the Surface Card */}
              <div className="bg-[#F7F4EF] rounded-[1.5rem] p-6 lg:p-8 border border-gold/15 flex flex-col h-full shadow-md">
                <h3 className="font-serif text-[18px] lg:text-[20px] font-bold text-ink mb-6 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-none bg-gold" />
                  On the surface
                </h3>
                <div className="flex-grow flex flex-col gap-6">
                  {problemItems.map((item, index) => (
                    <div 
                      key={index}
                      className={`transition-all duration-300 rounded-lg p-2 -mx-2 cursor-pointer min-h-[70px] flex items-center ${
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
                        <p className="font-sans text-[14px] lg:text-[15px] text-ink leading-relaxed italic">
                          {item.surface}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Underneath the Surface Card */}
              <div className="bg-[#1A3C34] text-[#F7F4EF] rounded-[1.5rem] p-6 lg:p-8 border border-[#235048]/30 flex flex-col h-full shadow-md">
                <h3 className="font-serif text-[18px] lg:text-[20px] font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-none bg-gold" />
                  Underneath the surface
                </h3>
                <div className="flex-grow flex flex-col gap-6">
                  {problemItems.map((item, index) => (
                    <div 
                      key={index}
                      className={`transition-all duration-300 rounded-lg p-2 -mx-2 cursor-pointer min-h-[70px] flex items-center ${
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

            {/* Bottom Figures Row (Reverted to bottom & original size) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-8">
              
              {/* Fig 1: 88% */}
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
                  Organizations report regular AI use.
                </p>
              </div>

              {/* Fig 2: 60% */}
              <div 
                onMouseEnter={() => setHoveredFig(2)}
                onMouseLeave={() => setHoveredFig(null)}
                className="relative bg-white text-ink rounded-[1.5rem] p-6 border border-[#1A3C34]/15 flex flex-col justify-between text-left h-[150px] cursor-pointer transition-shadow shadow-sm"
              >
                <AnimatedBorder isHovered={hoveredFig === 2} color="rgba(26, 60, 52, 0.5)" />
                <span className="font-serif text-[36px] lg:text-[42px] font-bold text-[#1A3C34] leading-none z-10">
                  60%
                </span>
                <p className="font-sans text-[13px] text-ink-muted mt-3 leading-snug font-light z-10">
                  Still generate little to no measurable business value.
                </p>
              </div>

              {/* Fig 3: 5% */}
              <div 
                onMouseEnter={() => setHoveredFig(3)}
                onMouseLeave={() => setHoveredFig(null)}
                className="relative bg-[#1A3C34] rounded-[1.5rem] p-6 border border-[#235048]/50 flex flex-col justify-between text-left h-[150px] cursor-pointer transition-shadow shadow-sm"
              >
                <AnimatedBorder isHovered={hoveredFig === 3} color="#C9A55A" />
                <span className="font-serif text-[36px] lg:text-[42px] font-bold text-[#C9A55A] leading-none z-10">
                  5%
                </span>
                <p className="font-sans text-[13px] text-zinc-300 mt-3 leading-snug font-light z-10">
                  Only 5% successfully scale AI beyond isolated pilots.
                </p>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
