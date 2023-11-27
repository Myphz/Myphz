<template>
  <nav class="fixed right-40 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
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
