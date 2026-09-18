#!/usr/bin/env python3
"""Bulk dark-theme to light-theme color replacement across all .tsx files
in the components/sections, components/, and app/ directories.

This is a deterministic migration script. Each replacement is a literal
text substitution (no regex backrefs needed)."""

import os
import re

ROOT = "/home/z/my-project"

# Files to process (sections, top-level components, all sub-pages, not-found)
TARGETS = [
    "src/components/sections/HeroSection.tsx",
    "src/components/sections/CurrentPhaseInfo.tsx",
    "src/components/sections/WhatIsCurrentPhase.tsx",
    "src/components/sections/EightPhasesGuide.tsx",
    "src/components/sections/LunarCycleExplanation.tsx",
    "src/components/sections/MoonCalendarSection.tsx",
    "src/components/sections/MoonEmojiMeaning.tsx",
    "src/components/sections/WhyMoonChangesShape.tsx",
    "src/components/sections/FAQSection.tsx",
    "src/components/sections/AuthorSection.tsx",
    "src/components/sections/SourcesSection.tsx",
    "src/components/LiveMoonWidget.tsx",
    "src/components/MoonCalendar.tsx",
    "src/components/ContactForm.tsx",
    "src/components/AdSlots.tsx",
    "src/components/AdUnit.tsx",
    "src/app/not-found.tsx",
    "src/app/moon-phases/page.tsx",
    "src/app/moon-calendar/page.tsx",
    "src/app/about/page.tsx",
    "src/app/sources/page.tsx",
    "src/app/contact/page.tsx",
    "src/app/privacy-policy/page.tsx",
    "src/app/terms-of-use/page.tsx",
]

# Ordered replacements (literal substring). The order matters - longer
# strings are matched first so shorter prefixes do not shadow them.
REPLACEMENTS = [
    # OKLCH-specific backgrounds (longer first)
    ("bg-[oklch(0.07_0.025_280/85%)]", "bg-background/85"),
    ("bg-[oklch(0.06_0.02_275/95%)]", "bg-card/95"),
    ("bg-[oklch(0.1_0.03_275/95%)]", "bg-popover"),
    ("bg-[oklch(0.12_0.03_275/80%)]", "bg-muted"),
    ("bg-[oklch(0.07_0.02_270/90%)]", "bg-muted"),
    ("bg-[oklch(0.07_0.02_270)]", "bg-muted"),
    ("bg-[oklch(0.55_0.18_285/25%)]", "bg-primary/20"),
    ("bg-[oklch(0.55_0.18_285/20%)]", "bg-primary/15"),
    ("bg-[oklch(0.55_0.18_285/15%)]", "bg-primary/10"),
    ("bg-[oklch(0.6_0.1_230/15%)]", "bg-secondary/40"),
    ("bg-[oklch(0.6_0.1_230/16%)]", "bg-secondary/40"),
    ("bg-[oklch(0.12_0.03_275/80%)]", "bg-muted"),
    # Gradient stops
    ("from-[oklch(0.92_0.06_75)]", "from-primary"),
    ("to-[oklch(0.85_0.12_75)]", "to-accent"),
    ("to-[oklch(0.75_0.15_285)]", "to-primary"),
    ("from-[oklch(0.75_0.15_285)]", "from-primary"),
    ("from-[oklch(0.95_0.08_75)]", "from-accent"),
    # Text color stops
    ("text-[oklch(0.92_0.06_75)]", "text-primary"),
    ("text-[oklch(0.12_0.02_270)]", "text-primary-foreground"),
    # Glow shadows -> softer light-theme shadows
    ("shadow-[0_0_24px_rgba(255,235,180,0.35)]", "shadow-md"),
    ("shadow-[0_0_24px_rgba(255,235,180,0.3)]", "shadow-md"),
    ("shadow-[0_0_18px_rgba(180,160,255,0.4)]", "shadow-sm"),
    ("shadow-[0_0_28px_rgba(180,160,255,0.4)]", "shadow-sm"),
    ("shadow-[0_0_24px_rgba(180,160,255,0.35)]", "shadow-sm"),
    # White text (most common)
    ("text-white/85", "text-foreground"),
    ("text-white/80", "text-foreground"),
    ("text-white/75", "text-muted-foreground"),
    ("text-white/70", "text-muted-foreground"),
    ("text-white/65", "text-muted-foreground"),
    ("text-white/60", "text-muted-foreground"),
    ("text-white/55", "text-muted-foreground"),
    ("text-white/50", "text-muted-foreground"),
    ("text-white/45", "text-muted-foreground"),
    ("text-white/40", "text-muted-foreground/80"),
    ("text-white/35", "text-muted-foreground/70"),
    ("text-white/30", "text-muted-foreground/60"),
    ("text-white/25", "text-muted-foreground/50"),
    ("text-white/20", "text-muted-foreground/40"),
    ("text-white/15", "text-muted-foreground/30"),
    ("text-white", "text-foreground"),
    # White backgrounds
    ("bg-white/15", "bg-muted"),
    ("bg-white/10", "bg-muted"),
    ("bg-white/5", "bg-muted/50"),
    ("bg-white/[0.02]", "bg-muted/40"),
    ("bg-white", "bg-card"),
    # White borders
    ("border-white/20", "border-border"),
    ("border-white/15", "border-border"),
    ("border-white/10", "border-border"),
    ("border-white/5", "border-border/50"),
]

def process(path):
    full = os.path.join(ROOT, path)
    if not os.path.exists(full):
        print(f"MISSING: {path}")
        return False
    with open(full, "r", encoding="utf-8") as f:
        content = f.read()
    original = content
    for old, new in REPLACEMENTS:
        content = content.replace(old, new)
    if content == original:
        print(f"NO CHANGES: {path}")
        return False
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"UPDATED: {path}")
    return True

def main():
    changed = 0
    for path in TARGETS:
        if process(path):
            changed += 1
    print(f"\n{changed} files updated out of {len(TARGETS)} targets")

if __name__ == "__main__":
    main()
