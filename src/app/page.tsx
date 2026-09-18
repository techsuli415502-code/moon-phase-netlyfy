import HeroSection from "@/components/sections/HeroSection";
import CurrentPhaseInfo from "@/components/sections/CurrentPhaseInfo";
import WhatIsCurrentPhase from "@/components/sections/WhatIsCurrentPhase";
import EightPhasesGuide from "@/components/sections/EightPhasesGuide";
import LunarCycleExplanation from "@/components/sections/LunarCycleExplanation";
import MoonCalendarSection from "@/components/sections/MoonCalendarSection";
import MoonEmojiMeaning from "@/components/sections/MoonEmojiMeaning";
import WhyMoonChangesShape from "@/components/sections/WhyMoonChangesShape";
import FAQSection from "@/components/sections/FAQSection";
import AuthorSection from "@/components/sections/AuthorSection";
import SourcesSection from "@/components/sections/SourcesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CurrentPhaseInfo />
      <WhatIsCurrentPhase />
      <EightPhasesGuide />
      <LunarCycleExplanation />
      <MoonCalendarSection />
      <MoonEmojiMeaning />
      <WhyMoonChangesShape />
      <FAQSection />
      <AuthorSection />
      <SourcesSection />
    </>
  );
}
