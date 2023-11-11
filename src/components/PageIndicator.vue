<template>
  <div class="hidden lg:flex flex-col fixed gap-4 top-1/2 -translate-y-1/2 right-40 z-10">
    <div v-for="i in 5" :key="i" class="h-4 aspect-square bg-text rounded-full"></div>
  </div>
</template>

<script setup lang="ts"></script>
