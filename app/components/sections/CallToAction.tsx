import Image from "next/image";
import { Mail } from "lucide-react";
import { company, cta, hero } from "@/app/content/site";
import { whatsappUrl } from "@/app/lib/whatsapp";
import { Container } from "@/app/components/ui/Container";
import { ButtonLink } from "@/app/components/ui/ButtonLink";
import { Eyebrow } from "@/app/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";
import { Spotlight } from "@/app/components/ui/Spotlight";

export function CallToAction() {
  return (
    <section id="kontak" aria-labelledby="cta-title" data-spotlight data-parallax className="relative isolate overflow-hidden bg-navy-950 py-24 text-white lg:py-32">
      <Image
        src={cta.image.src}
        width={cta.image.width}
        height={cta.image.height}
        alt=""
        sizes="100vw"
        className="absolute inset-0 -z-20 size-full object-cover opacity-30"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60" />
      <Spotlight kind="grid" />
      <div aria-hidden className="absolute bottom-0 left-0 -z-10 h-32 w-1/2 bg-orange-500 [clip-path:polygon(0_100%,0_40%,100%_100%)]" />

      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="max-w-3xl lg:col-span-7" data-reveal>
          <Eyebrow tone="dark">{cta.eyebrow}</Eyebrow>
          <h2 id="cta-title" className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {cta.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-100">{cta.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappUrl()} external>
              <WhatsAppIcon className="size-5" />
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href={`mailto:${company.email}`} variant="light">
              <Mail className="size-5" aria-hidden />
              Kirim Email
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none" data-reveal>
          <div aria-hidden className="absolute inset-[15%] rounded-full bg-orange-500/20 blur-3xl" />
          {/* Screen blend drops the artwork's black backdrop; the mask feathers its edges into the navy. */}
          <Image
            src={cta.logo.src}
            width={cta.logo.width}
            height={cta.logo.height}
            alt={cta.logo.alt}
            sizes="(min-width: 1024px) 40vw, 28rem"
            data-depth
            className="relative w-full animate-float mix-blend-screen [--depth:18] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_72%)]"
          />
        </div>
      </Container>
    </section>
  );
}
