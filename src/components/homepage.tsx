"use client";

import Hero from "./hero";
import Intro from "./intro";
import FeaturedProject from "./featured-project";
import ProjectsGrid from "./projects-grid";
import Services from "./services";
import Process from "./process";
import AboutBlock from "./about-block";
import CTASection from "./cta-section";
import ContactBlock from "./contact-block";

export default function Homepage() {
  return (
    <div className="text-[#2f2a22]">
      <Hero />
      <main>
        <Intro />
        <FeaturedProject />
        <ProjectsGrid />
        <Services />
        <Process />
        <AboutBlock />
        <CTASection />
        <ContactBlock />
      </main>
    </div>
  );
}
