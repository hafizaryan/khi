<template>
  <section class="relative bg-gradient-to-b from-brand-surface via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
    <!-- Background Decor Shapes -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-coral/5 blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-brand-purple/5 blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <!-- Left Hero Content -->
        <div class="lg:col-span-7 space-y-6 text-left">
          <!-- Location Badge Pill -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs sm:text-sm font-semibold tracking-wide">
            <span class="w-2 h-2 rounded-full bg-brand-coral animate-ping"></span>
            <span>Sibuhuan · Depan MAN 1 · Padang Lawas</span>
          </div>

          <!-- Main Typography ala Cove.id -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.15]">
            Rasakan hunian <span class="text-brand-coral">modern, bersih</span> &amp; nyaman di Sibuhuan.
          </h1>

          <p class="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Pilihan ideal untuk pelajar, mahasiswa, dan profesional. Nikmati kamar siap huni dengan opsi kamar mandi dalam, lingkungan asri dan tenang, serta akses super mudah ke pusat kota.
          </p>

          <!-- Quick Actions -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#katalog" 
              class="px-7 py-3.5 rounded-full bg-brand-purple hover:bg-brand-purpleLight text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-purple/20 transition-all hover:scale-105"
            >
              Lihat Pilihan Kamar
            </a>
            <a 
              href="https://wa.me/6285163089473?text=Halo%20Kos%20Hafiz%20Ikpos%2C%20saya%20mau%20konsultasi%20kamar%20kos." 
              target="_blank" 
              rel="noopener"
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-neutral-300 hover:border-brand-coral text-brand-dark hover:text-brand-coral font-bold text-sm sm:text-base transition-colors"
            >
              <svg class="w-5 h-5 fill-emerald-600" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.2-.7.5-.9 1-.3 2.7 1.4 4.4a11.6 11.6 0 0 0 4.5 3.4c1.7.7 2.4.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.1-.5-.2z"/>
              </svg>
              <span>Tanya Kamar via WA</span>
            </a>
          </div>

          <!-- Trust Badges -->
          <div class="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200">
            <div>
              <div class="text-2xl font-black text-brand-purple">8+</div>
              <div class="text-xs sm:text-sm text-neutral-500 font-medium">Fasilitas Lengkap</div>
            </div>
            <div>
              <div class="text-2xl font-black text-brand-coral">1 Menit</div>
              <div class="text-xs sm:text-sm text-neutral-500 font-medium">ke MAN 1 Sibuhuan</div>
            </div>
            <div>
              <div class="text-2xl font-black text-emerald-600">Siap Huni</div>
              <div class="text-xs sm:text-sm text-neutral-500 font-medium">Furnitur Tersedia</div>
            </div>
          </div>
        </div>

        <!-- Right Hero Image Showcase ala Cove.id Bauhaus Card -->
        <div class="lg:col-span-5 relative">
          <div class="relative mx-auto max-w-md lg:max-w-none">
            <!-- Main Featured Image -->
            <div class="relative rounded-3xl lg:rounded-tr-[80px] lg:rounded-bl-[80px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-neutral-100">
              <img 
                src="/image.png" 
                alt="Kos Hafiz Ikpos Sibuhuan" 
                class="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
              
              <!-- Floating Pill on Image -->
              <div class="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg text-left">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-[11px] font-bold uppercase tracking-wider text-brand-coral">Tipe Paling Favorit</p>
                    <p class="text-sm sm:text-base font-extrabold text-brand-dark">Kamar Deluxe (KM Dalam)</p>
                  </div>
                  <div class="text-right">
                    <span class="text-xs text-neutral-500">Mulai</span>
                    <p class="text-sm sm:text-base font-black text-brand-purple">Rp 750rb<span class="text-[11px] font-normal text-neutral-500">/bln</span></p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Badge Element -->
            <div class="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                ✓
              </div>
              <div class="text-left text-xs">
                <p class="font-extrabold text-neutral-800">100% Bebas Banjir</p>
                <p class="text-neutral-500">Aman & Terawat</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Filter Bar ala Cove.id -->
      <div class="mt-12 lg:mt-16 bg-white rounded-3xl p-4 sm:p-6 shadow-card border border-neutral-100 max-w-5xl mx-auto">
        <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <!-- Filter 1: Kategori -->
          <div class="flex-1 px-3 py-2 text-left border-b md:border-b-0 md:border-r border-neutral-200">
            <label class="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">Tipe Hunian</label>
            <select 
              v-model="selectedCategory" 
              class="w-full mt-1 font-bold text-sm text-brand-dark bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="all">Semua Tipe Kamar & Kontrakan</option>
              <option value="deluxe">Kamar Deluxe (KM Dalam)</option>
              <option value="standard">Kamar Standar Cozy</option>
              <option value="pavilion">Unit Kontrakan Paviliun</option>
            </select>
          </div>

          <!-- Filter 2: Durasi -->
          <div class="flex-1 px-3 py-2 text-left border-b md:border-b-0 md:border-r border-neutral-200">
            <label class="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">Durasi Sewa</label>
            <div class="font-bold text-sm text-brand-dark mt-1">Bulanan (Fleksibel)</div>
          </div>

          <!-- Filter 3: Lokasi -->
          <div class="flex-1 px-3 py-2 text-left">
            <label class="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">Lokasi</label>
            <div class="font-bold text-sm text-brand-dark mt-1 truncate">Jl. Kol. H.M. Nurdin, Sibuhuan</div>
          </div>

          <!-- Search CTA -->
          <div class="shrink-0 flex items-center justify-end">
            <button 
              @click="applyFilter" 
              type="button" 
              class="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-coral hover:bg-brand-coralHover text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
            >
              <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <span>Telusuri Kamar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['filter-selected'])
const selectedCategory = ref('all')

const applyFilter = () => {
  emit('filter-selected', selectedCategory.value)
  const el = document.getElementById('katalog')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
