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
      question: "How is this different from hiring an AI consultant?",
      answer: "Traditional consultants sell armies of junior developers to write dense PowerPoint decks and build theoretical prototypes. I operate solo as a direct strategy and advisory advisor for C-suite leaders. I help construct governance, secure alignment, and ensure strategy coordinates with real-life balance sheets before budgets are signed, rather than writing reports.",
    },
    {
      id: 2,
      question: "What do I actually get from working with Pan?",
      answer: "You get immediate senior-level clarity. Outputs include a concrete board-approved AI Alignment Roadmap, operational risk-mitigation rules, customized executive alignment sessions, and raw direct feedback regarding which technology budget lines are actually generating ROI vs speculative waste.",
    },
    {
      id: 3,
      question: "How long does an engagement typically take?",
      answer: "Engagements are designed around speed and absolute concentration. A standard Diagnostic is performed and debriefed within 2 consecutive weeks. Bespoke strategy alignment planning and operational integration cycles typically span 6 to 12 weeks of structured partnership.",
    },
    {
      id: 4,
      question: "What industries do you work with?",
      answer: "My advisory practices specialize heavily inside highly regulated environments, primarily Financial Services, Insurance, Enterprise SaaS, and high-growth technology platforms. These are reputation-sensitive spaces that require absolute rigor, compliance safeguards, and bulletproof security.",
    },
    {
      id: 5,
      question: "Do I need to have an AI strategy already?",
      answer: "No. In fact, starting from a blank page is frequently more efficient because it saves the C-suite from undoing uncoordinated vendor software experiments or expensive architectural miscalculations. We install the proper structural principles from day one.",
    },
    {
      id: 6,
      question: "What is the AI Alignment Index?",
      answer: "It is a proprietary 15-point corporate maturity matrix that scales across 5 key categories (Strategy, Risk, Speed, Adoption, ROI). It isolates high-vulnerability operational blindspots, giving you a defensible strategic rating backed by actionable direction.",
    },
    {
      id: 7,
      question: "How do I know if my organization is ready?",
      answer: "If you are allocating capital into corporate AI tools today but cannot measure operational margin expansions or employee hour reductions, or if you suspect your workers are inputting protected trade data into consumer tools without governance lines, your organization is ready and needs immediate structuring.",
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
    <section id="faq" className="relative bg-canvas py-12 md:py-16 overflow-hidden">
      
      {/* Inline SVG faint topographic contour lines pattern */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo-contour" width="200" height="150" patternUnits="userSpaceOnUse">
              {/* Wavy landscape contours */}
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
              Before the call.
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
