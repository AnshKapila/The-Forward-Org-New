import { useState } from "react";
import { useLocation } from "wouter";
import { InteractiveButton } from "./InteractiveButton";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function AIIndexCTA() {
  const [, setLocation] = useLocation();
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  return (
    <section id="ai-index" className="w-full bg-[#F7F4EF]/25 py-12 md:py-16 px-6 md:px-12 border-t border-b border-[#1A3C34]/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (col-span-5): Dark premium card with vertical bar metric chart */}
          <motion.div
            id="ai-index-left-box"
            onMouseEnter={() => setIsLeftHovered(true)}
            onMouseLeave={() => setIsLeftHovered(false)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#122D27] text-[#F7F4EF] rounded-[1.5rem] p-8 md:p-10 border border-gold/15 flex flex-col justify-between relative overflow-hidden group shadow-xl min-h-[420px] lg:min-h-0 text-left"
          >
            {/* Fine texture overlay */}
            <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent to-black/30 opacity-40" />

            <div className="relative z-10 space-y-4">
              <span className="font-mono text-[10px] text-gold uppercase tracking-[0.25em] block">
                THE PROBLEM WE SOLVE
              </span>
              <h3 className="font-serif text-[28px] md:text-[32px] font-bold leading-[1.2] text-white">
                Most organizations are experimenting with AI. Few are building with it.
              </h3>
              <p className="font-sans text-[14px] md:text-[15px] text-[#F7F4EF]/75 leading-relaxed">
                Scattered pilots, leadership misalignment, immature governance, and unclear ROI are the real barriers to AI transformation, rather than the technology. We diagnose exactly where your organization stands on each of these dimensions.
              </p>
            </div>

            {/* Premium Vertical Bar Chart interactive visualization matching the inspiration */}
            <div className="relative z-10 w-full mt-8 md:mt-12 flex flex-col items-center">
              
              {/* Gold Float Value Badge with rising animation */}
              <motion.div 
                animate={{ y: isLeftHovered ? -8 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="mb-3 px-3 py-1 bg-gold text-[#122D27] text-[10px] font-mono font-bold rounded-full border border-white/20 shadow-md flex items-center gap-1"
              >
                <span>ACCURACY GAP: 15%</span>
              </motion.div>

              {/* Chart Bars Grid */}
              <div className="w-full max-w-[280px] h-[160px] flex items-end justify-between px-2 relative">
                {/* Background Grid Line Indicators */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.03]">
                  <div className="border-b border-white w-full" />
                  <div className="border-b border-white w-full" />
                  <div className="border-b border-white w-full" />
                </div>

                {/* Bar 1 */}
                <div className="flex flex-col items-center gap-2">
                  <motion.div 
                    animate={{ height: isLeftHovered ? 40 : 35 }}
                    className="w-7 bg-white/10 rounded-t-sm group-hover:bg-white/20 transition-all duration-300"
                    style={{ height: "35px" }}
                  />
                  <span className="font-mono text-[8px] text-white/45">SILO</span>
                </div>

                {/* Bar 2 */}
                <div className="flex flex-col items-center gap-2">
                  <motion.div 
                    animate={{ height: isLeftHovered ? 65 : 60 }}
                    className="w-7 bg-white/10 rounded-t-sm group-hover:bg-white/20 transition-all duration-300"
                    style={{ height: "60px" }}
                  />
                  <span className="font-mono text-[8px] text-white/45">RISK</span>
                </div>

                {/* Central Key Highlighted Bar with Rising Upwards Arrow inside */}
                <div className="flex flex-col items-center gap-2 relative">
                  <motion.div 
                    animate={{ 
                      height: isLeftHovered ? 120 : 105,
                      backgroundColor: isLeftHovered ? "#E1B94A" : "#D4AF37"
                    }}
                    className="w-10 rounded-t-sm z-10 flex flex-col items-center justify-end pb-3 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                    style={{ height: "105px" }}
                  >
                    {/* Embedded upwards visual arrow icon */}
                    <motion.div
                      animate={{ y: isLeftHovered ? -5 : 0 }}
                      className="text-[#122D27]"
                    >
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </motion.div>
                  </motion.div>
                  <span className="font-mono text-[8px] font-bold text-gold">GAP</span>
                </div>

                {/* Bar 4 */}
                <div className="flex flex-col items-center gap-2">
                  <motion.div 
                    animate={{ height: isLeftHovered ? 80 : 75 }}
                    className="w-7 bg-white/10 rounded-t-sm group-hover:bg-white/20 transition-all duration-300"
                    style={{ height: "75px" }}
                  />
                  <span className="font-mono text-[8px] text-white/45">ROI</span>
                </div>

                {/* Bar 5 */}
                <div className="flex flex-col items-center gap-2">
                  <motion.div 
                    animate={{ height: isLeftHovered ? 50 : 45 }}
                    className="w-7 bg-white/10 rounded-t-sm group-hover:bg-white/20 transition-all duration-300"
                    style={{ height: "45px" }}
                  />
                  <span className="font-mono text-[8px] text-white/45">TECH</span>
                </div>
              </div>
            </div>

            {/* Glowing background gradient spot */}
            <div className="absolute -bottom-16 -right-16 w-44 h-44 bg-gold/10 rounded-full blur-3xl pointer-events-none group-hover:bg-gold/15 transition-all duration-500" />
          </motion.div>

          {/* Right Column (col-span-7): Elegant off-white card with world/grid network map */}
          <motion.div
            id="ai-index-right-box"
            onMouseEnter={() => setIsRightHovered(true)}
            onMouseLeave={() => setIsRightHovered(false)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-[#F7F4EF] hover:bg-[#FAF8F5] border border-[#1A3C34]/10 rounded-[1.5rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group shadow-lg min-h-[420px] lg:min-h-0 text-left transition-colors duration-400"
          >
            {/* Main copy and header contents */}
            <div className="relative z-10 space-y-4">
              <span className="font-mono text-[10px] text-[#1A3C34]/70 uppercase tracking-[0.25em] block">
                THE ALIGNMENT INDEX
              </span>
              <h3 className="font-serif text-[30px] md:text-[36px] font-bold leading-[1.15] text-[#1A3C34] max-w-xl">
                Find out exactly where your AI transformation stands, and what to fix first.
              </h3>
              <p className="font-sans text-[15px] md:text-[16px] text-[#1A3C34]/80 leading-relaxed max-w-xl">
                A 15-question organizational diagnostic across five dimensions: strategy, governance, leadership, workforce adoption, and ROI. Designed for senior leaders who need clarity, not another AI readiness survey.
              </p>
            </div>

            {/* Elegant Tech Network Grid/Dotted Map Backdrop Pattern in Center as in reference image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden max-w-[90%] mx-auto z-0 opacity-[0.06] group-hover:opacity-[0.09] transition-opacity duration-500">
              <motion.svg 
                animate={{ 
                  scale: isRightHovered ? 1.05 : 1.0,
                  rotate: isRightHovered ? 1 : 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                width="480" 
                height="220" 
                viewBox="0 0 480 220" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized Node Network of corporate benchmarks */}
                <circle cx="80" cy="50" r="4" fill="#1A3C34" />
                <circle cx="160" cy="140" r="3" fill="#1A3C34" />
                <circle cx="240" cy="80" r="6" fill="#D4AF37" className="animate-pulse" />
                <circle cx="320" cy="160" r="4" fill="#1A3C34" />
                <circle cx="400" cy="60" r="5" fill="#1A3C34" />
                
                {/* Connecting lines */}
                <path d="M80 50 L160 140 L240 80 L320 160 L400 60" stroke="#1A3C34" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M80 50 Q 240 20 400 60" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.4" />
                <path d="M160 140 Q 240 200 320 160" stroke="#1A3C34" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="2 2" />

                {/* Dynamic radar rings */}
                <motion.circle 
                  animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                  cx="240" cy="80" r="10" stroke="#D4AF37" strokeWidth="1" 
                />
              </motion.svg>
            </div>

            {/* Bottom Row containing button */}
            <div className="relative z-10 mt-8 md:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 w-full pt-6 border-t border-[#1A3C34]/5">
              
              {/* Left Side: Solid interactive button conforming to color guidelines */}
              <div className="flex">
                <InteractiveButton
                  onClick={() => setLocation("/index")}
                  variant="gold"
                  className="shadow-md"
                >
                  Discover Your AI Transformation Readiness
                </InteractiveButton>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

