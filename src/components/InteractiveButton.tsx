import React from "react";
import { ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export function LoopingArrow({ className = "text-current", size = 16 }: { className?: string; size?: number }) {
  return (
    <span 
      className="relative overflow-hidden inline-flex items-center justify-center shrink-0"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* Existing arrow exits to right */}
      <motion.span
        className="absolute inline-flex items-center justify-center"
        variants={{
          initial: { x: 0, opacity: 1 },
          hover: { 
            x: "100%", 
            opacity: 0,
            transition: { duration: 0.18, ease: "easeIn" }
          }
        }}
      >
        <ArrowRight 
          size={size} 
          strokeWidth={1.5} 
          strokeLinecap="square" 
          strokeLinejoin="miter" 
          className={className} 
        />
      </motion.span>
      {/* New arrow enters from left */}
      <motion.span
        className="absolute inline-flex items-center justify-center"
        variants={{
          initial: { x: "-100%", opacity: 0 },
          hover: { 
            x: 0, 
            opacity: 1,
            transition: { delay: 0.06, duration: 0.18, ease: "easeOut" }
          }
        }}
      >
        <ArrowRight 
          size={size} 
          strokeWidth={1.5} 
          strokeLinecap="square" 
          strokeLinejoin="miter" 
          className={className} 
        />
      </motion.span>
    </span>
  );
}

// Keep a compatible wrapper named SlidingArrow for any legacy references, using the new looping mechanism
export function SlidingArrow({ className = "text-current" }: { className?: string }) {
  return <LoopingArrow className={className} size={16} />;
}

interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  id?: string;
  variant?: "primary" | "secondary" | "gold" | "teal" | "dark" | "outline-dark" | "outline-teal";
  size?: "sm" | "md";
  icon?: LucideIcon | React.ComponentType<{ className?: string; size?: number }>;
  noIcon?: boolean;
  [key: `data-${string}`]: string | undefined;
}

export function InteractiveButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  className = "",
  icon: CustomIcon,
  noIcon = false,
  id,
  ...props
}: InteractiveButtonProps) {
  const sizeClasses = size === "sm" ? "py-2.5 px-5" : "py-4 px-8";
  
  // Base button styles
  const baseStyle = `group relative ${sizeClasses} font-sans font-bold text-xs uppercase tracking-wider select-none cursor-pointer flex items-center justify-center gap-2 border rounded-none overflow-hidden leading-none transition-all duration-300 active:scale-[0.98]`;

  let variantStyle = "";
  let isGhostOutline = false;

  switch (variant) {
    case "primary": 
      variantStyle = "bg-off-white text-ink border-transparent hover:bg-ink hover:text-white hover:border-white/20";
      break;
    case "secondary": 
      // Secondary acts as the standard white outline button
      variantStyle = "border-white/20 bg-transparent text-white hover:bg-white hover:text-ink hover:border-white";
      break;
    case "gold": 
      // Change 4 Gold Button Hover specifications:
      // Default: gold background background color gold (#C9A55A), ink text text-ink (#1A1C1A), no transform.
      // On hover: background shifts to gold-hover (#B8934A), translateY SVG shadow appear.
      variantStyle = "bg-gold text-ink border-gold hover:bg-gold-hover hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(201,165,90,0.3)] active:translate-y-0 active:shadow-none duration-150 ease-out transition-all";
      break;
    case "teal": 
      variantStyle = "bg-teal text-white border-teal hover:bg-white hover:text-teal hover:border-teal";
      break;
    case "dark": 
      variantStyle = "bg-ink text-off-white border-white/5 hover:bg-off-white hover:text-ink hover:border-transparent";
      break;
    case "outline-dark": 
      variantStyle = "border-ink/20 bg-transparent text-ink hover:bg-ink hover:text-white hover:border-ink";
      break;
    case "outline-teal":
      // Change 4 Outline / Ghost specifications:
      // Default: transparent background, forest green border and text (#1A3C34).
      // On hover: Forest green fill slides in from left using clip-path, text transitions to light green simultaneously.
      isGhostOutline = true;
      variantStyle = "border-[#1A3C34] bg-transparent text-[#1A3C34] hover:text-[#E8F0EE] transition-colors duration-200";
      break;
    default:
      variantStyle = "bg-off-white text-ink border-transparent hover:bg-ink hover:text-white";
  }

  return (
    <motion.button
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
      initial="initial"
      whileHover="hover"
      {...props}
    >
      {isGhostOutline && (
        <motion.span
          className="absolute inset-0 bg-[#1A3C34] pointer-events-none z-0"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileHover={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
        />
      )}
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {!noIcon && (
          CustomIcon ? (
            <span className="relative overflow-hidden w-4 h-4 flex items-center justify-center shrink-0">
              <motion.span
                className="absolute inline-flex items-center justify-center"
                variants={{
                  initial: { x: 0, opacity: 1 },
                  hover: { 
                    x: "100%", 
                    opacity: 0,
                    transition: { duration: 0.18, ease: "easeIn" }
                  }
                }}
              >
                <CustomIcon className="w-4 h-4 text-current" strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" />
              </motion.span>
              <motion.span
                className="absolute inline-flex items-center justify-center"
                variants={{
                  initial: { x: "-100%", opacity: 0 },
                  hover: { 
                    x: 0, 
                    opacity: 1,
                    transition: { delay: 0.06, duration: 0.18, ease: "easeOut" }
                  }
                }}
              >
                <CustomIcon className="w-4 h-4 text-current" strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" />
              </motion.span>
            </span>
          ) : (
            <LoopingArrow className="text-current" size={16} />
          )
        )}
      </span>
    </motion.button>
  );
}
