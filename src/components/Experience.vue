<template>
  <article class="flex flex-col gap-2">
    <header class="mb-4 flex items-center justify-between">
      <span class="text-primary text-responsive-h3">
        {{ title }}
      </span>
      <span class="text-secondary text-responsive-h6">{{ note }}</span>
    </header>
    <div><slot /></div>
  </article>
</template>

<script setup lang="ts">
const { title, note } = defineProps<{
  title: string;
  note: string;
}>();
</script>
