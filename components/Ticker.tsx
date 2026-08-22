import { Spark } from "./Spark";

export const TICKER_TOP = [
  "24 hours from brief to live",
  "AI video and image creative",
  "100+ businesses advertised for",
  "No lock-in",
  "Money-back guarantee",
  "Brisbane, Australia",
];

export const TICKER_MID = [
  "You approve. We do everything else",
  "Meta and Google",
  "Your ad account, not ours",
  "Ad spend paid straight to the platform",
  "New creative every month, not one shoot a year",
  "Reported against your revenue",
];

/**
 * Auto-scrolling claim strip. Replaces the old static four-icon trust row —
 * a row of stock glyphs in rounded tiles is exactly the templated look we are
 * trying to get away from, and a moving strip carries more claims in less
 * vertical space.
 */
export function Ticker({
  items,
  tone = "dark",
  reverse = false,
}: {
  items: string[];
  tone?: "dark" | "light";
  reverse?: boolean;
}) {
  // Rendered twice so the -50% translate loops seamlessly.
  const sequence = [...items, ...items];
  const light = tone === "light";

  return (
    <section
      aria-hidden="true"
      className={
        light
          ? "relative bg-cloud border-y border-black/5 overflow-hidden"
          : "relative bg-ink text-white overflow-hidden border-y border-white/5"
      }
    >
      {!light && <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />}
      <div className="flex overflow-hidden py-5 fade-x">
        <div
          className={`${reverse ? "reel-track-rev" : "marquee-track"} flex shrink-0 items-center gap-10 pr-10 whitespace-nowrap`}
        >
          {sequence.map((item, i) => (
            <div
              key={`${item}-${i}`}
              className={`flex items-center gap-10 text-[13px] uppercase tracking-wider2 font-medium ${
                light ? "text-ink/55" : "text-white/55"
              }`}
            >
              <span>{item}</span>
              <Spark
                className={`w-3 h-3 shrink-0 ${light ? "text-teal-deep/40" : "text-white/40"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
