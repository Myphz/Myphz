<template>
  <article class="flex flex-col gap-2">
    <header class="mb-4 text-primary text-responsive-h3">{{ title }}</header>
    <div><slot /></div>
    <footer class="text-primary">{{ footer }}</footer>
  </article>
</template>

<script setup lang="ts">
const { title, footer } = defineProps<{
  title: string;
  footer: string;
}>();
</script>
