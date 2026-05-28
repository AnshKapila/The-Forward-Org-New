import { ScrollReveal } from "./ScrollReveal";
import { useLocation } from "wouter";
import { InteractiveButton } from "./InteractiveButton";
import { ChevronRight } from "lucide-react";

export function AIIndexCTA() {
  const [, setLocation] = useLocation();

  return (
    <section id="ai-index" className="w-full bg-[#1A3C34] py-[72px] px-6">
      <div className="max-w-[640px] mx-auto text-center">
        <ScrollReveal duration={0.6}>
          <div className="flex flex-col items-center gap-6">
            <span className="font-sans font-medium text-[12px] text-gold uppercase tracking-[0.25em]">
              THE DIAGNOSTIC
            </span>
            
            <h2 className="font-serif text-[32px] md:text-[40px] leading-[1.2] font-bold text-[#F7F4EF] max-w-lg">
              Find out exactly where your AI strategy has gaps.
            </h2>
            
            <p className="font-sans text-[16px] text-[#F7F4EF]/75">
              15 questions. 3 minutes. A dimension-by-dimension gap analysis.
            </p>

            <div className="mt-2">
              <InteractiveButton
                onClick={() => setLocation("/index")}
                variant="gold"
                icon={ChevronRight}
                className="px-8"
              >
                Take the AI Alignment Index
              </InteractiveButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
