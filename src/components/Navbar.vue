<template>
  <header class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm transition-all duration-200">
    <!-- Announcement Bar ala Cove.id -->
    <div class="bg-brand-purple text-white px-4 py-2 text-xs md:text-sm font-medium">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div class="flex items-center gap-2 truncate">
          <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-coral uppercase tracking-wider shrink-0">Resmi</span>
          <p class="truncate">
            Informasi & survei resmi hanya melalui WhatsApp pengelola di 
            <a href="https://wa.me/6285163089473" target="_blank" rel="noopener" class="underline font-bold hover:text-brand-coralLight ml-1">
              +62 851-6308-9473
            </a>
          </p>
        </div>
        <a 
          href="https://wa.me/6285163089473?text=Halo%20Kos%20Hafiz%20Ikpos%2C%20saya%20mau%20survei%20lokasi." 
          target="_blank" 
          rel="noopener"
          class="hidden sm:inline-flex items-center gap-1 font-semibold text-xs text-brand-coralLight hover:underline shrink-0"
        >
          Jadwalkan Survei &rarr;
        </a>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
      <!-- Brand Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-dark flex items-center justify-center text-white font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform">
          KH
        </div>
        <div>
          <div class="font-extrabold text-lg sm:text-xl tracking-tight text-brand-dark leading-tight flex items-center gap-1.5">
            Kos Hafiz Ikpos
            <span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          </div>
          <div class="text-[11px] font-semibold text-neutral-500 tracking-wider uppercase">
            Sibuhuan · Padang Lawas
          </div>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <div class="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-600">
        <a href="#katalog" class="hover:text-brand-coral transition-colors">Pilihan Kamar</a>
        <a href="#fasilitas" class="hover:text-brand-coral transition-colors">Fasilitas</a>
        <a href="#tentang" class="hover:text-brand-coral transition-colors">Tentang Kami</a>
        <a href="#galeri" class="hover:text-brand-coral transition-colors">Galeri Foto</a>
        <a href="#lokasi" class="hover:text-brand-coral transition-colors">Lokasi & Sekitar</a>
        <a href="#faq" class="hover:text-brand-coral transition-colors">FAQ</a>
      </div>

      <!-- Action Button -->
      <div class="hidden sm:flex items-center gap-3">
        <a 
          href="https://wa.me/6285163089473?text=Halo%20Kos%20Hafiz%20Ikpos%2C%20saya%20ingin%20tanya%20ketersediaan%20kamar." 
          target="_blank" 
          rel="noopener"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-coral hover:bg-brand-coralHover text-white text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.2-.7.5-.9 1-.3 2.7 1.4 4.4a11.6 11.6 0 0 0 4.5 3.4c1.7.7 2.4.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.1-.5-.2z"/>
          </svg>
          <span>Chat WhatsApp</span>
        </a>
      </div>

      <!-- Mobile Hamburger Toggle -->
      <button 
        @click="isOpen = !isOpen" 
        type="button" 
        class="lg:hidden p-2 rounded-lg text-neutral-600 hover:text-brand-dark hover:bg-neutral-100 transition-colors"
        aria-label="Menu"
      >
        <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </nav>

    <!-- Mobile Drawer Menu -->
    <transition name="slide-down">
      <div v-if="isOpen" class="lg:hidden border-t border-neutral-100 bg-white px-4 pt-3 pb-6 shadow-xl">
        <div class="flex flex-col space-y-3 font-medium text-neutral-700">
          <a @click="isOpen = false" href="#katalog" class="py-2 px-3 rounded-lg hover:bg-neutral-50 hover:text-brand-coral">Pilihan Kamar</a>
          <a @click="isOpen = false" href="#fasilitas" class="py-2 px-3 rounded-lg hover:bg-neutral-50 hover:text-brand-coral">Fasilitas</a>
          <a @click="isOpen = false" href="#tentang" class="py-2 px-3 rounded-lg hover:bg-neutral-50 hover:text-brand-coral">Tentang Kami</a>
          <a @click="isOpen = false" href="#galeri" class="py-2 px-3 rounded-lg hover:bg-neutral-50 hover:text-brand-coral">Galeri Foto</a>
          <a @click="isOpen = false" href="#lokasi" class="py-2 px-3 rounded-lg hover:bg-neutral-50 hover:text-brand-coral">Lokasi & Sekitar</a>
          <a @click="isOpen = false" href="#faq" class="py-2 px-3 rounded-lg hover:bg-neutral-50 hover:text-brand-coral">FAQ</a>
          
          <div class="pt-2 border-t border-neutral-100">
            <a 
              href="https://wa.me/6285163089473?text=Halo%20Kos%20Hafiz%20Ikpos%2C%20saya%20ingin%20tanya%20kamar." 
              target="_blank" 
              rel="noopener"
              class="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-brand-coral text-white font-bold shadow-md"
            >
              <span>Hubungi Pengelola via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
