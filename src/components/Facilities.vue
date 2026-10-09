<template>
  <section id="fasilitas" class="py-16 sm:py-24 bg-brand-surface/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-coral mb-2">
          <span>Kenyamanan Hunian</span>
          <span class="w-1.5 h-1.5 rounded-full bg-brand-coral"></span>
          <span>Fasilitas Lengkap</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
          Fasilitas esensial untuk keseharian tanpa beban
        </h2>
        <p class="mt-3 text-neutral-600 text-base leading-relaxed">
          Dari pasokan air stabil, instalasi listrik andal, hingga parkir lega — seluruh kebutuhan dasar Anda telah dipersiapkan dengan baik.
        </p>
      </div>

      <!-- Facilities Grid ala Cove.id -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(item, idx) in facilities" 
          :key="idx"
          class="bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between text-left group"
        >
          <div>
            <!-- Icon Wrapper -->
            <div class="w-14 h-14 rounded-2xl bg-brand-purple/5 text-brand-purple flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-coral/10 group-hover:text-brand-coral transition-all">
              <!-- Render matching SVG based on icon name -->
              <!-- Security -->
              <svg v-if="item.icon === 'ShieldCheck'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              <!-- Water -->
              <svg v-else-if="item.icon === 'Droplet'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
              </svg>
              <!-- Electricity -->
              <svg v-else-if="item.icon === 'Zap'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              <!-- Parking -->
              <svg v-else-if="item.icon === 'Car'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2 10.9 2 11 2 11.2V16c0 .6.4 1 1 1h2"/>
                <circle cx="7" cy="17" r="2"/>
                <circle cx="17" cy="17" r="2"/>
              </svg>
              <!-- Bed -->
              <svg v-else-if="item.icon === 'Bed'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 4v16"/>
                <path d="M2 8h18a2 2 0 0 1 2 2v10"/>
                <path d="M2 17h20"/>
                <path d="M6 8v9"/>
              </svg>
              <!-- Bath -->
              <svg v-else-if="item.icon === 'Bath'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.7 3 4 3.7 4 4.5V17a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-5"/>
                <line x1="7" y1="12" x2="20" y2="12"/>
              </svg>
              <!-- Wifi -->
              <svg v-else-if="item.icon === 'Wifi'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                <line x1="12" y1="20" x2="12.01" y2="20"/>
              </svg>
              <!-- AC -->
              <svg v-else class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
              </svg>
            </div>

            <!-- Title & Description -->
            <h3 class="text-lg font-extrabold text-brand-dark mb-2 group-hover:text-brand-purple transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {{ item.desc }}
            </p>
          </div>

          <!-- Status Tag -->
          <div class="mt-6 pt-3 border-t border-neutral-100 flex items-center justify-between">
            <span 
              class="text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
              :class="item.isSoon ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'"
            >
              {{ item.tag }}
            </span>
            <span class="text-xs font-semibold text-neutral-400">Kos Hafiz</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { facilities } from '@/data/facilities'
</script>
