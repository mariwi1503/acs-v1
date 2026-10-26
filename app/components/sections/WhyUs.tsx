import { Cpu, ShieldCheck, SlidersHorizontal, Sparkles } from "lucide-react";
import { whyUs } from "@/app/content/site";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { CardGlow, darkCardClass } from "@/app/components/ui/DarkCard";

const icons = {
  modern: Cpu,
  simple: Sparkles,
  flexible: SlidersHorizontal,
  trusted: ShieldCheck,
} as const;

export function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="bg-white py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading id="why-title" eyebrow={whyUs.eyebrow} title={whyUs.title} />
        </div>
        <ol className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {whyUs.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.name} data-reveal data-spotlight className={`${darkCardClass} p-8`}>
                <CardGlow />
                <div className="relative flex items-center gap-4">
                  <span aria-hidden className="font-mono text-4xl font-extrabold text-orange-500">{i + 1}.</span>
                  <Icon className="size-6 text-orange-400" aria-hidden />
                </div>
                <h3 className="relative mt-4 text-2xl font-bold">{item.name}</h3>
                <p className="relative mt-2 leading-relaxed text-navy-100">{item.description}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
