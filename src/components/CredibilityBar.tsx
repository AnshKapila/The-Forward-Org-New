import { useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";

export function CredibilityBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  const logos = [
    {
      name: "Citi",
      svg: (
        <svg
          viewBox="0 0 80 24"
          className="h-7 w-auto fill-current transition-all duration-300"
          aria-label="Citi logo"
        >
          {/* Citi stylized red/gold arc of trust */}
          <path
            d="M36.5 1.5 C41.5 -1.5, 48 3, 48 3 L47 4.5 C47 4.5, 41 0.5, 36.5 3 C32 5.5, 29.5 10.5, 29.5 10.5 L28 9 C28 9, 31 4, 36.5 1.5 Z"
            fill="var(--color-gold)"
          />
          {/* Lowercase word citi */}
          <path d="M12 8.5 A2.5 2.5 0 0 1 14.5 11 L14.5 16 A2.5 2.5 0 0 1 12 18.5 A2.5 2.5 0 0 1 9.5 16 L9.5 11 A2.5 2.5 0 0 1 12 8.5 Z M12 10.5 A0.8 0.8 0 0 0 11.2 11.3 L11.2 15.7 A0.8 0.8 0 0 0 12 16.5 A0.8 0.8 0 0 0 12.8 15.7 L12.8 11.3 A0.8 0.8 0 0 0 12 10.5 Z" />
          <path d="M20.5 7.5 L20.5 9.5 L18.5 9.5 L18.5 15.5 A1 1 0 0 0 19.5 16.5 L20.5 16.5 L20.5 18 L19.5 18 A2.5 2.5 0 0 1 17 15.5 L17 9.5 L15.5 9.5 L15.5 7.5 L17 7.5 L17 4.5 L18.5 4.5 L18.5 7.5 Z" />
          <rect x="23" y="4.5" width="1.6" height="1.6" />
          <rect x="23" y="7.5" width="1.6" height="11" />
          <path d="M56 8.5 A2.5 2.5 0 0 1 58.5 11 L58.5 16 A2.5 2.5 0 0 1 56 18.5 A2.5 2.5 0 0 1 53.5 16 L53.5 11 A2.5 2.5 0 0 1 56 8.5 Z M56 10.5 A0.8 0.8 0 0 0 55.2 11.3 L55.2 15.7 A0.8 0.8 0 0 0 56 16.5 A0.8 0.8 0 0 0 56.8 15.7 L56.8 11.3 A0.8 0.8 0 0 0 56 10.5 Z" />
          <path d="M64.5 7.5 L64.5 9.5 L62.5 9.5 L62.5 15.5 A1 1 0 0 0 63.5 16.5 L64.5 16.5 L64.5 18 L63.5 18 A2.5 2.5 0 0 1 61 15.5 L61 9.5 L59.5 9.5 L59.5 7.5 L61 7.5 L61 4.5 L62.5 4.5 L62.5 7.5 Z" />
          <rect x="67" y="4.5" width="1.6" height="1.6" />
          <rect x="67" y="7.5" width="1.6" height="11" />
        </svg>
      ),
    },
    {
      name: "PagerDuty",
      svg: (
        <svg
          viewBox="0 0 110 24"
          className="h-5 w-auto fill-current transition-all duration-300"
          aria-label="PagerDuty logo"
        >
          {/* Stylized geometric curves P and D character blocks */}
          <path d="M4 18.5 L4 5.5 L10 5.5 A4 4 0 0 1 14 9.5 A4 4 0 0 1 10 13.5 L6.5 13.5 L6.5 18.5 Z M6.5 11 L9.5 11 A1.5 1.5 0 0 0 11 9.5 A1.5 1.5 0 0 0 9.5 8 L6.5 8 Z" />
          <path d="M22 8 A3.5 3.5 0 0 1 25.5 11.5 L25.5 18.5 L23.5 18.5 L23.5 17 A3.5 3.5 0 0 1 20.5 18.5 A3.5 3.5 0 0 1 17 15 A3.5 3.5 0 0 1 20.5 11.5 A3.5 3.5 0 0 1 23.5 13 L23.5 11.5 A1.5 1.5 0 0 0 22 10 A1.5 1.5 0 0 0 20.5 11.5 L18.5 11.5 A3.5 3.5 0 0 1 22 8 Z M22 14.5 A1.5 1.5 0 0 0 20.5 13 A1.5 1.5 0 0 0 19 14.5 A1.5 1.5 0 0 0 20.5 16 A1.5 1.5 0 0 0 22 14.5 Z" />
          <path d="M34 8.5 A3.5 3.5 0 0 1 37.5 12 L37.5 18.5 L35.5 18.5 L35.5 17.5 A3.5 3.5 0 0 1 32 19 A4 4 0 0 1 28 15 A4 4 0 0 1 32 11 A3.5 3.5 0 0 1 35.5 12.5 L35.5 12 A1.5 1.5 0 0 0 34 10.5 A1.5 1.5 0 0 0 32.5 12 L30.5 12 A3.5 3.5 0 0 1 34 8.5 Z M34 14.5 A1.5 1.5 0 0 0 32.5 13 A1.5 1.5 0 0 0 31 14.5 A1.5 1.5 0 0 0 32.5 16 A1.5 1.5 0 0 0 34 14.5 Z" />
          <path d="M43 8 A3.5 3.5 0 0 1 46.5 11.5 L44.5 11.5 A1.5 1.5 0 0 0 43 10 A1.5 1.5 0 0 0 41.5 11.5 L41.5 18.5 L39.5 18.5 L39.5 8 L41.5 8 L41.5 9.5 A3.5 3.5 0 0 1 43 8 Z" />
          <rect x="49" y="8" width="18" height="2" />
          <path d="M72 18.5 L72 5.5 L78 5.5 A4.5 4.5 0 0 1 82.5 10 A4.5 4.5 0 0 1 78 14.5 L74.5 14.5 L74.5 18.5 Z M74.5 12.5 L77.5 12.5 A2.5 2.5 0 0 0 80 10 A2.5 2.5 0 0 0 77.5 7.5 L74.5 7.5 Z" />
          <path d="M89 8 L89 15 A1.5 1.5 0 0 0 90.5 16.5 L91.5 16.5 L91.5 18.5 L90.5 18.5 A3.5 3.5 0 0 1 87 15 L87 8 L85.5 8 L85.5 6 L87 6 L87 3.5 L89 3.5 L89 6 L91.5 6 L91.5 8 Z" />
          <path d="M96 8 L98 8 L98 14 A1.5 1.5 0 0 0 99.5 15.5 A1.5 1.5 0 0 0 101 14 L101 8 L103 8 L103 14 A3.5 3.5 0 0 1 99.5 17.5 A3.5 3.5 0 0 1 96 14 Z" />
        </svg>
      ),
    },
    {
      name: "NielsenIQ",
      svg: (
        <svg
          viewBox="0 0 100 24"
          className="h-6 w-auto fill-current transition-all duration-300"
          aria-label="NielsenIQ logo"
        >
          {/* Stylized bold geometric text "NIQ" or "NielsenIQ" */}
          <path d="M2.5 18.5 L2.5 5.5 L5.5 5.5 L11.5 14.5 L11.5 5.5 L14.5 5.5 L14.5 18.5 L11.5 18.5 L5.5 9.5 L5.5 18.5 Z" />
          <circle cx="21" cy="5.5" r="1.5" />
          <rect x="19.5" y="8" width="3" height="10.5" />
          <path d="M29.5 13 C29.5 15.5 31.5 17.5 34 17.5 C36.5 17.5 38.5 15.5 38.5 13 L38.5 8 L35.5 8 L35.5 13 C35.5 14 34.8 14.5 34 14.5 C33.2 14.5 32.5 14 32.5 13 L32.5 8 L29.5 8 Z" />
          <path d="M43.5 14.5 C44.5 15.5 46 16 47.5 16 C49 16 50 15 50 14 C50 13 49 12.5 47 12 C44 11 42.5 10 42.5 7.5 C42.5 5 44.5 3.5 47.5 3.5 C49.5 3.5 51.5 4.5 52.5 5.5 L50.5 7.5 C49.5 6.5 48.5 6 47.5 6 C46.5 6 45.5 6.5 45.5 7.5 C45.5 8.5 46.5 9 48.5 9.5 C51.5 10.5 53 11.5 53 14 C53 16.5 51 18.5 47.5 18.5 C45 18.5 43 17.5 41.5 16 Z" />
          {/* Monogram stylized IQ */}
          <circle cx="68" cy="13.2" r="4.5" stroke="var(--color-gold)" strokeWidth="2.5" fill="none" />
          <path d="M72 17.2 L75.5 20.5" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={containerRef} id="credibility-bar" className="w-full bg-canvas py-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gold opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal duration={0.6}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-[960px] mx-auto">
            {/* Left Eyebrow Label */}
            <div className="shrink-0 flex flex-col items-center md:items-start">
              <span className="font-sans font-medium text-[11px] text-gold uppercase tracking-[0.16em]">
                A DECADE OF PRACTICE INSIDE
              </span>
            </div>

            {/* Middle Corporate Logos */}
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 text-ink-muted">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                >
                  {logo.svg}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold opacity-40" />
    </div>
  );
}
