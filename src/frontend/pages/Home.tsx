import { HeroSection } from "../components/website/home/HeroSection";
import { HowItWorks } from "../components/website/home/HowItWorks";
import { PopularCategories } from "../components/website/home/PopularCategories";
import { WhyChooseTelo } from "../components/website/home/WhyChooseTelo";
import { FinalCTA } from "../components/website/home/FinalCTA";

export function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <PopularCategories />
      <WhyChooseTelo />
      <FinalCTA />
    </>
  );
}
