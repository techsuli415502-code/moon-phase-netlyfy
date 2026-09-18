#!/usr/bin/env python3
"""
Generate the Apple Touch Icon (180x180 PNG) and a 32x32 PNG favicon
fallback for browsers that do not support SVG favicons.
Both are derived from the favicon.svg design.
"""

from PIL import Image, ImageDraw, ImageFilter
import math
import os

CREAM = (251, 247, 240)
WHITE = (255, 255, 255)
AMBER = (245, 158, 11)
AMBER_DEEP = (217, 119, 6)
VIOLET = (124, 58, 237)
VIOLET_DEEP = (91, 33, 182)

def draw_crescent_moon(draw, cx, cy, radius, color_outer, offset_ratio=0.45):
    """Draw a crescent moon using two overlapping circles."""
    bg = CREAM  # background color used to "cut" the crescent
    draw.ellipse(
        [cx - radius, cy - radius, cx + radius, cy + radius],
        fill=color_outer
    )
    offset = int(radius * offset_ratio)
    cut_radius = int(radius * 0.92)
    draw.ellipse(
        [cx - cut_radius + offset, cy - cut_radius - int(offset * 0.3),
         cx + cut_radius + offset, cy + cut_radius - int(offset * 0.3)],
        fill=bg
    )

def draw_sparkle(draw, cx, cy, size, color):
    points = []
    for dx, dy in [(0, -1), (0.3, -0.3), (1, 0), (0.3, 0.3),
                    (0, 1), (-0.3, 0.3), (-1, 0), (-0.3, -0.3)]:
        points.append((cx + dx * size, cy + dy * size))
    draw.polygon(points, fill=color)

def render_badge(size):
    """Render the moon badge at the requested pixel size on a cream
    background, with rounded corners (for Apple Touch Icon)."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Rounded square background (iOS uses rounded square)
    radius = int(size * 0.225)  # ~22.5% corner radius (iOS style)
    draw.rounded_rectangle(
        [0, 0, size, size],
        radius=radius,
        fill=CREAM
    )

    cx = size // 2
    cy = size // 2

    # Scale all elements relative to size
    badge_r = int(size * 0.48)
    moon_r = int(size * 0.275)
    sparkle_size = int(size * 0.04)

    # Amber glow behind moon
    glow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse(
        [cx - moon_r - int(size * 0.08), cy - moon_r - int(size * 0.08),
         cx + moon_r + int(size * 0.08), cy + moon_r + int(size * 0.08)],
        fill=(*AMBER, 70)
    )
    glow = glow.filter(ImageFilter.GaussianBlur(radius=size // 25))
    img.paste(glow, (0, 0), glow)
    draw = ImageDraw.Draw(img, "RGBA")

    # Amber border ring (outer)
    draw.ellipse(
        [cx - badge_r, cy - badge_r, cx + badge_r, cy + badge_r],
        fill=WHITE,
        outline=AMBER,
        width=max(2, int(size * 0.025))
    )

    # Crescent moon
    draw_crescent_moon(draw, cx, cy, moon_r, VIOLET, offset_ratio=0.45)

    # Sparkles around the moon
    sparkles = [
        (cx - int(badge_r * 0.78), cy - int(badge_r * 0.65), sparkle_size, AMBER),
        (cx + int(badge_r * 0.80), cy - int(badge_r * 0.70), int(sparkle_size * 0.85), AMBER),
        (cx + int(badge_r * 0.82), cy + int(badge_r * 0.70), int(sparkle_size * 1.05), AMBER),
        (cx - int(badge_r * 0.80), cy + int(badge_r * 0.65), int(sparkle_size * 0.9), AMBER),
        (cx + int(badge_r * 0.78), cy + int(badge_r * 0.15), int(sparkle_size * 0.75), VIOLET),
    ]
    for sx, sy, ssize, scolor in sparkles:
        draw_sparkle(draw, sx, sy, ssize, scolor)
        draw.ellipse(
            [sx - ssize * 0.4, sy - ssize * 0.4, sx + ssize * 0.4, sy + ssize * 0.4],
            fill=scolor
        )

    return img

def main():
    # Apple Touch Icon (180x180)
    apple = render_badge(180)
    apple_path = "/home/z/my-project/public/apple-touch-icon.png"
    apple.save(apple_path, "PNG", optimize=True)
    print(f"Saved: {apple_path} ({os.path.getsize(apple_path)} bytes, {apple.size})")

    # 32x32 PNG favicon fallback
    small = render_badge(32)
    small_path = "/home/z/my-project/public/favicon-32.png"
    small.save(small_path, "PNG", optimize=True)
    print(f"Saved: {small_path} ({os.path.getsize(small_path)} bytes, {small.size})")

    # 192x192 PWA icon
    pwa192 = render_badge(192)
    pwa192_path = "/home/z/my-project/public/icon-192.png"
    pwa192.save(pwa192_path, "PNG", optimize=True)
    print(f"Saved: {pwa192_path} ({os.path.getsize(pwa192_path)} bytes, {pwa192.size})")

    # 512x512 PWA icon
    pwa512 = render_badge(512)
    pwa512_path = "/home/z/my-project/public/icon-512.png"
    pwa512.save(pwa512_path, "PNG", optimize=True)
    print(f"Saved: {pwa512_path} ({os.path.getsize(pwa512_path)} bytes, {pwa512.size})")

if __name__ == "__main__":
    main()
