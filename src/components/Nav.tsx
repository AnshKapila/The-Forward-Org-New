import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";
import { useAppRoute } from "../context/RouteContext";
import { motion, AnimatePresence } from "motion/react";
import { InteractiveButton } from "./InteractiveButton";

export function Nav() {
  const isScrolled = useScrolled(12);
  const { path, navigate } = useAppRoute();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Logo clock markup
  const LogoMark = () => (
    <svg
      id="nav-logo-mark"
      width="28"
      height="28"
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

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (path !== "/") {
      navigate("/");
      // Let the page mount then scroll to the element
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "The Index", id: "ai-index" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-90 transition-all duration-300 ${
          isScrolled
            ? "bg-canvas/95 backdrop-blur-md shadow-[0_4px_20px_rgba(26,28,26,0.06),0_1px_0_rgba(30,95,95,0.08)] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              if (path !== "/") navigate("/");
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-gold cursor-pointer text-left"
          >
            <LogoMark />
            <div className="flex flex-col select-none">
              <span className={`font-serif text-[15px] font-bold tracking-wider transition-colors duration-300 ${isScrolled ? "text-ink" : "text-white"}`}>
                THE FORWARD ORG
              </span>
              <span className="text-[9px] font-mono tracking-widest text-gold uppercase mt-[-2px]">
                PAN SETH ADVISORY
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1 text-sm font-sans font-medium hover:text-gold transition-colors duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold group ${
                  isScrolled ? "text-ink/80" : "text-white/95"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>
            ))}

            <button
              onClick={() => {
                if (path !== "/posts") navigate("/posts");
              }}
              className={`relative py-1 text-sm font-sans font-medium hover:text-gold transition-colors duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold group ${
                path === "/posts"
                  ? "text-gold"
                  : isScrolled
                  ? "text-ink/80"
                  : "text-white/95"
              }`}
            >
              Posts
              <span
                className={`absolute bottom-0 left-0 w-full h-[1px] bg-gold transition-transform duration-200 origin-left ${
                  path === "/posts" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
          </div>

          {/* Nav Right (CTA & Hamburger) */}
          <div className="flex items-center gap-4">
            <InteractiveButton
              id="nav-cta-book"
              onClick={() => handleLinkClick("book-a-call")}
              variant="gold"
              size="sm"
              className="hidden md:inline-flex"
            >
              Book a Call
            </InteractiveButton>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 hover:text-gold focus-visible:outline-2 focus-visible:outline-gold cursor-pointer transition-colors duration-300 ${
                isMobileMenuOpen ? "text-white" : isScrolled ? "text-ink" : "text-white"
              }`}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 300, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-teal z-80 flex flex-col justify-between pt-28 pb-12 px-8"
          >
            <div className="flex flex-col gap-6 pt-10">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-left font-serif text-3xl font-bold text-off-white hover:text-gold transition-colors py-2 cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/posts");
                }}
                className={`text-left font-serif text-3xl font-bold hover:text-gold transition-colors py-2 cursor-pointer ${
                  path === "/posts" ? "text-gold" : "text-off-white"
                }`}
              >
                Posts
              </motion.button>
            </div>

            <div className="space-y-6 flex flex-col items-stretch">
              <InteractiveButton
                onClick={() => handleLinkClick("book-a-call")}
                variant="gold"
                className="w-full text-center"
              >
                Book a Call
              </InteractiveButton>
              
              <div className="text-center font-mono text-[10px] uppercase tracking-widest text-off-white/50">
                INTELLIGENCE. STRUCTURE. DIRECTION.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
