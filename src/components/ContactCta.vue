<template>
  <section id="kontak" class="py-16 sm:py-24 bg-brand-dark text-white relative overflow-hidden text-left">
    <!-- Background Decor Shapes -->
    <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-coral/20 blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-purple/40 blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="bg-gradient-to-br from-brand-purple to-brand-dark rounded-3xl lg:rounded-4xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl">
        <div class="max-w-3xl space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-brand-coralLight text-xs font-bold uppercase tracking-wider">
            <span>Booking &amp; Ketersediaan</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Kamar terbatas — amankan hunian nyaman Anda sekarang
          </h2>

          <p class="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Dapatkan informasi ketersediaan kamar terbaru atau jadwalkan survei lokasi langsung dengan pengelola Kos Hafiz Ikpos melalui kontak resmi.
          </p>

          <!-- Buttons Row -->
          <div class="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="https://wa.me/6285163089473?text=Halo%20Kos%20Hafiz%20Ikpos%2C%20saya%20mau%20konfirmasi%20ketersediaan%20kamar." 
              target="_blank" 
              rel="noopener"
              class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-coral hover:bg-brand-coralHover text-white font-extrabold text-sm sm:text-base shadow-lg shadow-brand-coral/30 transition-all hover:scale-105"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.2-.7.5-.9 1-.3 2.7 1.4 4.4a11.6 11.6 0 0 0 4.5 3.4c1.7.7 2.4.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.1-.5-.2z"/>
              </svg>
              <span>Hubungi via WhatsApp</span>
            </a>

            <a 
              href="tel:+6285163089473" 
              class="inline-flex items-center gap-2 px-6 py-4 rounded-full border-2 border-white/20 hover:border-white text-white font-bold text-sm sm:text-base transition-colors"
            >
              <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Telepon Langsung</span>
            </a>
          </div>

          <!-- Contact Meta Info -->
          <div class="grid sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 text-xs text-neutral-300">
            <div>
              <span class="block text-neutral-400 font-semibold mb-1">Nomor WhatsApp &amp; Telepon</span>
              <a href="tel:+6285163089473" class="text-white font-bold hover:underline">+62 851-6308-9473</a>
            </div>
            <div>
              <span class="block text-neutral-400 font-semibold mb-1">Email Resmi</span>
              <a href="mailto:koshafizikpos@gmail.com" class="text-white font-bold hover:underline">koshafizikpos@gmail.com</a>
            </div>
            <div>
              <span class="block text-neutral-400 font-semibold mb-1">Waktu Layanan</span>
              <span class="text-white font-bold">Setiap Hari · 00.00 – 24.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
