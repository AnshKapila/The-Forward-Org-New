import { useState, useEffect } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export function FAQ() {
  const [clickedId, setClickedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What makes your approach different from a typical AI consultant?",
      answer: "Most AI consultants focus on technology implementation. We focus on the organizational conditions that determine whether AI succeeds or fails: strategy, governance, leadership alignment, workforce adoption, and measurable ROI. We have also built AI inside the kinds of organizations we now advise, which means our frameworks come from real enterprise experience, not theory.",
    },
    {
      id: 2,
      question: "Do we need to have an AI strategy already?",
      answer: "No. In fact, starting without a fixed strategy often produces better results. We begin by diagnosing your organization's current reality (what is working, what is not, and where the highest-value opportunities actually are). The strategy emerges from that diagnosis, not the other way around.",
    },
    {
      id: 3,
      question: "What industries do you work with?",
      answer: "Our work is concentrated in regulated industries, such as financial services, insurance, and healthcare, as well as enterprise technology and high-growth companies. These are environments where the stakes are high, governance matters, and the gap between AI experimentation and actual transformation is most costly. That is where our experience is deepest.",
    },
    {
      id: 4,
      question: "What do we actually get from working with you?",
      answer: "Depending on the engagement, you get a clear organizational AI diagnostic, a prioritized transformation roadmap, governance frameworks your compliance and legal teams can work with, leadership alignment sessions, and adoption strategies designed for your specific organizational context. The deliverable is always clarity and a plan, not a report that sits on a shelf.",
    },
    {
      id: 5,
      question: "What is the AI Alignment Index and why should I take it?",
      answer: "The AI Alignment Index is a 15-question organizational diagnostic that measures your maturity across five dimensions: strategy, governance, leadership alignment, workforce adoption, and ROI. It takes three minutes and produces a clear picture of where your organization is strong, where it is exposed, and what to address first. It is the fastest way to move from uncertainty to a specific, prioritized starting point.",
    },
    {
      id: 6,
      question: "How long does a typical engagement take?",
      answer: "Initial diagnostic and strategy engagements typically run four to eight weeks. Longer transformation partnerships vary by organizational scope and complexity. We structure every engagement around your timeline and decision-making cadence, rather than a fixed consulting methodology.",
    },
    {
      id: 7,
      question: "How do we know if our organization is ready?",
      answer: "If your leadership team is asking questions about AI strategy, governance, or adoption, and you do not yet have clear answers, you are ready. Readiness is not about how advanced your AI tools are. It is about whether your organization has the strategic clarity and organizational conditions to turn those tools into real business outcomes. Take the index to find out where you stand.",
    },
  ];

  const toggleItem = (id: number) => {
    setClickedId(clickedId === id ? null : id);
  };

  const handleMouseEnterItem = (id: number) => {
    if (clickedId !== null && clickedId !== id) {
      setClickedId(null);
    }
    setHoveredId(id);
  };

  const handleMouseLeaveItem = (id: number) => {
    setHoveredId((prev) => (prev === id ? null : prev));
  };

  return (
    <section id="faq" className="relative bg-white py-8 md:py-12 lg:py-16 xl:py-[60px] 2xl:py-[80px] overflow-hidden">
      
      {/* Blueprint grid design background matching vision statement structure */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] select-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="faq-grid" width="120" height="120" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="120" y2="0" stroke="#1A3C34" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="120" stroke="#1A3C34" strokeWidth="1" />
              <line x1="40" y1="0" x2="40" y2="120" stroke="#1A3C34" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="80" y1="0" x2="80" y2="120" stroke="#1A3C34" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="0" y1="40" x2="120" y2="40" stroke="#1A3C34" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="0" y1="80" x2="120" y2="80" stroke="#1A3C34" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="0" y1="0" x2="120" y2="120" stroke="#1A3C34" strokeWidth="0.5" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-grid)" />
        </svg>
      </div>

      <div className="w-full px-6 lg:px-[120px] relative z-10 text-left">
        <ScrollReveal duration={0.6}>
          <div className="mb-16">
            <span className="font-sans font-medium text-xs text-gold capitalize tracking-[0.2em] block mb-3">
              Common Questions
            </span>
            <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-ink leading-tight">
              What leaders ask us <br className="hidden sm:inline" />before working together.
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
                  onMouseEnter={() => handleMouseEnterItem(item.id)}
                  onMouseLeave={() => handleMouseLeaveItem(item.id)}
                >
                  <StaggerItem index={idx}>
                    {/* Collapsible Trigger Row */}
                    <button
                      onClick={() => toggleItem(item.id)}
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

                      {/* Customized rotating chevron down */}
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

                    {/* Accordion answer panel with grid-template-rows: (0fr -> 1fr) animation */}
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
  );
}
