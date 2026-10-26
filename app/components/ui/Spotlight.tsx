// Pointer-following light. The parent needs `data-spotlight` (and `isolate` so the -z-10 layer
// sits above its background but below its content).
//   grid → brighter orange grid lines around the cursor, for navy section backdrops
//   card → soft orange glow, shown while the card is hovered (parent needs `group`)
export function Spotlight({ kind }: { kind: "grid" | "card" }) {
  return (
    <div
      aria-hidden
      className={
        kind === "grid"
          ? "grid-spotlight pointer-events-none absolute inset-0 -z-10"
          : "card-spotlight pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      }
    />
  );
}
