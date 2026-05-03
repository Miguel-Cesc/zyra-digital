import { cn } from "@/lib/utils";

export function Spark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden="true"
      className={cn("inline-block", className)}
    >
      <path d="M32 2c1.4 9.6 4.7 16.6 9.9 21.1C47.1 27.6 54 30.6 64 32c-9.6 1.4-16.6 4.7-21.1 9.9C38.4 47.1 35.4 54 32 64c-1.4-9.6-4.7-16.6-9.9-21.1C16.9 37.4 10 34.4 0 32c9.6-1.4 16.6-4.7 21.1-9.9C25.6 16.9 28.6 10 32 2z" />
    </svg>
  );
}
