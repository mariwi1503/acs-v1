import { Eye, Target } from "lucide-react";
import { visionMission } from "@/app/content/site";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Spotlight } from "@/app/components/ui/Spotlight";

export function VisionMission() {
  return (
    <section id="visi-misi" aria-labelledby="visi-misi-title" className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading id="visi-misi-title" eyebrow={visionMission.eyebrow} title={visionMission.title} />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <article
            data-reveal
            data-spotlight
            className="relative isolate flex flex-col overflow-hidden rounded-3xl bg-navy-900 p-8 text-white lg:col-span-5 lg:p-10"
          >
            <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
            <Spotlight kind="grid" />
            <div aria-hidden className="absolute -right-16 -bottom-16 -z-10 size-64 rounded-full bg-orange-500/20 blur-3xl" />
            <div aria-hidden className="absolute top-0 right-0 size-24 bg-orange-500 [clip-path:polygon(0_0,100%_0,100%_100%)]" />

            <h3 className="flex items-center gap-3 text-xl font-bold">
              <span className="flex size-11 items-center justify-center rounded-xl bg-orange-500 text-navy-950">
                <Eye className="size-5" aria-hidden />
              </span>
              Visi
            </h3>
            <p className="mt-8 text-2xl leading-snug font-bold text-balance lg:mt-auto lg:pt-12 lg:text-3xl">
              “{visionMission.vision}”
            </p>
          </article>

          <div className="lg:col-span-7">
            <h3 className="flex items-center gap-3 text-xl font-bold text-navy-900" data-reveal>
              <span className="flex size-11 items-center justify-center rounded-xl bg-orange-50 text-orange-700">
                <Target className="size-5" aria-hidden />
              </span>
              Misi
            </h3>
            <ol className="mt-5 grid gap-4 sm:grid-cols-2">
              {visionMission.missions.map((mission, i) => (
                <li
                  key={mission}
                  data-reveal
                  data-spotlight
                  className="group relative isolate overflow-hidden rounded-3xl bg-mist-50 p-6 ring-1 ring-mist-200 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-navy-900/10 hover:ring-orange-500/40"
                >
                  <Spotlight kind="card" />
                  <span aria-hidden className="font-mono text-3xl font-bold text-orange-500">
                    0{i + 1}
                  </span>
                  <p className="mt-3 leading-relaxed font-semibold text-navy-900">{mission}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
