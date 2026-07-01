import React from "react";
import { Hero } from "../components/Hero";
import { StatsBar } from "../components/StatsBar";
import { CredibilityBar } from "../components/CredibilityBar";
import { TheProblem } from "../components/TheProblem";
import { WhoWeHelp } from "../components/WhoWeHelp";
import { VisionStatement } from "../components/VisionStatement";
import { HowItWorks } from "../components/HowItWorks";
import { AIIndexCTA } from "../components/AIIndexCTA";
import { ValueProp } from "../components/ValueProp";
import { OurOfferings } from "../components/OurOfferings";
import { ConnectWithPan } from "../components/ConnectWithPan";
import { FAQ } from "../components/FAQ";
import { BookACall } from "../components/BookACall";
import { ContactSection } from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <CredibilityBar />
      <TheProblem />
      <WhoWeHelp />
      <VisionStatement />
      <HowItWorks />
      <AIIndexCTA />
      <ValueProp />
      <OurOfferings />
      <ConnectWithPan />
      <BookACall />
      <FAQ />
      <ContactSection />
    </>
  );
}
