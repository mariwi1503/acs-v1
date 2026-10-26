import Image from "next/image";
import { partners as logos } from "@/app/content/site";

export function TrustBar() {
  return (
    <section aria-label="Partner teknologi" className="border-b border-mist-200 bg-white py-5">
      <p className="px-4 text-center font-mono text-xs font-semibold tracking-[0.18em] text-steel-500 uppercase">
        Didukung {logos.length} brand teknologi terdepan dunia
      </p>
      <div className="relative mt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-14 pr-14">
              {logos.map((logo) => (
                <li key={logo.name} className="flex h-10 w-28 items-center justify-center">
                  <Image
                    src={logo.src}
                    width={logo.width}
                    height={logo.height}
                    alt={copy === 0 ? logo.name : ""}
                    sizes="112px"
                    className="max-h-10 w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
