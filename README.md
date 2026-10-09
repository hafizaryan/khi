# Kos Hafiz Ikpos — Modern Vue.js Landing Page (Cove.id Style)

Landing page resmi dan platform informasi sewa **Kos dan Kontrakan Hafiz Ikpos** di Sibuhuan, Padang Lawas, Sumatera Utara. Dibangun menggunakan **Vue.js 3** dengan bundler **Vite**, ditata dengan **Tailwind CSS** mengadopsi estetika modern & minimalis ala **Cove.id**, serta dioptimasi untuk deployment instan di **Netlify**.

---

## ✨ Fitur Utama & Desain

- **Arsitektur Vue 3 (Composition API)**: Komponen modular, reaktif, dan mudah dirawat.
- **Revamp Desain ala Cove.id**:
  - Tipografi modern (*Plus Jakarta Sans* & *Montserrat*).
  - Skema warna elegan (*Deep Indigo, Cove Accent Coral, Warm Surfaces*).
  - *Quick Search & Filter Bar* untuk menyortir tipe kamar secara langsung.
  - Tiers & kartu katalog kamar (*Kamar Standar Cozy*, *Kamar Deluxe KM Dalam*, *Kontrakan Paviliun 1BR*) dengan foto slider, spesifikasi lengkap, dan tag harga bulanan.
  - Grid fasilitas berikon bersih (Keamanan, Air Bersih, Listrik, Parkir Mobil/Motor, KM Dalam, WiFi Fiber, AC).
  - *Interactive Gallery Lightbox* dengan filter kategori (Kamar, Kamar Mandi, Bangunan, Parkir).
  - Panduan lokasi & perkiraan jarak ke landmark kota (MAN 1 Sibuhuan, Kantor Pengadilan Lama, Bank, RSUD).
  - Accordion FAQ interaktif & ulasan sosial (testimoni penghuni terverifikasi).
  - *Sticky WhatsApp Action Bar* khusus mobile untuk konfirmasi kamar instan.
- **SEO & PWA Ready**: Meta tags Open Graph lengkap, Twitter Cards, Schema.org `LodgingBusiness` & `FAQPage` JSON-LD, serta `manifest.json`.
- **Netlify Ready**: Konfigurasi otomatis `netlify.toml` dengan target build `dist/` dan routing rewrite SPA.

---

## 📁 Struktur Direktori

```text
├── public/                 # Static assets (gambar, favicon, manifest, robots.txt, sitemap.xml)
├── src/
│   ├── assets/             # Global stylesheets
│   │   └── main.css        # Tailwind CSS base & custom utilities
│   ├── components/         # Komponen Modular Vue.js
│   │   ├── Navbar.vue      # Top announcement & sticky navigation
│   │   ├── Hero.vue        # Hero banner & quick search filter bar
│   │   ├── RoomCatalog.vue # Katalog kamar & tier badges ala Cove
│   │   ├── Facilities.vue  # Grid fasilitas dengan icon SVG
│   │   ├── About.vue       # Kisah & filosofi hunian
│   │   ├── Gallery.vue     # Galeri foto dengan modal lightbox
│   │   ├── Location.vue    # Panduan lingkungan & embed Google Maps
│   │   ├── Reviews.vue     # Testimoni penghuni terverifikasi
│   │   ├── Faq.vue         # Accordion pertanyaan umum
│   │   ├── ContactCta.vue  # Banner booking call-to-action
│   │   ├── Footer.vue      # Footer lengkap dengan tautan & hak cipta
│   │   └── FloatingWa.vue  # Sticky action bar mobile & floating WA button
│   ├── data/               # Data terstruktur (kamar, fasilitas, FAQ, ulasan)
│   ├── App.vue             # Komponen root aplikasi
│   └── main.js             # Entry point Vue 3
├── index.html              # HTML entry point Vite
├── vite.config.js          # Konfigurasi Vite
├── tailwind.config.js      # Konfigurasi Tailwind & palette warna
├── postcss.config.js       # Konfigurasi PostCSS
├── netlify.toml            # Konfigurasi deployment Netlify
├── .gitignore              # Git ignore (node_modules, dist, env, dll.)
└── package.json            # NPM scripts & dependencies
```

---

## 🚀 Menjalankan Proyek Lokal

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Jalankan Server Development
```bash
npm run dev
```
Akses di browser: `http://localhost:3000`

### 3. Build untuk Produksi
```bash
npm run build
```
Hasil build siap saji akan dibuat di folder `dist/`.

### 4. Preview Hasil Build
```bash
npm run preview
```

---

## ☁️ Deployment ke Netlify

Proyek ini telah dikonfigurasi dengan file `netlify.toml`:
1. Hubungkan repository GitHub ini ke akun [Netlify](https://www.netlify.com/).
2. Netlify secara otomatis mendeteksi pengaturan berikut:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **SPA Redirect**: `/*` dialihkan ke `/index.html` dengan status 200.
3. Klik **Deploy Site**.
