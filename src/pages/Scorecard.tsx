import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { useLocation } from "wouter";
import { InteractiveButton } from "../components/InteractiveButton";
import { motion } from "framer-motion";

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
  const [answers, setAnswers] = useState<(number | null)[]>(() => Array(15).fill(null));
  const [quizComplete, setQuizComplete] = useState(false);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const questions: Question[] = [
    {
      id: 1,
      category: "AI Strategy & Vision Clarity",
      question: "How would you describe your organization's current AI strategy?",
      options: [
        { label: "A", points: 1, text: "We have no formal AI strategy yet" },
        { label: "B", points: 2, text: "We have informal discussions but nothing documented" },
        { label: "C", points: 3, text: "We have a documented strategy but it isn't tied to specific business outcomes" },
        { label: "D", points: 4, text: "We have a clear strategy, tied to goals, with ownership assigned" },
      ],
    },
    {
      id: 2,
      category: "AI Strategy & Vision Clarity",
      question: "How is AI progress typically understood across your leadership team today?",
      options: [
        { label: "A", points: 1, text: "We don’t have a clear or consistent answer yet" },
        { label: "B", points: 2, text: "We highlight tools we’ve purchased or experimented with" },
        { label: "C", points: 3, text: "We share activity - pilots, teams, and initiatives in motion" },
        { label: "D", points: 4, text: "We demonstrate measurable business outcomes tied to strategic goals" },
      ],
    },
    {
      id: 3,
      category: "AI Strategy & Vision Clarity",
      question: "How are AI initiatives prioritized inside your organization today?",
      options: [
        { label: "A", points: 1, text: "Prioritization is reactive - driven by urgency or internal pressure" },
        { label: "B", points: 2, text: "Decisions are influenced by vendors or external trends" },
        { label: "C", points: 3, text: "We have informal criteria, but no consistent decision framework" },
        { label: "D", points: 4, text: "We use a structured prioritization model balancing business impact, risk, and execution feasibility" },
      ],
    },
    {
      id: 4,
      category: "Governance & Risk Infrastructure",
      question: "Does your organization have policies governing how AI tools can be used by employees?",
      options: [
        { label: "A", points: 1, text: "No policies exist" },
        { label: "B", points: 2, text: "Informal guidelines exist but aren't enforced" },
        { label: "C", points: 3, text: "Policies exist for some departments only" },
        { label: "D", points: 4, text: "Formal, enterprise-wide AI governance policies are in place" },
      ],
    },
    {
      id: 5,
      category: "Governance & Risk Infrastructure",
      question: "How visible and controlled is employee use of unsanctioned AI tools (shadow AI) in your organization?",
      options: [
        { label: "A", points: 1, text: "We have little to no visibility into how AI is being used" },
        { label: "B", points: 2, text: "We are aware it’s happening but haven’t addressed it yet" },
        { label: "C", points: 3, text: "We’ve started discussing it, but no structured response exists" },
        { label: "D", points: 4, text: "We actively monitor, manage, and guide AI usage across the organization" },
      ],
    },
    {
      id: 6,
      category: "Governance & Risk Infrastructure",
      question: "If an AI-related issue were to arise - impacting a client or a business decision, how prepared would your organization feel today?",
      options: [
        { label: "A", points: 1, text: "We are not prepared for that scenario" },
        { label: "B", points: 2, text: "We would respond reactively without a defined approach" },
        { label: "C", points: 3, text: "We have partial processes but no formal playbook" },
        { label: "D", points: 4, text: "We have a defined incident response framework for AI-related risks" },
      ],
    },
    {
      id: 7,
      category: "Leadership Alignment & Readiness",
      question: "How aligned is your leadership team on the role AI should play in your business?",
      options: [
        { label: "A", points: 1, text: "There is significant disagreement or confusion" },
        { label: "B", points: 2, text: "Some alignment at the top but not across departments" },
        { label: "C", points: 3, text: "General agreement but no shared accountability" },
        { label: "D", points: 4, text: "Full alignment with defined roles and ownership" },
      ],
    },
    {
      id: 8,
      category: "Leadership Alignment & Readiness",
      question: "How consistently does your leadership team communicate a shared AI vision to the rest of the organization?",
      options: [
        { label: "A", points: 1, text: "It hasn't been communicated at all" },
        { label: "B", points: 2, text: "It's been mentioned once or twice but not reinforced" },
        { label: "C", points: 3, text: "Some leaders communicate it but messaging is inconsistent across teams" },
        { label: "D", points: 4, text: "A clear, consistent AI vision is regularly communicated at all levels" },
      ],
    },
    {
      id: 9,
      category: "Leadership Alignment & Readiness",
      question: "To what extent does your leadership team personally model AI adoption in their own work?",
      options: [
        { label: "A", points: 1, text: "Leadership support is mostly verbal, not behavioural" },
        { label: "B", points: 2, text: "A few leaders experiment, but it’s not visible or consistent" },
        { label: "C", points: 3, text: "Some leaders actively demonstrate usage within their teams" },
        { label: "D", points: 4, text: "Leadership consistently models AI use, setting the standard for the organization" },
      ],
    },
    {
      id: 10,
      category: "Workforce Adoption & Psychological Safety",
      question: "What best describes your employees’ current mindset toward AI?",
      options: [
        { label: "A", points: 1, text: "Significant fear, avoidance or active resistance" },
        { label: "B", points: 2, text: "Passive compliance — they use it when told to, not by choice" },
        { label: "C", points: 3, text: "Mixed - some champions, some resistors" },
        { label: "D", points: 4, text: "Genuine curiosity - people are experimenting and sharing what they find" },
      ],
    },
    {
      id: 11,
      category: "Workforce Adoption & Psychological Safety",
      question: "How equipped do your employees feel to actually use AI in their specific roles?",
      options: [
        { label: "A", points: 1, text: "Not at all — most people don't know where to start" },
        { label: "B", points: 2, text: "Basic awareness — they've been introduced to tools but have no role-specific guidance" },
        { label: "C", points: 3, text: "Partially — some teams have training, others are figuring it out alone" },
        { label: "D", points: 4, text: "Well equipped — people have role-specific workflows, prompts, and ongoing support" },
      ],
    },
    {
      id: 12,
      category: "Workforce Adoption & Psychological Safety",
      question: "How embedded is AI in your team's day-to-day workflows right now?",
      options: [
        { label: "A", points: 1, text: "Not at all — it's separate from daily work" },
        { label: "B", points: 2, text: "A few individuals use it on their own" },
        { label: "C", points: 3, text: "Some teams have integrated it into specific workflows" },
        { label: "D", points: 4, text: "AI is embedded across functions as a standard way of working" },
      ],
    },
    {
      id: 13,
      category: "Roadmap Prioritization & ROI Clarity",
      question: "How does your organization decide what to build or implement with AI first?",
      options: [
        { label: "A", points: 1, text: "We don't have a prioritization process - everything feels equally urgent" },
        { label: "B", points: 2, text: "We prioritize based on what's easiest to implement" },
        { label: "C", points: 3, text: "We prioritize based on business impact but it's informal" },
        { label: "D", points: 4, text: "We use a structured framework that maps effort, risk, and business value before committing" },
      ],
    },
    {
      id: 14,
      category: "Roadmap Prioritization & ROI Clarity",
      question: "How clearly are your AI investments connected to measurable business outcomes?",
      options: [
        { label: "A", points: 1, text: "There is no defined connection" },
        { label: "B", points: 2, text: "We have assumptions, but no clear measurement" },
        { label: "C", points: 3, text: "Some initiatives have defined KPIs" },
        { label: "D", points: 4, text: "Every initiative is tied to a measurable business outcome and tracked accordingly" },
      ],
    },
    {
      id: 15,
      category: "Roadmap Prioritization & ROI Clarity",
      question: "How visible is the return on your AI investments to your leadership team right now?",
      options: [
        { label: "A", points: 1, text: "There is no visibility — we haven't defined what success looks like" },
        { label: "B", points: 2, text: "Leadership knows we're investing but can't see what it's producing" },
        { label: "C", points: 3, text: "Some initiatives have visible results but most don't" },
        { label: "D", points: 4, text: "Every AI investment has a dashboard or metric that leadership reviews regularly" },
      ],
    },
  ];

  // Prevent currentIdx from ever exceeding the bounds of the questions array (clamping to the final question)
  useEffect(() => {
    if (currentIdx >= questions.length) {
      setCurrentIdx(questions.length - 1);
    }
  }, [currentIdx, questions.length]);

  const handleSelectOptionLocal = (optionIdx: number) => {
    const nextAnswers = [...answers];
    nextAnswers[currentIdx] = optionIdx;
    setAnswers(nextAnswers);

    // If it is not  the final question, proceed automatically to the next section after 450ms animation completed
    if (currentIdx < questions.length - 1) {
      setTimeout(() => {
        setCurrentIdx((prevIdx) => {
          if (prevIdx < questions.length - 1) {
            return prevIdx + 1;
          }
          return prevIdx;
        });
      }, 450);
    }
  };

  const handleSubmit = () => {
    if (answers[questions.length - 1] === null) return;
    setQuizComplete(true);
  };

  const handleRestart = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrentIdx(0);
    setQuizComplete(false);
  };

  const handleBack = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const handleJumpBack = (targetIdx: number) => {
    if (targetIdx < currentIdx) {
      const nextAnswers = [...answers];
      // Reset the target index and all subsequent answers
      for (let i = targetIdx; i < nextAnswers.length; i++) {
        nextAnswers[i] = null;
      }
      setAnswers(nextAnswers);
      setCurrentIdx(targetIdx);
    }
  };

  // Score Analysis scaled to 0-100 percentage (each of 15 questions has up to 4 points)
  const totalRawScore = answers.reduce<number>((sum, val, idx) => {
    if (val === null || !questions[idx] || !questions[idx].options || !questions[idx].options[val]) return sum;
    return sum + questions[idx].options[val].points;
  }, 0);

  const totalScore = Math.round((totalRawScore / (questions.length * 4)) * 100);

  let rating = "";
  let feedback = "";
  let gapFocus = "";
  let ratingColor = "";
  let badgeColor = "";

  if (totalScore >= 80) {
    rating = "Vanguard Aligned";
    feedback = "Your organization exhibits strong architectural maturity. Your strategic foundations, risk limits, and structural governance are positioned to scale and defend margins.";
    gapFocus = "Refinement of operational execution margins and exploring custom intellectual property pipelines.";
    ratingColor = "text-emerald-600 font-bold";
    badgeColor = "border-emerald-600 bg-emerald-50 text-emerald-700";
  } else if (totalScore >= 50) {
    rating = "Operational Disconnect";
    feedback = "While you have made active, positive preliminary moves, there is a distinct gap between the tools and the quantifiable business outcomes. Strategy or frontline adoption requires immediate structuring.";
    gapFocus = "Establishing clear bottom-line ROI metrics and unified executive alignment regarding compliance.";
    ratingColor = "text-amber-500 font-bold";
    badgeColor = "border-amber-500 bg-amber-50 text-amber-700";
  } else {
    rating = "Highly Vulnerable";
    feedback = "Your AI efforts are fragmented, ad-hoc, and likely exposing you to severe governance and compliance risks. Without cohesive leadership alignment, value is draining rapidly.";
    gapFocus = "Drafting standard governance guidelines, securing enterprise endpoints, and formalizing a board-approved strategy.";
    ratingColor = "text-rose-600 font-bold";
    badgeColor = "border-rose-600 bg-rose-50 text-rose-700";
  }

  const selectedOptionIndex = answers[currentIdx];
  const currentQuestion = (currentIdx >= 0 && currentIdx < questions.length)
    ? questions[currentIdx]
    : (questions[0] || { category: "", question: "", options: [] });

  return (
    <div className="bg-canvas min-h-screen text-ink relative select-none">
      
      {!quizComplete ? (
        /* SURVEY CONTAINER DESIGNED TO PERFECTLY OFFSET FIXED GLOBAL NAVIGATION */
        <div className="w-full min-h-screen flex flex-col items-center justify-start pt-6 md:pt-12 pb-16 px-4 md:px-6 relative bg-[#F7F4EF]/30">
          
          {/* Header strip for controls to prevent colliding with the nav bar */}
          <div className="w-full max-w-[620px] mx-auto flex items-center justify-between mb-4">
            {/* Cancel / Back floating menu, displayed on both mobile & desktop aligned with left margin */}
            <button
              onClick={currentIdx === 0 ? () => setLocation("/index") : handleBack}
              className="flex text-xs font-sans uppercase tracking-wider items-center gap-1.5 cursor-pointer text-[#1A3C34] hover:text-[#C9A55A] transition-colors py-1 focus:outline-none"
            >
              <ArrowLeft size={14} /> {currentIdx === 0 ? "Cancel" : "Back"}
            </button>
 
            {/* Right-aligned Question tracking label */}
            <span className="font-sans text-[12px] text-[#1A3C34]/65 font-medium">
              Question {currentIdx + 1} of {questions.length}
            </span>
          </div>
 
          {/* Progress Bar styled as a premium track with interactive hover/checkpoint to go back */}
          <div className="w-full max-w-[620px] mx-auto flex items-center gap-[4px] mb-8 relative select-none">
            {questions.map((q, idx) => {
              const isCompleted = idx < currentIdx;
              const isActive = idx === currentIdx;
 
              return (
                <div 
                  key={idx} 
                  className="flex-1 relative group py-2"
                >
                  <button
                    onClick={() => {
                      if (isCompleted) {
                        handleJumpBack(idx);
                      }
                    }}
                    disabled={!isCompleted}
                    className={`w-full h-[6px] transition-all duration-300 relative focus:outline-none ${
                      isCompleted 
                        ? "bg-[#C9A55A] hover:bg-[#1A3C34] hover:scale-y-[1.4] cursor-pointer" 
                        : isActive 
                          ? "bg-[#1A3C34]" 
                          : "bg-[#1A3C34]/15"
                    }`}
                    style={{
                      borderRadius: "1px"
                    }}
                    title={isCompleted ? `Go back to Question ${idx + 1}` : undefined}
                  >
                    {isActive && (
                      <span className="absolute -top-[3px] left-1/2 -translate-x-1/2 block bg-[#1A3C34] h-3 w-3 rounded-full border border-white" />
                    )}
                  </button>
 
                  {/* Tooltip on Hovering Completed Elements */}
                  {isCompleted && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 pb-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50 whitespace-nowrap text-center">
                      <div className="bg-[#FAF9F5] text-ink text-[11px] sm:text-xs font-sans font-medium py-1 px-2.5 rounded-none shadow border border-[#1A3C34]/15">
                        <span className="text-ink/65">Return to question </span>
                        <span className="text-[#1A3C34] font-extrabold text-[12px] sm:text-[13px]">
                          {idx + 1}
                        </span>
                      </div>
                      <div className="w-1.5 h-1.5 bg-[#FAF9F5] border-r border-b border-[#1A3C34]/15 rotate-45 mx-auto -mt-[4px]" />
                    </div>
                  )}
 
                  {/* Tooltip for Current Q */}
                  {isActive && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 pb-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50 whitespace-nowrap text-center">
                      <div className="bg-[#FAF9F5] text-ink text-[11px] sm:text-xs font-sans font-medium py-1 px-2.5 rounded-none shadow border border-[#1A3C34]/15">
                        <span className="text-ink/65">Current question </span>
                        <span className="text-[#1A3C34] font-extrabold text-[12px] sm:text-[13px]">
                          {idx + 1}
                        </span>
                      </div>
                      <div className="w-1.5 h-1.5 bg-[#FAF9F5] border-r border-b border-[#1A3C34]/15 rotate-45 mx-auto -mt-[4px]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
 
          {/* Card core contents centered */}
          <div className="max-w-[620px] w-full flex flex-col gap-4 sm:gap-5 relative">
            
            {/* Category of the Question */}
            <div className="text-left">
              <span className="font-sans font-extrabold text-[10px] sm:text-[11px] text-[#1A3C34] uppercase tracking-widest block mb-1">
                {currentQuestion.category}
              </span>
              <h3 className="font-serif text-[18px] sm:text-[20px] md:text-[23px] font-bold text-ink leading-snug">
                {currentQuestion.question}
              </h3>
            </div>
 
            {/* Answer Options list with custom thick outline trail tracer */}
            <div className="space-y-2.5 text-left">
              {(currentQuestion?.options || []).map((opt, i) => {
                const isSelected = selectedOptionIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOptionLocal(i)}
                    className="w-full text-left p-3.5 sm:p-4 border cursor-pointer transition-all duration-150 flex items-start gap-4 rounded-none relative overflow-hidden focus:outline-none"
                    style={{
                      borderColor: isSelected ? "#1A3C34" : "#D4C9B8",
                      backgroundColor: isSelected ? "rgba(26, 60, 52, 0.05)" : "white"
                    }}
                  >
                    {/* Dark and thick Golden Outline Trail Tracker Animation (0.4s) */}
                    {isSelected && (
                      <div className="absolute inset-0 pointer-events-none z-30">
                        <svg className="w-full h-full absolute inset-0">
                          <motion.rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="none"
                            stroke="#C9A55A"
                            strokeWidth="5"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.4, ease: "linear" }}
                          />
                        </svg>
                      </div>
                    )}

                    <span className={`w-5 h-5 shrink-0 rounded-full border text-[11px] flex items-center justify-center font-serif bg-canvas/40 font-bold mt-0.5 relative z-10 ${
                      isSelected ? "border-[#1A3C34] text-[#1A3C34] bg-white" : "border-[#1A3C34]/40 text-[#1A3C34]/70"
                    }`}>
                      {opt.label}
                    </span>
                    <span className="font-sans text-[13px] sm:text-[14px] text-ink leading-relaxed relative z-10">
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>
 
            {/* Footer Control Actions with fixed height to prevent layout shifts */}
            <div className="min-h-[44px] flex items-center justify-between gap-4 mt-2">
              {/* Mobile bottom-left Cancel/Back button */}
              <button
                onClick={currentIdx === 0 ? () => setLocation("/index") : handleBack}
                className="md:hidden text-xs font-sans uppercase tracking-wider flex items-center gap-1.5 cursor-pointer text-[#1A3C34] hover:text-[#C9A55A] transition-colors py-2 focus:outline-none"
              >
                <ArrowLeft size={14} /> {currentIdx === 0 ? "Cancel" : "Back"}
              </button>

              <div className="ml-auto">
                {currentIdx === questions.length - 1 ? (
                  answers[currentIdx] !== null ? (
                    <InteractiveButton 
                      onClick={handleSubmit}
                      variant="gold" 
                      className="w-full md:w-auto text-center py-2.5 px-8 uppercase tracking-wider text-xs font-semibold"
                      id="scorecard-submit-button"
                    >
                      Submit Diagnostic
                    </InteractiveButton>
                  ) : (
                    <p className="text-xs font-sans text-ink-muted/50 italic text-right select-none pr-1">
                      Select an option for the final question to submit
                    </p>
                  )
                ) : (
                  <p className="text-xs font-sans text-ink-muted/50 italic text-right select-none pr-1">
                    Select an option above to proceed
                  </p>
                )}
              </div>
            </div>
 
          </div>
        </div>
      ) : (
        /* RESULTS SCREEN WITH REDUCED TOP MARGINS */
        <div className="min-h-screen pt-6 md:pt-12 pb-16 px-4 md:px-6 bg-[#F7F4EF]/40 flex items-center justify-center">
          <div className="max-w-[720px] w-full bg-[#F7F4EF] border border-[#E8D5B5] p-6 sm:p-8 md:p-12 text-left rounded-sm shadow-sm space-y-8">
            <div className="text-center space-y-4 pb-8 border-b border-ink/10">
              <span className="font-sans font-semibold text-xs text-[#1A3C34] uppercase tracking-[0.2em] block">
                YOUR DIAGNOSTIC SCORE
              </span>

              <div className="flex items-baseline justify-center gap-1.5">
                <span className={`font-serif text-[72px] font-bold leading-none ${ratingColor}`}>
                  {totalScore}
                </span>
                <span className="font-serif text-2xl text-[#C9A55A]">/ 100</span>
              </div>

              <div className={`inline-block px-4 py-1.5 border font-mono text-xs font-bold tracking-widest uppercase rounded-none ${badgeColor}`}>
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

              <div className={`p-5 bg-white border-l-2 space-y-1 rounded-none shadow-sm ${totalScore >= 80 ? "border-emerald-600" : totalScore >= 50 ? "border-amber-500" : "border-rose-600"}`}>
                <h5 className={`font-mono text-xs font-bold uppercase tracking-wider ${totalScore >= 80 ? "text-emerald-700" : totalScore >= 50 ? "text-amber-700" : "text-rose-700"}`}>
                  PRIMARY GAP EXPOSURE KEY
                </h5>
                <p className="font-sans text-[15px] text-ink leading-relaxed">
                  Focus operations primarily on: <span className="text-[#1A3C34] font-semibold">{gapFocus}</span>
                </p>
              </div>

              {/* Elegant Book a Call CTA Card directly below the gap analysis block */}
              <div className="mt-8 border-t border-[#C9A55A]/25 pt-8">
                <div className="bg-white border border-[#E8D5B5] p-6 sm:p-8 rounded-none shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="space-y-2 max-w-[420px]">
                    <h4 className="font-serif text-lg font-bold text-ink leading-snug">
                      Discuss Your Diagnostic Assessment
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
                      Connect with Pan Seth to dive deeper into your results, isolate compliance exposure risks, and structure your operational technology roadmap.
                    </p>
                  </div>
                  <InteractiveButton
                    onClick={() => setLocation("/book-a-call")}
                    variant="gold"
                    className="w-full md:w-auto uppercase tracking-wider text-xs font-semibold py-3.5 px-6 shrink-0 text-center"
                    id="scorecard-book-call-cta"
                  >
                    Book a Call
                  </InteractiveButton>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-ink/10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-end">
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
