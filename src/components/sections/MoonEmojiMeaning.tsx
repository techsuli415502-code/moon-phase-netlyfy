/**
 * Moon Emoji Meaning section.
 * Explains what each moon emoji means and how to use them.
 */
export default function MoonEmojiMeaning() {
  const emojis = [
    {
      emoji: "\u{1F311}",
      name: "New Moon",
      use: "Use this to mark a fresh start, a quiet moment, or a brand new lunar cycle.",
    },
    {
      emoji: "\u{1F312}",
      name: "Waxing Crescent",
      use: "Use this for slow growth, beginnings taking shape, or a thin sliver of hope.",
    },
    {
      emoji: "\u{1F313}",
      name: "First Quarter",
      use: "Use this for being halfway to a goal or for a steady push forward.",
    },
    {
      emoji: "\u{1F314}",
      name: "Waxing Gibbous",
      use: "Use this when you are almost there, with momentum building toward full.",
    },
    {
      emoji: "\u{1F315}",
      name: "Full Moon",
      use: "Use this to mark a peak, a high point, or a bright clear night.",
    },
    {
      emoji: "\u{1F316}",
      name: "Waning Gibbous",
      use: "Use this to show a slow step down, a release, or quiet after a peak.",
    },
    {
      emoji: "\u{1F317}",
      name: "Third Quarter",
      use: "Use this for letting go, reflection, or the second half of a journey.",
    },
    {
      emoji: "\u{1F318}",
      name: "Waning Crescent",
      use: "Use this for endings, rest, or winding down before a new start.",
    },
  ];

  return (
    <section
      id="moon-emoji-meaning"
      aria-labelledby="moon-emoji-heading"
      className="section-padding"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Moon Emoji Guide
          </p>
          <h2
            id="moon-emoji-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground glow-text sm:text-4xl"
          >
            Moon Emoji Meaning and Use
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Each Moon emoji maps to a real lunar phase. They are not just for
            mood or vibes. Each one matches a specific point in the lunar
            cycle. Here is what each Moon emoji means and when you might want
            to use it.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {emojis.map((item) => (
            <article
              key={item.name}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div
                className="text-5xl leading-none moon-glow"
                aria-hidden="true"
              >
                {item.emoji}
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.use}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-foreground">
              How to Use the Right Moon Emoji
            </h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <p>
                If you want your Moon emoji to match the actual sky, check the
                live phase shown at the top of this page. Use the same emoji
                for posts about tonight, and pick a different one for past or
                future dates by checking the calendar.
              </p>
              <p>
                For casual use, any Moon emoji works. But pairing the right
                one with the right night makes your message feel more
                grounded. It also helps friends and family notice the real
                Moon in the sky above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
