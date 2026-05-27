import React from "react";
import { ArrowUpRight, LucideIcon } from "lucide-react";

export function SlidingArrow({ className = "text-current" }: { className?: string }) {
  return (
    <span className="relative overflow-hidden w-4 h-4 flex items-center justify-center shrink-0">
      <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-4 group-hover:-translate-y-4 absolute ${className}`} />
      <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ease-in-out -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 absolute ${className}`} />
    </span>
  );
}

interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold" | "teal" | "dark" | "outline-dark";
  size?: "sm" | "md";
  icon?: LucideIcon | React.ComponentType<{ className?: string; size?: number }>;
  noIcon?: boolean;
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
  // Define standard base styles
  const sizeClasses = size === "sm" ? "py-2.5 px-5" : "py-4 px-8";
  const baseStyle = `group relative ${sizeClasses} font-sans font-bold text-xs uppercase tracking-wider select-none cursor-pointer flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border rounded-none overflow-hidden`;

  let variantStyle = "";

  switch (variant) {
    case "primary": // Light background, text dark ink
      variantStyle = "bg-off-white text-ink border-transparent hover:bg-ink hover:text-white hover:border-white/20";
      break;
    case "secondary": // Outline transparent, white borders/text
      variantStyle = "border-white/20 bg-transparent text-white hover:bg-white hover:text-ink hover:border-white";
      break;
    case "gold": // Classic high-performance Gold background
      variantStyle = "bg-gold text-ink border-gold hover:bg-ink hover:text-gold hover:border-gold";
      break;
    case "teal": // Mid-range teal bg with gold accents/white text
      variantStyle = "bg-teal text-white border-teal hover:bg-white hover:text-teal hover:border-teal";
      break;
    case "dark": // Ink dark background
      variantStyle = "bg-ink text-off-white border-white/5 hover:bg-off-white hover:text-ink hover:border-transparent";
      break;
    case "outline-dark": // Dark outline
      variantStyle = "border-ink/20 bg-transparent text-ink hover:bg-ink hover:text-white hover:border-ink";
      break;
    default:
      variantStyle = "bg-off-white text-ink border-transparent hover:bg-ink hover:text-white";
  }

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {!noIcon && (
          CustomIcon ? (
            <span className="relative overflow-hidden w-4 h-4 flex items-center justify-center shrink-0">
              <CustomIcon className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-4 group-hover:-translate-y-4 absolute text-current" />
              <CustomIcon className="w-4 h-4 transition-transform duration-300 ease-in-out -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 absolute text-current" />
            </span>
          ) : (
            <SlidingArrow />
          )
        )}
      </span>
    </button>
  );
}
