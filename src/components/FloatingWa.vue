<template>
  <div>
    <!-- Mobile Sticky Bottom Bar ala Cove.id -->
    <div class="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-3 sm:hidden shadow-float">
      <div class="flex items-center justify-between gap-3">
        <div class="text-left">
          <span class="text-[10px] uppercase font-bold text-emerald-600 block leading-tight">Siap Huni</span>
          <div class="text-sm font-black text-brand-dark leading-tight">
            Mulai Rp 500rb<span class="text-[11px] font-normal text-neutral-500">/bln</span>
          </div>
        </div>

        <a 
          href="https://wa.me/6285163089473?text=Halo%20Kos%20Hafiz%20Ikpos%2C%20saya%20tertarik%20tanya%20kamar." 
          target="_blank" 
          rel="noopener"
          class="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md"
        >
          <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.2-.7.5-.9 1-.3 2.7 1.4 4.4a11.6 11.6 0 0 0 4.5 3.4c1.7.7 2.4.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.1-.5-.2z"/>
          </svg>
          <span>Chat WhatsApp</span>
        </a>
      </div>
    </div>

    <!-- Desktop Floating Circular WhatsApp Icon -->
    <a 
      href="https://wa.me/6285163089473?text=Halo%20Kos%20Hafiz%20Ikpos%2C%20saya%20mau%20tanya%20kamar." 
      target="_blank" 
      rel="noopener"
      class="hidden sm:flex fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl items-center justify-center hover:scale-110 transition-all duration-300 group"
      aria-label="Chat WhatsApp Pengelola"
    >
      <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.2-.7.5-.9 1-.3 2.7 1.4 4.4a11.6 11.6 0 0 0 4.5 3.4c1.7.7 2.4.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.1-.5-.2z"/>
      </svg>
      <span class="sr-only">Chat WhatsApp</span>
    </a>
  </div>
</template>
