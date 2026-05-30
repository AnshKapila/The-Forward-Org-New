import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";
import { motion, AnimatePresence } from "motion/react";
import { InteractiveButton } from "./InteractiveButton";

import { LogoMark } from "./LogoMark";

export function Nav() {
  const isScrolled = useScrolled(12);
  const [location, setLocation] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "The Index", path: "/index" },
    { label: "About", path: "/about" },
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

  const isHomePage = location === "/";
  const showDarkNavbar = !isHomePage || isScrolled;

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-[90] transition-all duration-300 ${
          showDarkNavbar
            ? "bg-[#1A1C1A]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(26,28,26,0.15)] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo click routes to home */}
          <Link href="/">
            <button className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-gold cursor-pointer text-left leading-none">
              <LogoMark width="28" height="28" className="shrink-0" />
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
                      className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-gold transition-transform duration-[200ms] ease-out origin-left ${
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
