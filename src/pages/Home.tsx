import React from "react";
import { Hero } from "../components/Hero";
import { StatsBar } from "../components/StatsBar";
import { CredibilityBar } from "../components/CredibilityBar";
import { TheProblem } from "../components/TheProblem";
import { WhoWeHelp } from "../components/WhoWeHelp";
import { HowItWorks } from "../components/HowItWorks";
import { AIIndexCTA } from "../components/AIIndexCTA";
import { Freebie } from "../components/Freebie";
import { VisionStatement } from "../components/VisionStatement";
import { ValueProp } from "../components/ValueProp";
import { ConnectWithPan } from "../components/ConnectWithPan";
import { FAQ } from "../components/FAQ";
import { ContactSection } from "../components/ContactSection";

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
      <ValueProp />
      <ConnectWithPan />
      {/* <ThoughtLeadership /> */}
      <FAQ />
      <ContactSection />
    </>
  );
}
