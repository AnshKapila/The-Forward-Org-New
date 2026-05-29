import React from "react";

interface LogoMarkProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function LogoMark({ width = "24", height = "24", className = "" }: LogoMarkProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-transform duration-300 group-hover:scale-105`}
    >
      {/* Elegantly nested heavy gold outer border ring */}
      <circle
        cx="12"
        cy="12"
        r="10.5"
        stroke="#C9A55A"
        strokeWidth="1.5"
        className="stroke-gold"
      />
      {/* Concentric inner calibration ring */}
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="#C9A55A"
        strokeWidth="0.75"
        strokeDasharray="1 1"
        className="stroke-gold/70"
      />
      
      {/* Clean high-chronometer tick marks */}
      {/* 12 o'clock */}
      <line x1="12" y1="2" x2="12" y2="4" stroke="#C9A55A" strokeWidth="1.25" className="stroke-gold" />
      {/* 3 o'clock */}
      <line x1="20" y1="12" x2="22" y2="12" stroke="#C9A55A" strokeWidth="1.25" className="stroke-gold" />
      {/* 6 o'clock */}
      <line x1="12" y1="20" x2="12" y2="22" stroke="#C9A55A" strokeWidth="1.25" className="stroke-gold" />
      {/* 45-degree angle ticks to represent micro alignment */}
      <line x1="5" y1="5" x2="6.5" y2="6.5" stroke="#C9A55A" strokeWidth="0.75" className="stroke-gold/80" />
      <line x1="19" y1="5" x2="17.5" y2="6.5" stroke="#C9A55A" strokeWidth="0.75" className="stroke-gold/80" />
      <line x1="5" y1="19" x2="6.5" y2="17.5" stroke="#C9A55A" strokeWidth="0.75" className="stroke-gold/80" />
      <line x1="19" y1="19" x2="17.5" y2="17.5" stroke="#C9A55A" strokeWidth="0.75" className="stroke-gold/80" />

      {/* Exquisite luxury hour hand: 10 o'clock position (150 degrees) */}
      <line
        x1="12"
        y1="12"
        x2="8.5"
        y2="10"
        stroke="#C9A55A"
        strokeWidth="1.75"
        strokeLinecap="round"
        className="stroke-gold"
      />
      
      {/* Exquisite luxury minute hand: 2 o'clock position (30 degrees) */}
      <line
        x1="12"
        y1="12"
        x2="16.5"
        y2="9.5"
        stroke="#C9A55A"
        strokeWidth="1.25"
        strokeLinecap="round"
        className="stroke-gold"
      />

      {/* Deluxe third second-indicator sweep pointer */}
      <line
        x1="12"
        y1="12"
        x2="15"
        y2="15"
        stroke="#C9A55A"
        strokeWidth="0.5"
        strokeLinecap="round"
        className="stroke-gold/70"
      />

      {/* Central chronometer core rivet */}
      <circle cx="12" cy="12" r="1.5" fill="#C9A55A" className="fill-gold" />
    </svg>
  );
}
