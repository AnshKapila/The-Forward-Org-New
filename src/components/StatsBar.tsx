import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ end, duration = 1800, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuad
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    frameId = window.requestAnimationFrame(step);
    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isInView, end, duration]);

  return (
    <h2 ref={ref} className="font-serif text-[42px] md:text-[54px] font-bold text-gold inline-flex items-center">
      {prefix}
      {count}
      <span className="font-serif">{suffix}</span>
    </h2>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [willChangeActive, setWillChangeActive] = useState(true);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      onAnimationComplete={() => setWillChangeActive(false)}
      style={{
        transform: "translateZ(0)",
        willChange: willChangeActive ? "transform, opacity" : "auto",
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white w-full border-y border-gold/15 overflow-hidden py-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-stretch justify-between gap-12 md:gap-0">
          {/* Column 2 - Left Aligned */}
          <div className="flex-1 flex flex-col text-left items-start justify-start md:pr-12">
            <div className="mb-2">
              <CountUp end={600} prefix="$" suffix="M+" />
            </div>
            <p className="font-sans font-semibold text-base text-teal leading-tight text-left">
              Business value influenced through AI, digital, and organizational transformation initiatives.
            </p>
          </div>

          {/* Divider Mark 1 */}
          <div className="hidden md:block w-[1px] bg-gold/30 self-stretch my-2" />

          {/* Column 1 - Left Aligned */}
          <div className="flex-1 flex flex-col text-left items-start justify-start md:px-12">
            <div className="mb-2">
              <CountUp end={10} suffix="+" />
            </div>
            <p className="font-sans font-semibold text-base text-teal leading-tight text-left">
              Building AI capabilities inside global enterprises before advising others how to do it.
            </p>
          </div>

          {/* Divider Mark 2 */}
          <div className="hidden md:block w-[1px] bg-gold/30 self-stretch my-2" />

          {/* Column 3 - Left Aligned */}
          <div className="flex-1 flex flex-col text-left items-start justify-start md:pl-12">
            <div className="mb-2">
              <CountUp end={2} suffix=" AI patents" />
            </div>
            <p className="font-sans font-semibold text-base text-teal leading-tight text-left">
              Innovation grounded in practice - not theory.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
