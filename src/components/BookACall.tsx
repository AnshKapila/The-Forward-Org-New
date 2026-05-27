import React, { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Calendar, Check, Clock, Globe } from "lucide-react";

export function BookACall() {
  const [bookingStarted, setBookingStarted] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [booked, setBooked] = useState(false);

  // High-end calendar days based on next business days
  const days = [
    { label: "Tue, May 27", id: "tue" },
    { label: "Wed, May 28", id: "wed" },
    { label: "Thu, May 29", id: "thu" },
  ];

  const slots = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM"];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDay || !selectedTime || !email) return;
    setBooked(true);
  };

  return (
    <section id="book-a-call" className="relative bg-teal-dim py-24 md:py-32 px-6">
      
      {/* Structural divider top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gold opacity-10" />

      <div className="max-w-[640px] mx-auto text-center relative z-10">
        {!bookingStarted ? (
          /* Normal CTA View */
          <ScrollReveal duration={0.6}>
            <div className="space-y-8">
              <span className="font-sans font-semibold text-xs text-gold uppercase tracking-[0.25em] block">
                LET'S TALK
              </span>

              <h2 className="font-serif text-[32px] md:text-[48px] leading-[1.15] font-bold text-off-white text-balance">
                30 minutes. No pitch. Just clarity on where you stand and what to do next.
              </h2>

              <div className="pt-2">
                <button
                  onClick={() => setBookingStarted(true)}
                  className="py-4 px-10 bg-gold hover:bg-gold-hover text-ink font-sans font-semibold text-[15px] cursor-pointer shadow-md select-none hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Book a Call
                </button>
              </div>

              <p className="font-sans text-[13px] text-off-white/50">
                Pan personally takes every call.
              </p>
            </div>
          </ScrollReveal>
        ) : !booked ? (
          /* Inline Slot Scheduler Card */
          <div className="bg-canvas text-ink p-6 md:p-8 text-left border border-gold/20 shadow-2xl space-y-6">
            <div className="border-b border-gold/15 pb-4 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono tracking-wider font-semibold text-gold uppercase block">
                  THE FORWARD ORG
                </span>
                <h3 className="font-serif text-xl font-bold text-teal mt-0.5">
                  AI Strategy Session
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-ink-muted bg-sand/20 px-3 py-1.5 border border-gold/20 font-mono">
                <Clock size={12} /> 30 min
              </div>
            </div>

            <form onSubmit={handleBook} className="space-y-6">
              {/* Step 1: Select Day */}
              <div className="space-y-3">
                <label className="block text-xs font-mono font-bold tracking-wider uppercase text-ink-muted">
                  1. Select Date
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {days.map((day) => (
                    <button
                      key={day.id}
                      type="button"
                      onClick={() => {
                        setSelectedDay(day.label);
                        setSelectedTime(null);
                      }}
                      className={`py-3 px-2 text-center text-xs font-sans font-medium transition-colors cursor-pointer border ${
                        selectedDay === day.label
                          ? "bg-teal border-teal text-off-white font-semibold"
                          : "bg-canvas hover:bg-teal/5 border-ink/10"
                      }`}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Time Slot */}
              {selectedDay && (
                <div className="space-y-3 animate-fade-in">
                  <label className="block text-xs font-mono font-bold tracking-wider uppercase text-ink-muted">
                    2. Select Time (Your Timezone)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {slots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 px-1 text-center text-xs font-sans transition-colors cursor-pointer border ${
                          selectedTime === slot
                            ? "bg-gold border-gold text-ink font-semibold"
                            : "bg-canvas hover:bg-gold/5 border-ink/10"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Corporate credentials */}
              {selectedTime && (
                <div className="space-y-4 pt-2 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-email" className="block text-[11px] font-mono font-medium tracking-wider uppercase text-ink-muted mb-1">
                        Corporate Email
                      </label>
                      <input
                        id="booking-email"
                        type="email"
                        required
                        placeholder="e.g. ceolead@firm.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-ink/20 focus:border-teal text-sm focus-visible:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-company" className="block text-[11px] font-mono font-medium tracking-wider uppercase text-ink-muted mb-1">
                        Company Name
                      </label>
                      <input
                        id="booking-company"
                        type="text"
                        required
                        placeholder="e.g. Vanguard Financial"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-3 py-2 border border-ink/20 focus:border-teal text-sm focus-visible:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-teal hover:bg-teal-light text-off-white font-sans font-semibold text-xs uppercase tracking-wider cursor-pointer shadow-md select-none transform hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5"
                  >
                    Confirm Meeting Selection <Calendar size={13} />
                  </button>
                </div>
              )}

              {/* Timezone Indicator */}
              <div className="flex items-center gap-1.5 text-[11px] text-ink-faint font-mono">
                <Globe size={11} /> Configured to your local timezone (UTC/EST)
              </div>
            </form>

            <button
              onClick={() => setBookingStarted(false)}
              className="text-xs font-sans text-ink-muted underline hover:text-ink block pt-2 cursor-pointer"
            >
              Cancel booking
            </button>
          </div>
        ) : (
          /* Booked Successful Confirmation View */
          <div className="bg-canvas text-ink p-8 border border-gold rounded-none shadow-2xl flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-16 h-16 bg-teal text-off-white flex items-center justify-center rounded-sm">
              <Check size={32} />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-teal">
                Strategy Session Booked
              </h3>
              <p className="font-sans text-sm text-ink-muted max-w-sm">
                Meeting confirmed with Pan on <span className="font-medium text-ink">{selectedDay}</span> at <span className="font-medium text-ink">{selectedTime}</span>.
              </p>
            </div>

            <p className="font-sans text-xs text-ink-faint max-w-xs">
              A private calendar invitation, Zoom link, and briefing questions have been sent to <span className="text-ink-muted font-medium">{email}</span>.
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  setBooked(false);
                  setBookingStarted(false);
                }}
                className="py-2.5 px-6 border border-teal text-teal hover:bg-teal/5 font-sans font-medium text-xs tracking-wider uppercase cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Decorative clean radial background highlights */}
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full border border-gold/[0.03] select-none pointer-events-none" />
    </section>
  );
}
