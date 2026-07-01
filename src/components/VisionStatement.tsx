import React from "react";
import { ScrollReveal } from "./ScrollReveal";

export function VisionStatement() {
  return (
    <section id="vision" className="relative bg-ink py-24 md:py-32 overflow-hidden border-t border-b border-gold/10">
      
      {/* Full-bleed background image texture */}
      <img
        src="/images/texture-structure.jpg"
        alt="Architectural Construction Texture"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-5 z-0"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
        referrerPolicy="no-referrer"
      />

      {/* Inline SVG faint architectural blueprint drawing background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] select-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint" width="120" height="120" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="120" y2="0" stroke="#FFFFFF" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="120" stroke="#FFFFFF" strokeWidth="1" />
              <line x1="40" y1="0" x2="40" y2="120" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="80" y1="0" x2="80" y2="120" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="0" y1="40" x2="120" y2="40" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="0" y1="80" x2="120" y2="80" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="0" y1="0" x2="120" y2="120" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>
      </div>

      {/* Partial circle arc SVG, on the right edge, partially clipped */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/3 z-0 w-[400px] h-[400px] opacity-10 pointer-events-none select-none">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="198" stroke="var(--color-teal)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="150" stroke="var(--color-teal)" strokeWidth="0.5" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="var(--color-teal)" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="var(--color-teal)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content wrapper with position relative and elevated z-index */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <ScrollReveal duration={0.7} y={32}>
          <div className="space-y-8">
            {/* Section Eyebrow */}
            <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.25em] block mb-2">
              OUR BELIEF
            </span>
            
            {/* Main Headline */}
            <h2 className="font-serif text-[30px] md:text-[44px] lg:text-[52px] leading-[1.2] font-bold text-white tracking-tight text-balance max-w-4xl mx-auto">
              Organizations Don’t Transform Because They Buy Better Technology.
            </h2>

            {/* Supporting Belief Statements */}
            <div className="space-y-6 max-w-3xl mx-auto pt-4">
              <p className="font-sans text-lg md:text-xl text-off-white/80 leading-relaxed font-light">
                They transform because they build the leadership, systems, and culture capable of evolving fast with it.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-gold text-sm font-mono tracking-wider pt-2">
                <span className="uppercase">Technology accelerates.</span>
                <span className="hidden md:inline text-gold/40">•</span>
                <span className="uppercase">Organizations determine value or chaos.</span>
              </div>
            </div>

            {/* Signature line divider */}
            <div className="w-16 h-[1px] bg-gold/30 mx-auto my-8" />

            {/* Signature Line */}
            <p className="font-serif italic text-lg md:text-xl text-gold/90 tracking-wide font-medium">
              "We build the Forward organizations that truly thrive in the Age of AI."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
