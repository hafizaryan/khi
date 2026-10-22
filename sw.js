// Service Worker for Kos Hafiz Ikpos Website
const CACHE_NAME = 'kos-hafiz-v3';
const PRECACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/index.js',
  '/public/about.jpg',
  '/public/icon.svg'
];

// Aset statis (gambar/font): dipakai langsung dari cache.
var STATIC_RE = /\.(jpg|jpeg|png|webp|svg|gif|ico|woff2?)$/i;

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Halaman: jaringan dulu agar update selalu tampil, cache sebagai cadangan offline.
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).catch(() => caches.match('/index.html')));
    return;
  }

  var pathname = new URL(event.request.url).pathname;

  // Aset statis: cache-first, isi cache saat pertama kali didownload.
  if (STATIC_RE.test(pathname)) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (response && response.ok) {
            var copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        });
      })
    );
    return;
  }

  // CSS/JS/manifest dll: network-first supaya update deploy selalu terpakai.
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.ok) {
          var copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
