"use client";

import { Spark } from "./Spark";
import { Cta } from "./ui";
import { LazyVideo } from "./LazyVideo";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

/**
 * The demo set.
 *
 * Every clip is AI-generated footage from Pixabay, labelled "AI generated"
 * on its source page and used under the Pixabay Content License (commercial
 * use, no attribution). That licence forbids "giving the impression that
 * Content was created by you", which is why the reel caption and the Demos
 * copy both say "example footage". Keep that wording if you swap a clip in,
 * and keep it until every tile is footage Zyra actually made.
 *
 * Chosen for realism: each was checked frame by frame at tile size for
 * warping, merging geometry, wrong-way smoke or water, gibberish text, faces
 * and logos. Sources, so any clip can be traced or replaced:
 *   backyard-barbecue  pixabay.com/videos/ai-generated-barbeque-bbq-grill-359867/
 *   lighting           pixabay.com/videos/ai-generated-electricity-light-bulb-374414/
 *   garden             pixabay.com/videos/ai-generated-gardening-sprinkler-348087/
 *   cafe               pixabay.com/videos/ai-generated-coffee-machine-machine-356213/
 *   hardware           pixabay.com/videos/ai-generated-screwdriver-241304/
 *   on-the-grill       pixabay.com/videos/ai-generated-hamburgers-burger-food-358379/
 *
 * Files are made with scripts/encode-demo.sh. A tile with no `src` falls back
 * to its gradient placeholder.
 */
export type Demo = {
  name: string;
  kind: string;
  src?: string;
  poster?: string;
};

export const DEMOS: Demo[] = [
  { name: "Backyard barbecue", kind: "Video", src: "/demos/backyard-barbecue.mp4", poster: "/demos/backyard-barbecue.webp" },
  { name: "Lighting", kind: "Video", src: "/demos/lighting.mp4", poster: "/demos/lighting.webp" },
  { name: "Garden", kind: "Video", src: "/demos/garden.mp4", poster: "/demos/garden.webp" },
  { name: "Cafe", kind: "Video", src: "/demos/cafe.mp4", poster: "/demos/cafe.webp" },
  { name: "Hardware", kind: "Video", src: "/demos/hardware.mp4", poster: "/demos/hardware.webp" },
  { name: "On the grill", kind: "Video", src: "/demos/on-the-grill.mp4", poster: "/demos/on-the-grill.webp" },
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
        <LazyVideo
          className="absolute inset-0 w-full h-full object-cover"
          src={demo.src}
          poster={demo.poster}
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
        Example footage in the style we make
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
            Six examples.
            <br />
            <span className="text-ink/40">Not one looks like AI.</span>
          </h2>
          <p className="mt-7 text-ink/65 text-lg leading-relaxed max-w-prose2">
            Example footage, and every clip is AI generated. Yours are built
            from your own product photos, moving and still.
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
                      <LazyVideo
                        className="absolute inset-0 w-full h-full object-cover"
                        src={d.src}
                        poster={d.poster}
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
