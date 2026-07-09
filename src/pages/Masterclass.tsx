import React, { useState, useEffect, useRef } from "react";
import { Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { InteractiveButton } from "../components/InteractiveButton";
import masterclassHeroImg from "../assets/images/masterclass.jpg";
import heroImage from "../../hero2.png";
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

  // Inject noindex meta tag
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "noindex, nofollow");
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
      const rawEnvListId = import.meta.env.VITE_BREVO_LIST_MASTERCLASS;
      const listId = Number(rawEnvListId) || 4;
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
      answer: "Pan Seth, founder of The Forward Org. She spent a decade building and governing production AI systems inside companies like Citi, PagerDuty, and NielsenIQ, and took AI adoption from 6% to 80% at PagerDuty through psychology-informed leadership design.",
    },
    {
      id: 2,
      question: "What is The Forward Org?",
      answer: "The Forward Org helps leaders become the kind of leader AI-native organizations need, using the EVOLVE Method, a framework built from a decade inside real AI systems, not theory about them.",
    },
    {
      id: 3,
      question: "What is this masterclass?",
      answer: "A free, 90-minute live session on the identity shift required to become a Forward Leader. You'll score your own AI Leadership Readiness live, and leave with a clear next step.",
    },
    {
      id: 4,
      question: "Who is this for?",
      answer: "Any leader who feels the pressure to become AI-first and refuses to freeze. You do not need a technical background, and you do not need to be running a full organization. You need to be ready to become the leader this moment requires.",
    },
    {
      id: 5,
      question: "What happens after the masterclass?",
      answer: "Leaders ready to go deeper are invited into The Forward Leader Accelerator, a cohort-based program built entirely around the identity shift you'll see live in this session. You'll hear about it at the end. No pitch during the working part of the class.",
    },
    {
      id: 6,
      question: "Is this free?",
      answer: "Yes. Completely free.",
    }
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

  const calendarUrlGoogle = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Live+Masterclass%3A+Become+The+Leader+Your+Organization+Needs+In+The+Age+Of+AI&dates=20260717T160000Z%2F20260717T173000Z&details=You%27re+registered+for+a+live+90-minute+session+with+Pan+Seth%2C+founder+of+The+Forward+Org.+Come+ready+to+see+the+leader+you%27re+becoming%2C+and+score+your+own+AI+Readiness+live.&location=%5BZoom+%2F+webinar+link+to+be+inserted%5D";
  
  const calendarUrlYahoo = "https://calendar.yahoo.com/?v=60&view=d&type=20&title=Live+Masterclass%3A+Become+The+Leader+Your+Organization+Needs+In+The+Age+Of+AI&st=20260717T160000Z&et=20260717T173000Z&desc=You%27re+registered+for+a+live+90-minute+session+with+Pan+Seth%2C+founder+of+The+Forward+Org.+Come+ready+to+see+the+leader+you%27re+becoming%2C+and+score+your+own+AI+Readiness+live.&in_loc=%5BZoom+%2F+webinar+link+to+be+inserted%5D";

  const calendarUrlOutlook = "https://outlook.live.com/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&subject=Live+Masterclass%3A+Become+The+Leader+Your+Organization+Needs+In+The+Age+Of+AI&startdt=2026-07-17T12:00:00-04:00&enddt=2026-07-17T13:30:00-04:00&body=You%27re+registered+for+a+live+90-minute+session+with+Pan+Seth%2C+founder+of+The+Forward+Org.+Come+ready+to+see+the+leader+you%27re+becoming%2C+and+score+your+own+AI+Readiness+live.&location=%5BZoom+%2F+webinar+link+to+be+inserted%5D";

  // Create absolute file data URL link for iCal / Apple calendar template
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//The Forward Org//Masterclass Calendar//EN
BEGIN:VEVENT
UID:masterclass-20260717@theforwardorg.com
DTSTAMP:20260717T120000Z
DTSTART:20260717T160000Z
DTEND:20260717T173000Z
SUMMARY:Live Masterclass: Become The Leader Your Organization Needs In The Age Of AI
DESCRIPTION:You're registered for a live 90-minute session with Pan Seth, founder of The Forward Org. Come ready to see the leader you're becoming, and score your own AI Leadership Readiness live.
LOCATION:[Zoom / webinar link to be inserted]
END:VEVENT
END:VCALENDAR`;
  const calendarUrlApple = `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;

  const currentRegistrationUrl = typeof window !== "undefined" ? window.location.href : "https://theforwardorg.com/masterclass";

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
        {/* Background image */}
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
            <span className="font-sans font-bold text-xs text-gold capitalize tracking-[0.2em] block">
              Live Masterclass
            </span>

            {/* Main Title / Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-hero leading-[1.12] font-bold tracking-tight text-white text-balance mt-3 md:mt-4"
            >
              Become The Leader Your Organization Needs In The Age Of AI
            </motion.h1>

            {/* Sub-heading / Italic line */}
            <motion.p
              variants={itemVariants}
              className="font-serif text-base md:text-lg text-gold/90 italic tracking-wide mt-3 text-left font-normal"
            >
              (Even if you don't have all the answers yet)
            </motion.p>

            {/* Description Paragraph / Subhead */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-[17px] md:text-[19px] text-off-white/80 leading-relaxed font-light max-w-2xl mt-4"
            >
              Walk away knowing exactly who you must become to lead in the age of AI. See your own AI Leadership Readiness Score live, in the room.
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
                Save My Seat →
              </InteractiveButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Quick Stats / Metadata Bar */}
      <section className="py-8 bg-[#F7F4EF] border-y border-gold/15 relative z-30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:divide-x md:divide-gold/20">
            <div className="flex flex-col justify-center items-center">
              <span className="font-sans text-[11px] capitalize tracking-widest text-ink-muted">Date</span>
              <span className="font-serif text-base md:text-lg font-bold text-ink mt-1">17 July 2026</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-sans text-[11px] capitalize tracking-widest text-ink-muted">Time</span>
              <span className="font-serif text-base md:text-lg font-bold text-ink mt-1">12 PM Eastern Time</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-sans text-[11px] capitalize tracking-widest text-ink-muted">Length</span>
              <span className="font-serif text-base md:text-lg font-bold text-ink mt-1">90 minutes</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-sans text-[11px] capitalize tracking-widest text-ink-muted">Type</span>
              <span className="font-serif text-base md:text-lg font-bold text-ink mt-1">Live Interactive</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. One Core-Concept Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
          <ScrollReveal duration={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <span className="font-sans font-bold text-xs text-gold capitalize tracking-[0.2em] block">
                  The Core Challenge
                </span>
                <h2 className="font-serif text-[32px] md:text-[45px] leading-tight font-bold text-ink">
                  The Real Reason You Feel Behind
                </h2>
                
                <p className="font-serif text-xl md:text-2xl text-teal font-medium leading-relaxed border-l-2 border-gold/40 pl-6 my-8">
                  It's never the technology. It's never too late. Leaders fall behind because they never redefined who they needed to become with changing times.
                </p>
                
                <p className="font-sans text-base md:text-lg text-ink-muted leading-relaxed font-light mt-6">
                  The gap between AI-first leaders and everyone else is widening faster than most people realize, and it compounds every quarter you wait. This masterclass shows you the identity shift behind that gap, the one that separates leaders who scale with AI from leaders who quietly get replaced by it.
                </p>

                <div className="pt-8">
                  <InteractiveButton
                    onClick={handleScrollToForm}
                    variant="gold"
                    className="px-8 py-4 font-bold"
                  >
                    Save My Seat →
                  </InteractiveButton>
                </div>
              </div>

              {/* Image side */}
              <div className="relative aspect-[4/5] w-full rounded-[2px] overflow-hidden shadow-md">
                <img 
                  src={heroImage} 
                  alt="Business session mentor explaining concepts offline" 
                  className="w-full h-full object-cover object-right" 
                />
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
              <span className="font-sans font-bold text-xs text-gold capitalize tracking-[0.2em] block mb-3">
                Program Structure
              </span>
              <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-ink leading-tight">
                What To Expect
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Column 1: The 90 Minutes */}
            <div className="space-y-6 bg-white p-8 md:p-10 border border-gold/10 rounded-[2px] shadow-sm text-left">
              <h3 className="font-serif text-2xl font-bold text-ink border-b border-gold/10 pb-4 flex items-center gap-3">
                <span className="text-gold font-mono text-xl">01/</span>
                The 90 Minutes
              </h3>
              
              <ul className="space-y-6 font-sans text-[15px] md:text-[16px] text-ink-muted">
                <li className="space-y-1">
                  <h4 className="font-bold text-ink">The Mirror (20 min)</h4>
                  <p className="font-light">Where AI leadership is actually breaking down, and why it isn't about technology</p>
                </li>
                <li className="space-y-1">
                  <h4 className="font-bold text-ink">The Shift (30 min)</h4>
                  <p className="font-light">The Forward Leader identity, live. The same shift that took AI adoption from 6% to 80% at PagerDuty</p>
                </li>
                <li className="space-y-1">
                  <h4 className="font-bold text-ink">Your Score (20 min)</h4>
                  <p className="font-light">Score your own AI Leadership Readiness in real time, live in the room</p>
                </li>
                <li className="space-y-1">
                  <h4 className="font-bold text-ink">Your Next Step (20 min)</h4>
                  <p className="font-light">Leave with one clear next move, sized to where you scored</p>
                </li>
              </ul>
            </div>

            {/* Column 2: What Changes For You */}
            <div className="space-y-6 bg-white p-8 md:p-10 border border-gold/10 rounded-[2px] shadow-sm text-left">
              <h3 className="font-serif text-2xl font-bold text-teal border-b border-gold/10 pb-4 flex items-center gap-3">
                <span className="text-teal font-mono text-xl">02/</span>
                What Changes For You
              </h3>
              
              <ul className="space-y-4 font-sans text-[15px] md:text-[16px] text-ink-muted">
                <li className="flex items-start gap-3">
                  <span className="text-teal font-bold text-lg shrink-0 mt-0.5">→</span>
                  <span>Stop guessing whether you're actually ahead or behind</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal font-bold text-lg shrink-0 mt-0.5">→</span>
                  <span>See the leader you're becoming, not just the tools you're missing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal font-bold text-lg shrink-0 mt-0.5">→</span>
                  <span>Walk away with a real score, not an assumption</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal font-bold text-lg shrink-0 mt-0.5">→</span>
                  <span>Leave with one clear next step, already sized to you</span>
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
              Save My Seat →
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* 5. Why This, Not That Section */}
      <section className="py-24 md:py-32 bg-white border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
          <ScrollReveal duration={0.6}>
            <div className="mb-16">
              <span className="font-sans font-bold text-xs text-gold capitalize tracking-[0.2em] block mb-3">
                Before You Decide
              </span>
              <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-ink leading-tight">
                This Is Not Another AI Training
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Box 1: Typical AI Training */}
            <div className="p-8 md:p-10 bg-[#F7F4EF]/30 border border-gold/10 rounded-[2px]">
              <h3 className="font-serif text-2xl font-bold text-ink-muted mb-6">A Typical AI Training</h3>
              <ul className="space-y-4 font-sans text-base text-ink-muted/80">
                <li className="flex items-start gap-3">
                  <span className="text-ink-muted/40 font-bold">✕</span>
                  <span>Teaches you a tool</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ink-muted/40 font-bold">✕</span>
                  <span>Assumes you're already behind and rushes to catch you up</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ink-muted/40 font-bold">✕</span>
                  <span>Ends when the session ends</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ink-muted/40 font-bold">✕</span>
                  <span>Built for whoever shows up</span>
                </li>
              </ul>
            </div>

            {/* Box 2: This Masterclass */}
            <div className="p-8 md:p-10 bg-ink border border-gold/20 rounded-[2px] text-white">
              <h3 className="font-serif text-2xl font-bold text-gold mb-6">This Masterclass</h3>
              <ul className="space-y-4 font-sans text-base text-off-white/95">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>Shows you the leader you need to become</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>Shows you exactly where you stand, in real time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>Ends with a next step sized to your own score</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>Built for the leader ready to become AI-first, not just AI-aware</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Booking/Registration Form Section */}
      <section id="register-form" className="bg-white py-24 md:py-32">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-3">
            <span className="font-sans font-bold text-xs text-gold capitalize tracking-[0.25em] block">
              Secure Your Place
            </span>
            <h2 className="font-serif text-[32px] font-bold text-ink">
              Save Your Seat
            </h2>
            <p className="font-sans text-base text-ink-muted leading-relaxed font-light">
              Submit your registration details below. This session is limited to leaders serious about becoming AI-first, to keep the room sharp and interactive.
            </p>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6 text-left bg-[#F7F4EF]/40 p-8 md:p-10 border border-gold/15 shadow-sm rounded-[2px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="mc-name" className="block text-[13px] font-semibold text-teal capitalize tracking-wide">
                    Full Name
                  </label>
                  <input
                    id="mc-name"
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-ink/15 focus:border-teal bg-white text-ink text-[15px] focus-visible:outline-none rounded-[2px]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mc-email" className="block text-[13px] font-semibold text-teal capitalize tracking-wide">
                    Email
                  </label>
                  <input
                    id="mc-email"
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-ink/15 focus:border-teal bg-white text-ink text-[15px] focus-visible:outline-none rounded-[2px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="mc-company" className="block text-[13px] font-semibold text-teal capitalize tracking-wide">
                    Organization <span className="text-ink-muted/60 text-xs font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="mc-company"
                    type="text"
                    placeholder="Organization (optional)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 border border-ink/15 focus:border-teal bg-white text-ink text-[15px] focus-visible:outline-none rounded-[2px]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mc-role" className="block text-[13px] font-semibold text-teal capitalize tracking-wide">
                    Your Title / Role <span className="text-ink-muted/60 text-xs font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="mc-role"
                    type="text"
                    placeholder="Your Title / Role (optional)"
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
                  className="w-full py-4 text-center text-sm font-bold capitalize tracking-wider"
                >
                  {isSubmitting ? "Processing Reservation..." : "Save My Seat →"}
                </InteractiveButton>
              </div>

              <p className="text-center text-[11px] text-ink-faint">
                Conducted with absolute confidentiality. No marketing spam, guaranteed.
              </p>
            </form>
          ) : (
            <div className="bg-[#F7F4EF]/50 p-10 md:p-12 border border-gold/15 text-left space-y-10 rounded-[2px]">
              
              <div className="space-y-4 border-b border-gold/10 pb-8">
                <div className="w-12 h-12 text-teal border border-teal/20 flex items-center justify-center mb-6">
                  <Check size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl font-bold text-ink leading-tight">You're In.</h3>
                <p className="font-sans text-[16px] text-ink-muted leading-relaxed font-light">
                  Your seat for &ldquo;Become The Leader Your Organization Needs In The Age Of AI&rdquo; is saved.
                </p>
                <div className="bg-white px-5 py-4 border-l-2 border-gold flex items-center gap-3 font-serif text-[15px] text-ink mt-6 font-bold shadow-sm">
                  <span>17 July 2026 · 12 PM Eastern Time · 90 minutes</span>
                </div>
              </div>

              {/* Calendar add block */}
              <div className="space-y-6">
                <p className="font-sans font-bold text-xs text-gold uppercase tracking-wider">Never Miss It. Add To Your Calendar.</p>
                <div className="grid grid-cols-2 gap-4">
                  <a href={calendarUrlGoogle} target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-white hover:bg-gray-50 border border-gold/15 text-center text-xs font-semibold text-ink transition-colors rounded-[2px]">
                    Add to Google Calendar
                  </a>
                  <a href={calendarUrlApple} className="px-4 py-3 bg-white hover:bg-gray-50 border border-gold/15 text-center text-xs font-semibold text-ink transition-colors rounded-[2px]">
                    Add to Apple Calendar (iCal)
                  </a>
                  <a href={calendarUrlOutlook} target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-white hover:bg-gray-50 border border-gold/15 text-center text-xs font-semibold text-ink transition-colors rounded-[2px]">
                    Add to Outlook
                  </a>
                  <a href={calendarUrlYahoo} target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-white hover:bg-gray-50 border border-gold/15 text-center text-xs font-semibold text-ink transition-colors rounded-[2px]">
                    Add to Yahoo Calendar
                  </a>
                </div>
              </div>

              {/* What Happens Next info list */}
              <div className="space-y-6 pt-6 border-t border-gold/10">
                <h4 className="font-serif text-lg font-bold text-ink">What Happens Next</h4>
                <ul className="space-y-3 font-sans text-sm text-ink-muted leading-relaxed font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-0.5">●</span>
                    <span>You'll get a confirmation email right now.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-0.5">●</span>
                    <span>You'll get a reminder 24 hours before, and again 1 hour before.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-0.5">●</span>
                    <span>Come ready to be honest with yourself. This works best live, not as a replay.</span>
                  </li>
                </ul>
              </div>

              {/* Cohort Teaser block */}
              <div className="p-6 bg-ink border border-gold/20 text-white rounded-[2px] space-y-2">
                <span className="font-sans font-bold text-[10px] text-gold uppercase tracking-widest">Priority Access</span>
                <p className="font-serif text-sm font-medium leading-relaxed text-off-white/95">
                  Seats for The Forward Leader Accelerator open to this room first, right after the session.
                </p>
              </div>

              {/* Secondary CTA bring a friend */}
              <div className="space-y-4 pt-8 border-t border-gold/10">
                <h4 className="font-serif text-xl font-bold text-ink">Know A Leader About To Be Left Behind?</h4>
                <p className="font-sans text-[14px] text-ink-muted leading-relaxed font-light">
                  Bring them with you. The leaders who make this shift are rarely the ones who make it alone.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="text"
                    readOnly
                    value={currentRegistrationUrl}
                    onClick={(e) => (e.target as HTMLInputElement).select()}
                    className="w-full px-3 py-2 bg-white border border-gold/20 text-xs text-ink font-mono focus-visible:outline-none rounded-[2px]"
                  />
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(currentRegistrationUrl);
                      alert("Registration link copied to clipboard!");
                    }}
                    className="px-4 py-2 bg-teal text-white hover:bg-teal-dark text-xs font-semibold shrink-0 transition-colors rounded-[2px]"
                  >
                    Copy Link
                  </button>
                </div>
              </div>

              <div className="pt-6 text-center border-t border-gold/10">
                <p className="font-serif text-base italic text-gold font-bold">See you on the 17th. &mdash; Pan</p>
              </div>

            </div>
          )}
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section id="faq" className="relative bg-[#F7F4EF]/30 py-24 md:py-32 overflow-hidden border-t border-gold/10">
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
              <span className="font-sans font-medium text-xs text-gold capitalize tracking-[0.2em] block mb-3">
                Common Questions
              </span>
              <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-ink leading-none">
                FAQ
              </h2>
            </div>
          </ScrollReveal>

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
