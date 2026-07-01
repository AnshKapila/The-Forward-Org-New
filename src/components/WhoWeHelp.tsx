import React, { useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useLocation } from "wouter";
import { InteractiveButton } from "./InteractiveButton";
import chessboardImg from "../assets/images/regenerated_image_1780369204282.jpg";

export function WhoWeHelp() {
  const [, setLocation] = useLocation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.4"],
  });

  const leftX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-100, 0]
  );

  const rightX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [100, 0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );

  const industries = [
    { name: "Finance", desc: "Where regulatory compliance and risk management are paramount." },
    { name: "Healthcare", desc: "Where patient trust, safety, and data governance define success." },
    { name: "Manufacturing", desc: "Where operational scale, quality control, and efficiency dictate margins." },
    { name: "Enterprise Technology", desc: "Where rapid evolution, infrastructure integration, and IP security matter." }
  ];

  return (
    <section
      ref={sectionRef}
      id="who-we-help"
      className="relative bg-[#F7F4EF]/40 py-20 overflow-hidden border-t border-b border-[#1A3C34]/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Title and Content */}
            <motion.div
              style={{ x: leftX, opacity }}
              className="flex flex-col text-left justify-center lg:pr-4"
            >
              <div className="mb-8">
                <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block mb-3">
                  WHO WE HELP
                </span>
                <h2 className="font-serif text-[34px] md:text-[44px] leading-[1.15] font-bold text-ink">
                  Built for organizations where getting AI wrong is not an option.
                </h2>
              </div>

              {/* Industries Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {industries.map((ind, idx) => (
                  <div key={idx} className="bg-white/60 backdrop-blur-sm border border-gold/10 p-5 rounded-none transition-all duration-300 hover:border-gold/30">
                    <h3 className="font-serif text-lg font-bold text-teal mb-1">{ind.name}</h3>
                    <p className="font-sans text-xs text-ink-muted leading-relaxed">{ind.desc}</p>
                  </div>
                ))}
              </div>

              {/* Sub-paragraphs */}
              <div className="space-y-4 mb-8">
                <p className="font-serif text-lg md:text-xl text-ink leading-relaxed font-semibold">
                  Any organization where one wrong AI decision costs more than the entire AI investment itself.
                </p>
                <p className="font-sans text-[16px] text-ink-muted leading-relaxed font-light">
                  If the stakes around AI are high inside your organization, you are in the right place.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <InteractiveButton 
                  variant="primary"
                  onClick={() => setLocation("/index")}
                >
                  Discover Your AI Transformation Readiness
                </InteractiveButton>
              </div>
            </motion.div>

            {/* Right Column: Chessboard Image */}
            <motion.div
              style={{ x: rightX, opacity }}
              className="relative w-full h-full min-h-[440px] lg:min-h-[500px] max-w-[480px] lg:max-w-none mx-auto lg:ml-auto shadow-lg"
            >
              <div className="relative w-full h-full overflow-hidden image-hover-wrapper bg-[#1A3C34]">
                <img
                  src={chessboardImg}
                  alt="A macro close-up of a chessboard with one black king in focus, surrounded by softly blurred white pawns, styled in a dark cinematic green palette"
                  className="w-full h-[500px] object-cover brightness-95 contrast-105 transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#1A3C34]/25 mix-blend-color pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/40 via-transparent to-transparent pointer-events-none" />
                <div className="hover-overlay" />
                
                {/* Floating "Get started" card layered on the bottom-left of the image */}
                <div 
                  onClick={() => setLocation("/index")}
                  className="absolute bottom-0 left-0 bg-white p-6 w-[170px] h-[120px] flex flex-col justify-between shadow-xl cursor-pointer group/gs z-30 border-t border-r border-[#1A3C34]/10 transition-all duration-300 hover:bg-[#1A3C34] hover:border-transparent"
                  aria-label="Get started - Discover your readiness"
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
                  <span className="font-sans text-[12px] font-bold text-[#1A3C34] group-hover/gs:text-[#E8F0EE] uppercase tracking-wider block transition-colors duration-300 leading-tight">
                    Check Your Readiness
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
      </div>
    </section>
  );
}
