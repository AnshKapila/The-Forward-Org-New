import React, { useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function ScrollReveal({ children, delay = 0, duration = 0.6, y = 24, className }: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  
  // Trigger threshold margin is exactly "-10% 0px" as requested
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [willChangeActive, setWillChangeActive] = useState(true);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      onAnimationComplete={() => setWillChangeActive(false)}
      style={{
        transform: "translateZ(0)",
        willChange: willChangeActive ? "transform, opacity" : "auto",
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function StaggerContainer({ children, delay = 0, className }: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [willChangeActive, setWillChangeActive] = useState(true);

  // Maximum  5 items stagger, 80ms delay per child
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onAnimationComplete={() => setWillChangeActive(false)}
      style={{
        transform: "translateZ(0)",
        willChange: willChangeActive ? "transform, opacity" : "auto",
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, index, className }: { children: React.ReactNode; index?: number; className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [willChangeActive, setWillChangeActive] = useState(true);

  // If index is provided, cap stagger delay contribution at 5th element (index 4)
  const customStaggerDelay = index !== undefined ? Math.min(index, 4) * 0.08 : undefined;

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: (customDelay: number | undefined) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: customDelay, // Overrides staggered container calculation to cap active delay cascade
      },
    }),
  };

  return (
    <motion.div
      variants={itemVariants}
      custom={customStaggerDelay}
      className={className}
      onAnimationComplete={() => setWillChangeActive(false)}
      style={{
        transform: "translateZ(0)",
        willChange: willChangeActive ? "transform, opacity" : "auto",
      }}
    >
      {children}
    </motion.div>
  );
}
