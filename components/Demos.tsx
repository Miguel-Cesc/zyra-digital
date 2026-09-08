"use client";

import { Spark } from "./Spark";
import { Cta } from "./ui";
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
 * Placeholder for a demo that has no clip yet. Deliberately a designed card
 * rather than a grey skeleton: skeleton bars read as a page that failed to
 * load, which is the templated look we are trying to avoid. It names the
 * format and nothing else, so nothing here can be read as a claim. Swapped
 * out entirely once `src` is set.
 */
function AdMock({
  index,
  name,
  kind,
}: {
  index: number;
  name: string;
  kind: string;
}) {
  const hue = [
    "linear-gradient(155deg, rgba(52,211,153,0.55), rgba(3,74,82,0.97) 52%, rgba(0,42,49,1))",
    "linear-gradient(200deg, rgba(94,234,212,0.45), rgba(0,63,70,0.98) 55%, rgba(1,36,43,1))",
    "linear-gradient(120deg, rgba(16,185,129,0.50), rgba(4,88,96,0.96) 50%, rgba(0,48,56,1))",
  ][index % 3];

  return (
    <>
      <div className="absolute inset-0" style={{ background: hue }} />
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <Spark className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 text-white/[0.07]" />

      <div className="absolute inset-0 p-4 flex flex-col justify-between text-left">
        <span className="text-[9px] uppercase tracking-wider2 text-white/50">
          {kind}
        </span>
        <div>
          <div className="font-display text-white text-[15px] leading-tight">
            {name}
          </div>
          <div className="mt-2 h-px w-8 bg-white/30" />
        </div>
      </div>
      <div className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
    </>
  );
}

function Tile({ demo, index }: { demo: Demo; index: number }) {
  return (
    <div className="relative w-[168px] sm:w-[208px] shrink-0 aspect-[4/5] rounded-2xl overflow-hidden">
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
        <AdMock index={index} name={demo.name} kind={demo.kind} />
      )}
    </div>
  );
}

export function Reel() {
  // One belt rather than two. Two counter-scrolling rows of small tiles read
  // as a broken grid while the tiles are still placeholders. The unit is
  // doubled twice so the row fills a wide viewport and the -50% translate
  // still lands on an identical frame.
  const unit = [...DEMOS, ...DEMOS];
  const track = [...unit, ...unit];

  return (
    <section
      id="reel"
      aria-label="Ad formats we make"
      className="relative bg-ink py-12 md:py-14 overflow-hidden"
    >
      <div className="aurora-soft opacity-60" />
      <p className="relative container-x mb-7 text-center text-[11px] uppercase tracking-wider2 text-white/40">
        The formats we build. Client work lands here as it clears approval
      </p>
      <div className="relative bleed fade-x flex overflow-hidden">
        <div className="reel-track flex shrink-0 gap-4 pr-4">
          {track.map((d, i) => (
            <Tile key={`r-${i}`} demo={d} index={i} />
          ))}
        </div>
      </div>
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
          <h2 className="h-display mt-6 text-4xl md:text-5xl lg:text-[56px] text-ink">
            Six demos.
            <br />
            <span className="text-ink/40">Video and image both.</span>
          </h2>
          <p className="mt-7 text-ink/65 text-lg leading-relaxed max-w-prose2">
            These are ours, not a client&rsquo;s, and none of them carries a
            brand. Yours are built from your own photos, moving and still.
          </p>
        </Reveal>

        <Stagger
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
          staggerChildren={0.06}
        >
          {DEMOS.map((d, i) => (
            <StaggerItem key={d.name} className="group">
              <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
                <div className="w-full">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-black/5 shadow-card group-hover:shadow-cardHover transition-shadow">
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
                      <AdMock index={i} name={d.name} kind={d.kind} />
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14 flex justify-center">
          <Cta href="#contact">Get a free ad</Cta>
        </Reveal>
      </div>
    </section>
  );
}
