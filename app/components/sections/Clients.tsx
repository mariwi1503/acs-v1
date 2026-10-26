import Image from "next/image";
import { clients, clientsSection, partners } from "@/app/content/site";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Spotlight } from "@/app/components/ui/Spotlight";

export function Clients() {
  return (
    <section
      id="klien"
      aria-labelledby="klien-title"
      data-spotlight
      className="relative isolate overflow-hidden bg-navy-900 py-20 lg:py-28"
    >
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
      <Spotlight kind="grid" />
      <div aria-hidden className="absolute -top-32 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

      <Container>
        <SectionHeading
          id="klien-title"
          eyebrow={clientsSection.eyebrow}
          title={clientsSection.title}
          tone="dark"
          align="center"
        />

        <div className="mt-14" data-reveal>
          <h3 className="text-center font-mono text-xs font-semibold tracking-[0.18em] text-navy-200 uppercase">
            {clientsSection.clientsLabel}
          </h3>
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((client) => (
              <li
                key={client.name}
                className="flex h-32 items-center justify-center rounded-2xl bg-white p-5 shadow-lg shadow-black/20 transition hover:-translate-y-1"
              >
                <Image
                  src={client.src}
                  width={client.width}
                  height={client.height}
                  alt={client.name}
                  sizes="180px"
                  className="max-h-20 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16" data-reveal>
          <h3 className="text-center font-mono text-xs font-semibold tracking-[0.18em] text-navy-200 uppercase">
            {clientsSection.partnersLabel}
          </h3>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {partners.map((logo) => (
              <li
                key={logo.name}
                className="flex h-24 items-center justify-center rounded-2xl bg-white p-4 shadow-lg shadow-black/20 transition hover:-translate-y-1"
              >
                <Image
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt={logo.name}
                  sizes="120px"
                  className="max-h-10 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
