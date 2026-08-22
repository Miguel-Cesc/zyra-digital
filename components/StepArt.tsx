import { Spark } from "./Spark";

/**
 * Abstract mockups for the four how-it-works panels. Pure markup — no images,
 * no icon set, nothing to load.
 *
 * Deliberately unlabelled and numberless. These are illustrations of the shape
 * of the work, and a mock chart with figures on it would read as a performance
 * claim we cannot substantiate.
 */

function Bar({ w, dim = false }: { w: string; dim?: boolean }) {
  return (
    <span
      className={`block h-2 rounded-full ${dim ? "bg-white/20" : "bg-white/45"}`}
      style={{ width: w }}
    />
  );
}

function Glass({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white/[0.13] border border-white/25 backdrop-blur-[2px] ${className}`}
    >
      {children}
    </div>
  );
}

/** 1 — You send a link. A URL field and the photos it picks up. */
function ArtLink() {
  return (
    <div className="w-[76%] flex flex-col gap-4">
      <Glass className="px-4 py-3.5 flex items-center gap-3">
        <span className="w-6 h-6 rounded-lg bg-white/25 shrink-0" />
        <Bar w="62%" />
        <span className="ml-auto h-6 px-3 rounded-lg bg-white/80 shrink-0" />
      </Glass>
      <div className="grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <Glass key={i} className="aspect-[4/5] flex items-end p-2.5">
            <Bar w={["70%", "55%", "80%"][i]} dim />
          </Glass>
        ))}
      </div>
    </div>
  );
}

/** 2 — We make the creative. A fan of finished ads. */
function ArtCreative() {
  const rot = ["-9deg", "0deg", "9deg"];
  const lift = ["translateY(14px)", "translateY(-16px)", "translateY(14px)"];
  return (
    <div className="w-full flex items-center justify-center gap-2">
      {rot.map((r, i) => (
        <div
          key={i}
          style={{ transform: `rotate(${r}) ${lift[i]}` }}
          className={i === 1 ? "w-[30%] z-10" : "w-[27%]"}
        >
          <Glass className="aspect-[9/16] p-2.5 flex flex-col">
            <span className="h-4 w-9 rounded-md bg-white/35" />
            <div className="flex-1 my-2 rounded-lg bg-white/25" />
            <div className="flex flex-col gap-1.5">
              <Bar w="85%" />
              <Bar w="55%" dim />
            </div>
          </Glass>
        </div>
      ))}
    </div>
  );
}

/** 3 — We run it. Campaign rows inside an account. */
function ArtRun() {
  return (
    <div className="w-[76%]">
      <Glass className="p-4 flex flex-col gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl bg-white/[0.10] border border-white/15 px-3.5 py-3"
          >
            <span
              className={`w-2 h-2 rounded-full shrink-0 ${
                i === 2 ? "bg-white/30" : "bg-emerald-300"
              }`}
            />
            <Bar w={["48%", "60%", "38%"][i]} dim={i === 2} />
            <span className="ml-auto h-2.5 w-10 rounded-full bg-white/35 shrink-0" />
          </div>
        ))}
      </Glass>
    </div>
  );
}

/** 4 — You see what it did. A plain report, no figures on it. */
function ArtReport() {
  return (
    <div className="w-[74%] flex flex-col gap-3">
      <Glass className="p-4 flex flex-col gap-3.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-4">
            <Bar w={["34%", "26%", "40%", "30%"][i]} dim />
            <span className="ml-auto flex items-center gap-1.5">
              <span className="h-3.5 w-12 rounded-md bg-white/45" />
            </span>
          </div>
        ))}
      </Glass>
      <div className="flex items-center gap-2 self-end">
        <Spark className="w-3 h-3 text-white/60" />
        <span className="h-2.5 w-20 rounded-full bg-white/30" />
      </div>
    </div>
  );
}

const ART = [ArtLink, ArtCreative, ArtRun, ArtReport];

export function StepArt({ index }: { index: number }) {
  const Art = ART[index] ?? ArtLink;
  return (
    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden panel-bloom border border-black/5 shadow-card">
      <div className="absolute inset-0 bg-dot-grid opacity-30" />
      <Spark className="absolute -right-16 -bottom-20 w-64 text-white/[0.09]" />
      <Spark className="absolute -left-12 -top-14 w-40 text-white/[0.07]" />
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <Art />
      </div>
      <span className="absolute left-6 top-5 font-display text-[13px] tracking-wider2 text-white/45">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}
