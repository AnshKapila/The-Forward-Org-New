import React from "react";
import { useLocation } from "wouter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { LoopingArrow } from "./InteractiveButton";
import { newsletters } from "../data/newsletters";
import panAvatar from "../assets/images/regenerated_image_1782056067058.png";

export function ThoughtLeadership() {
  const [_, setLocation] = useLocation();

  // Show the latest newsletters (up to 3) on the homepage
  const recentNewsletters = newsletters.slice(0, 3);

  return (
    <section id="thought-leadership" className="relative bg-canvas py-12 md:py-16 text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <ScrollReveal duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block">
                RECENT THINKING
              </span>
              <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-ink leading-tight text-balance">
                Insights from the field.
              </h2>
              <p className="font-sans text-sm md:text-base text-ink-muted leading-relaxed max-w-lg">
                We publish weekly on AI strategy, governance, leadership alignment, and what it actually takes to make AI produce business value.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => setLocation("/newsletter")}
                className="group font-sans font-semibold text-xs tracking-wider uppercase text-gold hover:text-gold-hover inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-gold select-none cursor-pointer"
              >
                <span>See all newsletters</span>
                <LoopingArrow className="text-gold" size={16} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Author Avatar Branding */}
        <ScrollReveal duration={0.5}>
          <div className="flex items-center gap-3.5 mb-10 bg-[#F5F2EC]/40 p-3.5 border border-teal/10 inline-flex text-left">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/40 shrink-0 bg-sand">
              <img
                src={panAvatar}
                alt="Pan Seth"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150&h=150";
                }}
              />
            </div>
            <div>
              <p className="font-sans font-bold text-sm text-ink leading-none">
                Pan Seth
              </p>
              <p className="font-sans text-[11px] font-bold text-teal tracking-widest uppercase mt-1 leading-none">
                AI Strategy Advisor
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Newsletter Grid */}
        <div className="min-h-[340px] flex flex-col justify-center">
          <StaggerContainer className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {recentNewsletters.map((newsletter, idx) => (
                <div key={newsletter.id} className="h-full flex flex-col">
                  <StaggerItem index={idx} className="h-full flex flex-col flex-grow">
                    <div
                      onClick={() => setLocation(`/newsletter/${newsletter.id}`)}
                      className="group block p-8 bg-[#FAFAF7] border border-teal hover:border-[#C9A55A] hover:-translate-y-[4px] transition-all duration-[250ms] ease-out rounded-none focus-visible:outline-2 focus-visible:outline-gold text-left h-full flex flex-col justify-between flex-grow cursor-pointer shadow-sm"
                    >
                      <div>
                        {/* Topic Tag */}
                        <span className="font-sans font-semibold text-[11px] text-teal tracking-[0.16em] uppercase block mb-4">
                          {newsletter.tag}
                        </span>

                        {/* Excerpt */}
                        <p className="font-sans text-[15px] md:text-[16px] text-ink-muted leading-[1.7] mb-6 group-hover:text-ink transition-colors duration-150">
                          "{newsletter.excerpt}"
                        </p>

                        {/* Thumbnail Image */}
                        {newsletter.thumbnailUrl && (
                          <div className="w-full aspect-[16/10] mb-6 overflow-hidden bg-sand border border-teal/10">
                            <img
                              src={newsletter.thumbnailUrl}
                              alt={newsletter.title}
                              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[400ms] ease-out"
                            />
                          </div>
                        )}
                      </div>

                      {/* Bottom Link Anchor */}
                      <div className="mt-auto pt-4 border-t border-gold/10 flex items-center justify-between">
                        <span className="font-sans font-semibold text-xs text-gold uppercase tracking-wider block">
                          Read Newsletter
                        </span>
                        <LoopingArrow className="text-gold" size={16} />
                      </div>
                    </div>
                  </StaggerItem>
                </div>
              ))}
            </div>
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
}
