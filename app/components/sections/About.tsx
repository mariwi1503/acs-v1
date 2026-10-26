import Image from "next/image";
import { CircleCheck, MapPin } from "lucide-react";
import { about, company } from "@/app/content/site";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

export function About() {
  return (
    <section id="tentang" aria-labelledby="tentang-title" className="py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading id="tentang-title" eyebrow={about.eyebrow} title={about.title} />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-steel-500 sm:text-lg" data-reveal>
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-mist-200 pt-8" data-reveal>
            {about.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 font-bold text-navy-900">
                <CircleCheck className="size-5 shrink-0 text-orange-500" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative" data-reveal data-parallax>
          <div data-depth className="relative overflow-hidden rounded-3xl [--depth:8]">
            <Image
              src={about.image.src}
              width={about.image.width}
              height={about.image.height}
              alt="Tim teknologi bekerja di ruang kerja modern"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full object-cover object-[35%_center] sm:aspect-[4/3] lg:aspect-[5/4]"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-900/15 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 text-white">
              <p className="font-mono text-xs tracking-[0.18em] text-orange-400 uppercase">{company.name}</p>
              <p className="mt-2 text-2xl font-extrabold sm:text-3xl">{company.tagline}</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-navy-100">
                <MapPin className="size-4" aria-hidden />
                {company.address.locality}, {company.address.region}
              </p>
            </div>
          </div>
          <div aria-hidden data-depth className="absolute -top-4 -right-4 -z-10 [--depth:-16] size-32 rounded-3xl bg-orange-500 [clip-path:polygon(0_0,100%_0,100%_100%)]" />
        </div>
      </Container>
    </section>
  );
}
