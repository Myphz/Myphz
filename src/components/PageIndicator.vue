<template>
  <nav class="fixed right-40 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 2xl:flex">
    <a
      v-for="(page, i) in PAGES.filter((p) => p.href?.startsWith('#'))"
      :key="i"
      :href="page.href"
      class="aspect-square h-4 rounded-full transition-all"
      :class="activePage === page.id ? 'bg-primary' : 'bg-text'"
      :aria-label="page.name"
    />
  </nav>
</template>

<script setup lang="ts">
import { PAGES } from "@/utils/pages";
import { activePage } from "@/utils/store";
</script>

<style scoped>
nav {
  translate: 100% 0;
  opacity: 0;
  animation: fade 0.25s ease-in-out 1s forwards;
}

@keyframes fade {
  to {
    translate: 0 0;
    opacity: 1;
  }
}
</style>
