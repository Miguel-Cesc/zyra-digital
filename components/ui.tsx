import Link from "next/link";
import { cn } from "@/lib/utils";
import { Spark } from "./Spark";

/**
 * The primary call to action. Squared, uppercase, with the Zyra spark in a
 * leading tile — heavier than the rounded `.btn` chips so there is never more
 * than one thing on screen that looks like the main action.
 *
 * Deliberately no icon library here. The spark is the only mark on the site.
 */
export function Cta({
  href,
  children,
  tone = "dark",
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(tone === "light" ? "btn-cta-light" : "btn-cta", "group", className)}
    >
      <span className="btn-cta-tile">
        <Spark className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-90" />
      </span>
      <span>{children}</span>
    </Link>
  );
}

/**
 * Section label: a short rule and a wide-tracked word. No icon — a row of
 * stock glyphs in tiles is the thing that makes a site look templated.
 */
export function Chip({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <span className={cn("chip", light ? "text-white/70" : "text-teal-muted", className)}>
      <span
        className={cn(
          "h-px w-7 shrink-0",
          light ? "bg-white/40" : "bg-teal-deep/35"
        )}
      />
      {children}
    </span>
  );
}

/** Proof point with a tick. */
export function Tick({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <li className={cn("tick", light ? "text-white/70" : "text-ink/70")}>
      <span
        className={cn(
          "mt-0.5 w-5 h-5 shrink-0 rounded-md flex items-center justify-center",
          light ? "bg-white/[0.12] text-white" : "bg-teal-deep/[0.08] text-teal-deep"
        )}
      >
        <svg viewBox="0 0 20 20" fill="none" className="w-3 h-3" aria-hidden="true">
          <path
            d="M4 10.5l3.5 3.5L16 6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}
