import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { ScrollReveal } from "../components/ScrollReveal";
import { RefreshCw, ArrowLeft, ShieldAlert, Cpu, HardDrive, Network } from "lucide-react";

export default function NotFound() {
  const [, setLocation] = useLocation();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [latency, setLatency] = useState<number | null>(null);

  useEffect(() => {
    setLatency(Math.floor(Math.random() * 32) + 8);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLatency(Math.floor(Math.random() * 32) + 8);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col justify-center items-center py-24 px-6 text-center">
      <div className="max-w-xl w-full space-y-10">
        
        {/* Error Header */}
        <ScrollReveal duration={0.5}>
          <div className="space-y-4">
            <span className="font-mono text-[10px] font-bold text-red-600 bg-red-50 border border-red-150 px-3 py-1 rounded-sm tracking-wider uppercase inline-block">
              HTTP_ERROR_404
            </span>
            <h1 className="font-serif text-[84px] md:text-[110px] text-[#122D27] leading-none font-bold tracking-tight">
              404
            </h1>
            <h2 className="font-sans text-xl md:text-2xl font-bold text-ink tracking-tight mt-2">
              Page Out Of Alignment
            </h2>
            <div className="w-16 h-[2px] bg-gold mx-auto my-6" />
            <p className="font-sans text-sm md:text-base text-ink-muted leading-relaxed max-w-sm mx-auto font-light">
              The page or strategic dimension you are seeking is either restricted, archived, or has been temporarily restructured. 
            </p>
          </div>
        </ScrollReveal>

        {/* Diagnostic Panel */}
        <ScrollReveal duration={0.6} delay={0.15}>
          <div className="bg-white border border-[#D4C9B8] p-6 text-left space-y-4 shadow-sm rounded-none">
            <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-teal flex items-center gap-2">
              <ShieldAlert size={14} className="text-gold" /> Critical Error Diagnostics
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 font-mono text-[11px] text-[#122D27]/80">
              <div className="flex items-center justify-between border-b border-[#F0ECE3] pb-1.5">
                <span className="text-ink-faint flex items-center gap-1.5">
                  <Network size={12} className="opacity-70" /> Path Request
                </span>
                <span className="font-bold text-red-600">FAILED</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#F0ECE3] pb-1.5">
                <span className="text-ink-faint flex items-center gap-1.5">
                  <Cpu size={12} className="opacity-70" /> Server Edge
                </span>
                <span className="font-bold text-teal">ONLINE</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#F0ECE3] pb-1.5">
                <span className="text-ink-faint flex items-center gap-1.5">
                  <HardDrive size={12} className="opacity-70" /> Static Nodes
                </span>
                <span className="font-bold text-teal">OPERATIONAL</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#F0ECE3] pb-1.5">
                <span className="text-ink-faint">Handshake Ping</span>
                <span className="font-bold text-teal">{latency ? `${latency}ms` : "checking..."}</span>
              </div>
            </div>

            <p className="font-mono text-[9px] text-ink-faint text-center leading-none mt-2">
              Error Route: {window.location.pathname} • Node Time: {new Date().toLocaleTimeString()}
            </p>
          </div>
        </ScrollReveal>

        {/* Action Controls */}
        <ScrollReveal duration={0.6} delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => setLocation("/")}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#122D27] hover:bg-gold text-white hover:text-ink font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 select-none cursor-pointer border-none rounded-none"
            >
              <ArrowLeft size={14} />
              <span>Return Home</span>
            </button>
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="w-full sm:w-auto px-6 py-3.5 border border-[#122D27]/20 hover:border-[#122D27] text-[#122D27] hover:bg-[#122D27]/5 font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 select-none cursor-pointer rounded-none"
            >
              <RefreshCw size={14} className={isRefreshing ? "animate-spin" : ""} />
              <span>{isRefreshing ? "Testing Ping..." : "Verify Connection"}</span>
            </button>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
