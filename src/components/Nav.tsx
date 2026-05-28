import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";
import { motion, AnimatePresence } from "motion/react";
import { InteractiveButton } from "./InteractiveButton";

export function Nav() {
  const isScrolled = useScrolled(12);
  const [location, setLocation] = useLocation();
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

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "The Index", path: "/index" },
    { label: "Posts", path: "/posts" },
  ];

  const handleBookACall = () => {
    setIsMobileMenuOpen(false);
    if (location === "/") {
      const el = document.getElementById("book-a-call");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      setLocation("/");
      setTimeout(() => {
        const el = document.getElementById("book-a-call");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-90 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1A1C1A]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(26,28,26,0.15)] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo click routes to home */}
          <Link href="/">
            <button className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-gold cursor-pointer text-left leading-none">
              <LogoMark />
              <div className="flex flex-col select-none leading-none">
                <span className="font-serif text-[15px] font-bold tracking-wider text-white leading-none">
                  THE FORWARD ORG
                </span>
                <span className="text-[9px] font-mono tracking-widest text-gold uppercase mt-[1.5px] leading-none">
                  PAN SETH ADVISORY
                </span>
              </div>
            </button>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <Link key={link.path} href={link.path}>
                  <button
                    className={`relative py-1 text-sm font-sans tracking-wide transition-colors duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold group ${
                      isActive 
                        ? "text-gold font-semibold" 
                        : "text-white/90 hover:text-gold font-medium"
                    }`}
                  >
                    {link.label}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-gold transition-transform duration-300 origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`} 
                    />
                  </button>
                </Link>
              );
            })}
          </div>

          {/* Navigation CTA Actions */}
          <div className="flex items-center gap-4">
            <InteractiveButton
              id="nav-cta-book"
              onClick={handleBookACall}
              variant="gold"
              size="sm"
              className="hidden md:inline-flex"
            >
              Book a Call
            </InteractiveButton>

            {/* Mobile Hamburger Burger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-gold focus-visible:outline-2 focus-visible:outline-gold cursor-pointer transition-colors duration-300 flex items-center justify-center"
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
            className="fixed inset-0 bg-[#1A3C34]/95 backdrop-blur-md z-80 flex flex-col justify-between pt-28 pb-12 px-8"
          >
            <div className="flex flex-col gap-6 pt-10 text-left">
              {navLinks.map((link, idx) => {
                const isActive = location === link.path;
                return (
                  <Link key={link.path} href={link.path}>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-serif text-3xl font-bold py-2 cursor-pointer text-left ${
                        isActive ? "text-gold" : "text-white/90 hover:text-gold"
                      }`}
                    >
                      {link.label}
                    </button>
                  </Link>
                );
              })}
            </div>

            <div className="space-y-6 flex flex-col items-stretch">
              <InteractiveButton
                onClick={handleBookACall}
                variant="gold"
                className="w-full text-center py-4"
              >
                Book a Call
              </InteractiveButton>
              
              <div className="text-center font-mono text-[10px] uppercase tracking-widest text-[#F0E6D3]/50">
                INTELLIGENCE. STRUCTURE. DIRECTION.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
