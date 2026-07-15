import React, { useState } from "react";
import { Link, useRoute } from "wouter";
import { newsletters } from "../data/newsletters";
import { ArrowLeft, Linkedin, Calendar } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { InteractiveButton } from "../components/InteractiveButton";
import { NewsletterModal } from "../components/NewsletterModal";
import panAvatar from "../assets/images/regenerated_image_1782056067058.png";

export default function NewsletterDetail() {
  const [match, params] = useRoute("/newsletter/:id");
  const newsletterId = params?.id;
  const newsletter = newsletters.find((n) => n.id === newsletterId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!newsletter) {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6">
        <h1 className="font-serif text-3xl font-bold mb-4">Newsletter Not Found</h1>
        <p className="font-sans text-ink-faint mb-8">The requested newsletter article does not exist.</p>
        <Link href="/newsletter">
          <InteractiveButton variant="teal">Back to Newsletters</InteractiveButton>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-ink flex flex-col justify-between">
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <section className="relative w-full h-[220px] md:h-[350px] overflow-hidden bg-sand border-b border-teal/10">
          <img
            src={newsletter.thumbnailUrl}
            alt={newsletter.title}
            className="w-full h-full object-cover"
          />
        </section>

        {/* Content Container */}
        <section className="py-12 md:py-16 w-full px-6 lg:px-[120px]">
          <div className="max-w-4xl mx-auto space-y-8 text-left">
            <Link href="/newsletter">
              <button className="flex items-center gap-2 text-ink/70 hover:text-teal text-xs font-sans font-bold capitalize tracking-wider transition-colors cursor-pointer mb-2">
                <ArrowLeft size={14} /> Back to Newsletters
              </button>
            </Link>
            
            {/* Top Row: Date, Author & Read on LinkedIn CTA */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-teal/10 pb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/40 shrink-0 bg-sand">
                  <img
                    src={panAvatar}
                    alt="Pan Seth"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150&h=150";
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-sans font-bold text-sm text-ink">Pan Seth</p>
                  <p className="font-sans text-[11px] font-semibold text-teal capitalize tracking-wider">AI Strategy Advisor</p>
                </div>
              </div>

              {/* Top CTA: Subscribe to our newsletter */}
              <InteractiveButton
                onClick={() => setIsModalOpen(true)}
                variant="gold"
                size="sm"
                className="flex items-center gap-2 self-start md:self-auto"
              >
                <span>Subscribe to our newsletter</span>
              </InteractiveButton>
            </div>

            {/* Date and Tag Line */}
            <div className="flex justify-between items-center text-xs font-mono font-medium text-ink-muted/80">
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <Calendar size={13} className="text-gold" /> {newsletter.date}
              </span>
              <span className="font-mono text-xs font-bold text-gold capitalize tracking-[0.2em] border border-gold/40 px-2 py-0.5 bg-[#1A3C34]/5">
                {newsletter.tag}
              </span>
            </div>

            {/* Main Header */}
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-ink leading-tight tracking-tight mt-6">
              {newsletter.title}
            </h1>

            {/* Rich Text Body Content */}
            <div className="article-body font-sans text-base md:text-[17px] text-ink-muted leading-[1.8] space-y-6 pt-4">
              {newsletter.content.map((block, idx) => {
                if (block.type === "paragraph") {
                  return <p key={idx}>{block.value}</p>;
                } else if (block.type === "subheading") {
                  return (
                    <h2 key={idx} className="font-serif text-xl md:text-2xl font-bold text-ink pt-6 pb-2">
                      {block.value}
                    </h2>
                  );
                } else if (block.type === "image") {
                  return (
                    <div key={idx} className="my-10 w-full border border-teal/10 overflow-hidden bg-sand shadow-sm">
                      <img
                        src={block.value}
                        alt="Article illustration"
                        className="w-full h-auto object-contain mx-auto"
                      />
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Bottom Engagement CTA Block (Uses component card layout and appropriate copy) */}
            <div className="mt-16 p-8 bg-[#FAFAF8] border border-teal/20 text-center space-y-6">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-ink">
                Subscribe to our newsletter
              </h3>
              <p className="font-sans text-sm md:text-base text-ink-muted max-w-xl mx-auto leading-relaxed">
                Stay updated with weekly executive insights on AI strategy, governance, and leadership directly in your feed.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <InteractiveButton
                  onClick={() => setIsModalOpen(true)}
                  variant="gold"
                >
                  Subscribe to our newsletter
                </InteractiveButton>
                <InteractiveButton
                  onClick={() => window.open("https://www.linkedin.com/in/pan-seth/", "_blank", "noopener,noreferrer")}
                  variant="outline-teal"
                  className="flex items-center gap-2"
                >
                  <Linkedin size={15} />
                  <span>Connect on LinkedIn</span>
                </InteractiveButton>
              </div>
            </div>

          </div>
        </section>
      </main>
      <NewsletterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
