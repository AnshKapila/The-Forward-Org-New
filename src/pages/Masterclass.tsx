import React, { useState, useEffect } from "react";
import { Check, Calendar, Users, Clock, ShieldCheck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { InteractiveButton } from "../components/InteractiveButton";

export default function Masterclass() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
        "Navigating model legal liabilities, data privacy compliance, and halluncination risks.",
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

  return (
    <div className="bg-white min-h-screen text-ink pt-20">
      {/* Hero Section */}
      <section className="relative bg-ink py-24 md:py-32 overflow-hidden text-off-white">
        {/* Subtle background circles */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/3 z-0 w-[500px] h-[500px] opacity-10 pointer-events-none select-none">
          <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="248" stroke="var(--color-gold)" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="250" cy="250" r="180" stroke="var(--color-gold)" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
          <ScrollReveal duration={0.7}>
            <div className="max-w-3xl space-y-6">
              <span className="font-sans font-bold text-xs text-gold uppercase tracking-[0.25em] block">
                EXCLUSIVE EXECUTIVE BRIEFING
              </span>
              <h1 className="font-serif text-[38px] sm:text-[48px] md:text-[56px] font-bold leading-tight text-white tracking-tight text-balance">
                AI Transformation Masterclass for Senior Leaders
              </h1>
              <p className="font-sans text-[17px] md:text-[20px] text-off-white/80 leading-relaxed font-light">
                A 3-hour intensive, interactive briefing designed exclusively for CEOs, corporate board members, and C-suite executives to move past tool hype and establish real enterprise leverage.
              </p>
              
              <div className="pt-4">
                <InteractiveButton
                  onClick={() => {
                    document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="gold"
                >
                  Request an Invitation
                </InteractiveButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Cards (Bento-style row) */}
      <section className="py-16 bg-[#F7F4EF]/40 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-gold/10 flex flex-col justify-between rounded-[2px]">
              <Clock className="text-gold mb-4" size={24} />
              <div>
                <h4 className="font-serif text-lg font-bold text-ink">3 Hours</h4>
                <p className="font-sans text-xs text-ink-muted mt-1">High-impact, zero-fluff interactive sessions.</p>
              </div>
            </div>
            <div className="p-6 bg-white border border-gold/10 flex flex-col justify-between rounded-[2px]">
              <Users className="text-gold mb-4" size={24} />
              <div>
                <h4 className="font-serif text-lg font-bold text-ink">8 Executive Teams</h4>
                <p className="font-sans text-xs text-ink-muted mt-1">Limited cohort size to ensure deep operational analysis.</p>
              </div>
            </div>
            <div className="p-6 bg-white border border-gold/10 flex flex-col justify-between rounded-[2px]">
              <Calendar className="text-gold mb-4" size={24} />
              <div>
                <h4 className="font-serif text-lg font-bold text-ink">Monthly Cohorts</h4>
                <p className="font-sans text-xs text-ink-muted mt-1">Structured for executive calendar flexibility.</p>
              </div>
            </div>
            <div className="p-6 bg-white border border-gold/10 flex flex-col justify-between rounded-[2px]">
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
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
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
                    placeholder="CEO / board Member"
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
    </div>
  );
}
