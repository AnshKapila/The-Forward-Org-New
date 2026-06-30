import React, { useState } from "react";
import { FreebieModal } from "./FreebieModal";
import { ScrollReveal } from "./ScrollReveal";
import { InteractiveButton } from "./InteractiveButton";
import { motion } from "framer-motion";

interface BentoBlockProps {
  num: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  key?: React.Key;
}

function BentoBlock({ num, tag, title, desc, image }: BentoBlockProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
      className="relative w-full aspect-[1.1] sm:aspect-square overflow-hidden bg-neutral-800/20 border border-gold/15 group cursor-pointer transition-all duration-300 shadow-md"
    >
      {/* Background Image */}
      <motion.img
        initial={{ scale: 1.15, filter: "grayscale(1) contrast(1.1) brightness(0.6)" }}
        animate={{ 
          scale: isHovered ? 1.03 : 1.0, 
          filter: isHovered 
            ? "grayscale(1) contrast(1.15) brightness(0.4)" 
            : "grayscale(1) contrast(1.1) brightness(0.6)" 
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />

      {/* Modern Gradient Mask */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-[#222222]/95 via-[#222222]/70 to-[#222222]/30 transition-opacity duration-300"
        style={{ opacity: isHovered ? 0.95 : 0.85 }}
      />

      {/* Decorative Step Badge (Upper Right) */}
      <div className="absolute top-0 right-0 w-9 h-9 bg-[#F7F4EF] flex items-center justify-center border-l border-b border-teal/10 z-20">
        <span className="font-mono text-[10px] font-bold text-teal leading-none">
          {num}
        </span>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 p-5 flex flex-col justify-between z-10 text-left">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-gold font-bold block mb-1">
            {tag}
          </span>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide leading-snug">
            {title}
          </h3>
        </div>

        {/* Dynamic Glass Sliding Description */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="font-sans text-[12px] sm:text-[13px] text-white/80 leading-relaxed"
          >
            {desc}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export function Freebie() {
  const [modalOpen, setModalOpen] = useState(false);

  const benefits = [
    {
      num: "01",
      tag: "ALIGNMENT",
      title: "Strategic Clarity",
      desc: "Define exactly what AI must achieve for your business, moving from technology pilots to board-aligned targets.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400"
    },
    {
      num: "02",
      tag: "CAPABILITY",
      title: "Talent & Systems",
      desc: "Assess if your organization has the engineering depth, data readiness, and leadership infrastructure to scale.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400"
    },
    {
      num: "03",
      tag: "GOVERNANCE",
      title: "Risk & Security",
      desc: "Establish the policies, compliance checkpoints, and privacy controls needed to prevent liability.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=400"
    },
    {
      num: "04",
      tag: "ADOPTION",
      title: "Cultural Integration",
      desc: "Equip your teams to integrate AI into daily workflows so changes stick and drive real productivity.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <>
      <section id="freebie" className="relative bg-teal py-12 md:py-16 overflow-hidden">
        
        {/* Fine gold horizontal rule divider top */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gold opacity-30" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal duration={0.65}>
            <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Four-Block Bentogram with hover effects */}
              <div className="grid grid-cols-2 gap-4 w-full">
                {benefits.map((b, idx) => (
                  <BentoBlock
                    key={idx}
                    num={b.num}
                    tag={b.tag}
                    title={b.title}
                    desc={b.desc}
                    image={b.image}
                  />
                ))}
              </div>

              {/* Right Column: Clean stack text, headings, button, all styled on the right container column */}
              <div className="flex flex-col items-start lg:pl-4 space-y-6 text-left">
                <div className="space-y-4">
                  <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block">
                    FREE RESOURCE
                  </span>
                  
                  <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-off-white leading-[1.18] text-balance">
                    2x to 10x checklist
                  </h2>
                  
                  <p className="font-sans text-[15px] md:text-[17px] text-off-white/80 leading-[1.7] max-w-xl">
                    You have the same AI tools as the companies pulling ahead. So why are they at 10x and you're stuck at 2x?
                    <br />
                    <span className="block mt-2">10 gaps. One checklist. Find yours before your board asks why.</span>
                  </p>
                </div>

                {/* Instant Action Button and PDF tag */}
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <InteractiveButton
                    onClick={() => setModalOpen(true)}
                    variant="gold"
                    className="w-full sm:w-auto text-center"
                  >
                    Get It Now
                  </InteractiveButton>
                  
                  <p className="font-sans text-xs text-off-white/60 tracking-normal block pt-1 ml-0.5">
                    Instant PDF download. No spam.
                  </p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>

        {/* Fine background arc element backdrop */}
        <div className="absolute right-0 bottom-0 w-64 h-32 border-t border-l border-gold/10 rounded-tl-full pointer-events-none select-none" />
      </section>

      {/* Freebie modal portal anchor */}
      <FreebieModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
