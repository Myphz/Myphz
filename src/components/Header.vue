<template>
  <header class="mb-2 flex gap-4 text-primary text-responsive-h2 lg:mb-8 lg:gap-8">
    <SortText><slot /></SortText>
    <span class="font-subheader text-secondary">{{ "{" }}</span>
  </header>
</template>

<script setup lang="ts">
import SortText from "./SortText.vue";
</script>
