// Single source of truth for all copy and company data.
// Source: Company Profile PT Alpha Core Solution 2026 (Compro.pdf).

import type { SocialPlatform } from "@/app/components/ui/SocialIcon";

export type LogoAsset = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export const company = {
  name: "PT Alpha Core Solution",
  shortName: "ACS",
  tagline: "Your Digital Service Partner",
  description:
    "PT Alpha Core Solution adalah perusahaan Teknologi Informasi dan Jasa yang merancang, membangun, dan mengelola infrastruktur IT — jaringan, data center, CCTV, telekomunikasi, hingga smart building — untuk bisnis di Indonesia.",
  url: "https://www.alphacoresolution.com",
  phone: "+62 821-2999-742",
  phoneHref: "tel:+628212999742",
  whatsappNumber: "628212999742",
  email: "info@alphacoresolution.id",
  address: {
    street: "Kota Wisata Blok J4 No. 38",
    locality: "Gunung Putri",
    region: "Kabupaten Bogor, Jawa Barat",
    country: "ID",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Kota+Wisata+Blok+J4+No+38+Gunung+Putri+Bogor",
  logo: { src: "/brand/acs-logo.png", width: 333, height: 113 },
  // Reversed version for dark backgrounds: navy → white, gray → light gray.
  logoLight: { src: "/brand/acs-logo-light.png", width: 333, height: 113 },
} as const;

// Empty URLs are hidden in the footer and skipped in the JSON-LD `sameAs`.
// TikTok and Facebook accounts don't exist yet — add them here once they do.
export const socials: { platform: SocialPlatform; label: string; url: string }[] = [
  { platform: "instagram", label: "Instagram", url: "https://www.instagram.com/alphacoresolution.it/" },
  // TODO: confirm with client — LinkedIn profile URL.
  { platform: "linkedin", label: "LinkedIn", url: "" },
];

export const whatsappDefaultMessage =
  "Halo ACS, saya ingin berkonsultasi mengenai kebutuhan IT perusahaan saya.";

export const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Nilai CORE", href: "#core" },
  { label: "Layanan", href: "#layanan" },
  { label: "Managed Service", href: "#managed-service" },
  { label: "Industri", href: "#industri" },
  { label: "Klien", href: "#klien" },
] as const;

// Short label for the compact CTA in the top-right navbar corner.
export const navCta = "Hubungi Kami";

export const hero = {
  eyebrow: "PT. ALPHA CORE SOLUTION",
  titleLead: "Infrastruktur IT Enterprise,",
  titleMid: "Dirancang & Dikelola oleh",
  titleHighlight: "Tim Ahli.",
  description:
    "Dari jaringan, SD-WAN, data center, hingga kamera berbasis AI — kami merancang, membangun, dan memantau infrastruktur IT Anda 24/7, didukung engineer on-site dan partner teknologi kelas dunia.",
  // TODO: confirm with client — switch to "Konsultasi Gratis" if consultations are free.
  primaryCta: "Konsultasi Sekarang",
  secondaryCta: "Jelajahi Layanan",
  floatingCards: [
    { title: "Remote Monitoring", detail: "Jaringan dipantau 24/7", tone: "live" },
    { title: "Managed SD-WAN", detail: "Wired · Wireless · Security", tone: "default" },
    { title: "Engineer On Site", detail: "Siap ke lokasi Anda", tone: "default" },
  ],
} as const;

export const about = {
  eyebrow: "Tentang Kami",
  title: "Partner digital yang tumbuh bersama bisnis Anda.",
  paragraphs: [
    "PT Alpha Core Solution adalah perusahaan yang bergerak di bidang Teknologi Informasi dan Jasa. Kami hadir untuk membantu bisnis berkembang melalui solusi digital yang efisien, aman, dan sesuai kebutuhan.",
    "Dengan tim profesional dan semangat inovasi, kami berkomitmen menjadi partner terpercaya dalam transformasi digital dan layanan pendukung bisnis Anda.",
  ],
  highlights: ["IT & Jasa", "Tim Profesional", "Support 24/7"],
  // Photo: Unsplash (photo-1504384308090-c894fdcc538d), free to use under the Unsplash License.
  image: { src: "/images/about-team.jpg", width: 1600, height: 1067 },
} as const;

export const visionMission = {
  eyebrow: "Visi & Misi",
  title: "Arah yang kami tuju, komitmen yang kami jalankan.",
  vision:
    "Menjadi perusahaan IT dan jasa terdepan di Indonesia yang memberikan solusi inovatif untuk mendorong pertumbuhan bisnis klien.",
  missions: [
    "Memberikan solusi IT yang cepat, tepat, dan berkelanjutan.",
    "Menyediakan layanan jasa profesional dengan standar kualitas tinggi.",
    "Membangun kemitraan jangka panjang berbasis kepercayaan.",
    "Mengembangkan SDM yang kompeten dan berintegritas.",
  ],
} as const;

export const coreValues = {
  eyebrow: "Nilai Perusahaan",
  title: "Empat nilai di inti setiap pekerjaan kami.",
  description:
    "CORE bukan sekadar singkatan. Inilah standar yang kami pegang di setiap kabel yang dipasang, setiap perangkat yang dikonfigurasi, dan setiap tiket yang ditangani.",
  items: [
    {
      letter: "C",
      name: "Collaborative",
      summary: "Bekerja sama untuk hasil terbaik.",
      detail:
        "Kami bekerja sebagai perpanjangan tim Anda — terbuka dan komunikatif dari perencanaan hingga serah terima.",
    },
    {
      letter: "O",
      name: "Optimized",
      summary: "Solusi efisien dan efektif.",
      detail:
        "Setiap rancangan disesuaikan dengan kebutuhan dan anggaran, tanpa perangkat atau biaya yang tidak perlu.",
    },
    {
      letter: "R",
      name: "Reliable",
      summary: "Dapat diandalkan.",
      detail:
        "Infrastruktur yang stabil, dipantau terus-menerus, dan didukung tim yang siap saat Anda membutuhkan.",
    },
    {
      letter: "E",
      name: "Excellence",
      summary: "Mengejar kualitas terbaik.",
      detail:
        "Standar pengerjaan yang rapi dan terdokumentasi, dengan teknologi dari brand terdepan di industrinya.",
    },
  ],
} as const;

export type Service = {
  title: string;
  tagline: string;
  description: string;
  scope: readonly string[];
  icon: string;
};

export const services = {
  eyebrow: "Layanan Kami",
  title: "Satu partner untuk seluruh kebutuhan IT & operasional bisnis Anda.",
  description:
    "Mulai dari infrastruktur jaringan hingga penyediaan SDM, semua ditangani satu tim yang memahami bisnis Anda secara menyeluruh.",
  it: {
    label: "Layanan IT",
    items: [
      {
        title: "Networking",
        tagline: "Fondasi konektivitas bisnis",
        description:
          "Jaringan kabel dan nirkabel yang cepat, stabil, dan aman — dirancang, dipasang, dan diamankan oleh engineer berpengalaman.",
        scope: [
          "Wired Network",
          "Wireless",
          "SD-WAN",
          "Network Security",
          "Cabling & Peripherals",
        ],
        icon: "/icons/services/networking.svg",
      },
      {
        title: "Data Center & Power System",
        tagline: "Server tetap menyala",
        description:
          "Infrastruktur data center, perangkat pendukung, dan sistem kelistrikan yang menjaga operasional tanpa henti.",
        scope: ["Datacenter Infrastructure", "Peripherals", "Power System"],
        icon: "/icons/services/data-center-power.svg",
      },
      {
        title: "Surveillance & Analytics Camera",
        tagline: "Keamanan yang cerdas",
        description:
          "Kamera pengawas berbasis AI dan IoT untuk melindungi aset sekaligus memberi insight operasional.",
        scope: ["Surveillance Camera", "AI Camera", "IoT Camera"],
        icon: "/icons/services/surveillance-camera.svg",
      },
      {
        title: "Telecommunication",
        tagline: "Terhubung antar-lokasi",
        description:
          "Konektivitas jarak jauh yang andal untuk menghubungkan kantor, gudang, dan cabang Anda.",
        scope: ["Radio Link", "Metro"],
        icon: "/icons/services/telecommunication.svg",
      },
      {
        title: "Building Solution, IoT & Smart System",
        tagline: "Gedung yang lebih pintar",
        description:
          "Otomasi dan sistem pintar untuk gedung dan hunian yang lebih efisien, aman, dan nyaman.",
        scope: ["Smart Building", "Smart Home", "IoT"],
        icon: "/icons/services/smart-building-iot.svg",
      },
    ] satisfies Service[],
  },
  business: {
    label: "Layanan Jasa",
    items: [
      {
        title: "General Service",
        tagline: "Facility Management & Operational",
        description:
          "Pengelolaan fasilitas dan operasional harian oleh tim terlatih, agar Anda fokus pada bisnis inti.",
        scope: [],
        icon: "/icons/services/general-service.svg",
      },
      {
        title: "Manpower Supply",
        tagline: "Penyediaan SDM Profesional",
        description:
          "Tenaga kerja profesional dan kompeten yang siap ditempatkan sesuai kebutuhan proyek Anda.",
        scope: [],
        icon: "/icons/services/manpower-supply.svg",
      },
      {
        title: "Project Management",
        tagline: "Pendampingan Proyek IT & Non-IT",
        description:
          "Pendampingan proyek dari perencanaan hingga serah terima — tepat waktu, tepat biaya, tepat mutu.",
        scope: [],
        icon: "/icons/services/project-management.svg",
      },
      {
        title: "Procurement",
        tagline: "Pengadaan Barang IT & Non-IT",
        description:
          "Pengadaan perangkat dari brand terpercaya dengan proses yang lebih mudah, transparan, dan terkontrol.",
        scope: [],
        icon: "/icons/services/procurement.svg",
      },
    ] satisfies Service[],
  },
  midCta: {
    title: "Belum yakin layanan mana yang Anda butuhkan?",
    description:
      "Ceritakan kondisi dan target bisnis Anda. Tim kami akan membantu memetakan solusi yang paling tepat.",
    button: "Diskusikan Kebutuhan Anda",
  },
} as const;

export const managedService = {
  eyebrow: "Network Managed Service",
  title: "Kami kelola jaringan Anda. Anda fokus menumbuhkan bisnis.",
  description:
    "Layanan terkelola end-to-end: dari kolokasi server hingga engineer di lokasi, dengan pemantauan onsite maupun jarak jauh.",
  highlights: [
    "Pemantauan onsite & offsite",
    "Dukungan helpdesk & layanan teknik",
    "Kolokasi di Indonesia & ASEAN",
  ],
  items: [
    {
      title: "Managed Colocation",
      description:
        "Kolokasi di pusat data Indonesia dan ASEAN, termasuk penyiapan, instalasi, dan pemeliharaan.",
      icon: "server",
    },
    {
      title: "Managed SD-WAN",
      description:
        "Perangkat SD-WAN dan konektivitas last-mile dengan pemantauan dan pengelolaan harian.",
      icon: "network",
    },
    {
      title: "Remote Network Monitoring",
      description: "Pemantauan access point, switch, dan router dari jarak jauh.",
      icon: "monitor",
    },
    {
      title: "Enterprise Network Management",
      description:
        "Pemantauan onsite dan offsite, dukungan helpdesk, serta layanan teknik.",
      icon: "settings",
    },
    {
      title: "Engineer On Site",
      description: "Dukungan teknisi langsung di lokasi Anda sesuai kebutuhan.",
      icon: "engineer",
    },
    {
      // TODO: confirm with client — the PDF repeats the Enterprise Network Management copy here.
      title: "IP Address Supply",
      description:
        "Penyediaan alokasi alamat IP untuk kebutuhan jaringan dan layanan bisnis Anda.",
      icon: "globe",
    },
  ],
} as const;

export const industries = {
  eyebrow: "Industry to Cater",
  title: "Solusi yang disesuaikan untuk setiap sektor.",
  description:
    "Kami memahami tantangan setiap industri — dari tekanan pasar hingga biaya operasional tinggi — dan menjawabnya dengan solusi yang dirancang sesuai tujuan Anda, didukung engineer berpengalaman.",
  items: [
    {
      name: "Hospitality",
      description:
        "Wi-Fi tamu yang mulus, CCTV, dan smart room untuk pengalaman menginap terbaik.",
      icon: "hotel",
    },
    {
      name: "Government & Public Services",
      description:
        "Jaringan dan sistem keamanan yang andal untuk pelayanan publik tanpa gangguan.",
      icon: "government",
    },
    {
      name: "Manufacture",
      description:
        "Konektivitas pabrik, kamera analitik, dan sistem daya untuk produksi tanpa henti.",
      icon: "factory",
    },
    {
      name: "Education",
      description:
        "Jaringan sekolah dan kampus yang stabil untuk pembelajaran digital yang lancar.",
      icon: "education",
    },
  ],
} as const;

export const whyUs = {
  eyebrow: "Mengapa Memilih Kami?",
  title: "Alasan bisnis mempercayakan infrastrukturnya kepada ACS.",
  items: [
    {
      name: "Modern",
      description: "Menggunakan teknologi terbaru dari brand terdepan di industrinya.",
      icon: "modern",
    },
    {
      name: "Minimalis",
      description: "Proses kerja sederhana dan jelas, hasil maksimal.",
      icon: "simple",
    },
    {
      name: "Fleksibel",
      description: "Layanan bisa disesuaikan dengan kebutuhan dan skala bisnis Anda.",
      icon: "flexible",
    },
    {
      name: "Terpercaya",
      description: "Tim berpengalaman dengan dukungan teknis 24/7.",
      icon: "trusted",
    },
  ],
} as const;

export const clients: LogoAsset[] = [
  { name: "DPUPR", src: "/clients/dpupr.png", width: 396, height: 526 },
  { name: "PT Andrea Berkat Abadi", src: "/clients/andrea-berkat-abadi.png", width: 199, height: 160 },
  { name: "Woodland Park Residence", src: "/clients/woodland-park.png", width: 554, height: 180 },
  { name: "Springwood Residence", src: "/clients/springwood.png", width: 304, height: 297 },
  { name: "haus!", src: "/clients/haus.png", width: 157, height: 252 },
];

export const partners: LogoAsset[] = [
  { name: "Cisco", src: "/partners/cisco.png", width: 202, height: 111 },
  { name: "Aruba", src: "/partners/aruba.png", width: 384, height: 188 },
  { name: "Juniper Networks", src: "/partners/juniper.png", width: 470, height: 136 },
  { name: "Ruijie Networks", src: "/partners/ruijie.png", width: 216, height: 70 },
  { name: "MikroTik", src: "/partners/mikrotik.png", width: 216, height: 59 },
  { name: "TP-Link", src: "/partners/tp-link.png", width: 288, height: 110 },
  { name: "Raisecom", src: "/partners/raisecom.png", width: 231, height: 44 },
  { name: "6COM", src: "/partners/6com.png", width: 208, height: 69 },
  { name: "Dell", src: "/partners/dell.png", width: 320, height: 102 },
  { name: "Lenovo", src: "/partners/lenovo.png", width: 295, height: 105 },
  { name: "Supermicro", src: "/partners/supermicro.png", width: 518, height: 267 },
  { name: "Hikvision", src: "/partners/hikvision.png", width: 309, height: 47 },
  { name: "Dahua Technology", src: "/partners/dahua.png", width: 409, height: 128 },
  { name: "Uniview", src: "/partners/unv.png", width: 252, height: 134 },
  { name: "ZKTeco", src: "/partners/zkteco.png", width: 234, height: 84 },
  { name: "TOA", src: "/partners/toa.png", width: 354, height: 186 },
];

export const clientsSection = {
  eyebrow: "Klien & Partner",
  title: "Dipercaya klien, didukung brand teknologi kelas dunia.",
  clientsLabel: "Klien kami",
  partnersLabel: "Partner teknologi kami",
} as const;

export const cta = {
  eyebrow: "Let's Build Future Together",
  title: "Wujudkan infrastruktur IT yang siap untuk masa depan bisnis Anda.",
  description:
    "Transformasi digital bukan lagi pilihan, melainkan kunci keunggulan kompetitif. Bersama Alpha Core Solution, wujudkan efisiensi, inovasi, dan skalabilitas bisnis Anda melalui solusi teknologi yang tepat sasaran.",
  image: { src: "/images/cta-partnership.jpg", width: 1600, height: 1067 },
  logo: {
    src: "/images/acs-bottom.png",
    width: 1536,
    height: 1024,
    alt: "Logo ACS tiga dimensi dengan cahaya biru dan oranye",
  },
} as const;
