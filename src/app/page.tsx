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

      {/* Desktop leaderboard right after the hero - high-visibility
          placement visible without scrolling on most desktop screens.
          Hidden on mobile so the 728px iframe never overflows. */}
      <AdSlotLeaderboard />

      <CurrentPhaseInfo />
      <WhatIsCurrentPhase />

      {/* In-content rectangle between two text sections - natural
          break between the "what is the current phase" explainer
          and the eight phases guide. */}
      <AdSlotRectangleCompact />

      <EightPhasesGuide />

      {/* Rectangle between the eight phases guide and the cycle
          explanation - natural divider between reference content. */}
      <AdSlotRectangle />

      <LunarCycleExplanation />
      <MoonCalendarSection />

      {/* Rectangle right after the interactive calendar - users who
          just finished using the tool are a high-value ad audience. */}
      <AdSlotRectangle />

      <MoonEmojiMeaning />

      {/* Second leaderboard - between the emoji meaning and the
          "why does the moon change shape" explainer. Desktop only. */}
      <AdSlotLeaderboard />

      <WhyMoonChangesShape />
      <FAQSection />

      {/* Rectangle between the FAQ and the author bio - natural
          transition from informational to trust-building content. */}
      <AdSlotRectangle />

      <AuthorSection />
      <SourcesSection />

      {/* Final leaderboard above the footer - last-chance placement
          before the user leaves the page. Desktop only. */}
      <AdSlotLeaderboard />
    </>
  );
}
