import { cn } from "@/lib/utils";
import { Spark } from "./Spark";

type Tone = "dark" | "light";
type Size = "sm" | "md" | "lg";

const sizeMap: Record<Size, { spark: string; text: string; gap: string }> = {
  sm: { spark: "w-3.5 h-3.5", text: "text-[13px]", gap: "gap-2" },
  md: { spark: "w-4 h-4", text: "text-[15px]", gap: "gap-2.5" },
  lg: { spark: "w-5 h-5", text: "text-lg", gap: "gap-3" },
};

export function Logo({
  tone = "dark",
  size = "md",
  className,
}: {
  tone?: Tone;
  size?: Size;
  className?: string;
}) {
  const isLight = tone === "light";
  const { spark, text, gap } = sizeMap[size];

  return (
    <div
      className={cn(
        "inline-flex items-center font-display font-semibold tracking-wider2",
        gap,
        isLight ? "text-white" : "text-ink",
        className
      )}
    >
      <Spark className={cn(spark, isLight ? "text-white" : "text-teal-deep")} />
      <span className={cn(text, "uppercase")}>ZYRA DIGITAL</span>
    </div>
  );
}
