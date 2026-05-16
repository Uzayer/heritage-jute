"use client";

import dynamic from "next/dynamic";

const MapComponent = dynamic(
  () => import("@/components/map").then((m) => ({ default: m.Map })),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto max-w-4xl h-48 animate-pulse rounded bg-muted/40" />
    ),
  }
);

export function MapLazy() {
  return <MapComponent />;
}
