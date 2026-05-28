import { ScrollReveal } from "./ScrollReveal";

export function Footer() {
  const LogoMark = () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-gold)"
      strokeWidth="1.5"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="6" x2="12" y2="12" />
      <line x1="12" y1="12" x2="15.5" y2="15.5" />
    </svg>
  );

  return (
    <footer id="footer" className="bg-canvas border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center text-center md:text-left">
          
          {/* Left Column: Logo mark & Wordmark */}
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <LogoMark />
            <div className="flex flex-col text-left">
              <span className="font-serif text-[13px] font-bold tracking-wider text-ink">
                THE FORWARD ORG
              </span>
              <span className="text-[8px] font-mono tracking-widest text-gold uppercase">
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

          {/* Right Column: LinkedIn icon and privacy anchor */}
          <div className="flex flex-col items-center md:items-end gap-3 justify-center">
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com"
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
