<template>
  <section id="katalog" class="py-16 sm:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header ala Cove.id -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div class="text-left max-w-2xl">
          <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-coral mb-2">
            <span>Pilihan Tipe Hunian</span>
            <span class="w-1.5 h-1.5 rounded-full bg-brand-coral"></span>
            <span>Tersedia &amp; Terawat</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Temukan kamar yang sesuai dengan kebutuhan Anda
          </h2>
          <p class="mt-3 text-neutral-600 text-base leading-relaxed">
            Semua unit dirancang bersih dan fungsional. Transparansi fasilitas tanpa biaya tersembunyi.
          </p>
        </div>

        <!-- Filter Category Pills ala Cove.id -->
        <div class="flex flex-wrap items-center gap-2">
          <button
            v-for="tier in roomTiers"
            :key="tier.id"
            @click="activeCategory = tier.id"
            type="button"
            class="px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all"
            :class="[
              activeCategory === tier.id 
                ? 'bg-brand-purple text-white shadow-md' 
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            ]"
          >
            {{ tier.label }}
          </button>
        </div>
      </div>

      <!-- Room Cards Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="room in filteredRooms" 
          :key="room.id"
          class="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group text-left"
        >
          <!-- Image Carousel / Featured Photo with Badges -->
          <div class="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
            <img 
              :src="activeImages[room.id] || room.images[0]" 
              :alt="room.name" 
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

            <!-- Top Badges -->
            <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
              <!-- Tier Badge -->
              <span 
                class="px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase text-white shadow"
                :class="{
                  'bg-brand-coral': room.badgeType === 'coral',
                  'bg-brand-teal': room.badgeType === 'teal',
                  'bg-brand-purple': room.badgeType === 'purple'
                }"
              >
                {{ room.tier }}
              </span>

              <!-- Status Badge -->
              <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-sm text-neutral-800 shadow">
                {{ room.status }}
              </span>
            </div>

            <!-- Image Thumbnail Switchers -->
            <div class="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 overflow-x-auto py-1">
              <button
                v-for="(img, idx) in room.images"
                :key="idx"
                @click.stop="setActiveImage(room.id, img)"
                type="button"
                class="w-10 h-10 rounded-lg overflow-hidden border-2 shrink-0 transition-all opacity-80 hover:opacity-100"
                :class="(activeImages[room.id] || room.images[0]) === img ? 'border-white scale-105 opacity-100' : 'border-transparent'"
              >
                <img :src="img" :alt="room.name" class="w-full h-full object-cover">
              </button>
            </div>
          </div>

          <!-- Card Content Body -->
          <div class="p-6 flex-1 flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <!-- Title & Size -->
              <div>
                <div class="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  {{ room.size }} · Sibuhuan
                </div>
                <h3 class="text-xl font-extrabold text-brand-dark group-hover:text-brand-coral transition-colors">
                  {{ room.name }}
                </h3>
                <p class="text-xs sm:text-sm text-neutral-600 mt-2 line-clamp-2">
                  {{ room.summary }}
                </p>
              </div>

              <!-- Specs Highlights Grid -->
              <div class="grid grid-cols-2 gap-2.5 py-3 border-y border-neutral-100 text-xs text-neutral-700">
                <div class="flex items-center gap-2">
                  <span class="text-neutral-400">🚿</span>
                  <span class="font-semibold truncate">{{ room.bathroom }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-neutral-400">🛏️</span>
                  <span class="font-semibold truncate">{{ room.bed }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-neutral-400">⚡</span>
                  <span class="font-semibold truncate">{{ room.electricity }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-neutral-400">📍</span>
                  <span class="font-semibold truncate">Depan MAN 1</span>
                </div>
              </div>

              <!-- Amenities Snippet -->
              <div class="space-y-1.5">
                <div class="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Fasilitas Termasuk:</div>
                <ul class="text-xs text-neutral-600 space-y-1">
                  <li v-for="(amenity, i) in room.amenities.slice(0, 4)" :key="i" class="flex items-center gap-2">
                    <span class="text-emerald-500 font-bold">✓</span>
                    <span>{{ amenity }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Price & Direct Booking Action -->
            <div class="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
              <div>
                <span class="text-[11px] text-neutral-500 block">Biaya sewa</span>
                <div class="text-lg sm:text-xl font-black text-brand-purple">
                  {{ room.priceFormatted }}
                  <span class="text-xs font-normal text-neutral-500">{{ room.period }}</span>
                </div>
              </div>

              <a 
                :href="`https://wa.me/6285163089473?text=${encodeURIComponent(room.waMessage)}`" 
                target="_blank" 
                rel="noopener"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-coral hover:bg-brand-coralHover text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <span>Tanya Unit</span>
                <span class="text-base">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { rooms, roomTiers } from '@/data/rooms'

const props = defineProps({
  preselectedCategory: {
    type: String,
    default: 'all'
  }
})

const activeCategory = ref(props.preselectedCategory)
const activeImages = ref({})

const setActiveImage = (roomId, imgPath) => {
  activeImages.value[roomId] = imgPath
}

const filteredRooms = computed(() => {
  if (activeCategory.value === 'all') {
    return rooms
  }
  return rooms.filter(room => room.category === activeCategory.value)
})
</script>
