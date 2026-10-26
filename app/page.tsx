import { company, services, socials } from "@/app/content/site";
import { Navbar } from "@/app/components/sections/Navbar";
import { Hero } from "@/app/components/sections/Hero";
import { About } from "@/app/components/sections/About";
import { VisionMission } from "@/app/components/sections/VisionMission";
import { CoreValues } from "@/app/components/sections/CoreValues";
import { Services } from "@/app/components/sections/Services";
import { ManagedService } from "@/app/components/sections/ManagedService";
import { Industries } from "@/app/components/sections/Industries";
import { WhyUs } from "@/app/components/sections/WhyUs";
import { Clients } from "@/app/components/sections/Clients";
import { CallToAction } from "@/app/components/sections/CallToAction";
import { Footer } from "@/app/components/sections/Footer";
import { ChatLauncher } from "@/app/components/chatbot/ChatLauncher";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  alternateName: company.shortName,
  slogan: company.tagline,
  description: company.description,
  url: company.url,
  logo: `${company.url}${company.logo.src}`,
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.locality,
    addressRegion: company.address.region,
    addressCountry: company.address.country,
  },
  sameAs: socials.map((s) => s.url).filter(Boolean),
  makesOffer: [...services.it.items, ...services.business.items].map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.description },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-orange-500 px-5 py-3 font-bold text-navy-950 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <VisionMission />
        <CoreValues />
        <Services />
        <ManagedService />
        <Industries />
        <WhyUs />
        <Clients />
        <CallToAction />
      </main>
      <Footer />
      <ChatLauncher />
    </>
  );
}
