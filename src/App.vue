<template>
  <div class="min-h-screen flex flex-col bg-white text-brand-dark antialiased">
    <!-- Sticky Navigation -->
    <Navbar />

    <!-- Main Content Stream -->
    <main class="flex-grow">
      <!-- Hero with quick search filter -->
      <Hero @filter-selected="handleCategoryFilter" />

      <!-- Room Catalog with tiers -->
      <RoomCatalog ref="catalogRef" :preselected-category="currentCategory" />

      <!-- Essential Amenities -->
      <Facilities />

      <!-- About & Storytelling -->
      <About />

      <!-- Authentic Gallery with Lightbox -->
      <Gallery />

      <!-- Neighborhood & Location Guide -->
      <Location />

      <!-- Verified Tenant Reviews -->
      <Reviews />

      <!-- Frequently Asked Questions Accordion -->
      <Faq />

      <!-- Direct Booking Call-To-Action -->
      <ContactCta />
    </main>

    <!-- Comprehensive Footer -->
    <Footer />

    <!-- Mobile Sticky CTA & Desktop Floating Button -->
    <FloatingWa />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import RoomCatalog from '@/components/RoomCatalog.vue'
import Facilities from '@/components/Facilities.vue'
import About from '@/components/About.vue'
import Gallery from '@/components/Gallery.vue'
import Location from '@/components/Location.vue'
import Reviews from '@/components/Reviews.vue'
import Faq from '@/components/Faq.vue'
import ContactCta from '@/components/ContactCta.vue'
import Footer from '@/components/Footer.vue'
import FloatingWa from '@/components/FloatingWa.vue'

const currentCategory = ref('all')
const catalogRef = ref(null)

const handleCategoryFilter = (cat) => {
  currentCategory.value = cat
  if (catalogRef.value) {
    catalogRef.value.activeCategory = cat
  }
}
</script>
