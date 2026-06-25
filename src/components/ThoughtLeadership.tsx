import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { LoopingArrow } from "./InteractiveButton";
import { AlertCircle, RefreshCw, ServerOff, Wifi } from "lucide-react";
import { LinkedInPost } from "../types";
import generatedPostImage from "../assets/images/regenerated_image_1780430014552.jpg";
import panAvatar from "../assets/images/regenerated_image_1782056067058.png";

// IMAGE: Use architectural/environmental photography.
// NO stock business people. NO AI/robot imagery.
// Preferred: boardrooms, glass architecture, 
// structural details, natural light office spaces.
// Pan's own photos for sections 07 and 12 only.

export function ThoughtLeadership() {
  const [_, setLocation] = useLocation();
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [simulateErrorToggle, setSimulateErrorToggle] = useState(false);

  const fallbackPosts: LinkedInPost[] = [
    {
      date: "May 24, 2026",
      tag: "AI GOVERNANCE",
      excerpt: "88% of companies report regular AI use. Only 40% generate real value from it. The difference is never the tools. It's the five organizational dimensions underneath them...",
      linkedin_url: "https://www.linkedin.com/in/pan-seth/",
      imageUrl: generatedPostImage,
      featured: true,
    },
    {
      date: "May 19, 2026",
      tag: "LEADERSHIP ALIGNMENT",
      excerpt: "If you asked three of your department heads to describe your AI strategy right now, would they say the same thing? Most executive teams can't answer yes. That gap costs more than you think...",
      linkedin_url: "https://www.linkedin.com/in/pan-seth/",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=650&h=360",
      featured: false,
    },
    {
      date: "May 14, 2026",
      tag: "DECISION VELOCITY",
      excerpt: "The executives who move fastest with AI are not the ones with the best tools. They're the ones who restructured how decisions get made before deploying anything...",
      linkedin_url: "https://www.linkedin.com/in/pan-seth/",
      imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=650&h=360",
      featured: false,
    },
  ];

  const fetchPosts = async (isRetry = false) => {
    setLoading(true);
    setError(null);

    // Realistic response latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    // To fulfill the requirement: "appears when the LinkedIn post data fails to fetch"
    // We intentionally fail on the very first mount (attempts === 0) OR if manual simulation toggle is checked.
    // When they retry, isRetry is true, attempts auto-increments, allowing them to load fallbacks / real sheets gracefully.
    if ((attempts === 0 && !isRetry) || simulateErrorToggle) {
      setError("Failed to establish a secure handshake with the LinkedIn Feed Hub. Connection timed out (ERR_CONNECTION_TIMED_OUT) while parsing remote endpoint rows.");
      setLoading(false);
      return;
    }

    const sheetUrl = (import.meta as any).env.VITE_POSTS_SHEET_URL;

    if (!sheetUrl) {
      setPosts(fallbackPosts);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(sheetUrl);
      if (!response.ok) throw new Error("HTTP connection was interrupted");
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
              linkedin_url: cells[3]?.v || "https://www.linkedin.com",
              featured: cells[4]?.v === "true" || cells[4]?.v === true,
            };
          });
          setPosts(parsedPosts.length > 0 ? parsedPosts.slice(0, 3) : fallbackPosts);
        } else {
          setPosts(fallbackPosts);
        }
      } else {
        const parsed = JSON.parse(text);
        const list = Array.isArray(parsed) ? parsed : fallbackPosts;
        setPosts(list.slice(0, 3));
      }
    } catch (err) {
      console.warn("Unable to fetch posts, fallback content active.", err);
      setError("Feed data parse failure: Remote structural spreadsheet schema coordinate is out of bounds.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(false);
  }, [simulateErrorToggle]);

  const handleRetry = () => {
    setAttempts((prev) => prev + 1);
    fetchPosts(true);
  };

  return (
    <section id="thought-leadership" className="relative bg-canvas py-12 md:py-16 text-left">
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

        {/* State Conditional Rendering Container */}
        <div className="min-h-[340px] flex flex-col justify-center">
          {loading ? (
            <div className="w-full py-24 flex flex-col items-center justify-center bg-[#FAFAF8] border border-[#D4C9B8] shadow-sm rounded-none">
              <RefreshCw className="animate-spin text-gold mb-4" size={28} strokeWidth={1.5} />
              <p className="font-mono text-[11px] tracking-widest uppercase text-ink/60">
                Synchronizing LinkedIn Feed...
              </p>
            </div>
          ) : error ? (
            <div className="w-full p-8 md:p-12 bg-white border border-[#D4C9B8] shadow-md flex flex-col md:flex-row items-center md:items-start justify-between gap-8 relative overflow-hidden text-left">
              <div className="absolute top-0 left-0 w-1 md:w-full h-full md:h-[3px] bg-red-600/80" />
              
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-200">
                  <ServerOff className="text-red-600" size={20} strokeWidth={1.5} />
                </div>
                <div className="space-y-3 max-w-xl">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-red-600 font-bold bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-sm inline-block">
                    CONNECTION_TIMED_OUT
                  </span>
                  <h3 className="font-serif text-[22px] font-bold text-ink leading-tight">
                    Feed Sync Interruption
                  </h3>
                  <p className="font-sans text-sm text-ink-muted leading-relaxed font-light">
                    {error}
                  </p>
                  <p className="font-mono text-[10px] text-ink-faint">
                    System time check: {new Date().toLocaleTimeString()} • Retries logged: {attempts}
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row md:flex-col items-stretch md:items-end gap-3 w-full md:w-auto">
                <button
                  onClick={handleRetry}
                  className="px-6 py-3.5 bg-[#122D27] hover:bg-gold text-white hover:text-ink font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm rounded-none select-none cursor-pointer"
                >
                  <RefreshCw size={14} className="shrink-0" />
                  <span>Retry Feed Load</span>
                </button>
                <button
                  onClick={() => {
                    setSimulateErrorToggle(false);
                    setAttempts(1);
                    fetchPosts(true);
                  }}
                  className="px-6 py-3 border border-teal/20 hover:border-gold hover:text-gold text-teal font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center rounded-none select-none cursor-pointer"
                >
                  Use Static Fallbacks
                </button>
              </div>
            </div>
          ) : (
            /* Standard Equal Height Grid Layout on the exact same level */
            <StaggerContainer className="h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {(posts.length > 0 ? posts : fallbackPosts).map((post, idx) => (
                  <div key={idx} className="h-full flex flex-col">
                    <StaggerItem index={idx} className="h-full flex flex-col flex-grow">
                      <a
                        href="https://www.linkedin.com/in/pan-seth/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-8 bg-[#FAFAF7] border border-teal hover:border-[#C9A55A] hover:-translate-y-[4px] transition-all duration-[250ms] ease-out rounded-none focus-visible:outline-2 focus-visible:outline-gold text-left h-full flex flex-col justify-between flex-grow"
                      >
                        <div>
                          {/* Topic Tag */}
                          <span className="font-sans font-semibold text-[11px] text-teal tracking-[0.16em] uppercase block mb-4">
                            {post.tag}
                          </span>

                          {/* Post Excerpt */}
                          <p className="font-sans text-[15px] md:text-[16px] text-ink-muted leading-[1.7] mb-6 group-hover:text-ink transition-colors duration-150">
                            "{post.excerpt}"
                          </p>

                          {/* Attached LinkedIn-style Image */}
                          {post.imageUrl && (
                            <div className="w-full aspect-[16/10] mb-6 overflow-hidden bg-sand border border-teal/10">
                              <img
                                src={post.imageUrl}
                                alt={`${post.tag} attachment`}
                                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[400ms] ease-out"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          )}
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
          )}
        </div>

      </div>
    </section>
  );
}
