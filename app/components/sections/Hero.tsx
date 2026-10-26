import Image from "next/image";
import { Activity, ArrowRight, HardHat, Network } from "lucide-react";
import { hero } from "@/app/content/site";
import { whatsappUrl } from "@/app/lib/whatsapp";
import { Container } from "@/app/components/ui/Container";
import { ButtonLink } from "@/app/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";
import { TrustBar } from "./TrustBar";

const cardIcons = [Activity, Network, HardHat];
// Keep cards on the edges so the ACS "A" mark in the centre of the image stays visible.
const cardPositions = [
  "left-0 -top-8 animate-float sm:top-0 sm:-left-6",
  "right-0 top-[66%] animate-float-delayed sm:top-[58%] sm:-right-6",
  "bottom-[3%] left-0 animate-float sm:-left-6",
];

export function Hero() {
  return (
    <section
      id="beranda"
      aria-labelledby="hero-title"
      data-parallax
      data-spotlight
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-navy-950 text-white"
    >
      <div className="relative flex flex-1 items-center pt-20 pb-10 lg:pt-24 lg:pb-12">
      {/* Backdrop: glow, grid and the angular shapes from the brand's "A" mark. */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black_20%,transparent_75%)]" />
        <div className="grid-spotlight absolute inset-0" />
        <div data-depth className="absolute top-24 right-[-10%] size-[42rem] rounded-full bg-navy-700/50 blur-3xl [--depth:-16]" />
        <div data-depth className="absolute top-1/3 right-[12%] size-[26rem] rounded-full bg-orange-500/20 blur-3xl [--depth:-32]" />
        <div className="absolute bottom-0 left-0 h-40 w-[55%] bg-navy-900 [clip-path:polygon(0_100%,0_35%,100%_100%)]" />
        <div className="absolute bottom-0 left-0 h-24 w-[30%] bg-orange-500/80 [clip-path:polygon(0_100%,0_55%,100%_100%)]" />
      </div>

      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2.5 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-navy-100 ring-1 ring-white/15 sm:text-sm">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-orange-500" />
            </span>
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="mt-5 text-[2.25rem] leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl xl:text-[3.5rem]"
          >
            {hero.titleLead} <span className="text-navy-100">{hero.titleMid}</span>{" "}
            <span className="relative inline-block text-orange-500">
              {hero.titleHighlight}
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-orange-500/60"
              >
                <path d="M2 9C50 3 150 2 198 7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-pretty text-navy-200 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={whatsappUrl()} external>
              <WhatsAppIcon className="size-5" />
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="#layanan" variant="ghost-dark">
              {hero.secondaryCta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
          </div>
        </div>

        {/* Desktop only: on smaller screens the image would push the CTA and partner logos below the fold. */}
        <div className="relative hidden lg:col-span-5 lg:block">
          <div aria-hidden className="absolute inset-[12%] rounded-full bg-orange-500/30 blur-3xl" />
          <Image
            src="/images/hero.png"
            width={1369}
            height={1149}
            alt="Logo ACS di tengah jaringan, server, dan dashboard monitoring di atas telapak tangan"
            preload
            sizes="40vw"
            data-depth
            className="relative w-full [--depth:10] drop-shadow-[0_30px_60px_rgb(253_92_12_/_0.25)]"
          />

          {hero.floatingCards.map((card, i) => {
            const Icon = cardIcons[i];
            return (
              <div
                key={card.title}
                data-depth
                className={`absolute [--depth:24] ${cardPositions[i]} ${i === 2 ? "hidden sm:flex" : "flex"} items-center gap-3 rounded-2xl bg-navy-900/75 p-3 pr-4 shadow-2xl ring-1 shadow-black/40 ring-white/15 backdrop-blur-md`}
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="text-left">
                  <span className="flex items-center gap-2 text-sm font-bold text-white">
                    {card.title}
                    {card.tone === "live" && (
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                      </span>
                    )}
                  </span>
                  <span className="block text-xs text-navy-200">{card.detail}</span>
                </span>
              </div>
            );
          })}
        </div>
      </Container>
      </div>

      <TrustBar />
    </section>
  );
}
