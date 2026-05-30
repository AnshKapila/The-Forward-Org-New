import React from "react";
import { motion, useReducedMotion } from "motion/react";

const HeadingTags = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);

export function wrapHeadingsAndImages(node: React.ReactNode, index: number = 0): React.ReactNode {
  if (!node) return node;

  if (React.isValidElement(node)) {
    const typeStr = typeof node.type === "string" ? node.type.toLowerCase() : "";
    if (HeadingTags.has(typeStr)) {
      return (
        <motion.div
          key={node.key || index}
          initial={{ opacity: 0, filter: "blur(12px)", y: 15 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.96, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: "100%", display: "inline-block" }}
        >
          {node}
        </motion.div>
      );
    }

    if (typeStr === "img") {
      const { className = "", style, ...otherProps } = node.props as any;
      // Skip background textures (like the paper-texture) from zooming-out
      if (altAttrIsPattern(otherProps.alt)) {
        return node;
      }
      return (
        <div key={node.key || index} className={`overflow-hidden ${className}`} style={{ ...style, display: "block" }}>
          <motion.img
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1.0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.96, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover"
            {...otherProps}
          />
        </div>
      );
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
  
  const processedChildren = React.useMemo(() => {
    return shouldReduceMotion ? children : wrapHeadingsAndImages(children);
  }, [children, shouldReduceMotion]);

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // cubic-bezier(0.16, 1, 0.3, 1) as requested
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
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  const processedChildren = React.useMemo(() => {
    return shouldReduceMotion ? children : wrapHeadingsAndImages(children);
  }, [children, shouldReduceMotion]);

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return <motion.div variants={itemVariants}>{processedChildren}</motion.div>;
}
