import Image from "next/image";
import { company, navLinks, services, socials } from "@/app/content/site";
import { Container } from "@/app/components/ui/Container";
import { SocialIcon } from "@/app/components/ui/SocialIcon";

export function Footer() {
  const serviceTitles = [...services.it.items, ...services.business.items].map((s) => s.title);

  return (
    <footer className="bg-navy-950 pt-16 pb-8 text-navy-200">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="inline-flex rounded-2xl bg-white px-4 py-3">
              <Image
                src={company.logo.src}
                width={company.logo.width}
                height={company.logo.height}
                alt={company.name}
                className="h-10 w-auto"
              />
            </span>
            <p className="mt-5 font-bold text-white">{company.name}</p>
            <p className="mt-1 text-sm text-orange-400">{company.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">{company.description}</p>
            <ul className="mt-6 flex gap-3" aria-label="Media sosial">
              {socials.map((social) => (
                <li key={social.platform}>
                  {social.url ? (
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${company.shortName} di ${social.label}`}
                      className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-orange-500 hover:text-navy-950 hover:ring-orange-500"
                    >
                      <SocialIcon platform={social.platform} />
                    </a>
                  ) : (
                    // No account yet: same look, but not a link, so clicking does nothing.
                    <span
                      role="img"
                      aria-label={`${company.shortName} di ${social.label} (segera hadir)`}
                      title={`${social.label} segera hadir`}
                      className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15"
                    >
                      <SocialIcon platform={social.platform} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Tautan footer" className="lg:col-span-2">
            <h2 className="text-sm font-bold text-white">Perusahaan</h2>
            <ul className="mt-4 grid gap-2.5 text-sm">
              {[...navLinks, { label: "Kontak", href: "#kontak" }].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-orange-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold text-white">Layanan</h2>
            <ul className="mt-4 grid gap-2.5 text-sm">
              {serviceTitles.map((title) => (
                <li key={title}>
                  <a href="#layanan" className="hover:text-orange-400">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <address className="text-sm not-italic lg:col-span-3">
            <h2 className="text-sm font-bold text-white">Kontak</h2>
            <ul className="mt-4 grid gap-2.5">
              <li>
                <a href={company.phoneHref} className="hover:text-orange-400">{company.phone}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="break-words hover:text-orange-400">{company.email}</a>
              </li>
              <li>
                {company.address.street}
                <br />
                {company.address.locality}, {company.address.region}
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row sm:justify-between">
          <p>© 2026 {company.name}. Hak cipta dilindungi.</p>
          <p>Teknologi Informasi & Jasa · Bogor, Indonesia</p>
        </div>
      </Container>
    </footer>
  );
}
