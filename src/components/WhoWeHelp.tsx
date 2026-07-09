import { useState, useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useLocation } from "wouter";
import chessboardImg from "../assets/images/regenerated_image_1780369204282.jpg";

interface AccordionItem {
  num: string;
  title: string;
  description: string;
}

export function WhoWeHelp() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [_, setLocation] = useLocation();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.4"],
  });

  const leftX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-150, 0]
  );

  const rightX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [150, 0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );

  const items: AccordionItem[] = [
    {
      num: "01",
      title: "CEOs of Regulated Industries",
      description: "\"My board asks about our AI strategy every quarter, but our legal and compliance teams block every initiative because of data privacy and security risks.\" We help you design a defensible AI roadmap and governance structure that satisfies regulators while producing measurable business results."
    },
    {
      num: "02",
      title: "CEOs of Scaling Companies",
      description: "\"We have invested heavily in AI tools and our teams are using them, but I cannot show my investors or board what that capital is actually producing on our bottom line.\" We establish clear ROI attribution and workflow metrics to turn isolated software experiments into a coordinated, margin-expanding capability."
    },
    {
      num: "03",
      title: "CIOs and Chief Digital Officers",
      description: "\"My team can build the technology stack, but leadership misalignment and cultural resistance are stalling workforce adoption and killing our initiatives.\" We address the organizational conditions directly, aligning your leadership team and redesigning day-to-day procedures to make adoption successful and sustainable."
    }
  ];

  const handleGetStartedClick = () => {
    setLocation("/book-a-call");
  };

  return (
    <section
      ref={sectionRef}
      id="who-we-help"
      className="relative bg-[#F7F4EF]/40 py-8 md:py-12 lg:py-16 xl:py-[60px] 2xl:py-[80px] overflow-hidden border-t border-b border-[#1A3C34]/5"
    >
      <div className="w-full px-6 lg:px-[120px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column: Title and interactive accordion list */}
            <motion.div
              style={{ x: leftX, opacity }}
              className="flex flex-col text-left justify-center lg:pr-4"
            >
              <div className="mb-10 lg:mb-12">
                <span className="font-sans font-medium text-xs text-gold capitalize tracking-[0.2em] block mb-3">
                  Who We Help
                </span>
                <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.15] font-bold text-ink">
                  Built for leaders navigating a defining business transition.
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
            </motion.div>

            {/* Right Column: Big editorial boardroom image with Get Started card */}
            <motion.div
              style={{ x: rightX, opacity }}
              className="relative w-full h-full min-h-[440px] lg:min-h-0 max-w-[480px] lg:max-w-[400px] mx-auto lg:ml-auto lg:mr-0 shadow-lg"
            >
              <div className="relative w-full h-full overflow-hidden image-hover-wrapper bg-[#1A3C34]">
                <img
                  src={chessboardImg}
                  alt="A macro close-up of a chessboard with one black king in focus, surrounded by softly blurred white pawns, styled in a dark cinematic green palette"
                  className="w-full h-full object-cover brightness-95 contrast-105 transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#1A3C34]/25 mix-blend-color pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/40 via-transparent to-transparent pointer-events-none" />
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
                  <span className="font-sans text-[13px] font-bold text-[#1A3C34] group-hover/gs:text-[#E8F0EE] capitalize tracking-wider block transition-colors duration-300">
                    Get started
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
      </div>
    </section>
  );
}
