<template>
  <section id="galeri" class="py-16 sm:py-24 bg-brand-surface/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div class="text-left max-w-2xl">
          <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-coral mb-2">
            <span>Galeri Foto</span>
            <span class="w-1.5 h-1.5 rounded-full bg-brand-coral"></span>
            <span>Dokumentasi Nyata</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Lihat suasana asli Kos Hafiz Ikpos
          </h2>
          <p class="mt-3 text-neutral-600 text-base leading-relaxed">
            Foto autentik kamar, fasilitas, dan lingkungan fisik tanpa manipulasi berlebih.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap items-center gap-2">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            type="button"
            class="px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all"
            :class="[
              activeCategory === cat.id 
                ? 'bg-brand-purple text-white shadow-md' 
                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
            ]"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <div 
          v-for="(photo, index) in filteredPhotos" 
          :key="photo.src"
          @click="openLightbox(index)"
          class="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-200 shadow-sm hover:shadow-card cursor-pointer group"
        >
          <img 
            :src="photo.src" 
            :alt="photo.caption" 
            loading="lazy"
            class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
          />
          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
            <span class="text-[10px] uppercase font-bold text-brand-coralLight tracking-wider">{{ photo.categoryLabel }}</span>
            <p class="text-xs sm:text-sm font-bold text-white line-clamp-1">{{ photo.caption }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <transition name="fade">
      <div 
        v-if="lightboxOpen" 
        @click.self="closeLightbox"
        class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
      >
        <!-- Close Button -->
        <button 
          @click="closeLightbox" 
          type="button" 
          class="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Tutup Galeri"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Prev Button -->
        <button 
          @click="prevPhoto" 
          type="button" 
          class="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Sebelumnya"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <!-- Next Button -->
        <button 
          @click="nextPhoto" 
          type="button" 
          class="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Berikutnya"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Main Photo in Lightbox -->
        <div class="max-w-4xl max-h-[85vh] flex flex-col items-center">
          <img 
            :src="filteredPhotos[currentIndex]?.src" 
            :alt="filteredPhotos[currentIndex]?.caption" 
            class="max-w-full max-h-[75vh] rounded-2xl object-contain shadow-2xl"
          />
          <div class="mt-4 text-center text-white">
            <p class="font-bold text-sm sm:text-base">{{ filteredPhotos[currentIndex]?.caption }}</p>
            <span class="text-xs text-neutral-400 mt-1 block">
              Foto {{ currentIndex + 1 }} dari {{ filteredPhotos.length }}
            </span>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = [
  { id: 'all', label: 'Semua Foto' },
  { id: 'room', label: 'Kamar Tidur' },
  { id: 'bathroom', label: 'Kamar Mandi' },
  { id: 'building', label: 'Bangunan & Akses' },
  { id: 'parking', label: 'Area Parkir' },
]

const activeCategory = ref('all')

const photos = [
  {
    src: '/IMG-20260720-WA0020.jpg',
    category: 'room',
    categoryLabel: 'Kamar Tidur',
    caption: 'Kamar tidur rapi, bersih, dan siap ditempati dengan kasur empuk.'
  },
  {
    src: '/IMG-20260720-WA0022.jpg',
    category: 'bathroom',
    categoryLabel: 'Kamar Mandi',
    caption: 'Fasilitas kamar mandi dalam higienis dengan pasokan air lancar.'
  },
  {
    src: '/IMG-20260720-WA0024.jpg',
    category: 'building',
    categoryLabel: 'Bangunan',
    caption: 'Tampak luar bangunan kos dan kontrakan Hafiz Ikpos.'
  },
  {
    src: '/IMG-20260720-WA0026.jpg',
    category: 'parking',
    categoryLabel: 'Area Parkir',
    caption: 'Area parkir kendaraan motor dan mobil di dalam lingkungan kos.'
  },
  {
    src: '/IMG-20260720-WA0029.jpg',
    category: 'room',
    categoryLabel: 'Kamar Tidur',
    caption: 'Penataan kasur dan lemari pakaian untuk kenyamanan istirahat.'
  },
  {
    src: '/IMG-20260720-WA0030.jpg',
    category: 'room',
    categoryLabel: 'Kamar Tidur',
    caption: 'Sirkulasi udara lega dengan jendela dan ventilasi alami yang baik.'
  },
  {
    src: '/IMG-20260720-WA0033.jpg',
    category: 'building',
    categoryLabel: 'Koridor',
    caption: 'Koridor akses kamar yang terang dan terawat.'
  },
  {
    src: '/IMG-20260720-WA0035.jpg',
    category: 'building',
    categoryLabel: 'Akses Jalan',
    caption: 'Akses jalan utama depan kos yang lebar dan mudah dijangkau.'
  }
]

const filteredPhotos = computed(() => {
  if (activeCategory.value === 'all') return photos
  return photos.filter(p => p.category === activeCategory.value)
})

const lightboxOpen = ref(false)
const currentIndex = ref(0)

const openLightbox = (index) => {
  currentIndex.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const nextPhoto = () => {
  if (currentIndex.value < filteredPhotos.value.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prevPhoto = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = filteredPhotos.value.length - 1
  }
}
</script>
