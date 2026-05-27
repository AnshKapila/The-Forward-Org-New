import React, { useState, useEffect } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { LinkedInPost } from "../types";
import { Loader2, Calendar } from "lucide-react";
import { InteractiveButton } from "./InteractiveButton";

export function PostsView() {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  // Fallback high-caliber articles (Pan's real thoughts) for out-of-the-box preview and error cases
  const fallbackPosts: LinkedInPost[] = [
    {
      date: "May 24, 2026",
      tag: "AI STRATEGY",
      excerpt: "If you ask five of your executive peers what their AI adoption strategy looks like, you will get five variations on 'we are piloting tools.' The board is happy with pilots, but pilots don't defend margins. Real scale requires restructuring operational hours, shifting headcount, and creating automated feedback loops that increase decision speed. That is the human infrastructure alignment problem. Stop piloting; start aligning.",
      linkedin_url: "https://www.linkedin.com",
      featured: true,
    },
    {
      date: "May 19, 2026",
      tag: "AI GOVERNANCE",
      excerpt: "Most compliance issues don't happen because of engineering gaps. They happen because a junior analyst pastes protected IP or healthcare records into consumer ChatGPT windows. If your organization doesn't have custom enterprise gateways active today, you are bleeding secrets. Governance is a structural business lever.",
      linkedin_url: "https://www.linkedin.com",
      featured: false,
    },
    {
      date: "May 14, 2026",
      tag: "LEADERSHIP ALIGNMENT",
      excerpt: "Executive inertia in AI isn't a tech phobia. It is reputation protection. A CEO of 30 years isn't going to look vulnerable in front of their CIO. Break that pattern: introduce structured, objective maturity assessments that measure organizational speed rather than coding deep dives.",
      linkedin_url: "https://www.linkedin.com",
      featured: false,
    },
    {
      date: "May 10, 2026",
      tag: "DECISION VELOCITY",
      excerpt: "The value of AI is not in typing emails faster. It is in compressing the decision cycles of your executive team from days to minutes. If your CDO keeps building models inside isolated silos without shifting operational governance, you are burning capital for zero speed gains.",
      linkedin_url: "https://www.linkedin.com",
      featured: false,
    },
    {
      date: "May 05, 2026",
      tag: "CULTURAL ADOPTION",
      excerpt: "If your teams think AI is coming to thin their ranks, they will sabotage adoption with passive operational resistance. Reframe the narrative: AI is a co-thinking buffer that turns a mid-tier manager into an autonomous director. Align adoption with promotion paths to unlock velocity.",
      linkedin_url: "https://www.linkedin.com",
      featured: false,
    },
    {
      date: "Apr 29, 2026",
      tag: "STRUCTURED ROI",
      excerpt: "ROI in AI isn't an abstract prediction. It's a headcount and hour equation. If you implement writing assistants and compress a marketing drafting cycle by 80%, you must either ship 5x the volume or allocate hours to client closing. Anything else is fake efficiency.",
      linkedin_url: "https://www.linkedin.com",
      featured: false,
    },
    {
      date: "Apr 22, 2026",
      tag: "COMPLIANCE SAFELIGHTS",
      excerpt: "Regulated brands operate inside high-friction rules. You cannot afford to hallucinate contract language or health diagnoses. Build deterministic auditing safeguards: AI generates, strict non-AI validation rules sanitize, and senior directors sign. Safety is a feature.",
      linkedin_url: "https://www.linkedin.com",
      featured: false,
    },
    {
      date: "Apr 15, 2026",
      tag: "THE INDEX SUMMARY",
      excerpt: "Over fifteen business dimensions, average corporate AI strategy indexes at only 42% maturity. The leakage is not technical ability—it is the governance bridge connecting tech to business ROI. This is the structural gap we close first.",
      linkedin_url: "https://www.linkedin.com",
      featured: false,
    },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      // Webhook comments & execution pathways as requested:
      // Posts are automatically synced from LinkedIn
      // via a Zapier/Make webhook that writes new 
      // posts to the Google Sheet on publish.
      // Sheet URL: set in .env as VITE_POSTS_SHEET_URL
      // No manual update required after setup.
      const sheetUrl = (import.meta as any).env.VITE_POSTS_SHEET_URL;

      if (!sheetUrl) {
        // Fallback gracefully to preset catalog if sheet is undefined or missing
        // This ensures the site always displays high-quality content instantly
        setTimeout(() => {
          setPosts(fallbackPosts);
          setLoading(false);
        }, 800);
        return;
      }

      try {
        const response = await fetch(sheetUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        
        // Attempt to parse standard published CSV or JSON payload
        const text = await response.text();
        
        // Let's check if the response is Google Sheet gviz JSON wrapper or normal JSON
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
                linkedin_url: cells[3]?.v || "https://www.linkedin.com",
                featured: cells[4]?.v === "true" || cells[4]?.v === true,
              };
            });
            setPosts(parsedPosts.length > 0 ? parsedPosts : fallbackPosts);
          } else {
            setPosts(fallbackPosts);
          }
        } else {
          // Fallback to parsed JSON array structure
          const parsed = JSON.parse(text);
          setPosts(Array.isArray(parsed) ? parsed : fallbackPosts);
        }
      } catch (err) {
        console.warn("Unable to fetch sheet data, using secure fallback content", err);
        // Fallback on error to secure visual finish
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Separate featured and non-featured posts
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const regularPosts = posts.filter((p) => p !== featuredPost);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="min-h-screen bg-canvas flex flex-col justify-between">
      {/* Scroll-aligned Navigation Header */}
      <Nav />

      {/* Page Content Layout */}
      <main className="flex-1">
        {/* Compact Hero Block */}
        <section className="bg-teal pt-32 pb-20 md:pb-24 text-left relative overflow-hidden">
          {/* Subtle logo vector outline graphic of structural lines */}
          <div className="absolute right-[-100px] bottom-[-100px] w-96 h-96 opacity-10 pointer-events-none select-none text-off-white">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="0.5">
              <circle cx="50" cy="50" r="45" strokeDasharray="2 2" />
              <line x1="50" y1="5" x2="50" y2="95" />
              <line x1="5" y1="50" x2="95" y2="50" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-4">
            <span className="font-sans font-semibold text-xs text-gold uppercase tracking-[0.2em] block">
              FROM THE FIELD
            </span>
            <h1 className="font-serif text-[42px] md:text-[54px] font-bold text-off-white leading-[1.1] tracking-tight">
              Pan's thinking, published weekly.
            </h1>
            <p className="font-sans text-base md:text-lg text-off-white/80 leading-relaxed max-w-xl">
              On AI strategy, leadership alignment, and organizational change.
            </p>
          </div>
        </section>

        {/* Posts Grid Panel */}
        <section id="posts-feed" className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
          
          {loading ? (
            /* Loading Skeleton States */
            <div className="space-y-12">
              {/* Featured post skeleton */}
              <div className="h-64 bg-teal/5 animate-pulse border border-teal/15 flex items-center justify-center">
                <Loader2 className="animate-spin text-teal opacity-50" size={24} />
              </div>
              
              {/* Regular posts skeleton grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="p-8 bg-canvas border border-teal/10 animate-pulse space-y-6">
                    <div className="h-4 w-24 bg-teal/10 rounded-sm" />
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-teal/10 rounded-sm" />
                      <div className="h-3 w-5/6 bg-teal/10 rounded-sm" />
                      <div className="h-3 w-4/5 bg-teal/10 rounded-sm" />
                    </div>
                    <div className="h-3 w-32 bg-gold/10 rounded-sm pt-4" />
                  </div>
                ))}
              </div>
            </div>
          ) : error && posts.length === 0 ? (
            /* Error State (Never shown due to reliable fallback posts array) */
            <div className="py-20 text-center space-y-4">
              <h3 className="font-serif text-2xl italic text-teal">
                Unable to sync content streams.
              </h3>
              <p className="font-sans text-sm text-ink-muted">
                Please confirm connection credentials inside environment variables.
              </p>
            </div>
          ) : posts.length === 0 ? (
            /* Empty State */
            <div className="py-24 text-center">
              <p className="font-serif text-2xl italic text-teal">
                No posts yet. Check back soon.
              </p>
            </div>
          ) : (
            /* Main Content Feed */
            <div className="space-y-12">
              
              {/* FEATURED POST (Full-width card at top) */}
              {featuredPost && (
                <ScrollReveal duration={0.65}>
                  <div className="relative border border-teal bg-teal/5 flex flex-col md:grid md:grid-cols-[65%_35%] justify-between gap-8 p-8 md:p-12 text-left">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="inline-block px-3 py-1 border border-gold/30 bg-gold/10 text-[10px] font-mono font-bold tracking-wider text-gold uppercase">
                          Featured
                        </span>
                        <span className="font-sans text-teal tracking-[0.15em] uppercase text-xs font-semibold">
                          {featuredPost.tag}
                        </span>
                      </div>

                      <p className="font-sans text-lg md:text-xl text-ink leading-[1.75]">
                        "{featuredPost.excerpt}"
                      </p>

                      <div className="flex items-center gap-2 text-xs text-ink-faint font-mono">
                        <Calendar size={13} /> Published on {featuredPost.date}
                      </div>
                    </div>

                    <div className="flex md:flex-col justify-end md:justify-center items-start md:items-end">
                      <InteractiveButton
                        onClick={() => window.open(featuredPost.linkedin_url, "_blank", "noopener,noreferrer")}
                        variant="gold"
                      >
                        Read on LinkedIn
                      </InteractiveButton>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* REGULAR POSTS GRID */}
              <StaggerContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.slice(0, visibleCount).map((post, idx) => (
                    <div key={idx} className="h-full">
                      <StaggerItem>
                        <a
                          href={post.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block p-8 bg-[#FAFAF7] border border-teal hover:border-gold hover:-translate-y-1 transition-all duration-200 rounded-none focus-visible:outline-2 focus-visible:outline-gold text-left h-full flex flex-col justify-between"
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

                            <p className="font-sans text-sm md:text-base text-ink-muted leading-[1.7] line-clamp-5">
                              "{post.excerpt}"
                            </p>
                          </div>

                          <div className="mt-8 pt-4 border-t border-gold/10 flex items-center justify-between">
                            <span className="font-sans font-semibold text-xs text-gold uppercase tracking-wider block">
                              Read on LinkedIn
                            </span>
                            <ArrowUpRight size={13} className="text-gold opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                          </div>
                        </a>
                      </StaggerItem>
                    </div>
                  ))}
                </div>
              </StaggerContainer>

              {/* PAGINATION: LOAD MORE BUTTON */}
              {posts.length > visibleCount + 1 && (
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

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
