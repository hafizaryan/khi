<template>
  <section id="faq" class="py-16 sm:py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-coral mb-2">
          <span>Pertanyaan Populer</span>
          <span class="w-1.5 h-1.5 rounded-full bg-brand-coral"></span>
          <span>Bantuan &amp; Informasi</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
          Pertanyaan yang sering diajukan
        </h2>
        <p class="mt-3 text-neutral-600 text-base leading-relaxed">
          Punya pertanyaan seputar Kos Hafiz Ikpos? Temukan jawaban cepat di bawah ini.
        </p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-200"
          :class="openIndex === index ? 'bg-brand-surface shadow-sm border-brand-purple/20' : 'bg-white hover:border-neutral-300'"
        >
          <!-- Question Trigger -->
          <button 
            @click="toggle(index)"
            type="button" 
            class="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none"
            :aria-expanded="openIndex === index"
          >
            <span class="font-extrabold text-sm sm:text-base text-brand-dark">
              {{ faq.question }}
            </span>
            <span 
              class="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-brand-dark font-bold text-lg shrink-0 transition-transform duration-200 shadow-sm"
              :class="openIndex === index ? 'rotate-45 bg-brand-coral text-white border-brand-coral' : ''"
            >
              +
            </span>
          </button>

          <!-- Answer Body -->
          <transition name="slide-down">
            <div v-if="openIndex === index" class="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
              <p>{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>

      <!-- Extra Help CTA Box -->
      <div class="mt-10 p-6 rounded-3xl bg-brand-purple/5 border border-brand-purple/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 class="font-extrabold text-brand-dark text-base">Masih ada pertanyaan lain?</h4>
          <p class="text-xs sm:text-sm text-neutral-500 mt-1">Pengelola kami siap menjawab pertanyaan Anda secara langsung.</p>
        </div>
        <a 
          href="https://wa.me/6285163089473?text=Halo%20Kos%20Hafiz%20Ikpos%2C%20saya%20punya%20pertanyaan%20seputar%20fasilitas%20dan%20sewa." 
          target="_blank" 
          rel="noopener"
          class="px-5 py-2.5 rounded-full bg-brand-purple hover:bg-brand-purpleLight text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
        >
          Tanya Pengelola via WA
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { faqs } from '@/data/faq'

const openIndex = ref(0)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>
