import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ChevronRight, ArrowLeft, RotateCcw } from "lucide-react";
import { InteractiveButton } from "./InteractiveButton";

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

export function AIIndexCTA() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
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

  const handleSelectOption = (points: number) => {
    const nextAnswers = [...answers, points];
    setAnswers(nextAnswers);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setAnswers([]);
    setCurrentIdx(0);
    setQuizComplete(false);
    setQuizStarted(false);
  };

  const handleBack = () => {
    if (currentIdx > 0) {
      const nextAnswers = [...answers];
      nextAnswers.pop();
      setAnswers(nextAnswers);
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
    const el = document.getElementById("book-a-call");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="ai-index" className="relative bg-teal-dim py-24 px-6 md:py-32 overflow-hidden">
      <div className="max-w-[720px] mx-auto text-center relative z-10">
        
        {!quizStarted ? (
          /* Landing Screen */
          <ScrollReveal duration={0.6}>
            <div className="space-y-8">
              <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.25em] block">
                THE DIAGNOSTIC
              </span>
              
              <h2 className="font-serif text-[32px] md:text-[48px] leading-[1.15] font-bold text-off-white text-balance">
                15 questions. 3 minutes. A clear picture of where your AI strategy is strong — and where it's exposed.
              </h2>
              
              <p className="font-sans text-base md:text-lg text-off-white/80 leading-[1.75] max-w-xl mx-auto">
                Used by senior leaders across Finance, SaaS, and Enterprise. Produces a maturity score and a dimension-by-dimension gap analysis.
              </p>

              <div className="flex justify-center">
                <InteractiveButton
                  onClick={() => setQuizStarted(true)}
                  variant="gold"
                  icon={ChevronRight}
                >
                  Take the AI Alignment Index
                </InteractiveButton>
              </div>

              <p className="font-sans text-[13px] text-off-white/50 pt-2">
                Takes 3 minutes. No email required to start.
              </p>
            </div>
          </ScrollReveal>
        ) : !quizComplete ? (
          /* Survey Questions Step Screen */
          <div className="space-y-8 text-left bg-canvas/5 border border-gold/10 p-6 md:p-10 rounded-sm">
            
            {/* Top Navigation Row */}
            <div className="flex items-center justify-between border-b border-off-white/10 pb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleBack}
                  disabled={currentIdx === 0}
                  className={`text-xs font-sans uppercase tracking-wider flex items-center gap-1 cursor-pointer select-none ${
                    currentIdx === 0 ? "text-off-white/30" : "text-off-white/70 hover:text-gold"
                  }`}
                >
                  <ArrowLeft size={14} /> Back
                </button>
              </div>

              <div className="text-right">
                <span className="font-mono text-xs text-gold uppercase tracking-widest">
                  DIMENSION {currentIdx + 1} OF {questions.length}
                </span>
              </div>
            </div>

            {/* Question Section */}
            <div>
              <span className="font-sans font-semibold text-xs text-gold uppercase tracking-widest block mb-2">
                {questions[currentIdx].category}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-off-white leading-[1.4] text-balance">
                {questions[currentIdx].question}
              </h3>
            </div>

            {/* Multiple Choice Option Buttons */}
            <div className="space-y-4">
              {questions[currentIdx].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectOption(opt.points)}
                  className="w-full text-left p-4 bg-canvas/5 hover:bg-canvas/15 border border-off-white/10 hover:border-gold/50 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold transition-all duration-150 flex items-start gap-4 active:scale-[0.99]"
                >
                  <span className="w-6 h-6 shrink-0 rounded-full border border-gold/40 flex items-center justify-center font-serif text-xs text-gold bg-canvas/10 font-bold mt-1">
                    {opt.label}
                  </span>
                  <span className="font-sans text-sm md:text-base text-off-white/90 leading-relaxed">
                    {opt.text}
                  </span>
                </button>
              ))}
            </div>

            {/* Progress indicators */}
            <div className="pt-4">
              <div className="w-full h-[3px] bg-off-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

          </div>
        ) : (
          /* Diagnostic Results Screen */
          <div className="space-y-8 bg-canvas/5 border border-gold/15 p-8 md:p-12 text-left rounded-sm">
            <div className="text-center space-y-3 pb-8 border-b border-off-white/10">
              <span className="font-sans font-semibold text-xs text-gold uppercase tracking-[0.2em]">
                YOUR DIAGNOSTIC SCORE
              </span>
              
              <div className="flex items-baseline justify-center gap-1.5">
                <span className="font-serif text-[72px] font-bold text-off-white leading-none">
                  {totalScore}
                </span>
                <span className="font-serif text-2xl text-gold">/ 100</span>
              </div>

              <div className="inline-block px-4 py-1.5 border border-gold/30 bg-gold/10 text-gold text-xs font-mono font-medium tracking-widest uppercase rounded-sm">
                MATURITY RATING: {rating}
              </div>
            </div>

            {/* Feedback copy blocks */}
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-lg font-bold text-off-white mb-2">Executive Assessment:</h4>
                <p className="font-sans text-[15px] leading-[1.65] text-off-white/85">
                  {feedback}
                </p>
              </div>

              <div className="p-4 bg-teal/20 border-l-2 border-gold space-y-1">
                <h5 className="font-mono text-xs text-gold font-bold uppercase tracking-wider">
                  PRIMARY GAP EXPOSURE KEY
                </h5>
                <p className="font-sans text-sm text-off-white/80 leading-relaxed">
                  Focus operations primarily on: <span className="text-off-white font-medium">{gapFocus}</span>
                </p>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-6 border-t border-off-white/10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <InteractiveButton
                onClick={handleScrollToCall}
                variant="gold"
                className="shrink-0 text-center"
              >
                Book a Call to Review
              </InteractiveButton>

              <InteractiveButton
                onClick={handleRestart}
                variant="secondary"
                icon={RotateCcw}
                className="shrink-0 text-center"
              >
                Reset Diagnostic
              </InteractiveButton>
            </div>
          </div>
        )}

      </div>

      {/* Decorative fine geometric details background */}
      <div className="absolute top-1/2 left-[-100px] w-[500px] h-[500px] rounded-full border border-gold/[0.04] pointer-events-none select-none" />
      <div className="absolute top-1/4 right-[-150px] w-[600px] h-[600px] rounded-full border border-gold/[0.03] pointer-events-none select-none" />
    </section>
  );
}
