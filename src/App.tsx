import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import IndexPage from "./pages/Index";
import Scorecard from "./pages/Scorecard";
import BookCallPage from "./pages/BookCall";
import Posts from "./pages/Posts";
import ContactPage from "./pages/Contact";
import Masterclass from "./pages/Masterclass";
import NotFound from "./pages/NotFound";

function MainAppContent() {
  const [location] = useLocation();
  const isHomePage = location === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.id = 'lunacal-popup-script'
    script.innerHTML = `(function(L,U,N){let p=(a,ar)=>a.q.push(ar),d=L.document;L.Lunacal=L.Lunacal||function(){let lun=L.Lunacal,ar=arguments;if(!lun.loaded){lun.ns={};lun.q=lun.q||[];d.head.appendChild(d.createElement("script")).src=U;lun.loaded=!0}if(ar[0]===N){const api=function(){p(api,arguments)};const ns=ar[1];api.q=api.q||[];if(typeof ns==="string"){lun.ns[ns]=lun.ns[ns]||api;p(lun.ns[ns],ar);p(lun,["initNamespace",ns])}else p(lun,ar);return}p(lun,ar)};if(!L.Cal)L.Cal=L.Lunacal})(window,"https://app.lunacal.ai/embed/embed.js","init");Lunacal("init","focused-aireadiness-debrief",{origin:"https://app.lunacal.ai"});
                  // Enable auto-forwarding of query parameters
                  Lunacal.config = Lunacal.config || {};
                  Lunacal.config.forwardQueryParams = true;
                  
        Lunacal.ns["focused-aireadiness-debrief"]("preload", { calLink: "pan-seth/focused-aireadiness-debrief", type: "modal", options: { prerenderIframe: true } });
        Lunacal.ns["focused-aireadiness-debrief"]("ui", {"theme":"light","styles":{"branding":{}},"hideEventTypeDetails":false,"layout":"","cssVarsPerTheme":{"light":{"theme-border":"#E4E4E7","theme-background-primary":"#C9A55A","theme-background-secondary":"#F4F4F5","theme-background-card":"#ffffff","theme-background-base":"#ffffff","theme-text-primary":"#111827","theme-text-secondary":"#4B5563","theme-text-card":"#111827","theme-text-base":"#111827","theme-rounded-base":"0px","theme-rounded-calendar":"0px","theme-rounded-timeslot":"4px","theme-rounded-day":"4px","theme-rounded-button":"0px","theme-shadow-calendar":"none","theme-shadow-button":"none","theme-shadow-timeslot":"none","theme-font-family":"Figtree"},"dark":{"theme-border":"#E4E4E7","theme-background-primary":"#C9A55A","theme-background-secondary":"#F4F4F5","theme-background-card":"#ffffff","theme-background-base":"#ffffff","theme-text-primary":"#111827","theme-text-secondary":"#4B5563","theme-text-card":"#111827","theme-text-base":"#111827","theme-rounded-base":"0px","theme-rounded-calendar":"0px","theme-rounded-timeslot":"4px","theme-rounded-day":"4px","theme-rounded-button":"0px","theme-shadow-calendar":"none","theme-shadow-button":"none","theme-shadow-timeslot":"none","theme-font-family":"Figtree"}},"displayedContent":{"image":true,"name":true,"designation":true,"description":true,"eventName":true,"highlightBar":false},"background":{"type":"plain"},"stylePreset":""});`;
    if (!document.getElementById('lunacal-popup-script')) {
      document.body.appendChild(script)
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-canvas overflow-x-hidden selection:bg-gold selection:text-ink flex flex-col justify-between">
      {/* Persistent global Navigation */}
      <Nav />

      {/* Pages Container */}
      <div className={`flex-grow ${isHomePage ? "" : "pt-[80px] md:pt-[96px]"}`}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/index" component={IndexPage} />
          <Route path="/scorecard" component={Scorecard} />
          <Route path="/book-a-call" component={BookCallPage} />
          <Route path="/posts" component={Posts} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/masterclass" component={Masterclass} />
          {/* Default fallback route pointing to beautiful 404 handler */}
          <Route path="/:rest*" component={NotFound} />
        </Switch>
      </div>

      {/* Persistent global Brand Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <MainAppContent />
  );
}
