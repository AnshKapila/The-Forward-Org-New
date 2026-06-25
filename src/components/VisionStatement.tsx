import { ScrollReveal } from "./ScrollReveal";

// IMAGE: Use architectural/environmental photography.
// NO stock business people. NO AI/robot imagery.
// Preferred: boardrooms, glass architecture, 
// structural details, natural light office spaces.
// Pan's own photos for sections 07 and 12 only.

export function VisionStatement() {
  return (
    <section id="vision" className="relative bg-ink py-32 md:py-40 overflow-hidden">
      
      {/* Full-bleed background image texture */}
      <img
        src="/images/texture-structure.jpg"
        alt="Architectural Construction Texture"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-8 z-0"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
        referrerPolicy="no-referrer"
      />

      {/* Inline SVG faint architectural blueprint drawing background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] select-none z-0">
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
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/3 z-0 w-[400px] h-[400px] opacity-20 pointer-events-none select-none">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="198" stroke="var(--color-teal)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="150" stroke="var(--color-teal)" strokeWidth="0.5" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="var(--color-teal)" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="var(--color-teal)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content wrapper with position relative and elevated z-index */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <ScrollReveal duration={0.7} y={32}>
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-[26px] md:text-[38px] lg:text-[46px] leading-[1.25] font-bold text-off-white tracking-tight text-balance">
              Most organizations are reacting to AI. We help you build one that is <span className="text-gold font-bold">[ready]</span> for it.
            </h3>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
