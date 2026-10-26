// Scripted (non-AI) customer-service bot. Visitors can only pick suggested options;
// every answer is built from site.ts so the bot never drifts from the page copy.

import {
  clients,
  company,
  coreValues,
  industries,
  managedService,
  partners,
  services,
  whyUs,
  type Service,
} from "@/app/content/site";

export type ChatOption =
  | { label: string; next: string }
  | { label: string; whatsapp: string }
  | { label: string; href: string; external?: boolean };

export type ChatNode = {
  messages: string[];
  options: ChatOption[];
};

export const chatbot = {
  name: "Asisten ACS",
  status: "Jawaban otomatis · pilih topik",
  launcherLabel: "Buka Asisten ACS",
  teaser: "Ada pertanyaan soal layanan ACS? Saya bantu jawab.",
  restartLabel: "Menu utama",
  humanLabel: "Chat dengan tim",
  startNode: "start",
} as const;

const consult = (topic: string) =>
  `Halo ACS, saya tertarik dengan ${topic}. Bisa dibantu konsultasinya?`;

const bullets = (items: readonly string[]) => items.map((item) => `• ${item}`).join("\n");

const slug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function serviceNodes(prefix: string, parent: string, items: readonly Service[]) {
  return Object.fromEntries(
    items.map((service): [string, ChatNode] => [
      `${prefix}-${slug(service.title)}`,
      {
        messages: [
          `${service.title} — ${service.tagline}.\n${service.description}`,
          ...(service.scope.length ? [`Cakupannya:\n${bullets(service.scope)}`] : []),
        ],
        options: [
          { label: `Konsultasi ${service.title}`, whatsapp: consult(`layanan ${service.title}`) },
          { label: "Lihat di halaman", href: "#layanan" },
          { label: "Layanan lainnya", next: parent },
        ],
      },
    ]),
  );
}

const itNodes = serviceNodes("it", "services-it", services.it.items);
const businessNodes = serviceNodes("biz", "services-business", services.business.items);

const managedNodes = Object.fromEntries(
  managedService.items.map((item): [string, ChatNode] => [
    `managed-${slug(item.title)}`,
    {
      messages: [`${item.title}\n${item.description}`],
      options: [
        { label: `Konsultasi ${item.title}`, whatsapp: consult(`layanan ${item.title}`) },
        { label: "Lihat di halaman", href: "#managed-service" },
        { label: "Managed service lainnya", next: "services-managed" },
      ],
    },
  ]),
);

const industryNodes = Object.fromEntries(
  industries.items.map((industry): [string, ChatNode] => [
    `industry-${slug(industry.name)}`,
    {
      messages: [
        `${industry.name}\n${industry.description}`,
        "Ceritakan kondisi di lokasi Anda, tim kami akan memetakan solusi yang paling pas.",
      ],
      options: [
        {
          label: "Konsultasi untuk sektor ini",
          whatsapp: consult(`solusi IT untuk sektor ${industry.name}`),
        },
        { label: "Lihat semua layanan", next: "services" },
        { label: "Industri lainnya", next: "industries" },
      ],
    },
  ]),
);

const addressLine = `${company.address.street}, ${company.address.locality}, ${company.address.region}`;

export const chatNodes: Record<string, ChatNode> = {
  start: {
    messages: [
      `Halo! Saya ${chatbot.name}, asisten otomatis ${company.name}.`,
      "Pilih topik di bawah ini, saya bantu jawab.",
    ],
    options: [
      { label: `Apa itu ${company.shortName}?`, next: "about" },
      { label: "Layanan apa saja?", next: "services" },
      { label: "Industri yang dilayani", next: "industries" },
      { label: "Berapa biayanya?", next: "pricing" },
      { label: "Kontak & alamat", next: "contact" },
    ],
  },

  about: {
    messages: [
      company.description,
      `Kami bekerja dengan nilai CORE: ${coreValues.items.map((v) => v.name).join(", ")}.`,
    ],
    options: [
      { label: "Kenapa memilih ACS?", next: "why" },
      { label: "Siapa klien ACS?", next: "clients" },
      { label: "Layanan apa saja?", next: "services" },
    ],
  },

  why: {
    messages: [
      `Yang membuat klien memilih ${company.shortName}:\n${bullets(
        whyUs.items.map((item) => `${item.name}: ${item.description}`),
      )}`,
    ],
    options: [
      { label: "Siapa klien ACS?", next: "clients" },
      { label: "Lihat layanan", next: "services" },
      { label: "Konsultasi sekarang", whatsapp: consult("layanan IT ACS") },
    ],
  },

  clients: {
    messages: [
      `Beberapa klien yang mempercayakan infrastrukturnya kepada kami:\n${bullets(
        clients.map((c) => c.name),
      )}`,
      `Kami juga didukung ${partners.length} brand teknologi, di antaranya ${partners
        .slice(0, 6)
        .map((p) => p.name)
        .join(", ")}.`,
    ],
    options: [
      { label: "Lihat logo klien & partner", href: "#klien" },
      { label: "Lihat layanan", next: "services" },
      { label: "Konsultasi sekarang", whatsapp: consult("layanan IT ACS") },
    ],
  },

  services: {
    messages: [
      "Layanan kami terbagi menjadi tiga kelompok, semuanya didukung support 24/7.",
      "Mana yang ingin Anda ketahui?",
    ],
    options: [
      { label: services.it.label, next: "services-it" },
      { label: services.business.label, next: "services-business" },
      { label: managedService.eyebrow, next: "services-managed" },
    ],
  },

  "services-it": {
    messages: ["Layanan IT kami mencakup infrastruktur dari jaringan hingga smart building. Pilih salah satu:"],
    options: services.it.items.map((s) => ({ label: s.title, next: `it-${slug(s.title)}` })),
  },

  "services-business": {
    messages: ["Layanan Jasa kami membantu operasional di luar urusan teknis. Pilih salah satu:"],
    options: services.business.items.map((s) => ({ label: s.title, next: `biz-${slug(s.title)}` })),
  },

  "services-managed": {
    messages: [`${managedService.title}\n${managedService.description}`, "Pilih layanan untuk detailnya:"],
    options: managedService.items.map((item) => ({
      label: item.title,
      next: `managed-${slug(item.title)}`,
    })),
  },

  industries: {
    messages: [
      `Kami melayani ${industries.items.length} sektor utama. Sektor Anda yang mana?`,
    ],
    options: industries.items.map((industry) => ({
      label: industry.name,
      next: `industry-${slug(industry.name)}`,
    })),
  },

  // TODO: confirm with client — replace with real pricing guidance (starting price, free survey, etc.).
  pricing: {
    messages: [
      "Biaya menyesuaikan kebutuhan, skala, dan lokasi proyek Anda, jadi tidak ada satu harga yang pas untuk semua.",
      "Ceritakan kebutuhan Anda lewat WhatsApp, tim kami akan menyiapkan penawaran yang sesuai.",
    ],
    options: [
      { label: "Minta penawaran", whatsapp: "Halo ACS, saya ingin meminta penawaran untuk kebutuhan IT perusahaan saya." },
      { label: "Lihat layanan dulu", next: "services" },
    ],
  },

  contact: {
    messages: [
      `Anda bisa menghubungi kami lewat:\n• WhatsApp: ${company.phone}\n• Email: ${company.email}`,
      `Kantor kami:\n${addressLine}`,
    ],
    options: [
      { label: "Chat via WhatsApp", whatsapp: consult("layanan ACS") },
      { label: "Kirim email", href: `mailto:${company.email}` },
      { label: "Buka Google Maps", href: company.mapsUrl, external: true },
    ],
  },

  ...itNodes,
  ...businessNodes,
  ...managedNodes,
  ...industryNodes,
};
