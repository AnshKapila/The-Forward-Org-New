import { useLocation } from "wouter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { LoopingArrow } from "./InteractiveButton";

// IMAGE: Use architectural/environmental photography.
// NO stock business people. NO AI/robot imagery.
// Preferred: boardrooms, glass architecture, 
// structural details, natural light office spaces.
// Pan's own photos for sections 07 and 12 only.

export function ThoughtLeadership() {
  const [_, setLocation] = useLocation();

  const posts = [
    {
      span: "lg:col-span-5",
      tag: "AI GOVERNANCE",
      excerpt: "88% of companies report regular AI use. Only 40% generate real value from it. The difference is never the tools. It's the five organizational dimensions underneath them...",
    },
    {
      span: "lg:col-span-4",
      tag: "LEADERSHIP ALIGNMENT",
      excerpt: "If you asked three of your department heads to describe your AI strategy right now, would they say the same thing? Most executive teams can't answer yes. That gap costs more than you think...",
    },
    {
      span: "lg:col-span-3",
      tag: "DECISION VELOCITY",
      excerpt: "The executives who move fastest with AI are not the ones with the best tools. They're the ones who restructured how decisions get made before deploying anything...",
    },
  ];

  return (
    <section id="thought-leadership" className="relative bg-canvas py-24 md:py-32 text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block with gold route navigate link */}
        <ScrollReveal duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="font-sans font-medium text-xs text-gold uppercase tracking-[0.2em] block">
                RECENT THINKING
              </span>
              <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-ink leading-tight text-balance">
                From the field.
              </h2>
              <p className="font-sans text-sm md:text-base text-ink-muted leading-relaxed max-w-lg">
                Pan publishes weekly on AI strategy, leadership alignment, and organizational change.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => setLocation("/posts")}
                className="group font-sans font-semibold text-xs tracking-wider uppercase text-gold hover:text-gold-hover inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-gold select-none cursor-pointer"
              >
                <span>See all posts</span>
                <LoopingArrow className="text-gold" size={16} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Small author avatar branding above card grid */}
        <ScrollReveal duration={0.5}>
          <div className="flex items-center gap-3.5 mb-10 bg-[#F5F2EC]/40 p-3.5 border border-teal/10 inline-flex text-left">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/40 shrink-0 bg-sand">
              <img
                src="/images/pan-avatar.jpg"
                alt="Pan Seth"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback tight profile visual
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

        {/* CSS Clustered Grid with column spans 5/12, 4/12, 3/12 creating a natural asymmetry */}
        <StaggerContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {posts.map((post, idx) => (
              <div key={idx} className={`${post.span} col-span-1`}>
                <StaggerItem>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-8 bg-[#FAFAF7] border border-teal hover:border-[#C9A55A] hover:-translate-y-[4px] transition-all duration-[250ms] ease-out rounded-none focus-visible:outline-2 focus-visible:outline-gold text-left h-full flex flex-col justify-between"
                  >
                    <div>
                      {/* Topic Tag */}
                      <span className="font-sans font-semibold text-[11px] text-teal tracking-[0.16em] uppercase block mb-6">
                        {post.tag}
                      </span>

                      {/* Post Excerpt */}
                      <p className="font-sans text-[16px] text-ink-muted leading-[1.75] mb-8 group-hover:text-ink transition-colors duration-150">
                        "{post.excerpt}"
                      </p>
                    </div>

                    {/* Bottom Link Anchor */}
                    <div className="mt-auto pt-4 border-t border-gold/10 flex items-center justify-between">
                      <span className="font-sans font-semibold text-xs text-gold uppercase tracking-wider block">
                        Read on LinkedIn
                      </span>
                      <LoopingArrow className="text-gold" size={16} />
                    </div>
                  </a>
                </StaggerItem>
              </div>
            ))}
          </div>
        </StaggerContainer>

      </div>
    </section>
  );
}
