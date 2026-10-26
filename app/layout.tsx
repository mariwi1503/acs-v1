import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import { company } from "@/app/content/site";
import { PointerEffects } from "@/app/components/ui/PointerEffects";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const title = `${company.name} — Infrastruktur IT & Layanan Jasa Profesional`;
const description =
  "Partner IT untuk jaringan, SD-WAN, data center, CCTV berbasis AI, telekomunikasi, smart building, dan network managed service 24/7. Plus layanan general service, manpower supply, project management, dan procurement.";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: title,
    template: `%s | ${company.shortName}`,
  },
  description,
  keywords: [
    "IT infrastructure",
    "network managed service",
    "SD-WAN",
    "data center",
    "CCTV AI",
    "smart building",
    "IoT",
    "procurement IT",
    "manpower supply",
    "Bogor",
    "Indonesia",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: company.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#010d22",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${sora.variable} ${jetbrains.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <PointerEffects />
      </body>
    </html>
  );
}
