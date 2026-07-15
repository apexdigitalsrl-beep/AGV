import { BusinessProblems } from "@/components/sections/BusinessProblems";
import { Contact } from "@/components/sections/Contact";
import { DevelopmentProcess } from "@/components/sections/DevelopmentProcess";
import { Faq } from "@/components/sections/Faq";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { LeadQualification } from "@/components/sections/LeadQualification";
import { OurSolutions } from "@/components/sections/OurSolutions";
import { Plans } from "@/components/sections/Plans";
import { SocialProof } from "@/components/sections/SocialProof";
import { TechStack } from "@/components/sections/TechStack";
import { WhyAgv } from "@/components/sections/WhyAgv";

export default function Home() {
  return (
    <>
      <Hero />
      <LeadQualification />
      <SocialProof />
      <BusinessProblems />
      <OurSolutions />
      <Industries />
      <FeaturedServices />
      <DevelopmentProcess />
      <WhyAgv />
      <TechStack />
      <FeaturedProjects />
      <Plans />
      <Faq />
      <FinalCta />
      <Contact />
    </>
  );
}
