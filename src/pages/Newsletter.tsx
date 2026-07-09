import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { newsletters } from "../data/newsletters";
import { BookOpen } from "lucide-react";
import { InteractiveButton } from "../components/InteractiveButton";
import panAvatar from "../assets/images/regenerated_image_1782056067058.png";

export default function Newsletter() {
  const [_, setLocation] = useLocation();
  const [activeFilter, setActiveFilter] = useState("All");

  const matchesFilter = (tag: string) => {
    if (activeFilter === "All") return true;
    const normTag = tag.toUpperCase();
    if (activeFilter === "AI Governance") {
      return normTag.includes("GOVERNANCE") || normTag.includes("COMPLIANCE") || normTag.includes("RISK");
    }
    if (activeFilter === "Leadership") {
      return normTag.includes("LEADERSHIP") || normTag.includes("STRATEGY");
    }
    if (activeFilter === "Decision Making") {
      return normTag.includes("DECISION") || normTag.includes("VELOCITY") || normTag.includes("ROI");
    }
    if (activeFilter === "Org Culture") {
      return normTag.includes("CULTURE") || normTag.includes("ADOPTION") || normTag.includes("ORGANIZATION");
    }
    return false;
  };

  const filteredNewsletters = newsletters.filter((n) => matchesFilter(n.tag));

  const filterTabStyles = (name: string) => {
    const isActive = activeFilter === name;
    return `px-5 py-2.5 rounded-full text-xs font-sans font-semibold border tracking-wider capitalize transition-all duration-150 cursor-pointer ${
      isActive
        ? "bg-teal text-white border-teal shadow-smScale"
        : "bg-white text-teal border-teal/30 hover:bg-teal/10"
    }`;
  };

  return (
    <div className="min-h-screen bg-white text-ink flex flex-col justify-between">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#1A3C34] pt-12 pb-20 md:pb-24 text-left relative overflow-hidden">
          <div className="absolute right-[-100px] bottom-[-100px] w-96 h-96 opacity-10 pointer-events-none select-none text-off-white">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="0.5">
              <circle cx="50" cy="50" r="45" strokeDasharray="2 2" />
              <line x1="50" y1="5" x2="50" y2="95" />
              <line x1="5" y1="50" x2="95" y2="50" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-4">
            <span className="font-sans font-bold text-xs text-gold capitalize tracking-[0.2em] block">
              The Newsletter
            </span>
            <h1 className="font-serif text-[38px] md:text-[54px] font-bold text-off-white leading-[1.1] tracking-tight">
              One Step Forward
            </h1>
            
            <div className="flex items-center gap-3.5 pt-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/40 shrink-0 bg-sand">
                <img 
                  src={panAvatar} 
                  alt="Pan Seth" 
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200";
                  }}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <p className="font-sans font-semibold text-[14px] text-off-white">
                  Pan Seth <span className="text-gold/50 mx-2">•</span> <span className="text-gold capitalize tracking-wider text-xs font-bold">AI Strategy Advisor</span>
                </p>
                <p className="font-sans text-[11px] text-off-white/70">
                  Weekly breakdowns of what is actually happening at the intersection of AI and organizational transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Feed Section */}
        <section id="newsletters-feed" className="py-16 md:py-20 max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Topics Filter */}
          <div className="flex flex-wrap gap-2.5 mb-12 justify-start md:justify-center">
            {["All", "AI Governance", "Leadership", "Decision Making", "Org Culture"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={filterTabStyles(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {filteredNewsletters.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-[22px] italic text-teal">
                No matching newsletter editions for "{activeFilter}". Check back soon.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              <StaggerContainer>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                  {filteredNewsletters.map((newsletter, idx) => (
                    <div key={newsletter.id} className="h-full">
                      <StaggerItem index={idx}>
                        <div
                          onClick={() => setLocation(`/newsletter/${newsletter.id}`)}
                          className="group relative flex flex-col justify-between p-4 bg-white border border-teal hover:border-[#C9A55A] hover:-translate-y-[4px] transition-all duration-[250ms] ease-out rounded-none text-left h-full shadow-sm cursor-pointer"
                        >
                          <div>
                            <span className="font-sans font-semibold text-[11px] text-teal tracking-[0.16em] capitalize mb-1 block">
                              {newsletter.tag}
                            </span>

                            <h4 className="font-serif text-xl font-bold text-ink group-hover:text-gold transition-colors mb-3">
                              {newsletter.title}
                            </h4>

                            <p className="font-sans text-[14px] md:text-[15px] text-ink-light leading-[1.7] line-clamp-4">
                              {newsletter.excerpt}
                            </p>

                            {newsletter.thumbnailUrl && (
                              <div className="w-full aspect-[16/10] overflow-hidden bg-sand border border-teal/10 mt-4 flex items-center justify-center">
                                <img
                                  src={newsletter.thumbnailUrl}
                                  alt={newsletter.title}
                                  className="max-w-full max-h-full object-contain group-hover:scale-[1.02] transition-transform duration-[400ms] ease-out"
                                />
                              </div>
                            )}
                          </div>

                          {/* CTA Row */}
                          <div className="mt-4 pt-4 border-t border-gold/10 flex flex-wrap items-center justify-start gap-4">
                            <InteractiveButton
                              onClick={(e) => {
                                e.stopPropagation();
                                setLocation(`/newsletter/${newsletter.id}`);
                              }}
                              variant="teal"
                              size="sm"
                              className="flex items-center gap-1.5"
                            >
                              <BookOpen size={13} />
                              <span>Continue reading</span>
                            </InteractiveButton>
                          </div>
                        </div>
                      </StaggerItem>
                    </div>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
