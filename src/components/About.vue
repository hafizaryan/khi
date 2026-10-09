<template>
  <section id="tentang" class="py-16 sm:py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Visual Image Showcase with Cove Bauhaus style -->
        <div class="lg:col-span-6 order-2 lg:order-1">
          <div class="relative">
            <!-- Main Photo -->
            <div class="relative rounded-3xl lg:rounded-bl-[80px] lg:rounded-tr-[80px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-neutral-100">
              <img 
                src="/about.jpg" 
                alt="Tampak depan Kos Hafiz Ikpos Sibuhuan" 
                class="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
              <div class="absolute bottom-4 left-6 text-white text-left">
                <p class="text-xs uppercase tracking-widest font-semibold text-brand-coralLight">Gedung Utama</p>
                <p class="text-lg font-bold">Fasad Asri Kos &amp; Kontrakan Hafiz Ikpos</p>
              </div>
            </div>

            <!-- Floating Stat Box -->
            <div class="absolute -bottom-6 -right-4 sm:-right-8 bg-brand-dark text-white p-5 rounded-2xl shadow-xl max-w-xs text-left hidden sm:block">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-brand-coral flex items-center justify-center font-black text-xl">
                  ★
                </div>
                <div>
                  <div class="font-extrabold text-sm">Pengelola Responsif</div>
                  <div class="text-xs text-neutral-300">Siap melayani kebutuhan penghuni</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Narrative Content -->
        <div class="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
          <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-coral">
            <span>Tentang Kos Hafiz Ikpos</span>
            <span class="w-1.5 h-1.5 rounded-full bg-brand-coral"></span>
            <span>Filosofi Hunian</span>
          </div>

          <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Nuansa kehangatan rumah, bukan sekadar kamar kosong
          </h2>

          <p class="text-neutral-600 text-base leading-relaxed">
            Didirikan untuk menjawab kebutuhan tempat tinggal berkualitas di Sibuhuan, <strong>Kos Hafiz Ikpos</strong> memadukan kenyamanan hunian pribadi dengan lokasi yang luar biasa strategis di pusat aktivitas Padang Lawas.
          </p>

          <p class="text-neutral-600 text-base leading-relaxed">
            Kami mengutamakan privasi, sirkulasi udara yang sehat, serta kebersihan lingkungan agar penghuni dapat beristirahat dengan tenang setelah seharian bekerja atau menuntut ilmu.
          </p>

          <!-- Key Advantages List -->
          <div class="grid sm:grid-cols-2 gap-4 pt-2">
            <div class="flex items-start gap-3 p-3 rounded-2xl bg-brand-surface/80 border border-neutral-100">
              <span class="text-emerald-600 font-bold text-lg leading-none">✓</span>
              <div>
                <h4 class="font-bold text-sm text-brand-dark">Lingkungan Tenang</h4>
                <p class="text-xs text-neutral-500 mt-0.5">Kondusif untuk belajar &amp; istirahat malam.</p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-3 rounded-2xl bg-brand-surface/80 border border-neutral-100">
              <span class="text-emerald-600 font-bold text-lg leading-none">✓</span>
              <div>
                <h4 class="font-bold text-sm text-brand-dark">Akses Super Cepat</h4>
                <p class="text-xs text-neutral-500 mt-0.5">Samping Pengadilan Lama, depan MAN 1.</p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-3 rounded-2xl bg-brand-surface/80 border border-neutral-100">
              <span class="text-emerald-600 font-bold text-lg leading-none">✓</span>
              <div>
                <h4 class="font-bold text-sm text-brand-dark">Privasi Terjaga</h4>
                <p class="text-xs text-neutral-500 mt-0.5">Kamar mandi dalam &amp; aturan penghuni tertib.</p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-3 rounded-2xl bg-brand-surface/80 border border-neutral-100">
              <span class="text-emerald-600 font-bold text-lg leading-none">✓</span>
              <div>
                <h4 class="font-bold text-sm text-brand-dark">Komunikasi Mudah</h4>
                <p class="text-xs text-neutral-500 mt-0.5">Hubungi pengelola 24/7 via WhatsApp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
