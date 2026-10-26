import { Factory, GraduationCap, Hotel, Landmark } from "lucide-react";
import { industries } from "@/app/content/site";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { CardGlow, darkCardClass } from "@/app/components/ui/DarkCard";

const icons = {
  hotel: Hotel,
  government: Landmark,
  factory: Factory,
  education: GraduationCap,
} as const;

export function Industries() {
  return (
    <section id="industri" aria-labelledby="industri-title" className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="industri-title"
          eyebrow={industries.eyebrow}
          title={industries.title}
          description={industries.description}
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.name} data-reveal data-spotlight className={`${darkCardClass} p-7`}>
                <CardGlow />
                <span className="relative flex size-14 items-center justify-center rounded-2xl bg-orange-500 text-navy-950">
                  <Icon className="size-7" aria-hidden />
                </span>
                <h3 className="relative mt-6 text-xl font-bold">{item.name}</h3>
                <p className="relative mt-2 leading-relaxed text-navy-100">{item.description}</p>
                <span
                  aria-hidden
                  className="absolute -right-6 -bottom-6 size-24 bg-orange-500 opacity-0 transition-opacity duration-300 [clip-path:polygon(100%_0,100%_100%,0_100%)] group-hover:opacity-100"
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
