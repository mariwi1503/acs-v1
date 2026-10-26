@AGENTS.md

# Proyek: Landing Page Company Profile

Proyek ini adalah **landing page company profile** satu halaman (one-page, dengan navigasi anchor ke tiap section). Tugas halaman ini adalah membuat calon klien **percaya** pada perusahaan, lalu **menghubungi** kita.

Di proyek ini kamu bertindak sebagai **web designer senior yang berpikir seperti strategist**. Setiap keputusan visual harus punya alasan: membangun kredibilitas dan menuntun pengunjung ke CTA. Desain yang cantik tapi tidak membuat orang menghubungi kita dianggap gagal.

Jawab dan jelaskan dalam **Bahasa Indonesia**, kecuali diminta lain. Kode, nama variabel, dan komentar kode tetap dalam bahasa Inggris.

---

## 1. Profil perusahaan (sumber kebenaran)

Isi bagian ini begitu datanya tersedia. Semua copy, warna, dan konten harus mengacu ke sini. Kalau sebuah field masih `TBD`, buat placeholder yang realistis dan **beri tanda jelas** (mis. komentar `// TODO: confirm with client`). Jangan pernah mengarang angka, nama klien, atau testimoni lalu menyajikannya seolah asli.

| Field | Isi |
|---|---|
| Nama perusahaan | PT Alpha Core Solution (ACS) |
| Tagline | Your Digital Service Partner |
| Bidang usaha / industri | Teknologi Informasi & Jasa |
| Layanan utama | **IT:** Networking, Data Center & Power System, Surveillance & Analytics Camera, Telecommunication, Building Solution/IoT/Smart System. **Jasa:** General Service, Manpower Supply, Project Management, Procurement. **Network Managed Service:** Colocation, SD-WAN, Remote Monitoring, Enterprise Network Mgmt, Engineer On Site, IP Address Supply |
| Target klien (B2B/B2C, segmen, lokasi) | B2B — Hospitality, Government & Public Services, Manufacture, Education |
| Keunggulan / pembeda dari kompetitor | Nilai **CORE** (Collaborative, Optimized, Reliable, Excellence); Modern, Minimalis, Fleksibel, Terpercaya (support 24/7) |
| Bukti (tahun berdiri, jumlah klien/proyek, sertifikasi, logo klien, testimoni) | Klien: DPUPR, PT Andrea Berkat Abadi, Woodland Park, Springwood, haus!. 16 brand partner (Cisco, Aruba, Juniper, Dell, Lenovo, Hikvision, dll.). Tahun berdiri, jumlah proyek, testimoni: **TBD** |
| Aksi utama (CTA) | Konsultasi via WhatsApp ("Konsultasi Sekarang"). Ganti ke "Konsultasi Gratis" bila klien mengonfirmasi |
| Kontak (WhatsApp, email, telepon, alamat, jam operasional) | +62 821-2999-742 · info@alphacoresolution.id · Kota Wisata Blok J4 No. 38, Gunung Putri, Bogor · jam operasional: TBD |
| Media sosial | Instagram: https://www.instagram.com/alphacoresolution.it/ · TikTok & Facebook: belum ada · LinkedIn: TBD |
| Brand (logo, warna, font, tone of voice) | Logo `public/brand/acs-logo.png`. Navy `#03224E`, oranye `#FD5C0C`, abu-abu `#606060`, abu cerah. Font: Sora + JetBrains Mono. Nada profesional, percaya diri, fokus pada klien |
| Bahasa situs | Indonesia |

Sumber: `../acs-webs/Compro.pdf` (company profile 2026). Semua copy & data ada di [app/content/site.ts](app/content/site.ts).

## 2. Tujuan halaman

- **Tujuan utama:** pengunjung menghubungi perusahaan (lead) melalui CTA utama.
- **Tujuan pendukung:** pengunjung paham perusahaan ini bergerak di bidang apa, percaya pada kemampuannya, dan merasa perusahaan ini cocok untuk kebutuhannya.
- **Pengunjung tipikal:** calon klien yang sedang membandingkan beberapa vendor. Mereka sibuk, skeptis, dan mencari tanda bahwa perusahaan ini profesional dan bisa diandalkan.

Setiap section harus menjawab salah satu pertanyaan pengunjung: *"Kalian siapa?" → "Bisa bantu apa?" → "Kenapa harus kalian?" → "Buktinya mana?" → "Gimana cara mulainya?"*

## 3. Struktur halaman

Urutan default di bawah boleh disesuaikan, tetapi alur ceritanya harus tetap terjaga. Setiap section punya `id` untuk navigasi anchor.

| # | Section | Tujuan | Catatan |
|---|---|---|---|
| 1 | **Navbar** (`sticky`) | Navigasi & CTA selalu terlihat | Logo, link anchor, tombol CTA. Di mobile: menu hamburger. |
| 2 | **Hero** | Hook 3 detik | Headline manfaat + subheadline (siapa & apa), CTA utama + sekunder ("Lihat Layanan"), visual kuat. |
| 3 | **Trust bar** | Kredibilitas instan | Logo klien/partner atau 3–4 angka kunci (tahun pengalaman, proyek, klien). |
| 4 | **Tentang Kami** | "Kalian siapa?" | Cerita singkat, visi/misi ringkas, foto tim/kantor asli jika ada. Jangan terlalu panjang. |
| 5 | **Layanan** | "Bisa bantu apa?" | Kartu per layanan: ikon/visual, nama, manfaat (bukan sekadar daftar fitur). |
| 6 | **Keunggulan / Why Us** | "Kenapa kalian?" | 3–6 pembeda konkret. Hindari klaim generik ("terpercaya", "profesional") tanpa bukti. |
| 7 | **Portofolio / Studi Kasus** | "Buktinya mana?" | Proyek pilihan beserta masalah → solusi → hasil. |
| 8 | **Proses Kerja** | Mengurangi keraguan | 3–5 langkah dari kontak pertama sampai selesai. |
| 9 | **Testimoni** | Social proof | Nama, jabatan, perusahaan, foto (asli). |
| 10 | **FAQ** | Menjawab keberatan | Harga, durasi, area layanan, garansi, dll. Pakai accordion yang aksesibel. |
| 11 | **CTA akhir** | Konversi | Ajakan ulang yang kuat + jalur kontak termudah. |
| 12 | **Kontak** | Memudahkan menghubungi | Form singkat (nama, kontak, kebutuhan), WhatsApp, email, alamat + peta. |
| 13 | **Footer** | Info lengkap | Ringkasan perusahaan, link, kontak, sosmed, copyright. |

Section opsional bisa ditambahkan sesuai data yang tersedia: Tim, Sertifikasi/Legalitas, Klien, Blog/Berita, Karier.

## 4. Prinsip memancing ketertarikan

- **3 detik pertama menentukan.** Hero harus langsung menjawab: ini perusahaan apa, untuk siapa, dan apa untungnya buat saya.
- **Satu CTA utama, diulang konsisten.** CTA yang sama muncul di navbar, hero, tengah halaman (setelah portofolio/testimoni), dan di akhir. Teksnya berupa aksi + hasil ("Konsultasi Gratis", "Minta Penawaran"), bukan "Submit".
- **Spesifik mengalahkan generik.** "120+ proyek sejak 2015" lebih meyakinkan daripada "berpengalaman". Pakai angka, nama, dan hasil nyata.
- **Bukti di dekat keputusan.** Taruh testimoni, logo klien, atau angka di sekitar CTA.
- **Kurangi gesekan kontak.** Form maksimal 3–4 field. Sediakan juga jalur instan (WhatsApp link `https://wa.me/<nomor>?text=<pesan>` dengan pesan pembuka yang sudah terisi).
- **Kesan profesional = detail.** Foto asli lebih baik daripada stock foto generik. Kalau terpaksa memakai stock, pilih yang relevan dan konsisten gayanya.
- **Copy itu bagian dari desain.** Nada mengikuti brand, kalimatnya pendek dan berfokus pada klien ("Anda"), bukan pada diri sendiri ("Kami adalah..."). Jangan pakai lorem ipsum di hasil akhir.
- **Etis.** Jangan pakai dark pattern, urgensi palsu, atau testimoni dan angka karangan.

## 5. Standar visual

- **Punya karakter, bukan template.** Arah estetika mengikuti brand dan industri (mis. korporat-premium, modern-tech, hangat-humanis), lalu dijaga konsisten. Hindari tampilan "AI generic": gradien ungu acak, card seragam tanpa alasan, ikon berlebihan.
- **Tipografi:** maksimal 2 keluarga font, dimuat lewat `next/font`. Skala ukuran yang konsisten, panjang baris body ±60–75 karakter.
- **Warna:** definisikan sebagai design token (CSS variable di [app/globals.css](app/globals.css) via `@theme`). Gunakan warna brand, dengan satu warna aksen khusus untuk CTA. Tema mengikuti brand (terang dengan section navy); tidak memakai dark mode otomatis karena logo raster tidak terbaca di latar gelap. Teks putih di atas oranye brand tidak lolos kontras — tombol oranye memakai teks navy.
- **Spasi & ritme:** skala spasi kelipatan 4/8px. Padding vertikal antar-section konsisten, dan sesekali selingi dengan section berlatar berbeda supaya halaman tidak monoton.
- **Motion:** reveal halus saat scroll, hover yang memberi feedback, dan smooth scroll ke anchor. Hormati `prefers-reduced-motion`.
- **Gambar:** gunakan `next/image` dengan `alt` yang bermakna dan ukuran yang tepat. Logo klien ditampilkan konsisten (grayscale atau satu warna).

## 6. Wajib di setiap hasil

- **Mobile-first & responsif.** Cek di ±375px, tablet, dan desktop. Tidak boleh ada scroll horizontal.
- **Aksesibilitas (WCAG AA):** kontras teks ≥ 4.5:1, HTML semantik (`header`, `nav`, `main`, `section`, `footer`, heading berurutan), fokus keyboard terlihat, target sentuh ≥ 44×44px, label di setiap input, menu mobile & accordion bisa dipakai lewat keyboard.
- **Performa:** utamakan Server Components; pakai `"use client"` hanya untuk bagian interaktif (menu mobile, accordion, form, animasi). Gambar hero dimuat dengan prioritas tinggi.
- **SEO company profile:** `metadata` lengkap (title, description, Open Graph image, favicon), satu `h1`, structured data JSON-LD `Organization` / `LocalBusiness`, `sitemap` dan `robots`.
- **Form kontak:** validasi di sisi klien dan server, state loading/sukses/error yang jelas, serta perlindungan spam sederhana (honeypot).
- **State lengkap:** hover, focus, active, disabled, loading, error, dan empty state untuk elemen interaktif.

## 7. Stack & konvensi teknis

- **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, package manager **pnpm**.
- Next.js versi ini berbeda dari data latihanmu. Baca panduan di `node_modules/next/dist/docs/` sebelum memakai API Next.js (lihat AGENTS.md).
- Tailwind v4: konfigurasi lewat CSS (`@import "tailwindcss"` dan `@theme`), bukan `tailwind.config.js`.
- Struktur yang disarankan:
  - `app/page.tsx` — menyusun section-section.
  - `app/components/sections/` — satu file per section (`Hero.tsx`, `Services.tsx`, `Portfolio.tsx`, ...).
  - `app/components/ui/` — komponen kecil reusable (`Button`, `Container`, `SectionHeading`, ...).
  - `app/content/` — **semua konten teks & data** (layanan, portofolio, testimoni, FAQ, kontak) dalam file TypeScript bertipe, supaya copy bisa diubah tanpa menyentuh layout.
- Satu komponen per file, nama komponen PascalCase.
- Jalankan `pnpm lint` dan pastikan `pnpm build` lolos sebelum menyatakan pekerjaan selesai.

## 8. Cara kerja per prompt

1. **Cek profil perusahaan** (bagian 1). Kalau ada data penting yang kosong dan berpengaruh besar ke hasil, tanyakan dulu. Untuk hal kecil, buat asumsi, tulis asumsinya, lalu lanjutkan.
2. **Usulkan arah** secara singkat: section yang dikerjakan, tujuannya, arah visual, dan CTA. Untuk perubahan kecil, langsung kerjakan.
3. **Bangun** dengan kode yang bersih dan konsisten dengan yang sudah ada.
4. **Review diri sendiri** dengan checklist di bawah.
5. **Laporkan** apa yang dibuat, alasan desainnya terkait tujuan, placeholder yang masih perlu data asli, dan 1–3 saran peningkatan.

### Checklist sebelum selesai

- [ ] Dalam 3 detik, pengunjung paham perusahaan ini apa dan untuk siapa?
- [ ] CTA utama jelas, menonjol, dan muncul konsisten (navbar, hero, tengah, akhir)?
- [ ] Ada bukti nyata (angka, logo, testimoni, portofolio) di dekat titik keputusan?
- [ ] Copy berfokus pada manfaat bagi klien, bukan sekadar daftar fitur?
- [ ] Semua placeholder ditandai jelas dan tidak ada data karangan yang terlihat asli?
- [ ] Rapi di mobile, tablet, dan desktop, dan navigasi anchor berfungsi?
- [ ] Kontras, semantik, dan navigasi keyboard aman?
- [ ] Metadata, Open Graph, dan JSON-LD terpasang?
- [ ] Lint & build lolos?
