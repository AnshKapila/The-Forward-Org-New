/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { RouteProvider, useAppRoute } from "./context/RouteContext";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { CredibilityBar } from "./components/CredibilityBar";
import { TheProblem } from "./components/TheProblem";
import { WhoWeHelp } from "./components/WhoWeHelp";
import { HowItWorks } from "./components/HowItWorks";
import { AIIndexCTA } from "./components/AIIndexCTA";
import { VisionStatement } from "./components/VisionStatement";
import { ThoughtLeadership } from "./components/ThoughtLeadership";
import { Freebie } from "./components/Freebie";
import { FAQ } from "./components/FAQ";
import { ConnectWithPan } from "./components/ConnectWithPan";
import { BookACall } from "./components/BookACall";
import { Footer } from "./components/Footer";
import { PostsView } from "./components/PostsView";
import { motion, AnimatePresence } from "motion/react";

function MainAppContent() {
  const { path } = useAppRoute();
  const [showMobileSticky, setShowMobileSticky] = useState(false);

  // Monitor scroll height to show sticky mobile CTA after hero is out of view
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        // Approximate height of the hero block
        setShowMobileSticky(window.scrollY > 600);
      } else {
        setShowMobileSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStickyCallScroll = () => {
    const el = document.getElementById("book-a-call");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-canvas overflow-x-hidden selection:bg-gold selection:text-ink">
      <AnimatePresence mode="wait">
        {path === "/" ? (
          /* Homepage Layout */
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Nav Header */}
            <Nav />

            {/* Structured Modular Sections */}
            <Hero />
            <CredibilityBar />
            <TheProblem />
            <WhoWeHelp />
            <HowItWorks />
            <AIIndexCTA />
            <VisionStatement />
            <ThoughtLeadership />
            <Freebie />
            <FAQ />
            <ConnectWithPan />
            <BookACall />

            {/* Brand Footer */}
            <Footer />
          </motion.div>
        ) : (
          /* LinkedIn Posts page */
          <motion.div
            key="posts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <PostsView />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile CTA Bar */}
      <AnimatePresence>
        {showMobileSticky && path === "/" && (
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            transition={{ duration: 250, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed bottom-0 left-0 w-full bg-gold border-t border-ink/5 p-4 z-50 flex items-center justify-between shadow-[0_-4px_24px_rgba(30,95,95,0.15)]"
          >
            <div className="flex flex-col text-left">
              <span className="font-serif text-xs font-bold text-ink">
                THE FORWARD ORG
              </span>
              <span className="text-[9px] font-mono tracking-wider text-ink/75 uppercase">
                PAN SETH ADVISOR
              </span>
            </div>

            <button
              onClick={handleStickyCallScroll}
              className="py-3 px-6 bg-ink text-gold font-sans font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform select-none cursor-pointer"
            >
              Book a Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <RouteProvider>
      <MainAppContent />
    </RouteProvider>
  );
}
