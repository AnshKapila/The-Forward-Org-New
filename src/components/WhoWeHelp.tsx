import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AccordionItem {
  num: string;
  title: string;
  description: string;
}

export function WhoWeHelp() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items: AccordionItem[] = [
    {
      num: "01",
      title: "Enterprise Boards & CIOs",
      description: "Navigate past fragmented, bottom-up tool sprawl. We build unified, defensive strategic models to align isolated software projects with board-level EBITDA targets, corporate compliance guidelines, and verified core operational metrics."
    },
    {
      num: "02",
      title: "Private Equity & Portfolio Operations",
      description: "Perform deep, quantitative operational reviews for portfolio companies. We isolate high-friction overhead targets, align tech architecture with the investment thesis, and equip operators to trace AI tooling directly to margin expansions and enterprise valuation."
    },
    {
      num: "03",
      title: "High-Growth SaaS Founders",
      description: "Restructure product delivery and compute overhead and design defensible generative loops. We help scaling technology teams engineer real leverage, optimizing pipeline speed and scaling capacity without escalating platform or cloud compute debt."
    }
  ];

  const handleGetStartedClick = () => {
    const el = document.getElementById("book-a-call");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#book-a-call";
    }
  };

  return (
    <section
      id="who-we-help"
      className="relative bg-[#F7F4EF]/40 py-24 md:py-32 overflow-hidden border-t border-b border-[#1A3C34]/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal duration={0.6}>
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column: Title and interactive accordion list */}
            <div className="flex flex-col text-left justify-center lg:pr-4">
              <div className="mb-10 lg:mb-12">
                <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block mb-3">
                  WHO WE HELP
                </span>
                <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.15] font-bold text-ink">
                  Designed for Leaders at Key Inflection Points
                </h2>
              </div>

              {/* Collapsible hover-driven accordion */}
              <div 
                onMouseLeave={() => setHoveredIndex(null)}
                className="border-t border-b border-[#1A3C34]/15 divide-y divide-[#1A3C34]/15"
              >
                {items.map((item, idx) => {
                  const isExpanded = hoveredIndex === idx;

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onClick={() => setHoveredIndex(isExpanded ? null : idx)}
                      className={`py-6 cursor-pointer group transition-all duration-200 ${
                        isExpanded ? "px-2 bg-[#1A3C34]/[0.02]" : "hover:bg-[#1A3C34]/[0.01]"
                      }`}
                    >
                      {/* Row Header */}
                      <div className="flex justify-between items-center w-full">
                        <h3 className={`font-serif text-lg md:text-xl font-bold transition-colors duration-200 ${
                          isExpanded ? "text-[#1A3C34]" : "text-ink group-hover:text-[#1A3C34]"
                        }`}>
                          {item.title}
                        </h3>
                        <span className="font-sans text-[13px] md:text-[14px] text-ink-muted/65 font-medium select-none">
                          {item.num}
                        </span>
                      </div>

                      {/* Animated Drawer Body */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="font-sans text-[15px] text-ink-muted leading-[1.65] pt-3 pb-1 pr-4 max-w-xl">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Big editorial boardroom image with Get Started card */}
            <div className="relative w-full h-full min-h-[440px] lg:min-h-0 max-w-[480px] mx-auto lg:ml-auto lg:mr-0 shadow-lg">
              <div className="relative w-full h-full overflow-hidden image-hover-wrapper bg-teal-dim/10">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                  alt="Boardroom with natural light filtering through vertical windows"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="hover-overlay" />
                
                {/* Floating "Get started" card layered on the bottom-left of the image */}
                <div 
                  onClick={handleGetStartedClick}
                  className="absolute bottom-0 left-0 bg-white p-6 w-[160px] h-[115px] sm:w-[170px] sm:h-[120px] flex flex-col justify-between shadow-xl cursor-pointer group/gs z-30 border-t border-r border-[#1A3C34]/10 transition-all duration-300 hover:bg-[#1A3C34] hover:border-transparent"
                  aria-label="Get started - book a strategy call"
                >
                  <div className="flex justify-end w-full">
                    <ArrowUpRight 
                      size={20} 
                      strokeWidth={1.5} 
                      strokeLinecap="square" 
                      strokeLinejoin="miter" 
                      className="text-[#1A3C34] group-hover/gs:text-[#E8F0EE] group-hover/gs:translate-x-1 group-hover/gs:-translate-y-1 transition-all duration-300"
                    />
                  </div>
                  <span className="font-sans text-[13px] font-bold text-[#1A3C34] group-hover/gs:text-[#E8F0EE] uppercase tracking-wider block transition-colors duration-300">
                    Get started
                  </span>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
