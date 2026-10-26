"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { company, hero, navCta, navLinks } from "@/app/content/site";
import { whatsappUrl } from "@/app/lib/whatsapp";
import { Container } from "@/app/components/ui/Container";
import { WhatsAppIcon } from "@/app/components/ui/WhatsAppIcon";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      // Solid on every screen: transparency and backdrop blur render unreliably on mobile browsers.
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950 transition-shadow duration-300 ${
        scrolled || open ? "shadow-[0_8px_30px_-12px_rgb(0_0_0_/_0.6)]" : ""
      }`}
    >
      <Container className="flex h-14 items-center justify-between gap-6 lg:h-16">
        <a href="#beranda" className="shrink-0" aria-label={`${company.name} — kembali ke atas`}>
          <Image
            src={company.logoLight.src}
            width={company.logoLight.width}
            height={company.logoLight.height}
            alt={company.shortName}
            preload
            className="h-7 w-auto lg:h-9"
          />
        </a>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-semibold text-navy-100 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-orange-500 px-5 text-sm font-bold text-navy-950 transition-colors hover:bg-orange-400 sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            {navCta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="inline-flex size-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      <nav
        id="mobile-menu"
        aria-label="Navigasi seluler"
        hidden={!open}
        className="border-t border-white/10 bg-navy-950 lg:hidden"
      >
        <Container className="py-4">
          <ul className="grid gap-1">
            {[...navLinks, { label: "Kontak", href: "#kontak" }].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-xl px-4 text-base font-semibold text-navy-100 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-500 font-bold text-navy-950"
          >
            <WhatsAppIcon className="size-5" />
            {hero.primaryCta}
          </a>
        </Container>
      </nav>
    </header>
  );
}
