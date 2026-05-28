import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

function CountUp({ end, duration = 1800, suffix = "" }: { end: number; duration?: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuad
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-serif text-[52px] md:text-[64px] font-bold text-gold inline-flex items-center">
      {count}
      <span className="font-serif">{suffix}</span>
    </span>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-teal w-full text-off-white overflow-hidden py-12 md:py-14"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row md:items-stretch justify-between gap-8 md:gap-0">
          {/* Column 1 */}
          <div className="flex flex-col text-left justify-start md:flex-1 md:px-8">
            <div className="mb-2">
              <CountUp end={88} suffix="%" />
            </div>
            <p className="font-sans font-semibold text-base text-off-white leading-tight min-h-[44px]">
              of companies report regular AI use
            </p>
            <p className="font-sans text-sm text-off-white/65 mt-2 leading-relaxed">
              Yet most cannot measure what it produces.
            </p>
          </div>

          {/* Thin Gold Rule 1 */}
          <div className="hidden md:block w-[1px] bg-gold/40 self-stretch my-2" />

          {/* Column 2 */}
          <div className="flex flex-col text-left justify-start md:flex-1 md:px-8">
            <div className="mb-2">
              <CountUp end={40} suffix="%" />
            </div>
            <p className="font-sans font-semibold text-base text-off-white leading-tight min-h-[44px]">
              actually generate real value from it
            </p>
            <p className="font-sans text-sm text-off-white/65 mt-2 leading-relaxed">
              The other 60% are running pilots that never become strategy.
            </p>
          </div>

          {/* Thin Gold Rule 2 */}
          <div className="hidden md:block w-[1px] bg-gold/40 self-stretch my-2" />

          {/* Column 3 */}
          <div className="flex flex-col text-left justify-start md:flex-1 md:px-8">
            <div className="mb-2">
              <span className="font-serif text-[52px] md:text-[64px] font-bold text-gold">10x</span>
            </div>
            <p className="font-sans font-semibold text-base text-off-white leading-tight min-h-[44px]">
              output from the same headcount
            </p>
            <p className="font-sans text-sm text-off-white/65 mt-2 leading-relaxed">
              What forward organizations produce when AI is infrastructure, not initiative.
            </p>
          </div>
        </div>

        {/* Separator and fine source line */}
        <div className="mt-12 flex flex-col items-center">
          <div className="w-[60px] h-[1px] bg-gold/40 mb-4" />
          <p className="font-sans text-xs text-off-white/45 tracking-wide text-center">
            Source: McKinsey Global AI Report · The Forward Org Research
          </p>
        </div>
      </div>
    </motion.section>
  );
}
