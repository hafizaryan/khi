<template>
  <section id="lokasi" class="py-16 sm:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-left max-w-2xl mb-12">
        <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-coral mb-2">
          <span>Panduan Lokasi</span>
          <span class="w-1.5 h-1.5 rounded-full bg-brand-coral"></span>
          <span>Titik Strategis</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
          Akses mudah ke setiap sudut kota Sibuhuan
        </h2>
        <p class="mt-3 text-neutral-600 text-base leading-relaxed">
          Berada di pusat aktivitas memudahkan Anda bepergian tanpa membuang banyak waktu di perjalanan.
        </p>
      </div>

      <!-- Location & Neighborhood Grid -->
      <div class="grid lg:grid-cols-12 gap-8 items-stretch">
        <!-- Address & Landmarks Card -->
        <div class="lg:col-span-6 bg-brand-surface rounded-3xl p-8 border border-neutral-200/80 flex flex-col justify-between text-left">
          <div class="space-y-6">
            <!-- Full Address -->
            <div>
              <div class="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Alamat Resmi</div>
              <h3 class="text-xl font-extrabold text-brand-dark">
                Kos &amp; Kontrakan Hafiz Ikpos
              </h3>
              <p class="text-sm text-neutral-600 mt-2 leading-relaxed">
                Jl. Kol. H. M. Nurdin (Ikpos Padang Luar), Sibuhuan — samping Kantor Pengadilan Lama, persis depan <strong>MAN 1 Sibuhuan</strong>, Kab. Padang Lawas, Sumatera Utara.
              </p>
            </div>

            <!-- Nearby Landmarks with Distances -->
            <div class="pt-4 border-t border-neutral-200 space-y-4">
              <div class="text-xs font-bold uppercase tracking-wider text-brand-purple">Jarak ke Fasilitas Publik Sekitar:</div>
              
              <div class="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div class="p-3 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center gap-3">
                  <div class="w-9 h-9 rounded-xl bg-purple-50 text-brand-purple flex items-center justify-center font-bold shrink-0">
                    🏫
                  </div>
                  <div>
                    <p class="font-bold text-neutral-800">MAN 1 Sibuhuan</p>
                    <p class="text-[11px] text-emerald-600 font-semibold">1 Menit (Seberang)</p>
                  </div>
                </div>

                <div class="p-3 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center gap-3">
                  <div class="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                    🏛️
                  </div>
                  <div>
                    <p class="font-bold text-neutral-800">Pengadilan Lama</p>
                    <p class="text-[11px] text-emerald-600 font-semibold">1 Menit (Samping)</p>
                  </div>
                </div>

                <div class="p-3 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center gap-3">
                  <div class="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold shrink-0">
                    🏦
                  </div>
                  <div>
                    <p class="font-bold text-neutral-800">Bank BRI &amp; BNI</p>
                    <p class="text-[11px] text-neutral-500 font-semibold">3 Menit Berkendara</p>
                  </div>
                </div>

                <div class="p-3 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center gap-3">
                  <div class="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold shrink-0">
                    🏥
                  </div>
                  <div>
                    <p class="font-bold text-neutral-800">RSUD Sibuhuan</p>
                    <p class="text-[11px] text-neutral-500 font-semibold">5 Menit Berkendara</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Google Maps Button -->
          <div class="pt-8">
            <a 
              href="https://www.google.com/maps/place/Kos+dan+Kontrakan+Hafiz+Ikpos/@1.0527445,99.7440319,17z" 
              target="_blank" 
              rel="noopener"
              class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-purple hover:bg-brand-purpleLight text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Buka di Google Maps Navigasi</span>
            </a>
          </div>
        </div>

        <!-- Maps Visual Card Preview -->
        <div class="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-card border border-neutral-200 min-h-[360px] bg-neutral-100">
          <iframe 
            title="Lokasi Kos Hafiz Ikpos Sibuhuan"
            src="https://maps.google.com/maps?q=Kos%20dan%20Kontrakan%20Hafiz%20Ikpos%20Sibuhuan&t=&z=16&ie=UTF8&iwloc=&output=embed"
            class="w-full h-full min-h-[360px] border-0"
            allowfullscreen="" 
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
