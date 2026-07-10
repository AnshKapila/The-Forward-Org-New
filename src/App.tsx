import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import IndexPage from "./pages/Index";
import Scorecard from "./pages/Scorecard";
import BookCallPage from "./pages/BookCall";
import Newsletter from "./pages/Newsletter";
import NewsletterDetail from "./pages/NewsletterDetail";
import ContactPage from "./pages/Contact";
import Masterclass from "./pages/Masterclass";
import NotFound from "./pages/NotFound";

function MainAppContent() {
  const [location] = useLocation();
  const isOverlayPage = location === "/" || location === "/masterclass" || location.startsWith("/newsletter");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="relative min-h-screen bg-canvas overflow-x-hidden selection:bg-gold selection:text-ink flex flex-col justify-between">
      {/* Persistent global Navigation */}
      <Nav />

      {/* Pages Container */}
      <div className={`flex-grow ${isOverlayPage ? "" : "pt-[80px] md:pt-[96px]"}`}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/index" component={IndexPage} />
          <Route path="/scorecard" component={Scorecard} />
          <Route path="/book-a-call" component={BookCallPage} />
          <Route path="/newsletter" component={Newsletter} />
          <Route path="/newsletter/:id" component={NewsletterDetail} />
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
