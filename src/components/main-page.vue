<script setup>
import { ref, computed } from 'vue';
import Header from "./bar/header.vue";
import Footer from "./bar/footer.vue";

const categories = ['Semua', 'Projek', 'GameJam', 'Lomba'];
const tools = [
  { name: 'Unity', icon: '⚙️' },
  { name: 'Blender 3D', icon: '🧊' },
  { name: 'Aseprite', icon: '🎨' },
  { name: 'Figma', icon: '🖼️' }
];

const activeCategory = ref('Semua');

const projects = ref([
  { 
    title: 'Compounders', 
    category: 'Projek', 
    color: 'from-blue-300 to-blue-500',
    icon: '📈',
    desc: 'Compounders adalah game simulasi interaktif yang dirancang untuk meningkatkan literasi finansial pemain secara menyenangkan dan aman.',
    link: 'https://qopal99.itch.io/compounders'
  },
  { 
    title: 'Deck of Ascent', 
    category: 'GameJam', 
    color: 'from-red-300 to-red-500',
    icon: '🃏',
    desc: ' Deck of Ascent adalah game Tactical RPG dengan elemen Trading Card Game (TCG). Pemain berperan sebagai seorang petarung muda dari tanah paling bawah yang berambisi menaklukkan pulau-pulau terapung di langit, setiap kemenangannya membuka jalan menuju pulau yang lebih tinggi   dan rahasia dunia yang tersembunyi di atas awan',
    link: 'https://qopal99.itch.io/green-solaris'
  },
  { 
    title: 'Green Solaris', 
    category: 'Lomba', 
    color: 'from-green-300 to-green-500',
    icon: '🪴',
    desc: 'Green Solaris adalah game 3D Isometric Single Player bergaya pixel art futuristik, yang membawa kamu ke dunia yang hancur akibat polusi udara, kerusakan tanah, dan pencemaran air. ',
    link: 'https://qopal99.itch.io/green-solaris'
  },
  { 
    title: 'Dunia sebrang', 
    category: 'Projek', 
    color: 'from-black to-red-500',
    icon: '👻',
    desc: 'Dunia Sebrang adalah game yang dibuat dalam lingkup 3D platformer-sidescrollig dengan menyajikan konten horor yang memperkenalkan makhluk mistis dan adat budaya Kalimantan digambarkan melewati perjalanan seorang tokoh gadis penakut yang bernama Devina.',
    link: 'https://princenizroh.itch.io/dunia-sebrang'
  },
  { 
    title: 'Letter', 
    category: 'Lomba', 
    color: 'from-sky-900 to-green-800',
    icon: '📜',
    desc: '"Letter" adalah game bertahan hidup yang menegangkan di mana Anda harus menjelajahi dunia jiwa, mencari gerbang keluar untuk menemukan jalan keluar dari dunia tersebut. Namun, hati-hati, musuh Anda bersembunyi di balik hantu.',
    link: 'https://qopal99.itch.io/letter'
  },
  { 
    title: 'Lilu Village Chronicles', 
    category: 'Lomba', 
    color: 'from-green-300 to-teal-500',
    icon: '🏘️',
    desc: 'Lilu’s Village Chronicles, bertema RPG dengan elemen petualangan dan simulasi yang mengikuti perjalanan seorang gadis bernama Lilu, yang kembali ke kampung halamannya dari kota setelah lama menghilang.',
    link: 'https://princenizroh.itch.io/lilus-village-chronicles'
  },   
  { 
    title: 'Find The Exit', 
    category: 'GameJam', 
    color: 'from-blue-500 to-zinc-900',
    icon: '⏳',
    desc: 'Game ini adalah game survival horror sederhana yang tujuannya adalah mencari jalan keluar dengan waktu terbatas.',
    link: 'https://divr.itch.io/findtheexit'
  },
  { 
    title: 'Searching Light', 
    category: 'GameJam', 
    color: 'from-purple-600 to-yellow-300',
    icon: '✨',
    desc: 'Searching light adalah permainan mencari cahaya untuk membebaskan diri dari kegelapan dan musuh.',
    link: 'https://qopal99.itch.io/searching-light'
  },
  { 
    title: 'Malika', 
    category: 'Lomba', 
    color: 'from-orange-300 to-red-500',
    icon: '🐱',
    desc: 'Malika adalah game edukasi bertema seni dan budaya Indonesia yang mengenalkan kekayaan budaya Nusantara melalui permainan interaktif dan menyenangkan.',
    link: 'https://princenizroh.itch.io/malika'
  },
]);

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Semua') return projects.value;
  return projects.value.filter(p => p.category === activeCategory.value);
});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="flex-1 bg-linear-to-br from-stone-50 via-white to-amber-50">
      <!-- Hero Section -->
      <section id="about" class="relative overflow-hidden bg-linear-to-b from-orange-200 to-white">
        <div class="absolute inset-0 opacity-20">
          <div class="absolute top-20 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        </div>
        
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-28 flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
          <div class="flex-1">
            <div class="mb-6 inline-block">
              <span class="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">👋 Selamat Datang</span>
            </div>
            <h1 class="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight text-stone-900">
              Halo saya <span class="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Naufal</span>
            </h1>
            <p class="text-xl text-stone-600 mb-10 leading-relaxed max-w-xl">
              Saya seorang pengembang game indie yang terobsesi dengan estetika minimalis dan pengalaman bermain yang menenangkan.
            </p>
            
            <div class="flex flex-wrap gap-4">
              <a href="#projects" class="group px-8 py-4 bg-linear-to-r from-stone-900 to-stone-800 text-white rounded-full font-bold hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                Lihat Karya
                <span class="group-hover:translate-x-1 transition">→</span>
              </a>
            </div>
          </div>
          
          <div class="flex-1 justify-center hidden sm:flex">
            <div class="relative">
              <div class="absolute inset-0 bg-linear-to-br from-amber-300 to-orange-300 rounded-3xl blur-2xl opacity-40"></div>
              <div class="w-80 h-80 bg-linear-to-br from-amber-100 to-orange-100 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
                <div class="absolute inset-0 bg-linear-to-tr from-transparent via-white to-transparent opacity-50"></div>
                <div class="text-8xl animate-bounce" style="animation-delay: 0s;">🎮</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-16 sm:py-24 md:py-32">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="flex flex-col gap-12">
            <div class="text-center md:text-left md:flex md:items-end md:justify-between gap-4 md:gap-8 flex-col md:flex-row">
              <div>
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-stone-900">Projek Saya</h2>
                <p class="text-sm sm:text-base md:text-xl text-stone-600">Beberapa karya yang saya ciptakan dengan tim.</p>
              </div>
              <div class="flex flex-wrap gap-2 sm:gap-2 bg-white p-2 rounded-2xl shadow-lg border border-stone-200 justify-center md:justify-start">
                <button 
                  v-for="cat in categories" 
                  :key="cat"
                  @click="activeCategory = cat"
                  :class="['px-3 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap', activeCategory === cat ? 'bg-linear-to-r from-amber-400 to-orange-400 text-white shadow-lg' : 'text-stone-600 hover:text-stone-900']"
                >
                  {{ cat }}
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div 
                v-for="(project, index) in filteredProjects" 
                :key="index" 
                class="group cozy-card bg-white rounded-3xl overflow-hidden border border-stone-200 flex flex-col hover:shadow-2xl transition-all duration-500"
              >
                <div :class="['h-64 bg-linear-to-br', project.color, 'relative flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500']">
                  <div class="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition"></div>
                  <div class="text-7xl animate-bounce">{{ project.icon }}</div>
                </div>
                <div class="p-8 flex flex-col flex-1">
                  <div class="flex justify-between items-start mb-4 gap-4">
                    <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-stone-900 flex-1">{{ project.title }}</h3>
                    <span class="px-4 py-2 bg-stone-100 text-stone-700 text-xs font-black rounded-full uppercase tracking-widest whitespace-nowrap">{{ project.category }}</span>
                  </div>
                  <p class="text-stone-600 text-sm mb-8 leading-relaxed flex-1">{{ project.desc }}</p>
                  <div class="flex items-center space-x-6">
                    <a :href="project.link" target="_blank" rel="noopener noreferrer" class="group/btn text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-2">
                      Lihat Proyek
                      <span class="group-hover/btn:translate-x-1 transition">→</span>
                    </a>
                    <button class="text-sm font-semibold text-stone-500 hover:text-stone-700 transition">Devlog</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="relative py-8 sm:py-10 md:py-16 bg-linear-to-r from-stone-900 via-white-800 to-black text-white overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 left-1/4 w-96 h-96 bg-sky-400 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        </div>
        
        <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div class="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-black mb-4">Tech Stack Saya</h2>
            <p class="text-sm sm:text-base md:text-xl text-stone-300">Alat-alat yang saya gunakan untuk membuat game.</p>
          </div>
          
          <div class="flex justify-center">
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
              <div v-for="tool in tools" :key="tool.name" class="group flex flex-col items-center gap-2 sm:gap-4 p-4 sm:p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/20">
                <div class="text-3xl sm:text-4xl lg:text-5xl group-hover:scale-125 transition-transform duration-300">{{ tool.icon }}</div>
                <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-200">{{ tool.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
.cozy-card {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.cozy-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@media (max-width: 768px) {
  .cozy-card {
    transform: none !important;
  }
}
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@media (max-width: 768px) {
  .cozy-card {
    transform: none !important;
  }
}
</style>
