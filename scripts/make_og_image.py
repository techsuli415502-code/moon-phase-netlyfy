#!/usr/bin/env python3
"""
Generate the Open Graph image (1200x630 PNG) for Moon Phase Emoji.

The OG image is what shows up when someone shares the site link on
Twitter, Facebook, LinkedIn, Slack, etc., and is also used by some
Google search features. It needs to be a real PNG (not SVG) at the
standard 1200x630 size.

Design: warm cream background with a large stylized moon badge on the
left, brand text and tagline on the right, and subtle decorative stars
around the composition.
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math
import os

# Output dimensions (OG standard)
WIDTH = 1200
HEIGHT = 630

# Site palette (matches globals.css :root)
CREAM = (251, 247, 240)         # oklch(0.985 0.008 80)
WHITE = (255, 255, 255)
AMBER = (245, 158, 11)          # #f59e0b
AMBER_DEEP = (217, 119, 6)      # #d97706
VIOLET = (124, 58, 237)         # #7c3aed
VIOLET_DEEP = (91, 33, 182)     # #5b21b6
SLATE = (32, 36, 50)            # deep slate text
MUTED = (90, 99, 116)           # muted text

def lerp_color(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))

def make_radial_bg():
    """Soft warm cream background with subtle radial tints, mirroring
    the .bg-decor class in globals.css."""
    img = Image.new("RGB", (WIDTH, HEIGHT), CREAM)
    px = img.load()

    # Three soft radial highlights
    radials = [
        (int(WIDTH * 0.15), int(HEIGHT * 0.10), 220, AMBER, 0.10),
        (int(WIDTH * 0.85), int(HEIGHT * 0.85), 260, VIOLET, 0.07),
        (int(WIDTH * 0.50), int(HEIGHT * 0.50), 320, AMBER, 0.05),
    ]

    for y in range(HEIGHT):
        for x in range(WIDTH):
            r, g, b = px[x, y]
            for cx, cy, radius, color, strength in radials:
                dx = x - cx
                dy = y - cy
                d = math.sqrt(dx * dx + dy * dy)
                if d < radius:
                    t = (1 - d / radius) * strength
                    r = int(r + (color[0] - r) * t)
                    g = int(g + (color[1] - g) * t)
                    b = int(b + (color[2] - b) * t)
            px[x, y] = (max(0, min(255, r)), max(0, min(255, g)), max(0, min(255, b)))

    return img

def draw_crescent_moon(draw, cx, cy, radius, color_outer, color_inner, offset_ratio=0.45):
    """Draw a crescent moon using two overlapping circles."""
    # Outer filled circle
    draw.ellipse(
        [cx - radius, cy - radius, cx + radius, cy + radius],
        fill=color_outer
    )
    # Offset "cut" circle in background color to form the crescent
    offset = int(radius * offset_ratio)
    cut_radius = int(radius * 0.92)
    draw.ellipse(
        [cx - cut_radius + offset, cy - cut_radius - int(offset * 0.3),
         cx + cut_radius + offset, cy + cut_radius - int(offset * 0.3)],
        fill=CREAM
    )

def draw_sparkle(draw, cx, cy, size, color):
    """Draw a 4-point sparkle (star) at cx, cy."""
    points = []
    for i, (dx, dy) in enumerate([(0, -1), (0.3, -0.3), (1, 0), (0.3, 0.3),
                                   (0, 1), (-0.3, 0.3), (-1, 0), (-0.3, -0.3)]):
        x = cx + dx * size
        y = cy + dy * size
        points.append((x, y))
    draw.polygon(points, fill=color)

def find_font(size, bold=True):
    """Find a usable font; fall back through common system fonts."""
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
        "/usr/share/fonts/truetype/freefont/FreeSansBold.ttf" if bold else "/usr/share/fonts/truetype/freefont/FreeSans.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()

def main():
    print("Building OG image background...")
    img = make_radial_bg()
    draw = ImageDraw.Draw(img, "RGBA")

    # === Left: large moon badge ===
    badge_cx = 240
    badge_cy = HEIGHT // 2
    badge_r = 170

    # White badge background (slightly transparent to blend)
    draw.ellipse(
        [badge_cx - badge_r - 8, badge_cy - badge_r - 8,
         badge_cx + badge_r + 8, badge_cy + badge_r + 8],
        fill=(*WHITE, 80)
    )
    # Subtle amber glow behind moon
    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse(
        [badge_cx - badge_r - 30, badge_cy - badge_r - 30,
         badge_cx + badge_r + 30, badge_cy + badge_r + 30],
        fill=(*AMBER, 70)
    )
    glow = glow.filter(ImageFilter.GaussianBlur(radius=40))
    img.paste(glow, (0, 0), glow)
    draw = ImageDraw.Draw(img, "RGBA")

    # Outer amber ring
    draw.ellipse(
        [badge_cx - badge_r, badge_cy - badge_r,
         badge_cx + badge_r, badge_cy + badge_r],
        fill=WHITE,
        outline=AMBER,
        width=4
    )

    # Crescent moon (violet gradient simulated with two layers)
    moon_r = 110
    draw_crescent_moon(draw, badge_cx, badge_cy, moon_r, VIOLET, VIOLET_DEEP, offset_ratio=0.45)

    # Sparkles around the badge
    sparkle_positions = [
        (badge_cx - 200, badge_cy - 120, 8, AMBER),
        (badge_cx + 200, badge_cy - 130, 10, AMBER),
        (badge_cx + 210, badge_cy + 130, 9, AMBER),
        (badge_cx - 210, badge_cy + 110, 8, AMBER),
        (badge_cx + 230, badge_cy, 7, VIOLET),
    ]
    for cx, cy, size, color in sparkle_positions:
        draw_sparkle(draw, cx, cy, size, color)
        draw.ellipse(
            [cx - size * 0.4, cy - size * 0.4, cx + size * 0.4, cy + size * 0.4],
            fill=color
        )

    # === Right: brand text ===
    text_x = 480

    # Small "moon phase" eyebrow text (split across two lines for safety)
    eyebrow_font = find_font(26, bold=True)
    eyebrow_text = "CURRENT PHASE OF THE MOON"
    draw.text((text_x, 140), eyebrow_text, fill=AMBER_DEEP, font=eyebrow_font)
    draw.text((text_x, 172), "AS AN EMOJI", fill=AMBER_DEEP, font=eyebrow_font)

    # Main brand title (sized to fit)
    title_font = find_font(72, bold=True)
    title = "Moon Phase Emoji"
    draw.text((text_x, 220), title, fill=VIOLET_DEEP, font=title_font)

    # Decorative line
    draw.line(
        [(text_x, 320), (text_x + 260, 320)],
        fill=AMBER,
        width=4
    )

    # Tagline below the line
    tagline_font = find_font(32, bold=False)
    tagline = "Live lunar phase, emoji, and calendar."
    draw.text((text_x, 345), tagline, fill=SLATE, font=tagline_font)

    # Secondary tagline
    sub_font = find_font(24, bold=False)
    sub_text = "Updated live every minute, right in your browser."
    draw.text((text_x, 395), sub_text, fill=MUTED, font=sub_font)

    # === Top-right: small moon emoji icon ===
    # (a small badge with a full moon as decoration)
    small_cx = WIDTH - 110
    small_cy = 100
    small_r = 50
    draw.ellipse(
        [small_cx - small_r, small_cy - small_r,
         small_cx + small_r, small_cy + small_r],
        fill=WHITE,
        outline=AMBER,
        width=2
    )
    # Full moon (amber gradient simulated)
    moon_inner_r = 35
    draw.ellipse(
        [small_cx - moon_inner_r, small_cy - moon_inner_r,
         small_cx + moon_inner_r, small_cy + moon_inner_r],
        fill=AMBER
    )
    # Craters
    draw.ellipse([small_cx - 14, small_cy - 6, small_cx - 4, small_cy + 4], fill=AMBER_DEEP)
    draw.ellipse([small_cx + 4, small_cy - 12, small_cx + 14, small_cy - 2], fill=AMBER_DEEP)
    draw.ellipse([small_cx - 6, small_cy + 8, small_cx + 4, small_cy + 18], fill=AMBER_DEEP)

    # === Bottom-left: small text brand mark ===
    bottom_font = find_font(22, bold=False)
    draw.text((60, HEIGHT - 60), "moonphaseemoji.example", fill=MUTED, font=bottom_font)
    draw.text((60, HEIGHT - 32), "Updated live every minute, right in your browser.", fill=MUTED, font=bottom_font)

    # === Decorative bottom border line ===
    draw.line(
        [(60, HEIGHT - 80), (WIDTH - 60, HEIGHT - 80)],
        fill=(*AMBER, 80),
        width=2
    )

    # Save as PNG
    out_path = "/home/z/my-project/public/og-image.png"
    img.save(out_path, "PNG", optimize=True)
    print(f"Saved: {out_path}")
    print(f"Size: {os.path.getsize(out_path)} bytes")
    print(f"Dimensions: {img.size}")

if __name__ == "__main__":
    main()
