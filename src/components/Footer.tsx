import { ScrollReveal } from "./ScrollReveal";
import { LogoMark } from "./LogoMark";
import { Mail } from "lucide-react";
import logoSrc from "../assets/images/regenerated_image_1780126552851.png";

export function Footer() {
  return (
    <footer id="footer" className="relative bg-canvas border-t border-gold/30 overflow-hidden">
      
      {/* 50% opacity watermark of the logo on the left side. 
          To make only the top-left quadrant of the logo visible while the rest flows outside 
          the container boundaries, we position it relative to the left side with bottom/right overflow. */}
      <div 
        className="absolute pointer-events-none select-none z-0 overflow-hidden opacity-50"
        style={{
          width: "240px",
          height: "240px",
          left: "-120px",
          top: "-120px",
          transform: "translateZ(0)",
        }}
      >
        <img
          src={logoSrc}
          alt=""
          className="w-full h-full object-contain rounded-full"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-[120px] 2xl:px-[160px] py-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center text-center md:text-left">
          
          {/* Left Column: Logo mark & Wordmark */}
          <div className="flex items-center justify-center md:justify-start gap-1">
            <LogoMark width={22} height={22} className="shrink-0" />
            <div className="flex flex-col text-left justify-center">
              <span className="font-serif text-[13px] font-bold tracking-wider text-ink leading-none">
                THE FORWARD ORG
              </span>
              <span className="text-[8px] font-mono tracking-widest text-gold uppercase mt-[1px] leading-none">
                PAN SETH ADVISORY
              </span>
            </div>
          </div>

          {/* Center Column: Copyright details */}
          <div className="space-y-1 md:text-center text-ink-faint font-sans text-xs">
            <p>© 2025 The Forward Org. Pan Seth.</p>
            <a
              href="https://theforwardorg.com"
              className="hover:text-gold transition-colors font-mono tracking-wider"
            >
              theforwardorg.com
            </a>
          </div>

          {/* Right Column: LinkedIn icon, email mailto, and privacy anchor */}
          <div className="flex flex-col items-center md:items-end gap-3 justify-center">
            <div className="flex items-center gap-4">
              <a
                href="mailto:pan.seth93@gmail.com"
                className="text-teal hover:text-gold transition-colors duration-200"
                aria-label="Email Pan Seth"
              >
                <Mail size={20} />
              </a>
              <span className="text-ink-faint">|</span>
              <a
                href="https://www.linkedin.com/in/pan-seth/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-gold transition-colors duration-200"
                aria-label="Pan Seth's LinkedIn profile"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                alert("Privacy Policy: We operate with absolute C-suite integrity. Your operational diagnostic and scheduling entries are processed in full confidence.");
              }}
              className="text-xs text-ink-faint hover:text-gold transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

