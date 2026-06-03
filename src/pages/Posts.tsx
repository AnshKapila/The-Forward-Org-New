import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { LinkedInPost } from "../types";
import { Loader2, Calendar, AlertTriangle, RefreshCw } from "lucide-react";
import { InteractiveButton, LoopingArrow } from "../components/InteractiveButton";

export default function Posts() {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [activeFilter, setActiveFilter] = useState("All");

  const fallbackPosts: LinkedInPost[] = [
    {
      date: "May 24, 2026",
      tag: "AI STRATEGY",
      excerpt: "If you ask five of your executive peers what their AI adoption strategy looks like, you will get five variations on 'we are piloting tools.' The board is happy with pilots, but pilots don't defend margins. Real scale requires restructuring operational hours, shifting headcount, and creating automated feedback loops that increase decision speed. That is the human infrastructure alignment problem. Stop piloting; start aligning.",
      linkedin_url: "https://www.linkedin.com/in/pan-seth/",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=650&h=360",
      featured: true,
    },
    {
      date: "May 19, 2026",
      tag: "AI GOVERNANCE",
      excerpt: "Most compliance issues don't happen because of engineering gaps. They happen because a junior analyst pastes protected IP or healthcare records into consumer ChatGPT windows. If your organization doesn't have custom enterprise gateways active today, you are bleeding secrets. Governance is a structural business lever.",
      linkedin_url: "https://www.linkedin.com/in/pan-seth/",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=650&h=360",
      featured: false,
    },
    {
      date: "May 14, 2026",
      tag: "LEADERSHIP ALIGNMENT",
      excerpt: "Executive inertia in AI isn't a tech phobia. It is reputation protection. A CEO of 30 years isn't going to look vulnerable in front of their CIO. Break that pattern: introduce structured, objective maturity assessments that measure organizational speed rather than coding deep dives.",
      linkedin_url: "https://www.linkedin.com/in/pan-seth/",
      imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=650&h=360",
      featured: false,
    },
    {
      date: "May 10, 2026",
      tag: "DECISION VELOCITY",
      excerpt: "The value of AI is not in typing emails faster. It is in compressing the decision cycles of your executive team from days to minutes. If your CDO keeps building models inside isolated silos without shifting operational governance, you are burning capital for zero speed gains.",
      linkedin_url: "https://www.linkedin.com/in/pan-seth/",
      imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=650&h=360",
      featured: false,
    },
    {
      date: "May 05, 2026",
      tag: "CULTURAL ADOPTION",
      excerpt: "If your teams think AI is coming to thin their ranks, they will sabotage adoption with passive operational resistance. Reframe the narrative: AI is a co-thinking buffer that turns a mid-tier manager into an autonomous director. Align adoption with promotion paths to unlock velocity.",
      linkedin_url: "https://www.linkedin.com/in/pan-seth/",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=650&h=360",
      featured: false,
    },
    {
      date: "Apr 29, 2026",
      tag: "STRUCTURED ROI",
      excerpt: "ROI in AI isn't an abstract prediction. It's a headcount and hour equation. If you implement writing assistants and compress a marketing drafting cycle by 80%, you must either ship 5x the volume or allocate hours to client closing. Anything else is fake efficiency.",
      linkedin_url: "https://www.linkedin.com/in/pan-seth/",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=650&h=360",
      featured: false,
    },
    {
      date: "Apr 22, 2026",
      tag: "COMPLIANCE SAFELIGHTS",
      excerpt: "Regulated brands operate inside high-friction rules. You cannot afford to hallucinate contract language or health diagnoses. Build deterministic auditing safeguards: AI generates, strict non-AI validation rules sanitize, and senior directors sign. Safety is a feature.",
      linkedin_url: "https://www.linkedin.com/in/pan-seth/",
      imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=650&h=360",
      featured: false,
    },
    {
      date: "Apr 15, 2026",
      tag: "THE INDEX SUMMARY",
      excerpt: "Over fifteen business dimensions, average corporate AI strategy indexes at only 42% maturity. The leakage is not technical ability; it is the governance bridge connecting tech to business ROI. This is the structural gap we close first.",
      linkedin_url: "https://www.linkedin.com/in/pan-seth/",
      imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=650&h=360",
      featured: false,
    },
  ];

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    const sheetUrl = (import.meta as any).env.VITE_POSTS_SHEET_URL;

    if (!sheetUrl) {
      setTimeout(() => {
        setPosts(fallbackPosts);
        setLoading(false);
      }, 600);
      return;
    }

    try {
      const response = await fetch(sheetUrl);
      if (!response.ok) throw new Error("Network response was not ok");
      const text = await response.text();
      
      if (text.includes("google.visualization.Query.setResponse")) {
        const rawJsonMatch = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*?)\);/);
        if (rawJsonMatch && rawJsonMatch[1]) {
          const dataObj = JSON.parse(rawJsonMatch[1]);
          const rows = dataObj.table.rows;
          const parsedPosts: LinkedInPost[] = rows.map((row: any) => {
            const cells = row.c;
            return {
              date: cells[0]?.v || "Recently",
              tag: cells[1]?.v || "AI STRATEGY",
              excerpt: cells[2]?.v || "",
              linkedin_url: cells[3]?.v || "https://www.linkedin.com/in/pan-seth/",
              featured: cells[4]?.v === "true" || cells[4]?.v === true,
            };
          });
          setPosts(parsedPosts.length > 0 ? parsedPosts : fallbackPosts);
        } else {
          setPosts(fallbackPosts);
        }
      } else {
        const parsed = JSON.parse(text);
        setPosts(Array.isArray(parsed) ? parsed : fallbackPosts);
      }
    } catch (err) {
      console.warn("Unable to fetch sheet data, using secure fallback content", err);
      setError("Synchronizer was unable to establish a secure handshake to fetch live rows from the Google Sheet feed.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const matchesFilter = (postTag: string) => {
    const normTag = postTag.toUpperCase();
    if (activeFilter === "All") return true;
    if (activeFilter === "AI Governance") {
      return normTag.includes("GOVERNANCE") || normTag.includes("COMPLIANCE") || normTag.includes("RISK") || normTag.includes("SAFELIGHTS");
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

  // Filter the posts list
  const filteredPosts = posts.filter((p) => matchesFilter(p.tag));

  // Determine featured post from filtered list (fallback to first of filtered)
  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter((p) => p !== featuredPost);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const filterTabStyles = (name: string) => {
    const isActive = activeFilter === name;
    return `px-5 py-2.5 rounded-full text-xs font-sans font-semibold border tracking-wider uppercase transition-all duration-150 cursor-pointer ${
      isActive
        ? "bg-teal text-white border-teal shadow-smScale"
        : "bg-white text-teal border-teal/30 hover:bg-teal/10"
    }`;
  };

  return (
    <div className="min-h-screen bg-white text-ink flex flex-col justify-between">
      <main className="flex-1">
        {/* Compact Hero Block with Avatar */}
        <section className="bg-[#1A3C34] pt-12 pb-20 md:pb-24 text-left relative overflow-hidden">
          <div className="absolute right-[-100px] bottom-[-100px] w-96 h-96 opacity-10 pointer-events-none select-none text-off-white">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="0.5">
              <circle cx="50" cy="50" r="45" strokeDasharray="2 2" />
              <line x1="50" y1="5" x2="50" y2="95" />
              <line x1="5" y1="50" x2="95" y2="50" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-4">
            <span className="font-sans font-bold text-xs text-gold uppercase tracking-[0.2em] block">
              FROM THE FIELD
            </span>
            <h1 className="font-serif text-[38px] md:text-[54px] font-bold text-off-white leading-[1.1] tracking-tight">
              Pan's thinking, published weekly.
            </h1>
            
            {/* Expanded custom author avatar & description layout */}
            <div className="flex items-center gap-3.5 pt-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/40 shrink-0 bg-sand">
                <img 
                  src="/images/pan-avatar.jpg" 
                  alt="Pan Seth" 
                  onError={(e) => {
                    // Fallback visual
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200";
                  }}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <p className="font-sans font-semibold text-[14px] text-off-white">
                  Pan Seth <span className="text-gold/50 mx-2">•</span> <span className="text-gold uppercase tracking-wider text-xs font-bold">AI Strategy Advisor</span>
                </p>
                <p className="font-sans text-[11px] text-off-white/70">
                  On AI strategy, leadership alignment, and organizational change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar and Grid Grid Container */}
        <section id="posts-feed" className="py-16 md:py-20 max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Five topics Filter Pill Bar */}
          <div className="flex flex-wrap gap-2.5 mb-12 justify-start md:justify-center">
            {["All", "AI Governance", "Leadership", "Decision Making", "Org Culture"].map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setVisibleCount(8);
                }}
                className={filterTabStyles(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="space-y-12">
              <div className="h-64 bg-teal/5 animate-pulse border border-teal/15 flex items-center justify-center">
                <Loader2 className="animate-spin text-teal opacity-50" size={24} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="p-8 bg-white border border-teal/10 animate-pulse space-y-6">
                    <div className="h-4 w-24 bg-teal/10 rounded-sm" />
                    <div className="space-y-2">
                       <div className="h-3 w-full bg-teal/10 rounded-sm" />
                       <div className="h-3 w-5/6 bg-teal/10 rounded-sm" />
                       <div className="h-3 w-4/5 bg-teal/10 rounded-sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : error ? (
            <div className="p-8 md:p-12 bg-[#FAF9F5] border border-[#D4C9B8] space-y-6 max-w-2xl mx-auto shadow-md text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-red-600/80" />
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-150">
                  <AlertTriangle className="text-red-500" size={18} />
                </div>
                <div className="space-y-2 flex-grow">
                  <span className="font-mono text-[9px] font-bold text-red-600 tracking-wider bg-red-50 px-2 py-0.5 border border-red-150 uppercase rounded-sm inline-block leading-none">
                    REMOTE_SYNC_INTERRUPTED
                  </span>
                  <h3 className="font-serif text-[20px] font-bold text-ink">
                    Row Sync Fault
                  </h3>
                  <p className="font-sans text-sm text-ink-muted leading-relaxed font-light">
                    {error}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-3 pl-0 sm:pl-15">
                <button
                  onClick={fetchPosts}
                  className="px-5 py-3 bg-[#122D27] hover:bg-gold text-white hover:text-ink font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 select-none cursor-pointer rounded-none"
                >
                  <RefreshCw size={12} className="shrink-0" />
                  <span>Retry Feed Load</span>
                </button>
                <button
                  onClick={() => {
                    setError(null);
                    setPosts(fallbackPosts);
                  }}
                  className="px-5 py-3 border border-teal/20 hover:border-[#122D27] text-teal font-sans text-xs font-bold uppercase tracking-wider transition-colors select-none cursor-pointer rounded-none"
                >
                  Use Fallback Feed
                </button>
              </div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-[22px] italic text-teal">
                No matching posts for "{activeFilter}". Check back soon.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              
              {/* FEATURED POST */}
              {featuredPost && (
                <ScrollReveal duration={0.65}>
                  <div className="relative border border-teal bg-white flex flex-col lg:grid lg:grid-cols-[58%_42%] justify-between gap-8 p-6 md:p-10 text-left shadow-sm">
                    <div className="space-y-5 flex flex-col justify-between">
                      <div className="space-y-5">
                        <div className="flex items-center gap-3">
                          <span className="inline-block px-3 py-1 border border-gold/30 bg-gold/10 text-[10px] font-mono font-bold tracking-wider text-gold uppercase">
                            Featured
                          </span>
                          <span className="font-sans text-teal tracking-[0.15em] uppercase text-xs font-semibold">
                            {featuredPost.tag}
                          </span>
                        </div>

                        <p className="font-sans text-base md:text-[17px] text-ink leading-[1.75]">
                          "{featuredPost.excerpt}"
                        </p>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-gold/10">
                        <div className="flex items-center gap-2 text-xs text-ink-faint font-mono">
                          <Calendar size={13} /> Published on {featuredPost.date}
                        </div>
                        <div>
                          <InteractiveButton
                            onClick={() => window.open("https://www.linkedin.com/in/pan-seth/", "_blank", "noopener,noreferrer")}
                            variant="gold"
                          >
                            Read on LinkedIn
                          </InteractiveButton>
                        </div>
                      </div>
                    </div>

                    {featuredPost.imageUrl ? (
                      <div className="w-full aspect-[16/10] lg:aspect-auto lg:h-full min-h-[220px] overflow-hidden bg-sand border border-teal/10">
                        <img
                          src={featuredPost.imageUrl}
                          alt={`${featuredPost.tag} attachment`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <div className="flex md:flex-col justify-end md:justify-center items-start md:items-end">
                        <InteractiveButton
                          onClick={() => window.open("https://www.linkedin.com/in/pan-seth/", "_blank", "noopener,noreferrer")}
                          variant="gold"
                        >
                          Read on LinkedIn
                        </InteractiveButton>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              )}

              {/* REGULAR FEED GRID */}
              <StaggerContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.slice(0, visibleCount).map((post, idx) => (
                    <div key={idx} className="h-full">
                      <StaggerItem index={idx}>
                        <a
                          href="https://www.linkedin.com/in/pan-seth/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block p-8 bg-white border border-teal hover:border-[#C9A55A] hover:-translate-y-[4px] transition-all duration-[250ms] ease-out rounded-none focus-visible:outline-2 focus-visible:outline-gold text-left h-full flex flex-col justify-between shadow-sm"
                        >
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="font-sans font-semibold text-[11px] text-teal tracking-[0.16em] uppercase">
                                {post.tag}
                              </span>
                              <span className="font-mono text-[10px] text-ink-faint">
                                {post.date}
                              </span>
                            </div>

                            <p className="font-sans text-[14px] md:text-[15px] text-ink-muted leading-[1.7] line-clamp-6">
                              "{post.excerpt}"
                            </p>

                            {post.imageUrl && (
                              <div className="w-full aspect-[16/10] overflow-hidden bg-sand border border-teal/10 mt-3">
                                <img
                                  src={post.imageUrl}
                                  alt={`${post.tag} attachment`}
                                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[400ms] ease-out"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            )}
                          </div>

                          <div className="mt-8 pt-4 border-t border-gold/10 flex items-center justify-between">
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

              {/* PAGINATION */}
              {filteredPosts.length > visibleCount + 1 && (
                <div className="pt-10 flex justify-center">
                  <InteractiveButton
                    onClick={handleLoadMore}
                    variant="teal"
                  >
                    Load More Thinking
                  </InteractiveButton>
                </div>
              )}

            </div>
          )}
        </section>
      </main>
    </div>
  );
}
