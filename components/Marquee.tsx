import { Spark } from "./Spark";

const ITEMS = [
  "24-48 hour delivery",
  "Brisbane, Australia",
  "Built fast",
  "Built right",
  "Search-ready",
  "AI-aware",
  "Mobile-first",
  "Managed for the modern web",
];

export function Marquee() {
  // Render the list twice so the translateX(-50%) loop is seamless.
  const sequence = [...ITEMS, ...ITEMS];

  return (
    <section
      aria-hidden="true"
      className="relative bg-ink text-white overflow-hidden border-y border-white/5"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

      {/* Edge fades for a polished mask */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden py-5">
        <div className="marquee-track flex shrink-0 items-center gap-10 pr-10 whitespace-nowrap">
          {sequence.map((item, i) => (
            <div
              key={`${item}-${i}`}
              className="flex items-center gap-10 text-[13px] uppercase tracking-wider2 font-medium text-white/55"
            >
              <span>{item}</span>
              <Spark className="w-3 h-3 text-white/40 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
