import React, { useRef, useState, useMemo } from "react";
import { motion, useReducedMotion, useInView } from "motion/react";

const HeadingTags = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);

export function WrappedHeading({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [willChangeActive, setWillChangeActive] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      key={index}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      onAnimationComplete={() => setWillChangeActive(false)}
      transition={{ duration: 0.96, ease: [0.16, 1, 0.3, 1] }}
      style={{
        width: "100%",
        display: "inline-block",
        transform: "translateZ(0)",
        willChange: willChangeActive ? "transform, opacity" : "auto",
      }}
    >
      {children}
    </motion.div>
  );
}

export function WrappedImg({ alt, className = "", style, ...otherProps }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [willChangeActive, setWillChangeActive] = useState(true);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        ...style,
        display: "block",
        transform: "translateZ(0)",
        isolation: "isolate"
      }}
    >
      <motion.img
        initial={{ scale: 1.2 }}
        animate={isInView ? { scale: 1.0 } : {}}
        onAnimationComplete={() => setWillChangeActive(false)}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        style={{
          transformOrigin: "center center",
          willChange: willChangeActive ? "transform" : "auto",
        }}
        className="w-full h-full object-cover"
        alt={alt}
        {...otherProps}
      />
    </div>
  );
}

export function wrapHeadingsAndImages(node: React.ReactNode, index: number = 0): React.ReactNode {
  if (!node) return node;

  if (React.isValidElement(node)) {
    const typeStr = typeof node.type === "string" ? node.type.toLowerCase() : "";
    if (HeadingTags.has(typeStr)) {
      return <WrappedHeading index={index}>{node}</WrappedHeading>;
    }

    if (typeStr === "img") {
      const { className = "", style, ...otherProps } = node.props as any;
      if (altAttrIsPattern(otherProps.alt)) {
        return node;
      }
      return <WrappedImg key={node.key || index} className={className} style={style} {...otherProps} />;
    }

    if (node.props && node.props.children) {
      const childrenArray = React.Children.toArray(node.props.children);
      if (childrenArray.length > 0) {
        const mappedChildren = React.Children.map(node.props.children, (child, i) =>
          wrapHeadingsAndImages(child, i)
        );
        return React.cloneElement(node, { ...node.props, children: mappedChildren });
      }
    }
  }

  return node;
}

function altAttrIsPattern(alt?: string): boolean {
  if (!alt) return false;
  const l = alt.toLowerCase();
  return l.includes("pattern") || l.includes("texture") || l.includes("grain") || l.includes("background");
}

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
  
  const processedChildren = useMemo(() => {
    return shouldReduceMotion ? children : wrapHeadingsAndImages(children);
  }, [children, shouldReduceMotion]);

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
      {processedChildren}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  delay?: number;
}

export function StaggerContainer({ children, delay = 0 }: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [willChangeActive, setWillChangeActive] = useState(true);

  // Maximum 5 items stagger, 80ms delay per child
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

export function StaggerItem({ children, index }: { children: React.ReactNode; index?: number }) {
  const shouldReduceMotion = useReducedMotion();

  const processedChildren = useMemo(() => {
    return shouldReduceMotion ? children : wrapHeadingsAndImages(children);
  }, [children, shouldReduceMotion]);

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
      onAnimationComplete={() => setWillChangeActive(false)}
      style={{
        transform: "translateZ(0)",
        willChange: willChangeActive ? "transform, opacity" : "auto",
      }}
    >
      {processedChildren}
    </motion.div>
  );
}
