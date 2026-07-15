import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";
import { motion, AnimatePresence } from "framer-motion";
import { InteractiveButton } from "./InteractiveButton";

import { LogoMark } from "./LogoMark";

export function Nav() {
  const isScrolled = useScrolled(12);
  const isScrolledPastHero = useScrolled(400);
  const [location, setLocation] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const showNudge = location === "/" && !isScrolledPastHero;

  React.useEffect(() => {
    if (location !== "/") return;

    const sections = [
      "hero",
      "context",
      "who-we-help",
      "how-it-works",
      "ai-index",
      "free-resource",
      "connect-with-pan",
      "newsletter",
      "faq",
      "contact"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          window.history.replaceState(null, "", `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [location]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "The Forward Score", path: "/index" },
    { label: "About", path: "/about" },
    { label: "Newsletter", path: "/newsletter" },
  ];

  const isTransparentNavbarPage = location === "/" || location === "/about" || location === "/masterclass" || location.startsWith("/newsletter");
  const showDarkNavbar = !isTransparentNavbarPage || isScrolled;

  return (
    <>
      {/* Homepage Top Banner (Nudge) */}
      {showNudge && (
        <div className="fixed top-0 left-0 w-full z-[100] bg-sand text-ink text-xs sm:text-sm py-2 px-4 md:px-6 flex flex-wrap justify-center items-center text-center shadow-sm transition-all duration-300">
          <span className="mr-1.5 md:mr-2">Not ready to talk yet?</span>
          <button 
            onClick={() => {
              const el = document.getElementById("free-resource");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-[#1A3C34] underline font-medium hover:text-[#1A3C34]/80 transition-colors cursor-pointer"
          >
            Start with a free resource &rarr;
          </button>
        </div>
      )}

      <nav
        id="main-nav"
        className={`fixed left-0 w-full z-[90] transition-all duration-300 ${
          showDarkNavbar
            ? "bg-[#1A1C1A]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(26,28,26,0.15)] py-4"
            : "bg-transparent py-6"
        } ${showNudge ? "top-[36px]" : "top-0"}`}
      >
        <div className="w-full px-6 lg:px-[120px] flex items-center justify-between">
          {/* Logo click routes to home */}
          <Link href="/">
            <button className="flex items-center gap-1 group focus-visible:outline-2 focus-visible:outline-gold cursor-pointer text-left leading-none">
              <LogoMark width={36.72} height={36.72} className="shrink-0" />
              <div className="flex flex-col select-none leading-none">
                <span className="font-serif text-[15px] font-bold tracking-wider text-white leading-none">
                  The Forward Org
                </span>
                <span className="text-[9px] font-mono tracking-widest text-gold capitalize mt-[1.5px] leading-none">
                  Pan Seth Advisory
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
                    <span className="relative z-10">{link.label}</span>
                    {isActive ? (
                      <motion.span
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold/70"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                        style={{ originX: 0 }}
                      />
                    )}
                  </button>
                </Link>
              );
            })}
          </div>
 
          {/* Navigation CTA Actions */}
          <div className="flex items-center gap-4">
            <InteractiveButton
              id="nav-cta-book"
              onClick={() => setLocation("/book-a-call")}
              variant="gold"
              size="sm"
              className="hidden md:inline-flex"
            >
              Book a Call
            </InteractiveButton>
 
            {/* Mobile Hamburger Burger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-gold focus-visible:outline-2 focus-visible:outline-gold cursor-pointer transition-colors duration-300 flex items-center justify-center relative z-[100] pointer-events-auto"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" />
              ) : (
                <Menu size={24} strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" />
              )}
            </button>
          </div>
        </div>
      </nav>
 
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#1A3C34]/98 backdrop-blur-md z-[80] flex flex-col justify-between pt-28 pb-12 px-8"
          >
            <div className="flex flex-col gap-6 pt-10 text-left">
              {navLinks.map((link, idx) => {
                const isActive = location === link.path;
                return (
                  <Link key={link.path} href={link.path}>
                    <motion.button
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05, duration: 0.3 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-serif text-3xl font-bold py-2 cursor-pointer text-left focus:outline-none ${
                        isActive ? "text-gold" : "text-white/90 hover:text-gold"
                      }`}
                    >
                      {link.label}
                    </motion.button>
                  </Link>
                );
              })}
            </div>
 
            <div className="space-y-6 flex flex-col items-stretch">
              <InteractiveButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setLocation("/book-a-call");
                }}
                variant="gold"
                className="w-full text-center py-4"
              >
                Book a Call
              </InteractiveButton>
              
              <div className="text-center font-mono text-[10px] capitalize tracking-widest text-[#F0E6D3]/50">
                Intelligence. Structure. Direction.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
