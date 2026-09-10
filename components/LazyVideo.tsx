"use client";

import { useEffect, useRef } from "react";

/**
 * A muted looping video that only downloads and plays while it is on screen.
 *
 * `autoPlay` overrides `preload="none"`, so a plain autoplaying tag fetches
 * every clip on first load. The reel repeats the demo set four times, which
 * would mean 24 videos decoding at once. This fetches a clip the first time
 * it nears the viewport and pauses it whenever it leaves.
 *
 * With reduced motion requested it never plays and shows the poster only.
 */
export function LazyVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.getAttribute("src")) video.src = src;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    />
  );
}
