import { useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";
import logo1 from "../assets/images/regenerated_image_1782908519978.jpg";
import logo2 from "../assets/images/regenerated_image_1782908520790.jpg";
import logo3 from "../assets/images/regenerated_image_1782908521561.jpg";
import logo4 from "../assets/images/regenerated_image_1782908522558.jpg";
import logo5 from "../assets/images/regenerated_image_1780430014552.jpg";

export function CredibilityBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  const logos = [
    { name: "Client Logo 1", src: logo1 },
    { name: "Client Logo 2", src: logo2 },
    { name: "Client Logo 3", src: logo3 },
    { name: "Client Logo 4", src: logo4 },
    { name: "Client Logo 5", src: logo5 },
  ];

  return (
    <div ref={containerRef} id="credibility-bar" className="w-full bg-canvas pt-4 pb-2 lg:pt-[30px] lg:pb-[15px] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gold opacity-40" />
      
      <div className="w-full px-6 lg:px-[120px]">
        <ScrollReveal duration={0.6}>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-8 md:gap-4 w-full">
            {/* Left Eyebrow Label */}
            <div className="shrink-0 flex items-center">
              <span className="font-sans font-medium text-[11px] text-gold uppercase tracking-[0.16em]">
                OUR EXPERIENCE BUILT INSIDE
              </span>
            </div>

            {/* Corporate Logos */}
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105 flex items-center h-10 shrink-0"
                style={{ minHeight: "40px", display: "flex", alignItems: "center" }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-auto object-contain saturate-20 mix-blend-multiply transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
