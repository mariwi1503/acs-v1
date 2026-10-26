import { Spotlight } from "./Spotlight";

// Shared navy card look used by Services, Industries and Why Us.
// Cards using it should also carry `data-spotlight` so the pointer light can follow the cursor.
export const darkCardClass =
  "group relative isolate overflow-hidden rounded-3xl bg-navy-900 text-white shadow-xl ring-1 shadow-navy-900/20 ring-transparent transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-900/30 hover:ring-orange-500/60";

export function CardGlow({ large = false }: { large?: boolean }) {
  return (
    <>
      <div
        aria-hidden
        className={`absolute rounded-full bg-orange-500/20 blur-3xl ${
          large ? "-top-20 -right-20 size-72" : "-top-16 -right-16 size-48"
        }`}
      />
      <Spotlight kind="card" />
    </>
  );
}
