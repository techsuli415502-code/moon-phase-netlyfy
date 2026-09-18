"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  getMoonPhase,
  ALL_PHASES,
  type PhaseKey,
} from "@/lib/moonPhase";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/**
 * Interactive monthly Moon phase calendar.
 * For each day of the selected month, computes the lunar phase and shows
 * the corresponding emoji. Users can step forward/backward by month.
 */
export default function MoonCalendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth()); // 0-indexed

  function prevMonth() {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  }

  function nextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  }

  function goToThisMonth() {
    setYear(today.getFullYear());
    setMonth(today.getMonth());
  }

  // Build a list of days in the month, with phase info per day
  const days = useMemo(() => {
    const firstOfMonth = new Date(year, month, 1, 12, 0, 0);
    const lastDay = new Date(year, month + 1, 0).getDate();
    const startWeekday = firstOfMonth.getDay();

    const cells: Array<
      | { type: "empty"; key: string }
      | {
          type: "day";
          day: number;
          phase: ReturnType<typeof getMoonPhase>;
          isToday: boolean;
          key: string;
        }
    > = [];

    // Empty leading cells
    for (let i = 0; i < startWeekday; i++) {
      cells.push({ type: "empty", key: `e-start-${i}` });
    }

    for (let d = 1; d <= lastDay; d++) {
      const date = new Date(year, month, d, 12, 0, 0);
      const phase = getMoonPhase(date);
      const isToday =
        d === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();
      cells.push({ type: "day", day: d, phase, isToday, key: `d-${d}` });
    }

    return cells;
  }, [year, month, today]);

  const monthName = new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
  });

  const [selectedDay, setSelectedDay] = useState<number | null>(
    today.getDate()
  );

  const selectedPhase = useMemo(() => {
    if (selectedDay == null) return null;
    const date = new Date(year, month, selectedDay, 12, 0, 0);
    return getMoonPhase(date);
  }, [selectedDay, year, month]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      {/* Calendar grid */}
      <div className="glass-card rounded-2xl p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={prevMonth}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="text-center">
            <p className="text-lg font-semibold text-white">
              {monthName} {year}
            </p>
            <button
              type="button"
              onClick={goToThisMonth}
              className="text-xs text-[oklch(0.92_0.06_75)] hover:underline"
            >
              Jump to this month
            </button>
          </div>
          <button
            type="button"
            onClick={nextMonth}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
            aria-label="Next month"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center">
          {WEEKDAYS.map((d) => (
            <div
              key={d}
              className="py-2 text-[0.7rem] font-semibold uppercase tracking-wide text-white/50"
            >
              {d}
            </div>
          ))}

          {days.map((cell) => {
            if (cell.type === "empty") {
              return <div key={cell.key} aria-hidden="true" />;
            }
            const { day, phase, isToday } = cell;
            const isSelected = selectedDay === day;
            return (
              <button
                key={cell.key}
                type="button"
                onClick={() => setSelectedDay(day)}
                aria-label={`Day ${day}, ${phase.name}`}
                aria-pressed={isSelected}
                className={`relative flex aspect-square flex-col items-center justify-center rounded-lg border text-sm transition-all ${
                  isSelected
                    ? "border-[oklch(0.92_0.06_75)] bg-[oklch(0.92_0.06_75/15%)] text-white shadow-[0_0_18px_rgba(255,235,180,0.25)]"
                    : isToday
                    ? "border-[oklch(0.75_0.15_285)] bg-[oklch(0.55_0.18_285/15%)] text-white"
                    : "border-transparent bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="text-base leading-none sm:text-lg">
                  {phase.emoji}
                </span>
                <span className="mt-1 text-[0.7rem] leading-none">{day}</span>
                {isToday && (
                  <span
                    className="sr-only"
                  >
                    Today
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-t border-white/10 pt-4 text-[0.7rem] text-white/60">
          {ALL_PHASES.map((p) => (
            <span key={p.key} className="inline-flex items-center gap-1">
              <span aria-hidden="true">{p.emoji}</span>
              <span>{p.short}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Selected day details */}
      <div className="glass-card rounded-2xl p-5 sm:p-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
          Selected Day
        </h3>
        {selectedPhase ? (
          <>
            <p className="mt-2 text-xl font-bold text-white">
              {monthName} {selectedDay}, {year}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <div
                className="text-6xl leading-none moon-glow"
                aria-hidden="true"
              >
                {selectedPhase.emoji}
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  {selectedPhase.name}
                </p>
                <p className="text-sm text-white/60">
                  {selectedPhase.trend === "waxing"
                    ? "Waxing (growing)"
                    : "Waning (shrinking)"}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {selectedPhase.description}
            </p>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-white/50">Illumination</dt>
                <dd className="font-semibold text-white">
                  {selectedPhase.illumination}%
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-white/50">Lunar age</dt>
                <dd className="font-semibold text-white">
                  {selectedPhase.age} days
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-white/50">Cycle progress</dt>
                <dd className="font-semibold text-white">
                  {Math.round(selectedPhase.cycleProgress * 100)}%
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-white/50">Next full Moon</dt>
                <dd className="font-semibold text-white">
                  in {selectedPhase.daysUntilFull} days
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-white/50">Next new Moon</dt>
                <dd className="font-semibold text-white">
                  in {selectedPhase.daysUntilNew} days
                </dd>
              </div>
            </dl>
          </>
        ) : (
          <p className="mt-2 text-sm text-white/60">
            Tap a day to see its lunar phase details.
          </p>
        )}
      </div>
    </div>
  );
}

// Re-export for type usage only
export type { PhaseKey };
