import React from "react";
import logoSrc from "../assets/images/regenerated_image_1780126552851.png";

interface LogoMarkProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function LogoMark({ width = "24", height = "24", className = "" }: LogoMarkProps) {
  const sizeStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <img
      src={logoSrc}
      alt="The Forward Org Logo"
      style={sizeStyle}
      className={`object-cover rounded-full shrink-0 ${className} transition-transform duration-300 group-hover:scale-105`}
      referrerPolicy="no-referrer"
    />
  );
}
