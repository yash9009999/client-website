"use client";

import { useSyncExternalStore } from "react";

type HeroVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

export function HeroVideo({ src, poster, className = "" }: HeroVideoProps) {
  const motionAllowed = useSyncExternalStore(
    (onStoreChange) => {
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");
      query.addEventListener("change", onStoreChange);
      return () => query.removeEventListener("change", onStoreChange);
    },
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  return (
    <video
      className={`absolute inset-0 size-full object-cover ${className}`}
      autoPlay={motionAllowed}
      loop
      muted
      playsInline
      poster={poster}
      preload="metadata"
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
