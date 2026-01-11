<script setup>
import Header from './bar/header.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col font-['Montserrat'] bg-linear-to-b from-[#CAEEE8] to-[#F4CEBE]">
    <!-- Navbar -->
    <Header />

    <!-- Main -->
    <main class="flex-1 flex items-start md:items-center justify-center bg-transparent px-4 pt-28 md:pt-24 pb-40 md:pb-32 overflow-y-auto mt-12 md:mt-14">
      <div class="flex flex-col w-full max-w-5xl gap-4">
        <!-- Konten Welcome -->
        <div class="p-8 md:p-10 bg-gray-100 rounded-lg shadow-md w-full mx-auto">
        </div>
      </div>
    </main>
  </div>
</template>