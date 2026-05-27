import React, { useState } from "react";

interface PanImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export function PanImage({ src, fallbackSrc, alt, className = "", style }: PanImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-teal-dim/10 ${className}`} style={style}>
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-teal-dim/15 flex items-center justify-center">
          <span className="text-xs font-mono text-gold tracking-widest uppercase">LOADING...</span>
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
          isLoading ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      />
    </div>
  );
}
