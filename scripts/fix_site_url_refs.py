#!/usr/bin/env python3
"""Replace hardcoded https://moonphaseemoji.example URLs with the SITE_URL
constant from src/lib/site.ts, so the production URL is centralized."""

import re
import os

ROOT = "/home/z/my-project/src"

# Files with hardcoded moonphaseemoji.example URLs
TARGETS = [
    "app/sources/page.tsx",
    "app/about/page.tsx",
    "app/privacy-policy/page.tsx",
    "app/moon-calendar/page.tsx",
    "app/moon-phases/page.tsx",
    "app/terms-of-use/page.tsx",
    "app/contact/page.tsx",
    "components/sections/AuthorSection.tsx",
    "components/sections/HeroSection.tsx",
]

# Pattern: "https://moonphaseemoji.example/<path>" or ".../"  -> `${SITE_URL}/<path>`
# This matches both quoted and template-literal contexts.
PATTERN = re.compile(r'"https://moonphaseemoji\.example(/[^"]*)?"')
REPLACEMENT = r'`${SITE_URL}\1`'

def process(path):
    full = os.path.join(ROOT, path)
    if not os.path.exists(full):
        print(f"MISSING: {path}")
        return False
    with open(full, "r", encoding="utf-8") as f:
        content = f.read()
    original = content
    new_content = PATTERN.sub(REPLACEMENT, content)
    if new_content == original:
        print(f"NO CHANGES: {path}")
        return False
    # Verify SITE_URL is imported before using ${SITE_URL}
    if "SITE_URL" not in new_content and "${SITE_URL}" in new_content:
        print(f"WARNING: {path} uses ${{SITE_URL}} but does not import SITE_URL")
    with open(full, "w", encoding="utf-8") as f:
        f.write(new_content)
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
