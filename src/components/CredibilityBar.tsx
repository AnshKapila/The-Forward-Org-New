import { useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";
import logo1 from "../assets/images/regenerated_image_1779859475822.png";
import logo2 from "../assets/images/regenerated_image_1779884368446.png";
import logo3 from "../assets/images/regenerated_image_1780126552851.png";

export function CredibilityBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  const logos = [
    { name: "Client Logo 1", src: logo1 },
    { name: "Client Logo 2", src: logo2 },
    { name: "Client Logo 3", src: logo3 },
  ];

  return (
    <div ref={containerRef} id="credibility-bar" className="w-full bg-canvas py-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gold opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal duration={0.6}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-8 md:gap-16 w-full text-left">
            {/* Left Eyebrow Label */}
            <div className="shrink-0 flex flex-col items-start">
              <span className="font-sans font-medium text-[11px] text-gold uppercase tracking-[0.16em]">
                A DECADE OF PRACTICE INSIDE
              </span>
            </div>

            {/* Middle Corporate Logos */}
            <div className="flex flex-wrap items-center justify-start gap-12 md:gap-16">
              {logos.map((logo, idx) => (
                <div
                  key={idx}
                  className="opacity-90 hover:opacity-100 transition-colors duration-300 transform hover:scale-105 flex items-center h-10"
                  style={{ minHeight: "40px", display: "flex", alignItems: "center" }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
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
