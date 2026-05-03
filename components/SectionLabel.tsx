import { cn } from "@/lib/utils";
import { Spark } from "./Spark";

export function SectionLabel({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 eyebrow",
        isLight ? "text-white/70" : "text-teal-muted",
        className
      )}
    >
      <Spark
        className={cn("w-3 h-3", isLight ? "text-white/60" : "text-teal-deep")}
      />
      <span>{children}</span>
    </div>
  );
}
