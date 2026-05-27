import { ScrollReveal } from "./ScrollReveal";

export function TheProblem() {
  return (
    <section id="about" className="relative bg-canvas py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal duration={0.65}>
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 md:gap-8 items-start">
            
            {/* Left Column: Structural Label */}
            <div className="flex flex-col md:border-r border-gold/15 md:pr-12 md:pb-6">
              <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] mb-4">
                THE CONTEXT
              </span>
              <h2 className="font-serif text-[42px] leading-[1.1] font-bold text-ink text-left max-w-xs text-balance">
                The Situation
              </h2>
              <div className="mt-8 hidden md:block w-12 h-[1px] bg-gold opacity-50" />
            </div>

            {/* Right Column: Copy and Editorial Typography */}
            <div className="space-y-8 max-w-2xl">
              {/* Premium Pull Quote */}
              <blockquote className="font-serif italic text-2xl md:text-[32px] leading-relaxed text-teal text-balance">
                "Your teams are using AI. Your board is asking about AI. But somewhere between the tools and the results — something isn't connecting."
              </blockquote>

              {/* Body Text */}
              <p className="font-sans text-[17px] text-ink-muted leading-[1.75] font-light">
                The gap is never the technology. It is always the human infrastructure underneath it — strategy, governance, leadership alignment, and the cultural conditions that make AI adoption stick.
              </p>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
