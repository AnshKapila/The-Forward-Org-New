import React, { useState } from "react";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { useLocation } from "wouter";
import { InteractiveButton } from "../components/InteractiveButton";

interface Question {
  id: number;
  category: string;
  question: string;
  options: {
    label: string;
    points: number;
    text: string;
  }[];
}

export default function Scorecard() {
  const [location, setLocation] = useLocation();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      category: "STRATEGY ALIGNMENT",
      question: "Does your executive team share a single, precise definition of how AI will defend or expand your core business margins over the next 18 months?",
      options: [
        { label: "A", points: 20, text: "Yes. Clear objectives are bound to margin expanders, and the whole leadership team stands unified on the roadmap." },
        { label: "B", points: 10, text: "Partial. Department heads are launching separate initiatives, but we lack a unified, board-approved business thesis." },
        { label: "C", points: 0, text: "Fragmented. Our board has requested an AI policy, but we have no formal, cohesive long-term corporate roadmap." },
      ],
    },
    {
      id: 2,
      category: "COMPLIANCE & RISK",
      question: "Are your employees operating under a concrete, written AI governance structure that is actively monitored to prevent compliance exposure?",
      options: [
        { label: "A", points: 20, text: "Comprehensive. Strict data-filtering protocols are in place, with active tooling surveillance and regulatory compliance check-gates." },
        { label: "B", points: 10, text: "Basic policy is drafted, but enforcement is mostly trust-based, and we do not monitor live employee endpoints closely." },
        { label: "C", points: 0, text: "Exposed. Employees likely use public consumer services (ChatGPT/Claude) daily with sensitive business data, with no active tracking." },
      ],
    },
    {
      id: 3,
      category: "DECISION VELOCITY",
      question: "Can your organization transition a verified AI prototype or workflow into standard enterprise production in under 6 weeks?",
      options: [
        { label: "A", points: 20, text: "Yes. Our engineering pipelines, security audits, and deployment frameworks are highly structured and agile." },
        { label: "B", points: 10, text: "Slow. We build pilots easily, but actual deployment suffers from operational inertia, security backlogs, or compliance delays." },
        { label: "C", points: 0, text: "Stalled. We have not successfully deployed any custom AI workflows beyond standard third-party SaaS features." },
      ],
    },
    {
      id: 4,
      category: "ORGANIZATION & ADOPTION",
      question: "Has your operational front-line adopted custom AI habits with structured workflows, or is it limited to experimental individual use?",
      options: [
        { label: "A", points: 20, text: "Structured. Workflows are redesigned around AI tools, backed by formal corporate upskilling programs and verified adoption KPIs." },
        { label: "B", points: 10, text: "Occasional. Select employees use prompts individually, but our core business processes remain largely manual and unchanged." },
        { label: "C", points: 0, text: "Inextricable. We do not have structured guidance, training, or metrics tracking how or if work is being enhanced." },
      ],
    },
    {
      id: 5,
      category: "INVESTMENT ROI",
      question: "Are you currently tracking and demonstrating concrete financial output or quantifiable velocity returns from your AI budget?",
      options: [
        { label: "A", points: 20, text: "Yes. We track specific operational hour reductions, margin improvements, or revenue accelerators mapped to the bottom line." },
        { label: "B", points: 10, text: "We have intangible productivity boosts, but we cannot trace return on AI investment back to any balance-sheet line item." },
        { label: "C", points: 0, text: "No. Our current AI investments are treated as a speculative cost centre with zero structured output metrics." },
      ],
    },
  ];

  const handleSelectOptionLocal = (optionIdx: number) => {
    setSelectedOptionIndex(optionIdx);
  };

  const handleNext = () => {
    if (selectedOptionIndex === null) return;
    const points = questions[currentIdx].options[selectedOptionIndex].points;
    const nextAnswers = [...answers, points];
    setAnswers(nextAnswers);
    setSelectedOptionIndex(null);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setAnswers([]);
    setCurrentIdx(0);
    setSelectedOptionIndex(null);
    setQuizComplete(false);
  };

  const handleBack = () => {
    if (currentIdx > 0) {
      const nextAnswers = [...answers];
      nextAnswers.pop();
      setAnswers(nextAnswers);
      setSelectedOptionIndex(null);
      setCurrentIdx(currentIdx - 1);
    }
  };

  // Score Analysis
  const totalScore = answers.reduce((sum, val) => sum + val, 0);
  let rating = "";
  let feedback = "";
  let gapFocus = "";

  if (totalScore >= 80) {
    rating = "Vanguard Aligned";
    feedback = "Your organization exhibits strong architectural maturity. Your strategic foundations, risk limits, and structural governance are positioned to scale and defend margins.";
    gapFocus = "Refinement of operational execution margins and exploring custom intellectual property pipelines.";
  } else if (totalScore >= 50) {
    rating = "Operational Disconnect";
    feedback = "While you have made active, positive preliminary moves, there is a distinct gap between the tools and the quantifiable business outcomes. Strategy or frontline adoption requires immediate structuring.";
    gapFocus = "Establishing clear bottom-line ROI metrics and unified executive alignment regarding compliance.";
  } else {
    rating = "Highly Vulnerable";
    feedback = "Your AI efforts are fragmented, ad-hoc, and likely exposing you to severe governance and compliance risks. Without cohesive leadership alignment, value is draining rapidly.";
    gapFocus = "Drafting standard governance guidelines, securing enterprise endpoints, and formalizing a board-approved strategy.";
  }

  const handleScrollToCall = () => {
    setLocation("/#book-a-call");
    setTimeout(() => {
      const el = document.getElementById("book-a-call");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="bg-white min-h-screen text-ink relative select-none">
      
      {!quizComplete ? (
        /* SURVEY CONTAINER TAKES EXACTLY 100VH VERTICALLY CENTERED */
        <div className="w-full h-screen overflow-hidden flex flex-col justify-center items-center px-4 md:px-6 relative bg-[#F7F4EF]/30">
          
          {/* Progress Bar fixed at top of viewport */}
          <div className="fixed top-0 left-0 w-full h-[3px] bg-[#1A3C34] z-50">
            <div 
              className="h-full bg-[#C9A55A] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Right aligned Question tracking label below progress track */}
          <div className="fixed top-[3px] right-4 md:right-8 py-2 z-40">
            <span className="font-sans text-[12px] text-[#1A3C34]/65 font-medium">
              Question {currentIdx + 1} of {questions.length}
            </span>
          </div>

          {/* Cancel / Back absolute floating menu */}
          <button
            onClick={currentIdx === 0 ? () => setLocation("/index") : handleBack}
            className="absolute top-5 left-4 md:left-8 z-40 text-xs font-sans uppercase tracking-wider flex items-center gap-1.5 cursor-pointer text-[#1A3C34] hover:text-[#C9A55A] transition-colors"
          >
            <ArrowLeft size={14} /> {currentIdx === 0 ? "Cancel" : "Back"}
          </button>

          {/* Card core contents centered */}
          <div className="max-w-[620px] w-full flex flex-col justify-center gap-4 sm:gap-6 py-6 pb-24 md:pb-6 relative h-full">
            
            {/* Category of the Question */}
            <div className="text-left">
              <span className="font-sans font-extrabold text-[11px] sm:text-xs text-[#1A3C34] uppercase tracking-widest block mb-1">
                {questions[currentIdx].category}
              </span>
              <h3 className="font-serif text-[18px] sm:text-[22px] md:text-[26px] font-bold text-ink leading-tight sm:leading-snug">
                {questions[currentIdx].question}
              </h3>
            </div>

            {/* Answer Options list */}
            <div className="space-y-3 sm:space-y-4 text-left">
              {questions[currentIdx].options.map((opt, i) => {
                const isSelected = selectedOptionIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOptionLocal(i)}
                    className={`w-full text-left p-3.5 sm:p-5 border cursor-pointer transition-all duration-200 flex items-start gap-3 sm:gap-4 rounded-none ${
                      isSelected
                        ? "border-[#1A3C34] bg-[#1A3C34]/5 shadow-[0_0_0_3px_rgba(26,60,52,0.1)]"
                        : "border-[#D4C9B8] bg-white hover:border-[#1A3C34]/60 hover:bg-[#1A3C34]/2"
                    }`}
                  >
                    <span className={`w-6 h-6 shrink-0 rounded-full border text-xs flex items-center justify-center font-serif bg-canvas/40 font-bold mt-0.5 ${
                      isSelected ? "border-[#1A3C34] text-[#1A3C34] bg-white" : "border-[#1A3C34]/40 text-[#1A3C34]/70"
                    }`}>
                      {opt.label}
                    </span>
                    <span className="font-sans text-[13px] sm:text-[15px] text-ink leading-relaxed">
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Conditionally appearing "Next" logic button with mobile centering fixed */}
            {selectedOptionIndex !== null && (
              <div className="w-full mt-4 md:relative md:bottom-auto fixed bottom-0 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 border-t md:border-t-0 border-ink/10 flex justify-end z-30 animate-fade-in shadow-md md:shadow-none pb-safe">
                <InteractiveButton 
                  onClick={handleNext}
                  variant="gold" 
                  className="w-full md:w-auto text-center py-3.5 md:py-3 px-8"
                  id="scorecard-next-button"
                >
                  Next Question
                </InteractiveButton>
              </div>
            )}

          </div>
        </div>
      ) : (
        /* RESULTS SCREEN (Ordinary scrolling layout for readability) */
        <div className="min-h-screen py-16 px-4 md:px-6 bg-[#F7F4EF]/40 flex items-center justify-center">
          <div className="max-w-[720px] w-full bg-[#F7F4EF] border border-[#E8D5B5] p-6 sm:p-8 md:p-12 text-left rounded-sm shadow-sm space-y-8">
            <div className="text-center space-y-4 pb-8 border-b border-ink/10">
              <span className="font-sans font-semibold text-xs text-[#1A3C34] uppercase tracking-[0.2em] block">
                YOUR DIAGNOSTIC SCORE
              </span>

              <div className="flex items-baseline justify-center gap-1.5">
                <span className="font-serif text-[72px] font-bold text-ink leading-none">
                  {totalScore}
                </span>
                <span className="font-serif text-2xl text-[#C9A55A]">/ 100</span>
              </div>

              <div className="inline-block px-4 py-1.5 border border-[#1A3C34] bg-[#1A3C34]/5 text-[#1A3C34] text-xs font-mono font-bold tracking-widest uppercase rounded-none">
                MATURITY RATING: {rating}
              </div>
            </div>

            {/* Feedback blocks */}
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-lg font-bold text-ink mb-2">Executive Assessment:</h4>
                <p className="font-sans text-[16px] leading-[1.65] text-ink-muted">
                  {feedback}
                </p>
              </div>

              <div className="p-5 bg-white border-l-2 border-[#C9A55A] space-y-1 rounded-none shadow-sm">
                <h5 className="font-mono text-xs text-[#C9A55A] font-bold uppercase tracking-wider">
                  PRIMARY GAP EXPOSURE KEY
                </h5>
                <p className="font-sans text-[15px] text-ink leading-relaxed">
                  Focus operations primarily on: <span className="text-[#1A3C34] font-semibold">{gapFocus}</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-ink/10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <InteractiveButton
                onClick={handleScrollToCall}
                variant="gold"
                className="shrink-0 text-center"
              >
                Book a Call to Review
              </InteractiveButton>

              <InteractiveButton
                onClick={handleRestart}
                variant="dark"
                className="shrink-0 text-center"
              >
                Reset Diagnostic
              </InteractiveButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
