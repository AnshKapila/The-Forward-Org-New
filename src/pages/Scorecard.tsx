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
        { label: "A", points: 20, text: "Comprehensive alignment. Executive leadership shares a single, board-approved roadmap with explicit margin targets." },
        { label: "B", points: 13, text: "Strategic focus. Department heads coordinate on key areas, though we lack a unified long-term business thesis." },
        { label: "C", points: 7, text: "Tactical experiments. Individual departments test basic AI tools without a central strategic framework." },
        { label: "D", points: 0, text: "No alignment. There is no strategic roadmap or board-level discussion about defending margins with AI." },
      ],
    },
    {
      id: 2,
      category: "COMPLIANCE & RISK",
      question: "Are your employees operating under a concrete, written AI governance structure that is actively monitored to prevent compliance exposure?",
      options: [
        { label: "A", points: 20, text: "Strict governance. Complete compliance guidelines are fully established, with active tooling and endpoint tracking." },
        { label: "B", points: 13, text: "Formal policy. A written guidelines document exists, but compliance is trust-based and remains unmonitored." },
        { label: "C", points: 7, text: "Ad-hoc rules. Employees are given oral directives on safety guidelines, but lack structured operational limits." },
        { label: "D", points: 0, text: "Completely exposed. No guidelines, screening, or rules exist, leaving sensitive enterprise data vulnerable." },
      ],
    },
    {
      id: 3,
      category: "DECISION VELOCITY",
      question: "Can your organization transition a verified AI prototype or workflow into standard enterprise production in under 6 weeks?",
      options: [
        { label: "A", points: 20, text: "Frictionless pipeline. Engineering pathways, compliance checkstands, and hosting architectures are built for rapid deployment." },
        { label: "B", points: 13, text: "Moderate flow. We scale production features occasionally, but backlogs, audits, or legal checks take multiple months." },
        { label: "C", points: 7, text: "Blocked pipeline. We build functional software pilots fast, but they stay stuck in approvals without going live." },
        { label: "D", points: 0, text: "No capabilities. We do not have structured workflows or engineers capable of deploying custom secure models." },
      ],
    },
    {
      id: 4,
      category: "ORGANIZATION & ADOPTION",
      question: "Has your operational front-line adopted custom AI habits with structured workflows, or is it limited to experimental individual use?",
      options: [
        { label: "A", points: 20, text: "Integrated routine. Workflows are fully redesigned around AI tools, backed by formal upskilling and adoption KPIs." },
        { label: "B", points: 13, text: "High active pockets. Selective, high-performance departments run daily integrations, but it is not company-wide." },
        { label: "C", points: 7, text: "Individually driven. Staff prompt standard web engines on their own, but workflows remain structurally unchanged." },
        { label: "D", points: 0, text: "No adoption. There are no guidelines, tooling support, training mechanisms, or awareness for front-line teams." },
      ],
    },
    {
      id: 5,
      category: "INVESTMENT ROI",
      question: "Are you currently tracking and demonstrating concrete financial output or quantifiable velocity returns from your AI budget?",
      options: [
        { label: "A", points: 20, text: "Direct measurement. We closely track bottom-line returns, accounting for direct labor-hours saved or revenue expansion." },
        { label: "B", points: 13, text: "Proxy variables. We monitor speed gains or qualitative outputs, but have yet to isolate improvements in balance sheets." },
        { label: "C", points: 7, text: "Subjective feelings. We gauge success through occasional employee surveys and general product satisfaction feedback." },
        { label: "D", points: 0, text: "No monitoring. AI expenses are handled as unmeasured cost centers with no structured metrics tracking ROI." },
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
        /* SURVEY CONTAINER FOR GLOBAL FIXED NAV BAR — FITS EXACTLY 100VH WITHOUT OVERFLOW */
        <div className="w-full h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center pt-24 pb-6 px-4 md:px-6 relative bg-[#F7F4EF]/30">
          
          {/* Header strip for controls to prevent colliding with the nav bar */}
          <div className="w-full max-w-[620px] mx-auto flex items-center justify-between mb-2">
            {/* Cancel / Back floating menu */}
            <button
              onClick={currentIdx === 0 ? () => setLocation("/index") : handleBack}
              className="text-xs font-sans uppercase tracking-wider flex items-center gap-1.5 cursor-pointer text-[#1A3C34] hover:text-[#C9A55A] transition-colors"
            >
              <ArrowLeft size={14} /> {currentIdx === 0 ? "Cancel" : "Back"}
            </button>

            {/* Right-aligned Question tracking label */}
            <span className="font-sans text-[12px] text-[#1A3C34]/65 font-medium">
              Question {currentIdx + 1} of {questions.length}
            </span>
          </div>

          {/* Progress Bar styled as a premium track spanning the width of the main content */}
          <div className="w-full max-w-[620px] mx-auto h-[3px] bg-[#1A3C34]/15 mb-4 relative">
            <div 
              className="absolute left-0 top-0 h-full bg-[#C9A55A] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Card core contents centered */}
          <div className="max-w-[620px] w-full flex flex-col gap-3 sm:gap-4 relative">
            
            {/* Category of the Question */}
            <div className="text-left">
              <span className="font-sans font-extrabold text-[10px] sm:text-[11px] text-[#1A3C34] uppercase tracking-widest block mb-0.5">
                {questions[currentIdx].category}
              </span>
              <h3 className="font-serif text-[16px] sm:text-[20px] md:text-[22px] font-bold text-ink leading-tight sm:leading-snug">
                {questions[currentIdx].question}
              </h3>
            </div>

            {/* Answer Options list */}
            <div className="space-y-2 sm:space-y-2.5 text-left">
              {questions[currentIdx].options.map((opt, i) => {
                const isSelected = selectedOptionIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOptionLocal(i)}
                    className={`w-full text-left p-2.5 sm:p-3 border cursor-pointer transition-all duration-150 flex items-start gap-3 rounded-none ${
                      isSelected
                        ? "border-[#1A3C34] bg-[#1A3C34]/5 shadow-[0_0_0_2px_rgba(26,60,52,0.08)]"
                        : "border-[#D4C9B8] bg-white hover:border-[#1A3C34]/60 hover:bg-[#1A3C34]/2"
                    }`}
                  >
                    <span className={`w-5 h-5 shrink-0 rounded-full border text-[11px] flex items-center justify-center font-serif bg-canvas/40 font-bold mt-0.5 ${
                      isSelected ? "border-[#1A3C34] text-[#1A3C34] bg-white" : "border-[#1A3C34]/40 text-[#1A3C34]/70"
                    }`}>
                      {opt.label}
                    </span>
                    <span className="font-sans text-[12px] sm:text-[13.5px] text-ink leading-relaxed">
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Footer Control Actions with fixed height to prevent layout shifts */}
            <div className="min-h-[44px] flex items-center justify-end mt-1">
              {selectedOptionIndex !== null ? (
                <InteractiveButton 
                  onClick={handleNext}
                  variant="gold" 
                  className="w-full md:w-auto text-center py-2 px-8 uppercase tracking-wider text-xs font-semibold"
                  id="scorecard-next-button"
                >
                  Next Question
                </InteractiveButton>
              ) : (
                <p className="text-xs font-sans text-ink-muted/50 italic text-right w-full select-none pr-1">
                  Select an option to proceed
                </p>
              )}
            </div>

          </div>
        </div>
      ) : (
        /* RESULTS SCREEN (Ordinary scrolling layout for readability with top navbar spacing) */
        <div className="min-h-screen pt-28 pb-16 px-4 md:px-6 bg-[#F7F4EF]/40 flex items-center justify-center">
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
