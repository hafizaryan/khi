<template>
  <section class="py-16 sm:py-24 bg-brand-surface/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-coral mb-2">
          <span>Testimoni Penghuni</span>
          <span class="w-1.5 h-1.5 rounded-full bg-brand-coral"></span>
          <span>Pengalaman Nyata</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
          Apa kata mereka yang tinggal di Kos Hafiz Ikpos?
        </h2>
        <p class="mt-3 text-neutral-600 text-base leading-relaxed">
          Kenyamanan dan kepuasan penghuni adalah prioritas utama kami dalam mengelola hunian ini.
        </p>
      </div>

      <!-- Testimonial Grid -->
      <div class="grid md:grid-cols-3 gap-6">
        <div 
          v-for="review in reviews" 
          :key="review.id"
          class="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between text-left"
        >
          <div class="space-y-4">
            <!-- Stars & Verified Badge -->
            <div class="flex items-center justify-between">
              <div class="flex items-center text-amber-400 text-sm gap-0.5">
                <span v-for="s in review.rating" :key="s">★</span>
              </div>
              <span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                <span>✓</span> Penghuni Terverifikasi
              </span>
            </div>

            <!-- Comment Quote -->
            <p class="text-neutral-700 text-sm sm:text-base leading-relaxed italic">
              "{{ review.comment }}"
            </p>
          </div>

          <!-- Author Info -->
          <div class="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-3">
            <div class="w-11 h-11 rounded-full bg-brand-purple/10 text-brand-purple font-extrabold text-sm flex items-center justify-center shrink-0">
              {{ review.avatar }}
            </div>
            <div>
              <h4 class="font-bold text-sm text-brand-dark">{{ review.name }}</h4>
              <p class="text-xs text-neutral-500">{{ review.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reviews } from '@/data/reviews'
</script>
