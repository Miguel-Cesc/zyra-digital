"use client";

import { Spark } from "./Spark";
import { Chip, Cta } from "./ui";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

/**
 * The demo set.
 *
 * Hard constraint carried from the build spec: no real brand names, no real
 * logos, no recognisable brand identity in any demo. Categories and formats
 * only. `src` and `poster` are empty until the real clips exist; a tile with
 * no `src` renders its gradient placeholder instead, so dropping the files in
 * later is a data change and nothing else.
 */
export type Demo = {
  name: string;
  kind: string;
  src?: string;
  poster?: string;
};

export const DEMOS: Demo[] = [
  { name: "Product spotlight", kind: "15 second video" },
  { name: "Offer card", kind: "Static image" },
  { name: "Range showcase", kind: "20 second video" },
  { name: "Seasonal promo", kind: "Static image" },
  { name: "Problem to solution", kind: "20 second video" },
  { name: "Price drop", kind: "Static image" },
];

/* ============================================================ */
/* Reel: the full-bleed strip directly under the hero            */
/* ============================================================ */


/**
 * Placeholder for a demo that has no clip yet. Abstract on purpose: the shape
 * of an ad, with no words and no figures, so nothing here can be read as a
 * claim. Swapped out entirely once `src` is set.
 */
function AdMock({ index, kind }: { index: number; kind: string }) {
  const moving = kind.toLowerCase().includes("video");
  // Three layouts on rotation. Six copies of one mock reads as a broken grid;
  // varying the composition reads as six different ads.
  const layout = index % 3;
  const hue = [
    "linear-gradient(150deg, rgba(52,211,153,0.66), rgba(10,107,112,0.95) 50%, rgba(0,63,70,1))",
    "linear-gradient(200deg, rgba(94,234,212,0.58), rgba(0,63,70,0.98) 55%, rgba(1,42,49,1))",
    "linear-gradient(115deg, rgba(16,185,129,0.60), rgba(3,74,82,0.96) 52%, rgba(0,50,58,1))",
  ][layout];

  return (
    <>
      <div className="absolute inset-0" style={{ background: hue }} />
      <div className="absolute inset-0 bg-dot-grid opacity-25" />
      <Spark className="absolute -right-7 -bottom-8 w-24 text-white/[0.10]" />

      <div className="absolute inset-0 p-3 flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="h-3.5 w-3.5 rounded-full bg-white/35" />
          <span className="h-2 w-9 rounded-full bg-white/30" />
          {moving && (
            <span className="ml-auto h-3.5 w-7 rounded-full bg-white/25" />
          )}
        </div>

        {layout === 0 && (
          <>
            <div className="flex-1 my-2.5 rounded-xl bg-white/[0.16] border border-white/20 flex items-center justify-center">
              <Spark className="w-7 h-7 text-white/30" />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="h-2 w-[80%] rounded-full bg-white/45" />
              <span className="h-2 w-[52%] rounded-full bg-white/25" />
              <span className="mt-1.5 h-5 w-[62%] rounded-md bg-white/80" />
            </div>
          </>
        )}

        {layout === 1 && (
          <>
            <div className="flex-1 mt-2.5 -mx-1 rounded-xl bg-white/[0.18] border border-white/20 relative overflow-hidden flex items-end">
              <Spark className="absolute left-1/2 top-1/3 -translate-x-1/2 w-8 h-8 text-white/25" />
              <div className="w-full p-2.5 bg-gradient-to-t from-black/40 to-transparent flex flex-col gap-1.5">
                <span className="h-2.5 w-[86%] rounded-full bg-white/70" />
                <span className="h-2 w-[46%] rounded-full bg-white/35" />
              </div>
            </div>
            <span className="mt-2.5 h-5 w-full rounded-md bg-white/80" />
          </>
        )}

        {layout === 2 && (
          <>
            <div className="mt-2.5 h-[46%] rounded-xl bg-white/[0.16] border border-white/20 flex items-center justify-center">
              <Spark className="w-6 h-6 text-white/30" />
            </div>
            <div className="flex-1 flex flex-col justify-center gap-2">
              <span className="h-3 w-[88%] rounded-full bg-white/55" />
              <span className="h-3 w-[64%] rounded-full bg-white/40" />
              <span className="h-2 w-[40%] rounded-full bg-white/22" />
            </div>
            <span className="h-5 w-[70%] rounded-md bg-white/80" />
          </>
        )}
      </div>
    </>
  );
}

function Tile({ demo, index }: { demo: Demo; index: number }) {
  return (
    <div className="relative w-[96px] sm:w-[116px] shrink-0 aspect-[9/16] rounded-xl overflow-hidden border border-white/10">
      {demo.src ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={demo.src}
          poster={demo.poster}
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          aria-hidden="true"
        />
      ) : (
        <AdMock index={index} kind={demo.kind} />
      )}
    </div>
  );
}

export function Reel() {
  // Rendered twice per track so the -50% translate loops seamlessly.
  const rowA = [...DEMOS, ...DEMOS];
  const rowB = [...DEMOS.slice().reverse(), ...DEMOS.slice().reverse()];

  return (
    <section
      id="reel"
      aria-label="Example ads"
      className="relative bg-ink py-8 md:py-10 overflow-hidden"
    >
      <div className="aurora-soft opacity-60" />
      <div className="relative bleed fade-x flex flex-col gap-3">
        <div className="flex overflow-hidden">
          <div className="reel-track flex shrink-0 gap-3 pr-3">
            {rowA.map((d, i) => (
              <Tile key={`a-${i}`} demo={d} index={i} />
            ))}
          </div>
        </div>
        <div className="hidden sm:flex overflow-hidden">
          <div className="reel-track-rev flex shrink-0 gap-3 pr-3">
            {rowB.map((d, i) => (
              <Tile key={`b-${i}`} demo={d} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
      <p className="relative container-x mt-7 text-center text-[11px] uppercase tracking-wider2 text-white/40">
        Every ad above is ours. None of them show a real client.
      </p>
    </section>
  );
}

/* ============================================================ */
/* Demos: the substantive grid, further down the page            */
/* ============================================================ */

export function Demos() {
  return (
    <section id="work" className="bg-white py-28 md:py-36">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <Chip>The work</Chip>
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[56px] text-ink">
            Six demos.
            <br />
            <span className="text-ink/40">Video and image both.</span>
          </h2>
          <p className="mt-7 text-ink/65 text-lg leading-relaxed max-w-prose2">
            These are ours, not a client&rsquo;s. Every one carries no brand,
            because showing you someone else&rsquo;s ad and implying they hired
            us would be a lie. Yours are built from your own photos, and you get
            both moving and still versions of the same idea.
          </p>
        </Reveal>

        <Stagger
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          staggerChildren={0.06}
        >
          {DEMOS.map((d, i) => (
            <StaggerItem key={d.name} className="group">
              <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
                <div className="w-full">
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-black/5 shadow-card group-hover:shadow-cardHover transition-shadow">
                    {d.src ? (
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={d.src}
                        poster={d.poster}
                        muted
                        loop
                        playsInline
                        preload="none"
                      />
                    ) : (
                      <AdMock index={i} kind={d.kind} />
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <div className="font-display text-[15px] text-ink">
                    {d.name}
                  </div>
                  <div className="text-[13px] text-ink/50 mt-0.5">{d.kind}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14 flex justify-center">
          <Cta href="#contact">Get one for your business</Cta>
        </Reveal>
      </div>
    </section>
  );
}
