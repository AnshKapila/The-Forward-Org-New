import React from "react";
import { Switch, Route } from "wouter";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import IndexPage from "./pages/Index";
import Scorecard from "./pages/Scorecard";
import Posts from "./pages/Posts";

function MainAppContent() {
  return (
    <div className="relative min-h-screen bg-canvas overflow-x-hidden selection:bg-gold selection:text-ink flex flex-col justify-between">
      {/* Persistent global Navigation */}
      <Nav />

      {/* Pages Container */}
      <div className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/index" component={IndexPage} />
          <Route path="/scorecard" component={Scorecard} />
          <Route path="/posts" component={Posts} />
          {/* Default fallback route pointing to Home */}
          <Route path="/:rest*" component={Home} />
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
