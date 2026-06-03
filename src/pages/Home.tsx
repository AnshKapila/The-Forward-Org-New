import React from "react";
import { Hero } from "../components/Hero";
import { StatsBar } from "../components/StatsBar";
import { CredibilityBar } from "../components/CredibilityBar";
import { TheProblem } from "../components/TheProblem";
import { WhoWeHelp } from "../components/WhoWeHelp";
import { HowItWorks } from "../components/HowItWorks";
import { AIIndexCTA } from "../components/AIIndexCTA";
import { VisionStatement } from "../components/VisionStatement";
import { ThoughtLeadership } from "../components/ThoughtLeadership";
import { Freebie } from "../components/Freebie";
import { FAQ } from "../components/FAQ";
import { ConnectWithPan } from "../components/ConnectWithPan";
import { ContactSection } from "../components/ContactSection";
import { BookACall } from "../components/BookACall";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <CredibilityBar />
      <TheProblem />
      <WhoWeHelp />
      <HowItWorks />
      <AIIndexCTA />
      <Freebie />
      <VisionStatement />
      <ConnectWithPan />
      <ThoughtLeadership />
      <BookACall />
      <FAQ />
      <ContactSection />
    </>
  );
}
