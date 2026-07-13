import { BusinessProblems } from "@/components/sections/BusinessProblems";
import { Contact } from "@/components/sections/Contact";
import { DevelopmentProcess } from "@/components/sections/DevelopmentProcess";
import { Faq } from "@/components/sections/Faq";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { OurSolutions } from "@/components/sections/OurSolutions";
import { SocialProof } from "@/components/sections/SocialProof";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyAgv } from "@/components/sections/WhyAgv";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <BusinessProblems />
      <OurSolutions />
      <Industries />
      <FeaturedServices />
      <DevelopmentProcess />
      <WhyAgv />
      <TechStack />
      <FeaturedProjects />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Contact />
    </>
  );
}
