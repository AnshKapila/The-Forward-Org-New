import React, { useEffect, useState } from "react";
import { Maximize2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookCallPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    // Inject the Lunacal embed script for Direct Call page
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "lunacal-inline-direct-script";
    script.innerHTML = `(function(L,U,N){let p=(a,ar)=>a.q.push(ar),d=L.document;L.Lunacal=L.Lunacal||function(){let lun=L.Lunacal,ar=arguments;if(!lun.loaded){lun.ns={};lun.q=lun.q||[];d.head.appendChild(d.createElement("script")).src=U;lun.loaded=!0}if(ar[0]===N){const api=function(){p(api,arguments)};const ns=ar[1];api.q=api.q||[];if(typeof ns==="string"){lun.ns[ns]=lun.ns[ns]||api;p(lun.ns[ns],ar);p(lun,["initNamespace",ns])}else p(lun,ar);return}p(lun,ar)};if(!L.Cal)L.Cal=L.Lunacal})(window,"https://app.lunacal.ai/embed/embed.js","init");Lunacal("init","focused-aireadiness-debrief",{origin:"https://app.lunacal.ai"});
                  // Enable auto-forwarding of query parameters
                  Lunacal.config = Lunacal.config || {};
                  Lunacal.config.forwardQueryParams = true;
                  
        Lunacal.ns["focused-aireadiness-debrief"]("inline", {
          elementOrSelector:"#my-lunacal-inline-focused-aireadiness-debrief-direct",
          config: {"layout":""},
          calLink: "pan-seth/focused-aireadiness-debrief",
        });
        Lunacal.ns["focused-aireadiness-debrief"]("preload", { calLink: "pan-seth/focused-aireadiness-debrief", type: "inline", options: { prerenderIframe: true } });
        Lunacal.ns["focused-aireadiness-debrief"]("ui", {"theme":"light","styles":{"branding":{}},"hideEventTypeDetails":false,"layout":"","cssVarsPerTheme":{"light":{"theme-border":"#E4E4E7","theme-background-primary":"#C9A55A","theme-background-secondary":"#F4F4F5","theme-background-card":"#ffffff","theme-background-base":"#ffffff","theme-text-primary":"#111827","theme-text-secondary":"#4B5563","theme-text-card":"#111827","theme-text-base":"#111827","theme-rounded-base":"0px","theme-rounded-calendar":"0px","theme-rounded-timeslot":"4px","theme-rounded-day":"4px","theme-rounded-button":"0px","theme-shadow-calendar":"none","theme-shadow-button":"none","theme-shadow-timeslot":"none","theme-font-family":"Figtree"},"dark":{"theme-border":"#E4E4E7","theme-background-primary":"#C9A55A","theme-background-secondary":"#F4F4F5","theme-background-card":"#ffffff","theme-background-base":"#ffffff","theme-text-primary":"#111827","theme-text-secondary":"#4B5563","theme-text-card":"#111827","theme-text-base":"#111827","theme-rounded-base":"0px","theme-rounded-calendar":"0px","theme-rounded-timeslot":"4px","theme-rounded-day":"4px","theme-rounded-button":"0px","theme-shadow-calendar":"none","theme-shadow-button":"none","theme-shadow-timeslot":"none","theme-font-family":"Figtree"}},"displayedContent":{"image":true,"name":true,"designation":true,"description":true,"eventName":true,"highlightBar":false},"background":{"type":"plain"},"stylePreset":""});`;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("lunacal-inline-direct-script");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const pointers = [
    {
      title: "Strategic Fit",
      description: "Isolate high-impact use cases that defend margins and expand core equity value."
    },
    {
      title: "Risk Isolation",
      description: "Examine endpoint vulnerabilities and draft active governance parameters."
    },
    {
      title: "Actionable Path",
      description: "Map clear operational next-steps without unneeded software pilots."
    }
  ];

  return (
    <div className="bg-[#1A3C34] min-h-screen pt-12 pb-24 px-6 md:px-12 text-white selection:bg-gold selection:text-ink">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Complete text and pointers (First in HTML, order-1 in all views) */}
          <div className="lg:col-span-5 space-y-8 order-1">
            <div className="space-y-4">
              <span className="font-mono text-[11px] font-bold text-gold uppercase tracking-[0.25em] block leading-none">
                DIRECT STRATEGY ACCESS
              </span>
              <h2 className="font-serif text-[36px] md:text-[44px] lg:text-[48px] font-bold text-white leading-tight tracking-tight">
                Connect Directly with Pan Seth
              </h2>
              <p className="font-sans text-[15px] sm:text-[16px] text-[#F7F4EF]/85 leading-relaxed font-light">
                Skip the diagnostic index and consult directly with Pan. During this 30-minute strategy session, we will align your technology pipelines with direct business margins, secure enterprise data compliance, and construct concrete metrics to track your AI ROI.
              </p>
            </div>

            {/* Hover Accordion of Pointers */}
            <div className="pt-6 border-t border-white/10 space-y-2">
              <h3 className="font-sans text-sm font-semibold text-white/60 mb-4">
                What you will gain from this call:
              </h3>
              {pointers.map((pointer, idx) => {
                const isHovered = hoveredIdx === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="border-b border-white/10 py-4 transition-colors duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <p className={`font-sans text-sm font-semibold transition-colors duration-300 ${isHovered ? "text-gold" : "text-white/90 group-hover:text-gold"}`}>
                        {idx + 1}. {pointer.title}
                      </p>
                      <ChevronDown
                        size={16}
                        className={`text-gold/60 transition-transform duration-300 ${isHovered ? "rotate-180 text-gold" : "rotate-0"}`}
                      />
                    </div>
                    <AnimatePresence initial={false}>
                      {isHovered && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="font-sans text-[13px] text-[#F7F4EF]/75 leading-relaxed font-light">
                            {pointer.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Luna Cal window with pure white background, shadow, and custom expand button (Second in HTML, order-2 in all views) */}
          <div className="lg:col-span-7 w-full order-2">
            <div className="relative bg-white p-4 sm:p-6 rounded-lg shadow-2xl border border-white/10 overflow-hidden">
              {/* Expansion button at the top right of the LunaCal window */}
              <button
                data-cal-link="pan-seth/focused-aireadiness-debrief"
                data-cal-namespace="focused-aireadiness-debrief"
                data-cal-config='{"layout":""}'
                className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1A3C34] hover:bg-[#235048] text-white hover:text-gold transition-all duration-300 shadow font-mono text-[11px] font-bold tracking-wider uppercase border border-gold/20"
                title="Expand call scheduler"
              >
                <Maximize2 size={13} className="shrink-0" />
                <span>Fullscreen</span>
              </button>

              <div 
                id="my-lunacal-inline-focused-aireadiness-debrief-direct" 
                style={{ width: "100%", height: "680px", overflow: "hidden" }} 
                className="relative z-10"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
