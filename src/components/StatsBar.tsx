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
    <h2 ref={ref} className="font-serif text-[42px] md:text-[54px] font-bold text-gold inline-flex items-center">
      {count}
      <span className="font-serif">{suffix}</span>
    </h2>
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
      className="bg-white w-full border-y border-gold/15 overflow-hidden py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-stretch justify-between gap-12 md:gap-0">
          {/* Column 2 - Left Aligned */}
          <div className="flex-1 flex flex-col text-left items-start justify-start md:pr-12">
            <div className="mb-2">
              {/* COPY PENDING — Pan to confirm exact framing of $6M figure before launch */}
              <h2 className="font-serif text-[42px] md:text-[54px] font-bold text-gold inline-flex items-center">
                $6M+
              </h2>
            </div>
            <p className="font-sans font-semibold text-base text-teal leading-tight min-h-[44px] text-left">
              In AI-driven operational value influenced across engagements
            </p>
            <p className="font-sans text-sm text-ink-muted mt-2 leading-relaxed text-left">
              Across Finance, SaaS, and Enterprise Technology.
            </p>
          </div>

          {/* Divider Mark 1 */}
          <div className="hidden md:block w-[1px] bg-gold/30 self-stretch my-2" />

          {/* Column 1 - Center Aligned */}
          <div className="flex-1 flex flex-col text-center items-center justify-start md:px-12">
            <div className="mb-2">
              <CountUp end={10} suffix="+" />
            </div>
            <p className="font-sans font-semibold text-base text-teal leading-tight min-h-[44px] text-center">
              Years inside the organizations she now advises
            </p>
            <p className="font-sans text-sm text-ink-muted mt-2 leading-relaxed text-center">
              At Citi, PagerDuty, and NielsenIQ: building what most consultants only theorize about.
            </p>
          </div>

          {/* Divider Mark 2 */}
          <div className="hidden md:block w-[1px] bg-gold/30 self-stretch my-2" />

          {/* Column 3 - Right Aligned */}
          <div className="flex-1 flex flex-col text-right items-end justify-start md:pl-12">
            <div className="mb-2">
              <CountUp end={2} suffix="" />
            </div>
            <p className="font-sans font-semibold text-base text-teal leading-tight min-h-[44px] text-right">
              AI patents held
            </p>
            <p className="font-sans text-sm text-ink-muted mt-2 leading-relaxed text-right">
              Practitioner-level depth that most advisors do not have and cannot fake.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
