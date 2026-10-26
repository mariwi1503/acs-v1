import { Check, Globe, HardHat, MonitorCheck, Network, Server, Settings2 } from "lucide-react";
import { managedService } from "@/app/content/site";
import { whatsappUrl } from "@/app/lib/whatsapp";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { ButtonLink } from "@/app/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";

const icons = {
  server: Server,
  network: Network,
  monitor: MonitorCheck,
  settings: Settings2,
  engineer: HardHat,
  globe: Globe,
} as const;

export function ManagedService() {
  return (
    <section
      id="managed-service"
      aria-labelledby="managed-title"
      data-spotlight
      className="relative isolate overflow-hidden bg-navy-950 py-20 text-white lg:py-28"
    >
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <Spotlight kind="grid" />
      <div aria-hidden className="absolute top-0 right-0 -z-10 h-64 w-1/3 bg-orange-500/90 [clip-path:polygon(100%_0,100%_100%,0_0)]" />

      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <SectionHeading
            id="managed-title"
            eyebrow={managedService.eyebrow}
            title={managedService.title}
            description={managedService.description}
            tone="dark"
          />
          <ul className="mt-8 grid gap-3" data-reveal>
            {managedService.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 font-semibold text-navy-100">
                <span className="flex size-6 items-center justify-center rounded-full bg-orange-500 text-navy-950">
                  <Check className="size-4" strokeWidth={3} aria-hidden />
                </span>
                {h}
              </li>
            ))}
          </ul>
          <ButtonLink
            href={whatsappUrl("Halo ACS, saya tertarik dengan layanan Network Managed Service.")}
            external
            className="mt-10"
          >
            <WhatsAppIcon className="size-5" />
            Tanya Managed Service
          </ButtonLink>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {managedService.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <li
                key={item.title}
                data-reveal
                data-spotlight
                className="group relative isolate overflow-hidden rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 transition duration-300 hover:bg-white/[0.07] hover:ring-orange-500/50"
              >
                <Spotlight kind="card" />
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 text-navy-950 shadow-lg shadow-orange-500/20">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <span className="font-mono text-xs text-navy-200">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
