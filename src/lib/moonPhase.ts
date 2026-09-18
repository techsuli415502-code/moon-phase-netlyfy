/**
 * Moon phase calculation utility
 *
 * Based on the standard synodic month algorithm.
 * The mean synodic month (time between identical lunar phases) is 29.53058867 days.
 *
 * Reference new moon epoch: 2000-01-06 18:14 UTC (a known astronomical new moon).
 *
 * Source methodology: standard lunar phase calculation widely documented in
 * astronomy references and on Wikipedia's Lunar Phase article.
 */

export type PhaseKey =
  | "new"
  | "waxingCrescent"
  | "firstQuarter"
  | "waxingGibbous"
  | "full"
  | "waningGibbous"
  | "thirdQuarter"
  | "waningCrescent";

export interface MoonPhaseData {
  /** Phase key, e.g. "full" */
  key: PhaseKey;
  /** Display name, e.g. "Full Moon" */
  name: string;
  /** Unicode moon emoji for this phase */
  emoji: string;
  /** Short description of the phase */
  description: string;
  /** Approximate illumination percentage, 0 to 100 */
  illumination: number;
  /** Lunar age in days since last new moon, 0 to ~29.53 */
  age: number;
  /** Progress through the cycle, 0 to 1 */
  cycleProgress: number;
  /** Whether the moon is currently waxing (growing) or waning (shrinking) */
  trend: "waxing" | "waning";
  /** Days until the next full moon */
  daysUntilFull: number;
  /** Days until the next new moon */
  daysUntilNew: number;
  /** The date the calculation was performed for */
  date: Date;
}

// Mean synodic month in days
const SYNODIC_MONTH = 29.53058867;

// Reference new moon: 2000-01-06 18:14 UTC
// In milliseconds since Unix epoch
const REFERENCE_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14, 0);

/**
 * Calculate the moon phase for a given date.
 * Returns full information about the phase including emoji and illumination.
 */
export function getMoonPhase(date: Date = new Date()): MoonPhaseData {
  const now = date.getTime();

  // Days since the reference new moon
  const daysSinceRef = (now - REFERENCE_NEW_MOON) / (1000 * 60 * 60 * 24);

  // Age in current synodic cycle, 0 to ~29.53
  let age = daysSinceRef % SYNODIC_MONTH;
  if (age < 0) age += SYNODIC_MONTH;

  // Cycle progress 0 to 1
  const cycleProgress = age / SYNODIC_MONTH;

  // Illumination: 0 at new moon, 1 at full moon (approx, cos-based)
  // illumination = (1 - cos(2*pi*age / synodic)) / 2
  const illumination = (1 - Math.cos((2 * Math.PI * age) / SYNODIC_MONTH)) / 2;
  const illuminationPercent = Math.round(illumination * 100);

  // Trend: waxing before full (age 0 to ~14.77), waning after
  const trend: "waxing" | "waning" = age < SYNODIC_MONTH / 2 ? "waxing" : "waning";

  // Days until next full moon
  const fullMoonAge = SYNODIC_MONTH / 2;
  let daysUntilFull = fullMoonAge - age;
  if (daysUntilFull < 0) daysUntilFull += SYNODIC_MONTH;

  // Days until next new moon
  let daysUntilNew = SYNODIC_MONTH - age;

  // Determine phase by age
  const phaseInfo = classifyPhase(age, illumination);

  return {
    ...phaseInfo,
    illumination: illuminationPercent,
    age: Math.round(age * 100) / 100,
    cycleProgress: Math.round(cycleProgress * 1000) / 1000,
    trend,
    daysUntilFull: Math.round(daysUntilFull * 10) / 10,
    daysUntilNew: Math.round(daysUntilNew * 10) / 10,
    date,
  };
}

function classifyPhase(age: number, illumination: number): {
  key: PhaseKey;
  name: string;
  emoji: string;
  description: string;
} {
  // Phase boundaries (in days, age from 0 to 29.53)
  // New Moon: 0
  // First Quarter: 7.38
  // Full Moon: 14.77
  // Third/Last Quarter: 22.15
  // Back to New: 29.53

  // Use a small tolerance for "exact" phases (within ~1.85 days each side)
  // Waxing Crescent: 0.5 - 6.5
  // First Quarter: ~7.38 (with tolerance 6.5 - 8.5)
  // Waxing Gibbous: 8.5 - 13.5
  // Full Moon: ~14.77 (with tolerance 13.5 - 16.0)
  // Waining Gibbous: 16.0 - 21.0
  // Third/Last Quarter: ~22.15 (with tolerance 21.0 - 23.5)
  // Waning Crescent: 23.5 - 29.0
  // New Moon: 29.0+ / 0 to 0.5

  if (age < 1.84 || age >= 27.69) {
    return {
      key: "new",
      name: "New Moon",
      emoji: "\u{1F311}",
      description:
        "The Moon is between Earth and Sun. Its lit side faces away from us, so the night sky is dark.",
    };
  }
  if (age < 5.54) {
    return {
      key: "waxingCrescent",
      name: "Waxing Crescent",
      emoji: "\u{1F312}",
      description:
        "A thin silver sliver of the Moon appears in the western sky after sunset. It is growing larger each night.",
    };
  }
  if (age < 9.23) {
    return {
      key: "firstQuarter",
      name: "First Quarter",
      emoji: "\u{1F313}",
      description:
        "Half of the Moon's near side is lit. It is high in the sky at sunset and sets near midnight.",
    };
  }
  if (age < 12.92) {
    return {
      key: "waxingGibbous",
      name: "Waxing Gibbous",
      emoji: "\u{1F314}",
      description:
        "More than half of the Moon is lit and growing. It rises in the afternoon and stays up most of the night.",
    };
  }
  if (age < 16.61) {
    return {
      key: "full",
      name: "Full Moon",
      emoji: "\u{1F315}",
      description:
        "The entire near side of the Moon is lit by the Sun. It rises at sunset and sets at sunrise.",
    };
  }
  if (age < 20.30) {
    return {
      key: "waningGibbous",
      name: "Waning Gibbous",
      emoji: "\u{1F316}",
      description:
        "The lit portion is shrinking now. The Moon rises later each night after sunset.",
    };
  }
  if (age < 24.00) {
    return {
      key: "thirdQuarter",
      name: "Third Quarter",
      emoji: "\u{1F317}",
      description:
        "Half of the Moon's near side is lit, the opposite half from First Quarter. It rises near midnight and sets at noon.",
    };
  }
  return {
    key: "waningCrescent",
    name: "Waning Crescent",
    emoji: "\u{1F318}",
    description:
      "A thin crescent returns. The Moon is shrinking each night as it moves toward the next New Moon.",
  };
}

export const ALL_PHASES: { key: PhaseKey; name: string; emoji: string; short: string }[] = [
  { key: "new", name: "New Moon", emoji: "\u{1F311}", short: "New" },
  { key: "waxingCrescent", name: "Waxing Crescent", emoji: "\u{1F312}", short: "Waxing Cr." },
  { key: "firstQuarter", name: "First Quarter", emoji: "\u{1F313}", short: "First Qtr." },
  { key: "waxingGibbous", name: "Waxing Gibbous", emoji: "\u{1F314}", short: "Waxing Gib." },
  { key: "full", name: "Full Moon", emoji: "\u{1F315}", short: "Full" },
  { key: "waningGibbous", name: "Waning Gibbous", emoji: "\u{1F316}", short: "Waning Gib." },
  { key: "thirdQuarter", name: "Third Quarter", emoji: "\u{1F317}", short: "Third Qtr." },
  { key: "waningCrescent", name: "Waning Crescent", emoji: "\u{1F318}", short: "Waning Cr." },
];

/**
 * Format a Date as a readable date and time string.
 */
export function formatMoonDate(date: Date): string {
  const opts: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  };
  return new Intl.DateTimeFormat("en-US", opts).format(date);
}
