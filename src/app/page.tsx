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
import {
  AdSlotLeaderboard,
  AdSlotRectangle,
  AdSlotRectangleCompact,
} from "@/components/AdSlots";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Desktop leaderboard after hero. Hidden on mobile so a
          728px iframe never overflows the phone viewport. */}
      <AdSlotLeaderboard />

      <CurrentPhaseInfo />
      <WhatIsCurrentPhase />

      {/* In-content rectangle between two text sections. */}
      <AdSlotRectangleCompact />

      <EightPhasesGuide />

      {/* Rectangle between the eight phases guide and the cycle
          explanation. */}
      <AdSlotRectangle />

      <LunarCycleExplanation />
      <MoonCalendarSection />
      <MoonEmojiMeaning />

      {/* Second leaderboard before the deeper content. Desktop only. */}
      <AdSlotLeaderboard />

      <WhyMoonChangesShape />
      <FAQSection />

      {/* Final rectangle before the author/sources sections. */}
      <AdSlotRectangle />

      <AuthorSection />
      <SourcesSection />
    </>
  );
}
