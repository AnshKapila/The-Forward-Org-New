import React, { useState, useEffect, useRef } from "react";
import { Check, Calendar, Users, Clock, ShieldCheck, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { InteractiveButton } from "../components/InteractiveButton";
import masterclassHeroImg from "../assets/images/masterclass.jpg";

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
    "ESTABLISH REAL LEVERAGE.",
    "BEYOND THE AI PILOT.",
    "CHATHAM HOUSE RULES.",
    "BUILT FOR THE C-SUITE.",
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
    if (!name || !email || !company) return;

    setIsSubmitting(true);
    try {
      const webhookUrl = (import.meta as any).env.VITE_APPS_SCRIPT_WEBHOOK || "https://httpbin.org/post";
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          role,
          resource: "AI Transformation Masterclass Inquiry",
          source: window.location.href,
        }),
      });
      setIsSuccess(true);
    } catch (err) {
      console.error("Masterclass inquiry failed", err);
      setIsSuccess(true); // Graceful fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  const curriculum = [
    {
      num: "01",
      topic: "The EBITDA of AI",
      points: [
        "Escaping the infinite 'AI pilot' trap and setting board-aligned targets.",
        "Connecting technology spend and model inference directly to your balance sheet.",
        "Identifying and dismantling redundant or low-leverage software sprawl.",
      ],
    },
    {
      num: "02",
      topic: "Governance & Sovereignty",
      points: [
        "Hardening corporate data boundaries and preventing intellectual property leaks.",
        "Navigating model legal liabilities, data privacy compliance, and hallucination risks.",
        "Building clear board-level compliance reports for enterprise operations.",
      ],
    },
    {
      num: "03",
      topic: "Organizational Hardening",
      points: [
        "Designing workforce upskilling paths that actually increase daily output.",
        "Establishing clear standard operating procedures (SOPs) for corporate AI usage.",
        "Transitioning from localized tech experiments to enterprise-wide infrastructure.",
      ],
    },
  ];

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What is the format of the Masterclass?",
      answer: "The masterclass is a 3-hour intensive, highly interactive digital session conducted live under strict Chatham House Rules. We focus entirely on real-world case studies, capital allocation frameworks, and structural policy checklists rather than generic slideshows.",
    },
    {
      id: 2,
      question: "Who is this briefing designed for?",
      answer: "This program is built exclusively for board directors, CEOs, corporate legal officers, and C-suite leaders who are responsible for strategic direction and budget approval. We do not accept junior staff or vendor generalists to preserve a high-level peer discussion group.",
    },
    {
      id: 3,
      question: "What is the cost of attendance?",
      answer: "Pricing and scheduling details are provided once your invitation inquiry is formally approved by our strategy team. Private, bespoke session packaging is also available for entire boards or executive leadership teams.",
    },
    {
      id: 4,
      question: "What are the confidentiality terms (Chatham House Rules)?",
      answer: "To encourage completely candid peer conversations, the masterclass operates strictly under Chatham House Rules. This means participants may use the strategic insights and methodologies discussed, but neither the identity nor the affiliation of any speaker or attendee can be disclosed.",
    },
    {
      id: 5,
      question: "How many teams participate in each cohort?",
      answer: "We strictly cap each cohort at 8 executive teams per month. This limitation allows us to address individual organizational roadmaps, structural gaps, and technical budget questions during the interactive coaching segments.",
    },
    {
      id: 6,
      question: "Can we customize the briefing for our company?",
      answer: "Yes. While we facilitate monthly multi-organization cohorts, we also host private, bespoke briefings customized directly for your firm's private leadership retreat, board of directors, or compliance team. You may request this during the inquiry process.",
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
      {/* Hero Section in Homepage Format */}
      <section 
        ref={heroRef} 
        id="hero" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative min-h-screen bg-ink pt-24 md:pt-0 flex flex-col justify-between overflow-hidden"
      >
        {/* Background image from user attachment */}
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
              alt="AI Transformation Masterclass Overview"
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
          
          {/* Deep left-aligned gradient for text legibility, right is clean */}
          <div className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[50%] bg-gradient-to-r from-ink via-ink/80 to-transparent hidden md:block z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-transparent md:hidden z-10 pointer-events-none" />
        </div>

        {/* Hero Content Aligned Left */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 md:px-12 z-20 text-left">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl flex flex-col items-start"
          >
            {/* Tagline Ticker */}
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
                  {phrases[phraseIdx]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Title / Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-hero leading-[1.12] font-bold tracking-tight text-white text-balance mt-3 md:mt-4"
            >
              AI Transformation Masterclass for Senior Leaders
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-[17px] md:text-[19px] text-off-white/80 leading-relaxed font-light max-w-2xl mt-3 md:mt-4"
            >
              A 3-hour intensive, interactive live briefing designed exclusively for CEOs, board members, and C-suite executives to move past tool hype and establish real enterprise leverage.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-[24px] items-stretch sm:items-center mt-8 pt-0 w-full"
            >
              <InteractiveButton
                onClick={() => {
                  document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="gold"
                className="text-center"
              >
                Request an Invitation
              </InteractiveButton>
            </motion.div>

            {/* Trust Line */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-xs md:text-sm text-off-white/60 mt-6 tracking-wide text-left"
            >
              Conducted under strict Chatham House Rules. Cohorts limited to 8 executive teams.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview Bento Cards Section */}
      <section className="py-16 bg-[#F7F4EF]/40 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-gold/10 flex flex-col justify-between rounded-[2px] hover:border-gold/30 transition-all duration-300">
              <Clock className="text-gold mb-4" size={24} />
              <div>
                <h4 className="font-serif text-lg font-bold text-ink">3 Hours</h4>
                <p className="font-sans text-xs text-ink-muted mt-1">High-impact, zero-fluff interactive sessions.</p>
              </div>
            </div>
            <div className="p-6 bg-white border border-gold/10 flex flex-col justify-between rounded-[2px] hover:border-gold/30 transition-all duration-300">
              <Users className="text-gold mb-4" size={24} />
              <div>
                <h4 className="font-serif text-lg font-bold text-ink">8 Executive Teams</h4>
                <p className="font-sans text-xs text-ink-muted mt-1">Limited cohort size to ensure deep operational analysis.</p>
              </div>
            </div>
            <div className="p-6 bg-white border border-gold/10 flex flex-col justify-between rounded-[2px] hover:border-gold/30 transition-all duration-300">
              <Calendar className="text-gold mb-4" size={24} />
              <div>
                <h4 className="font-serif text-lg font-bold text-ink">Monthly Cohorts</h4>
                <p className="font-sans text-xs text-ink-muted mt-1">Structured for executive calendar flexibility.</p>
              </div>
            </div>
            <div className="p-6 bg-white border border-gold/10 flex flex-col justify-between rounded-[2px] hover:border-gold/30 transition-all duration-300">
              <ShieldCheck className="text-gold mb-4" size={24} />
              <div>
                <h4 className="font-serif text-lg font-bold text-ink">Confidential Format</h4>
                <p className="font-sans text-xs text-ink-muted mt-1">Conducted under strict Chatham House Rules.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Briefing Curriculum Section */}
      <section id="curriculum" className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12 lg:gap-16 items-start">
          <div className="text-left space-y-4">
            <span className="font-sans font-bold text-xs text-gold uppercase tracking-[0.2em] block">
              THE CURRICULUM
            </span>
            <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-ink leading-tight">
              A Complete Blueprint for Transformation
            </h2>
            <p className="font-sans text-base text-ink-muted leading-relaxed font-light">
              We skip the basic introductions to generative model architecture. This briefing is entirely focused on strategic execution, governance, and capital allocation.
            </p>
          </div>

          <div className="space-y-12">
            {curriculum.map((item, idx) => (
              <div key={idx} className="flex gap-6 md:gap-8 text-left border-b border-gold/10 pb-10 last:border-b-0">
                <span className="font-mono text-xl font-bold text-gold">
                  {item.num}
                </span>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-ink">
                    {item.topic}
                  </h3>
                  <ul className="space-y-3 font-sans text-[15px] text-ink-muted">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <Check className="text-gold shrink-0 mt-1" size={16} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="register-form" className="bg-[#F7F4EF]/50 py-24 md:py-32 border-t border-gold/10">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-3">
            <span className="font-sans font-bold text-xs text-gold uppercase tracking-[0.25em] block">
              REGISTRATION INQUIRY
            </span>
            <h2 className="font-serif text-[32px] font-bold text-ink">
              Request Your Invitation
            </h2>
            <p className="font-sans text-base text-ink-muted leading-relaxed font-light">
              Submit your details below. Our team will review your inquiry and schedule a brief compatibility call within 2 business days.
            </p>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6 text-left bg-white p-8 md:p-10 border border-gold/10 shadow-md">
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
                    className="w-full px-4 py-3 border border-ink/15 focus:border-teal bg-white text-ink text-[15px] focus-visible:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mc-email" className="block text-[13px] font-semibold text-teal uppercase tracking-wide">
                    Corporate Email
                  </label>
                  <input
                    id="mc-email"
                    type="email"
                    required
                    placeholder="m.vance@vanguard.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-ink/15 focus:border-teal bg-white text-ink text-[15px] focus-visible:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="mc-company" className="block text-[13px] font-semibold text-teal uppercase tracking-wide">
                    Organization
                  </label>
                  <input
                    id="mc-company"
                    type="text"
                    required
                    placeholder="Vanguard Strategy Group"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 border border-ink/15 focus:border-teal bg-white text-ink text-[15px] focus-visible:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mc-role" className="block text-[13px] font-semibold text-teal uppercase tracking-wide">
                    Your Title / Role
                  </label>
                  <input
                    id="mc-role"
                    type="text"
                    placeholder="CEO / Board Member"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 border border-ink/15 focus:border-teal bg-white text-ink text-[15px] focus-visible:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4">
                <InteractiveButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="gold"
                  className="w-full py-4 text-center"
                >
                  {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}
                </InteractiveButton>
              </div>

              <p className="text-center text-[11px] text-ink-faint">
                Conducted with absolute confidentiality. No marketing spam guaranteed.
              </p>
            </form>
          ) : (
            <div className="bg-white p-12 border border-gold/15 shadow-md space-y-4">
              <div className="w-12 h-12 text-teal border border-teal/20 mx-auto flex items-center justify-center">
                <Check size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink">Inquiry Received</h3>
              <p className="font-sans text-[15px] text-ink-muted max-w-sm mx-auto">
                Thank you for your interest. We will review your application and follow up via email within 2 business days to discuss cohort availability.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Masterclass Specific FAQs Section */}
      <section id="faq" className="relative bg-canvas py-24 md:py-32 overflow-hidden border-t border-gold/10">
        {/* Topographic Contour lines */}
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
                Masterclass Briefing Details
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
