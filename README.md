# Kos Hafiz Ikpos (khi)

Website katalog dan promosi "Kos dan Kontrakan Hafiz Ikpos", kos dan kontrakan di Sibuhuan, Padang Lawas. Website statis satu halaman ini menampilkan informasi kamar, fasilitas, harga, galeri foto, dan kontak pemesanan melalui WhatsApp. Situs juga disiapkan sebagai PWA (Progressive Web App) dan dioptimalkan untuk mesin pencari.

## Fitur

- Katalog kamar kos dan kontrakan beserta fasilitasnya (antara lain AC, WiFi, kamar mandi dalam, dan parkir) dan informasi harga
- Galeri foto dengan lightbox (navigasi keyboard didukung)
- Bagian FAQ dengan accordion interaktif
- Tombol kontak dan pemesanan melalui WhatsApp
- Menu navigasi mobile (burger menu) dan animasi reveal saat scroll berbasis IntersectionObserver
- PWA: `manifest.json` dan service worker (`sw.js`) sehingga situs dapat dipasang di perangkat
- SEO: `sitemap.xml`, `robots.txt`, dan meta title/description yang dioptimalkan
- Aturan `.htaccess` untuk server Apache

## Teknologi

- HTML5
- CSS3 (satu berkas `styles.css` tanpa framework)
- JavaScript vanilla (satu berkas `index.js` tanpa dependensi)
- Web App Manifest dan Service Worker untuk kemampuan PWA

## Struktur Proyek

```
khi/
├── public/          # Foto kamar, ikon, favicon, dan gambar pendukung
├── index.html       # Halaman utama
├── index.js         # Interaksi: menu mobile, lightbox, FAQ, animasi scroll
├── styles.css       # Seluruh gaya tampilan
├── manifest.json    # Konfigurasi PWA "Kos Hafiz Ikpos"
├── sw.js            # Service worker
├── sitemap.xml
├── robots.txt
├── .htaccess        # Konfigurasi Apache
└── LICENSE          # Lisensi MIT
```

## Cara Menjalankan

Website ini statis dan dapat dibuka langsung:

1. Clone repositori ini.
2. Buka `index.html` di browser, atau jalankan server statis dari folder proyek:

   ```bash
   npx serve .
   # atau
   python -m http.server 8000
   ```

   lalu akses `http://localhost:8000`. Untuk menguji service worker gunakan `http://localhost` atau HTTPS, karena service worker tidak berjalan dari berkas `file://`.

## Lisensi

MIT (lihat berkas `LICENSE`).
