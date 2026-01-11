<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <img src="/Cat.png" alt="Naufal Logo" class="w-10 h-10 object-contain">
        <span class="font-bold text-lg sm:text-xl tracking-tight">Naufal</span>
      </div>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8 text-sm font-medium">
        <a href="#about" class="hover:text-amber-600 transition">Tentang</a>
        <a href="#projects" class="hover:text-amber-600 transition">Proyek</a>
        <a href="#contact" class="hover:text-amber-600 transition">Kontak</a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden flex flex-col space-y-1.5 p-2 hover:bg-stone-100 rounded-lg transition"
        aria-label="Menu"
      >
        <span :class="['w-6 h-0.5 bg-stone-900 transition-all duration-300', isMenuOpen && 'rotate-45 translate-y-2']"></span>
        <span :class="['w-6 h-0.5 bg-stone-900 transition-all duration-300', isMenuOpen && 'opacity-0']"></span>
        <span :class="['w-6 h-0.5 bg-stone-900 transition-all duration-300', isMenuOpen && '-rotate-45 -translate-y-2']"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="isMenuOpen"
      class="md:hidden bg-white border-t border-stone-100 animate-in fade-in slide-in-from-top-2 duration-200"
    >
      <div class="px-4 py-4 space-y-3">
        <a 
          href="#about" 
          @click="isMenuOpen = false"
          class="block px-4 py-2 text-stone-900 hover:bg-amber-50 rounded-lg transition"
        >
          Tentang
        </a>
        <a 
          href="#projects" 
          @click="isMenuOpen = false"
          class="block px-4 py-2 text-stone-900 hover:bg-amber-50 rounded-lg transition"
        >
          Proyek
        </a>
        <a 
          href="#contact" 
          @click="isMenuOpen = false"
          class="block px-4 py-2 text-stone-900 hover:bg-amber-50 rounded-lg transition"
        >
          Kontak
        </a>
      </div>
    </div>
  </nav>
</template>
