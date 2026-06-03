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
          className="h-8 w-auto transition-all duration-300"
          aria-label="Citi logo"
        >
          {/* Citi stylized red arc of trust */}
          <path
            d="M36.5 1.5 C41.5 -1.5, 48 3, 48 3 L47 4.5 C47 4.5, 41 0.5, 36.5 3 C32 5.5, 29.5 10.5, 29.5 10.5 L28 9 C28 9, 31 4, 36.5 1.5 Z"
            fill="#D12E2E"
          />
          {/* Lowercase word citi in custom brand blue */}
          <g fill="#002D62">
            <path d="M12 8.5 A2.5 2.5 0 0 1 14.5 11 L14.5 16 A2.5 2.5 0 0 1 12 18.5 A2.5 2.5 0 0 1 9.5 16 L9.5 11 A2.5 2.5 0 0 1 12 8.5 Z M12 10.5 A0.8 0.8 0 0 0 11.2 11.3 L11.2 15.7 A0.8 0.8 0 0 0 12 16.5 A0.8 0.8 0 0 0 12.8 15.7 L12.8 11.3 A0.8 0.8 0 0 0 12 10.5 Z" />
            <path d="M20.5 7.5 L20.5 9.5 L18.5 9.5 L18.5 15.5 A1 1 0 0 0 19.5 16.5 L20.5 16.5 L20.5 18 L19.5 18 A2.5 2.5 0 0 1 17 15.5 L17 9.5 L15.5 9.5 L15.5 7.5 L17 7.5 L17 4.5 L18.5 4.5 L18.5 7.5 Z" />
            <rect x="23" y="4.5" width="1.6" height="1.6" />
            <rect x="23" y="7.5" width="1.6" height="11" />
            <path d="M56 8.5 A2.5 2.5 0 0 1 58.5 11 L58.5 16 A2.5 2.5 0 0 1 56 18.5 A2.5 2.5 0 0 1 53.5 16 L53.5 11 A2.5 2.5 0 0 1 56 8.5 Z M56 10.5 A0.8 0.8 0 0 0 55.2 11.3 L55.2 15.7 A0.8 0.8 0 0 0 56 16.5 A0.8 0.8 0 0 0 56.8 15.7 L56.8 11.3 A0.8 0.8 0 0 0 56 10.5 Z" />
            <path d="M64.5 7.5 L64.5 9.5 L62.5 9.5 L62.5 15.5 A1 1 0 0 0 63.5 16.5 L64.5 16.5 L64.5 18 L63.5 18 A2.5 2.5 0 0 1 61 15.5 L61 9.5 L59.5 9.5 L59.5 7.5 L61 7.5 L61 4.5 L62.5 4.5 L62.5 7.5 Z" />
            <rect x="67" y="4.5" width="1.6" height="1.6" />
            <rect x="67" y="7.5" width="1.6" height="11" />
          </g>
        </svg>
      ),
    },
    {
      name: "PagerDuty",
      svg: (
        <svg
          viewBox="0 0 150 32"
          className="h-8 w-auto transition-all duration-300"
          aria-label="PagerDuty logo"
        >
          {/* PagerDuty brand green base icon */}
          <g transform="translate(2, 2)">
            <path d="M14 0 C6.3 0 0 6.3 0 14 C0 21.7 6.3 28 14 28 C21.7 28 28 21.7 28 14 C28 6.3 21.7 0 14 0 Z" fill="#00C65D" />
            <path d="M11 7 H17 C19.2 7 21 8.8 21 11 C21 13.2 19.2 15 17 15 H11 V7 Z" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 15 V21" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          {/* Typographic wordmark */}
          <text x="38" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="800" fill="#1C3F38" letterSpacing="-0.2px">
            PagerDuty
          </text>
        </svg>
      ),
    },
    {
      name: "NielsenIQ",
      svg: (
        <svg
          viewBox="0 0 100 32"
          className="h-8 w-auto transition-all duration-300"
          aria-label="NielsenIQ logo"
        >
          {/* Rounded solid blue rectangle */}
          <rect x="0" y="2" width="72" height="28" rx="4" fill="#002F6C" />
          {/* White letters N I Q */}
          <g fill="#FFFFFF" transform="translate(1, 0)">
            <path d="M12 10 L12 22 L14.5 22 L19.5 14.5 L19.5 22 L22 22 L22 10 L19.5 10 L14.5 17.5 L14.5 10 Z" />
            <rect x="25.5" y="10" width="3" height="12" />
            <path d="M37 10 C33.5 10 31 12.5 31 16 C31 19.5 33.5 22 37 22 C38.8 22 40.3 21.2 41.2 20 L43.5 22 L45.2 22 L42.8 19.8 C44 18.8 44.5 17.5 44.5 16 C44.5 12.5 42 10 37 10 Z M37 12.2 C39 12.2 40.5 13.7 40.5 16 C40.5 18.3 39 19.8 37 19.8 C35 19.8 33.5 18.3 33.5 16 C33.5 13.7 35 12.2 37 12.2 Z" />
            <rect x="39.5" y="18" width="4.5" height="2.5" transform="rotate(45 39.5 18)" />
          </g>
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
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="opacity-90 hover:opacity-100 transition-colors duration-300 transform hover:scale-105 flex items-center h-8"
                  style={{ minHeight: "32px", display: "flex", alignItems: "center" }}
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
