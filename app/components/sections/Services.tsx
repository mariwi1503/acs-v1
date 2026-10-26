import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services, type Service } from "@/app/content/site";
import { whatsappUrl } from "@/app/lib/whatsapp";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { ButtonLink } from "@/app/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";
import { CardGlow, darkCardClass } from "@/app/components/ui/DarkCard";

function ServiceIcon({ src, featured }: { src: string; featured?: boolean }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-2xl bg-white ${
        featured ? "size-20" : "size-16"
      }`}
    >
      <Image src={src} width={64} height={64} alt="" className={featured ? "size-14" : "size-11"} />
    </span>
  );
}

function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  return (
    <li
      data-reveal
      data-spotlight
      className={`${darkCardClass} flex flex-col p-7 ${featured ? "lg:col-span-2 lg:p-10" : ""}`}
    >
      <CardGlow large={featured} />
      <div className={`relative flex gap-5 ${featured ? "flex-col sm:flex-row sm:items-center" : "flex-col"}`}>
        <ServiceIcon src={service.icon} featured={featured} />
        <div>
          <p className="font-mono text-xs font-semibold tracking-wider text-orange-400 uppercase">
            {service.tagline}
          </p>
          <h4 className={`mt-1.5 font-bold ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>{service.title}</h4>
        </div>
      </div>
      <p className={`relative mt-5 leading-relaxed text-navy-100 ${featured ? "max-w-xl text-lg" : ""}`}>
        {service.description}
      </p>
      {service.scope.length > 0 && (
        <ul className="relative mt-6 flex flex-wrap gap-2 pt-1 lg:mt-auto">
          {service.scope.map((item) => (
            <li
              key={item}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function GroupLabel({ letter, label, count }: { letter: string; label: string; count: number }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex size-10 items-center justify-center rounded-xl bg-orange-500 font-mono text-lg font-bold text-navy-950">
        {letter}
      </span>
      <h3 className="text-xl font-extrabold text-navy-900 sm:text-2xl">{label}</h3>
      <span className="h-px flex-1 bg-mist-200" aria-hidden />
      <span className="font-mono text-sm text-steel-500">{count} layanan</span>
    </div>
  );
}

export function Services() {
  const [featured, ...itRest] = services.it.items;

  return (
    <section id="layanan" aria-labelledby="layanan-title" className="bg-mist-100 py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="layanan-title"
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />

        <div className="mt-14">
          <GroupLabel letter="A" label={services.it.label} count={services.it.items.length} />
          <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard service={featured} featured />
            {itRest.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <GroupLabel letter="B" label={services.business.label} count={services.business.items.length} />
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.business.items.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </ul>
        </div>

        <div
          data-reveal
          className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-white p-8 ring-1 ring-mist-200 md:flex-row md:items-center lg:p-10"
        >
          <div className="max-w-2xl">
            <h3 className="text-xl font-extrabold text-navy-900 sm:text-2xl">{services.midCta.title}</h3>
            <p className="mt-2 text-steel-500">{services.midCta.description}</p>
          </div>
          <ButtonLink href={whatsappUrl()} external className="shrink-0">
            <WhatsAppIcon className="size-5" />
            {services.midCta.button}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
