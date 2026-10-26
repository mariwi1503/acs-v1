import { coreValues } from "@/app/content/site";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Spotlight } from "@/app/components/ui/Spotlight";

export function CoreValues() {
  return (
    <section
      id="core"
      aria-labelledby="core-title"
      data-spotlight
      className="relative isolate overflow-hidden bg-navy-900 py-20 text-white lg:py-28"
    >
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
      <Spotlight kind="grid" />
      <div aria-hidden className="absolute -right-24 -bottom-24 -z-10 size-96 rounded-full bg-orange-500/15 blur-3xl" />

      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="core-title"
            eyebrow={coreValues.eyebrow}
            title={coreValues.title}
            description={coreValues.description}
            tone="dark"
          />
          <p
            aria-hidden
            className="font-mono text-6xl font-extrabold tracking-[0.3em] text-transparent [-webkit-text-stroke:1.5px_rgb(255_125_59_/_0.7)] sm:text-7xl lg:text-8xl"
          >
            CORE
          </p>
        </div>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.items.map((item, i) => (
            <li
              key={item.name}
              data-reveal
              data-spotlight
              className="group relative isolate overflow-hidden rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:ring-orange-500/50"
            >
              <Spotlight kind="card" />
              <span className="font-mono text-xs text-navy-200">0{i + 1}</span>
              <span
                aria-hidden
                className="mt-2 block text-[6.5rem] leading-none font-extrabold text-orange-500 transition-transform duration-300 group-hover:scale-105 lg:text-[7.5rem]"
              >
                {item.letter}
              </span>
              <h3 className="mt-4 text-2xl font-bold">
                <span className="text-orange-400">{item.letter}</span>
                {item.name.slice(1)}
              </h3>
              <p className="mt-2 font-semibold text-navy-100">{item.summary}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy-200">{item.detail}</p>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 group-hover:scale-x-100"
              />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
