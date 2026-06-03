import React from "react";
import { useLocation } from "wouter";
import { InteractiveButton } from "./InteractiveButton";

export function BookACall() {
  const [_, setLocation] = useLocation();

  const handleGoToBooking = () => {
    setLocation("/book-a-call");
  };

  return (
    <section id="book-a-call" className="relative bg-[#1A3C34] py-24 px-6 border-t border-[#C9A55A]/35 text-white">
      <div className="max-w-[720px] mx-auto text-center relative z-10 flex flex-col items-center">
        <span className="font-mono text-[11px] font-bold text-gold uppercase tracking-[0.25em] block leading-none">
          LET'S TALK
        </span>
        <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[48px] font-bold text-white leading-tight tracking-tight mt-4 max-w-2xl px-2">
          30 minutes. No pitch. Just clarity on where you stand and what to do next.
        </h2>
        <span className="font-sans text-[13px] text-[#F7F4EF]/50 leading-none mt-4 block">
          Pan personally takes every call.
        </span>
        <div className="mt-8">
          <InteractiveButton
            onClick={handleGoToBooking}
            variant="gold"
            className="px-8 py-4 text-sm font-semibold tracking-wide uppercase"
          >
            Book a Call
          </InteractiveButton>
        </div>
      </div>
    </section>
  );
}

