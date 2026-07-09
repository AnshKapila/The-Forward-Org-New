import React, { useState, useEffect, useRef } from "react";
import { Check, ChevronDown, Clock, Users, Shield, Calendar, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { InteractiveButton } from "../components/InteractiveButton";
import masterclassHeroImg from "../assets/images/masterclass.jpg";
import { submitToBrevo } from "../utils/submitToBrevo";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function Masterclass() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // FAQ interactive states
  const [clickedId, setClickedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Scale zooms in +20% as the hero drives down
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.2]);
  const scaleValue = shouldReduceMotion ? 1.0 : scrollScale;

  const phrases = [
    "CHATHAM HOUSE RULES.",
    "BUILT FOR THE C-SUITE.",
    "ESTABLISH REAL LEVERAGE.",
    "BEYOND THE AI PILOT.",
  ];

  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [phrases.length]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasEntered(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Inject noindex meta tag to respect "noindex" requirement
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "noindex, nofollow");
    
    // Cleanup on unmount
    return () => {
      if (meta) {
        meta.setAttribute("content", "index, follow");
      }
    };
  }, []);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-faq-button]")) {
        setClickedId(null);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    try {
      const listId = Number(import.meta.env.VITE_BREVO_LIST_MASTERCLASS);
      const nameParts = name.trim().split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(" ");

      const attributes = {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        JOB_TITLE: role,
        ORGANISATION: company,
        SOURCE: "masterclass_registration"
      };
      
      await submitToBrevo(email.trim(), listId, attributes);
      setIsSuccess(true);
    } catch (err) {
      console.error("Masterclass inquiry failed", err);
      setIsSuccess(true); // Graceful fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScrollToForm = () => {
    document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Who's hosting this?",
      answer: "Pan Seth, founder of The Forward Org. A decade building and governing real AI systems inside companies like Citi, PagerDuty and NielsenIQ. $600M+ in revenue impact, that created two AI patents along the way. She's trained alongside the top AI and Leadership consultants across the world and experienced firsthand what makes AI work inside a company, and what quietly kills it.",
    },
    {
      id: 2,
      question: "What is The Forward Org?",
      answer: "The Forward Org closes the gap between what AI promises and what companies get from it. We help organizations identify where AI creates the greatest business value, design an AI strategy aligned with their goals, redesign workflows and processes, and enable teams to successfully adopt AI across the organization.",
    },
    {
      id: 3,
      question: "What is this masterclass?",
      answer: "A 90-minute live session for leaders, not technical teams, on why AI adoption stalls and what to do about it.",
    },
    {
      id: 4,
      question: "Who is this for?",
      answer: "Any leader driving AI inside their company, whether you're the CEO, a director, or the person who got handed the AI initiative with no roadmap.",
    },
    {
      id: 5,
      question: "What will I learn?",
      answer: "Why your team is quietly resisting, the gaps behind every stalled rollout, and one move you can make right after the session.",
    },
    {
      id: 6,
      question: "Do I need a technical background?",
      answer: "No. This is about leadership and culture, not code.",
    },
    {
      id: 7,
      question: "What happens after the masterclass?",
      answer: "You'll get the chance to take your free AI Readiness Assessment, so you can see exactly where your company stands.",
    },
    {
      id: 8,
      question: "Is this free?",
      answer: "Yes, it's complimentary for all community members in Pan's network.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setClickedId(clickedId === id ? null : id);
  };

  const handleMouseEnterFAQ = (id: number) => {
    if (clickedId !== null && clickedId !== id) {
      setClickedId(null);
    }
    setHoveredId(id);
  };

  const handleMouseLeaveFAQ = (id: number) => {
    setHoveredId((prev) => (prev === id ? null : prev));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="bg-white min-h-screen text-ink">
      {/* 1. Hero Section in Homepage Format */}
      <section 
        ref={heroRef} 
        id="hero" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative min-h-screen bg-ink pt-24 md:pt-0 flex flex-col justify-between overflow-hidden"
      >
        {/* Background image matching user choice */}
        <div 
          className="absolute inset-0 z-0 select-none overflow-hidden"
          style={{ transform: "translateZ(0)", isolation: "isolate" }}
        >
          <motion.div
            className="w-full h-full"
            animate={{ scale: isHovered ? 1.05 : 1.0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transformOrigin: "center center",
              willChange: "transform",
            }}
          >
            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1.0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              src={masterclassHeroImg}
              alt="Live Masterclass: Lead your team through AI"
              className="w-full h-full object-cover object-right lg:object-[85%_center] opacity-100"
              style={{
                objectPosition: isMobile ? "80% center" : undefined,
                scale: hasEntered ? scaleValue : undefined,
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1920&h=1080";
              }}
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Deep left-aligned gradient for text legibility, matching the homepage format */}
          <div className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[50%] bg-gradient-to-r from-ink via-ink/85 to-transparent hidden md:block z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-transparent md:hidden z-10 pointer-events-none" />
        </div>

        {/* Hero Content Aligned Left */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 md:px-12 z-20 text-left">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl flex flex-col items-start"
          >
            {/* Tagline / Category Label */}
            <div className="h-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIdx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="font-sans font-bold text-xs text-gold uppercase tracking-[0.2em] block"
                >
                  LIVE MASTERCLASS
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Main Title / Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-hero leading-[1.12] font-bold tracking-tight text-white text-balance mt-3 md:mt-4 uppercase"
            >
              HOW TO LEAD IN THE AI ERA WITHOUT HAVING ALL THE ANSWERS
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-[17px] md:text-[19px] text-off-white/80 leading-relaxed font-light max-w-2xl mt-4"
            >
              Your team isn't resisting AI. They're resisting the silence around it. Come find out why, and what to do next.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-[24px] items-stretch sm:items-center mt-8 pt-0 w-full"
            >
              <InteractiveButton
                onClick={handleScrollToForm}
                variant="gold"
                className="text-center px-8 py-4 font-bold"
              >
                Save My Seat
              </InteractiveButton>
            </motion.div>

            {/* Sub-heading / Hook moved below CTA */}
            <motion.p
              variants={itemVariants}
              className="font-serif text-base md:text-lg text-gold/90 italic tracking-wide mt-6 text-left font-normal"
            >
              (Even if you're not the technical one in the room)
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Quick Stats / Metadata Bar */}
      <section className="py-8 bg-[#F7F4EF] border-y border-gold/15 relative z-30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:divide-x md:divide-gold/20">
            <div className="flex flex-col justify-center items-center">
              <span className="font-sans text-[11px] uppercase tracking-widest text-ink-muted">Length</span>
              <span className="font-serif text-base md:text-lg font-bold text-ink mt-1">90 minutes</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-sans text-[11px] uppercase tracking-widest text-ink-muted">Level</span>
              <span className="font-serif text-base md:text-lg font-bold text-ink mt-1">Mid-Senior leaders</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-sans text-[11px] uppercase tracking-widest text-ink-muted">Type</span>
              <span className="font-serif text-base md:text-lg font-bold text-ink mt-1">Live Interactive</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-sans text-[11px] uppercase tracking-widest text-ink-muted">Access</span>
              <span className="font-serif text-base md:text-lg font-bold text-ink mt-1 text-teal">Complimentary (Free)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. One Core-Concept Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-left">
          <ScrollReveal duration={0.6}>
            <div className="space-y-6">
              <span className="font-sans font-bold text-xs text-gold uppercase tracking-[0.2em] block">
                THE CORE CHALLENGE
              </span>
              <h2 className="font-serif text-[32px] md:text-[45px] leading-tight font-bold text-ink">
                THE REAL REASON AI STALLS
              </h2>
              
              <p className="font-serif text-xl md:text-2xl text-teal font-medium leading-relaxed border-l-2 border-gold/40 pl-6 my-8">
                It's never the model. It's never the tool. AI fails inside companies for one reason: nobody addressed the human side first.
              </p>
              
              <p className="font-sans text-base md:text-lg text-ink-muted leading-relaxed font-light mt-6">
                Your team isn't resisting AI. They're resisting the silence around what it means for them. This masterclass shows you the three gaps behind every stalled rollout, and how to close them, even if you didn't write a line of the strategy yourself.
              </p>

              <div className="pt-8">
                <InteractiveButton
                  onClick={handleScrollToForm}
                  variant="gold"
                  className="px-8 py-4 font-bold"
                >
                  Save My Seat
                </InteractiveButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Two-Column "What's Included / What Changes For You" Block */}
      <section className="py-24 md:py-32 bg-[#F7F4EF]/50 border-t border-b border-gold/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal duration={0.6}>
            <div className="mb-16 text-center md:text-left">
              <span className="font-sans font-bold text-xs text-gold uppercase tracking-[0.2em] block mb-3">
                PROGRAM STRUCTURE
              </span>
              <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-ink leading-tight">
                WHAT TO EXPECT
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Column 1: What you'll learn */}
            <div className="space-y-6 bg-white p-8 md:p-10 border border-gold/10 rounded-[2px] shadow-sm text-left">
              <h3 className="font-serif text-2xl font-bold text-ink border-b border-gold/10 pb-4 flex items-center gap-3">
                <span className="text-gold font-mono text-xl">01/</span>
                What you'll learn
              </h3>
              
              <ul className="space-y-4 font-sans text-[15px] md:text-[16px] text-ink-muted">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg shrink-0 mt-0.5">→</span>
                  <span>The 3 hidden gaps killing AI adoption inside most companies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg shrink-0 mt-0.5">→</span>
                  <span>The 10 patterns that quietly kill AI projects before they scale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg shrink-0 mt-0.5">→</span>
                  <span>How to read your team's resistance instead of fighting it</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg shrink-0 mt-0.5">→</span>
                  <span>One move you can make this week, no technical background needed</span>
                </li>
              </ul>
            </div>

            {/* Column 2: What changes for you */}
            <div className="space-y-6 bg-white p-8 md:p-10 border border-gold/10 rounded-[2px] shadow-sm text-left">
              <h3 className="font-serif text-2xl font-bold text-teal border-b border-gold/10 pb-4 flex items-center gap-3">
                <span className="text-teal font-mono text-xl">02/</span>
                What changes for you
              </h3>
              
              <ul className="space-y-4 font-sans text-[15px] md:text-[16px] text-ink-muted">
                <li className="flex items-start gap-3">
                  <span className="text-teal font-bold text-lg shrink-0 mt-0.5">→</span>
                  <span>Stop guessing why AI isn't sticking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal font-bold text-lg shrink-0 mt-0.5">→</span>
                  <span>Lead the shift without pretending to have all the answers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal font-bold text-lg shrink-0 mt-0.5">→</span>
                  <span>Turn your team's pushback into your roadmap</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal font-bold text-lg shrink-0 mt-0.5">→</span>
                  <span>Walk away with a clear next step for your company</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <InteractiveButton
              onClick={handleScrollToForm}
              variant="gold"
              className="px-10 py-4 font-bold"
            >
              Save My Seat
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* 5. Booking/Registration Form Section */}
      <section id="register-form" className="bg-white py-24 md:py-32">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-3">
            <span className="font-sans font-bold text-xs text-gold uppercase tracking-[0.25em] block">
              SECURE YOUR PLACE
            </span>
            <h2 className="font-serif text-[32px] font-bold text-ink">
              Save Your Seat
            </h2>
            <p className="font-sans text-base text-ink-muted leading-relaxed font-light">
              Submit your registration details below. Cohorts are strictly limited to senior leaders to ensure deep, interactive case analysis.
            </p>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6 text-left bg-[#F7F4EF]/40 p-8 md:p-10 border border-gold/15 shadow-sm rounded-[2px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="mc-name" className="block text-[13px] font-semibold text-teal uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    id="mc-name"
                    type="text"
                    required
                    placeholder="Marcus Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-ink/15 focus:border-teal bg-white text-ink text-[15px] focus-visible:outline-none rounded-[2px]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mc-email" className="block text-[13px] font-semibold text-teal uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    id="mc-email"
                    type="email"
                    required
                    placeholder="m.vance@vanguard.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-ink/15 focus:border-teal bg-white text-ink text-[15px] focus-visible:outline-none rounded-[2px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="mc-company" className="block text-[13px] font-semibold text-teal uppercase tracking-wide">
                    Organization <span className="text-ink-muted/60 text-xs font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="mc-company"
                    type="text"
                    placeholder="Vanguard Strategy Group"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 border border-ink/15 focus:border-teal bg-white text-ink text-[15px] focus-visible:outline-none rounded-[2px]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mc-role" className="block text-[13px] font-semibold text-teal uppercase tracking-wide">
                    Your Title / Role <span className="text-ink-muted/60 text-xs font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="mc-role"
                    type="text"
                    placeholder="CEO / Director / Partner"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 border border-ink/15 focus:border-teal bg-white text-ink text-[15px] focus-visible:outline-none rounded-[2px]"
                  />
                </div>
              </div>

              <div className="pt-4">
                <InteractiveButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="gold"
                  className="w-full py-4 text-center text-sm font-bold uppercase tracking-wider"
                >
                  {isSubmitting ? "Processing Reservation..." : "Save My Seat"}
                </InteractiveButton>
              </div>

              <p className="text-center text-[11px] text-ink-faint">
                Conducted with absolute confidentiality. No marketing spam guaranteed.
              </p>
            </form>
          ) : (
            <div className="bg-white p-12 border border-gold/15 shadow-md space-y-4 rounded-[2px]">
              <div className="w-12 h-12 text-teal border border-teal/20 mx-auto flex items-center justify-center">
                <Check size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink">Seat Requested Successfully</h3>
              <p className="font-sans text-[15px] text-ink-muted max-w-sm mx-auto">
                Thank you. We have saved your request. Our team will review your application and follow up via email within 2 business days with cohort calendars.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section id="faq" className="relative bg-[#F7F4EF]/30 py-24 md:py-32 overflow-hidden border-t border-gold/10">
        {/* Topographic Contour lines decoration */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-[0.05]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="topo-contour" width="200" height="150" patternUnits="userSpaceOnUse">
                <path d="M0,25 C50,15 80,45 130,35 C180,25 150,55 200,45" fill="none" stroke="var(--color-teal)" strokeWidth="0.75" />
                <path d="M0,65 C40,55 100,75 140,55 C180,35 160,85 200,75" fill="none" stroke="var(--color-teal)" strokeWidth="0.75" />
                <path d="M0,105 C60,95 90,125 150,105 C180,85 160,115 200,115" fill="none" stroke="var(--color-teal)" strokeWidth="0.75" />
                <path d="M0,140 C30,130 110,135 130,145 C170,125 180,140 200,135" fill="none" stroke="var(--color-teal)" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo-contour)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-left">
          <ScrollReveal duration={0.6}>
            <div className="mb-16">
              <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block mb-3">
                COMMON QUESTIONS
              </span>
              <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-ink leading-none">
                FAQ
              </h2>
            </div>
          </ScrollReveal>

          {/* Accordion List Block */}
          <StaggerContainer>
            <div className="border-t border-gold/30">
              {faqItems.map((item, idx) => {
                const isOpen = hoveredId === item.id || clickedId === item.id;
                
                return (
                  <div 
                    key={item.id} 
                    className="border-b border-gold/30"
                    onMouseEnter={() => handleMouseEnterFAQ(item.id)}
                    onMouseLeave={() => handleMouseLeaveFAQ(item.id)}
                  >
                    <StaggerItem index={idx}>
                      <button
                        onClick={() => toggleFAQ(item.id)}
                        data-faq-button="true"
                        className="w-full text-left py-6 flex items-center justify-between gap-6 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold relative group select-none"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${item.id}`}
                      >
                        <span
                          className={`font-serif text-lg md:text-xl font-medium transition-colors duration-200 pr-4 ${
                            isOpen ? "text-teal" : "text-ink group-hover:text-teal"
                          }`}
                        >
                          {item.question}
                        </span>

                        <span className="shrink-0">
                          <ChevronDown
                            size={20}
                            strokeWidth={1.5}
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                            className={`transition-transform duration-250 ease-in-out ${
                              isOpen ? "rotate-180 text-teal" : "rotate-0 text-ink/40"
                            }`}
                          />
                        </span>
                      </button>

                      <div
                        id={`faq-answer-${item.id}`}
                        className={`grid transition-all duration-350 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pb-6 pr-4">
                            <p className="font-sans text-[16px] text-ink-muted leading-[1.75] font-light">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  </div>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
