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
      question: "What size organizations do you typically work with?",
      answer: "We work with mid-market to global enterprise organizations. Our frameworks are designed for organizations with complex structures, multiple stakeholders, and significant governance or regulatory requirements where getting AI wrong is highly expensive.",
    },
    {
      id: 2,
      question: "Do you build or implement the actual AI models?",
      answer: "No. We are strategic and organizational advisors. We help you design the strategy, align your leadership, build the governance frameworks, and prepare your workforce. We can help you vet and select technical vendors, but we do not do technical software development.",
    },
    {
      id: 3,
      question: "What is the EVOLVE™ framework?",
      answer: "EVOLVE™ is our trademarked operational framework for organizational AI maturity. It stands for: Evaluate, Visualize, Organize, Lead, Validate, Embody. Each stage is designed to systematically move an organization from isolated experiments to safe, scalable, and high-ROI AI adoption.",
    },
    {
      id: 4,
      question: "How long do your engagements typically last?",
      answer: "Our initial diagnostics and custom blueprints are typically delivered in 6 to 12 weeks. Advisory relationships are ongoing and structured on a quarterly or annual basis depending on your leadership needs.",
    },
    {
      id: 5,
      question: "How do we get started?",
      answer: "The best way to start is by discovering your AI Transformation Readiness Score through our short strategic diagnostic. Once you complete it, you can book a debrief session with Pan to review your results and discuss potential alignment.",
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
