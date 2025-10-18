import { HeroSection } from "../components/home/HeroSection";
import { HowItWorks } from "../components/home/HowItWorks";
import { PopularCategories } from "../components/home/PopularCategories";
import { WhyChooseTelo } from "../components/home/WhyChooseTelo";
import { FinalCTA } from "../components/home/FinalCTA";

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
