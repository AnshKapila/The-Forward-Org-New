import React, { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { useLocation } from "wouter";
import { InteractiveButton } from "../components/InteractiveButton";
import { ScrollReveal } from "../components/ScrollReveal";
import founderImg from "../assets/images/prof1.jpg";

export default function About() {
  const [_, setLocation] = useLocation();
  const timelineRef = useRef<HTMLDivElement>(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-10% 0px" });
  const [lineWillChange, setLineWillChange] = useState(true);

  const timelineNodes = [
    {
      company: "Citi",
      years: "2013-2016",
      desc: "Architected early machine learning fraud detection systems. Scaled predictive trading models on global enterprise infrastructure.",
    },
    {
      company: "PagerDuty",
      years: "2016-2020",
      desc: "Developed real-time incident clustering algorithms and authored core patents on automated operations alerting.",
    },
    {
      company: "NielsenIQ",
      years: "2020-2024",
      desc: "Supervised global retail classification AI systems, modernizing model architectures to handle billions of market records.",
    },
    {
      company: "The Forward Org",
      years: "2024–Present",
      desc: "Advising the leaders navigating the same structural challenges we solved from the inside.",
    },
  ];

  const handleBookClick = () => {
    setLocation("/book-a-call");
  };

  return (
    <div className="bg-white min-h-screen text-ink">
      
      {/* Section 1 - Founder Hero */}
      <section className="pt-12 pb-24 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal duration={0.65}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column (55%) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="font-sans font-bold text-xs text-gold uppercase tracking-[0.25em] block">
                THE FOUNDER
              </span>
              <h1 className="font-serif text-[38px] md:text-[56px] font-bold text-ink leading-tight">
                Pan Seth
              </h1>
              <p className="font-sans text-[17px] md:text-[20px] font-medium text-ink-muted leading-relaxed">
                AI Strategy & Leadership Advisor
              </p>
              
              <div className="space-y-4 font-sans text-base text-ink-muted leading-relaxed">
                <p>
                  Pan Seth helps leaders in regulated and high-consequence organizations successfully navigate one of the most important transitions of their careers: the shift into the AI era. She works with CEOs, CDOs, and CIOs who are already experimenting with AI but struggle to translate pilots into actual business value.
                </p>
                <p>
                  Unlike theoretical advisors, Pan spent more than a decade inside top-tier enterprises, including Citi, PagerDuty, and NielsenIQ, building and governing real AI infrastructure. Holding two AI patents, she turns invisible organizational misalignment into irreversible clarity, and then returns power to the people who need to act.
                </p>
                <p>
                  What makes her approach different is that she does not just focus on technology. She focuses on the specific organizational conditions (strategy, governance, leadership, and cultural adoption) that determine whether AI investments produce measurable outcomes or quietly fail.
                </p>
              </div>

              <div className="pt-4">
                <InteractiveButton onClick={handleBookClick} variant="gold">
                  Book a Call
                </InteractiveButton>
              </div>
            </div>

            {/* Right Photo Column (45%) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div 
                className="relative w-full aspect-[4/5] max-w-[420px] bg-sand image-hover-wrapper"
                style={{
                  boxShadow: "8px 8px 0 0 rgba(201, 165, 90, 0.4)"
                }}
              >
                {/* Visual placeholder box with details */}
                <div className="absolute inset-0 bg-teal/20 mix-blend-multiply z-10 pointer-events-none" />
                <div className="w-full h-full">
                  {/* STANDBY IMAGE: Manually replace the asset file in `/src/assets/images/prof1.jpg` or swap the image path below */}
                  <img
                    src={founderImg}
                    alt="Pan Seth, AI Strategy & Leadership Advisor"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback professional executive advisor portrait if the local asset is missing or fails
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000";
                    }}
                  />
                </div>
                <div className="hover-overlay" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 1.2 - Our Mission */}
      <section className="bg-white border-y border-[#1A3C34]/10 py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal duration={0.65}>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="font-sans font-bold text-xs text-gold uppercase tracking-[0.25em] block">
              OUR MISSION
            </span>
            <h2 className="font-serif text-[24px] md:text-[32px] font-bold text-[#1A3C34] leading-relaxed text-balance">
              At The Forward Org, Our mission is to help organizations confidently move forward in the age of AI by evolving their culture, leadership, and ways of working so their people can embrace change, unlock greater freedom, and achieve extraordinary results.
            </h2>
            <p className="font-sans text-[15px] md:text-[17px] text-ink-muted leading-[1.7] max-w-2xl mx-auto">
              By 2031, we will create more than $100 million in measurable economic impact for our clients while enabling their people to do their most meaningful and valuable work.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 1.5 - Video Segment */}
      <section className="bg-[#F7F4EF] py-24 md:py-32 px-6 md:px-12 w-full overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <ScrollReveal duration={0.65}>
            <div className="space-y-3">
              <span className="font-sans font-bold text-xs text-[#C9A55A] uppercase tracking-[0.25em] block">
                THE MESSAGE
              </span>
              <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-ink leading-tight">
                How we build aligned, AI-ready organizations.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal duration={0.7} delay={0.1}>
            <div className="max-w-[800px] mx-auto aspect-video bg-sand/30 shadow-md relative group">
              <video
                controls
                poster="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover border border-[#E8D5B5]"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </ScrollReveal>

          <ScrollReveal duration={0.65} delay={0.15}>
            <p className="font-sans text-[14px] text-ink/60">
              A brief overview of our organizational alignment and strategy framework.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2 - Credibility Timeline */}
      <section className="bg-[#F7F4EF] py-24 md:py-32 px-6 md:px-12 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-16">
            <span className="font-sans font-bold text-xs text-gold uppercase tracking-[0.2em] block mb-2">
              THE PRACTICE
            </span>
            <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-ink">
              A decade of building inside the enterprise.
            </h2>
          </div>

          <div ref={timelineRef} className="relative pt-8">
            {/* SVG Connecting Line */}
            <div className="absolute left-4 md:left-0 md:top-[44px] w-[2px] md:w-full h-[80%] md:h-[2px] bg-teal/15 hidden md:block">
              <svg width="100%" height="8" className="absolute top-[-3px] left-0 overflow-visible hidden md:block">
                <motion.line
                  x1="0%"
                  y1="4"
                  x2="100%"
                  y2="4"
                  stroke="#1A3C34"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isTimelineInView ? { pathLength: 1 } : { pathLength: 0 }}
                  onAnimationComplete={() => setLineWillChange(false)}
                  style={{ willChange: lineWillChange ? "transform" : "auto" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </svg>
            </div>

            {/* Nodes Container */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10 text-left">
              {timelineNodes.map((node, i) => (
                <div key={i} className="relative pl-10 md:pl-0 flex flex-col justify-start">
                  {/* Timeline circle node */}
                  <div className="absolute left-0 md:left-0 md:top-[34px] w-5 h-5 rounded-full border-[3px] border-[#1A3C34] bg-white flex items-center justify-center transform md-translate-y-1/2 z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </div>

                  <div className="md:pt-14 space-y-2">
                    <span className="font-mono text-xs font-bold text-gold tracking-widest uppercase block">
                      {node.years}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-ink">
                      {node.company}
                    </h3>
                    <p className="font-sans text-[14px] text-ink-muted leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Patents & Recognition */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <span className="font-sans font-bold text-xs text-gold uppercase tracking-[0.2em] block mb-2">
            RESEARCH & PATENTS
          </span>
          <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-ink">
            Defensible practitioner-level depth.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="p-8 border border-[#1A3C34]/40 bg-white flex flex-col justify-between transition-all duration-200 hover:border-gold">
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-gold tracking-widest uppercase">
                AI PATENT
              </span>
              <h3 className="font-serif text-xl font-bold text-ink leading-snug">
                US Patent 11,482,921
              </h3>
              <p className="font-sans text-[15px] text-ink-muted leading-relaxed">
                A patent for system and method for automated operational alert clustering and threat triage using context-aware heuristics.
              </p>
            </div>
            <span className="font-sans text-xs text-ink/40 mt-6 block">
              Foundation for predictive alarm engines.
            </span>
          </div>

          {/* Card 2 */}
          <div className="p-8 border border-[#1A3C34]/40 bg-white flex flex-col justify-between transition-all duration-200 hover:border-gold">
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-gold tracking-widest uppercase">
                AI PATENT
              </span>
              <h3 className="font-serif text-xl font-bold text-ink leading-snug">
                US Patent 10,873,144
              </h3>
              <p className="font-sans text-[15px] text-ink-muted leading-relaxed">
                A patent for multi-modal neural feature alignment and dynamic weighting for high-velocity transaction records.
              </p>
            </div>
            <span className="font-sans text-xs text-ink/40 mt-6 block">
              Foundation for high-frequency record categorization.
            </span>
          </div>
        </div>
      </section>

      {/* Section 4 - Philosophy */}
      <section className="bg-[#122B24] py-24 md:py-32 px-6 md:px-12 text-center text-off-white">
        <div className="max-w-[720px] mx-auto space-y-6">
          <p className="font-serif text-[22px] md:text-[32px] font-medium leading-relaxed text-off-white italic">
            "Pan turns invisible misalignment into irreversible clarity, and then returns power to the people who need to act."
          </p>
          <div className="w-[60px] h-[1px] bg-gold/40 mx-auto pt-2" />
          <p className="font-sans font-medium text-sm text-gold tracking-wide uppercase">
            - Philosophy
          </p>
        </div>
      </section>
    </div>
  );
}
