<template>
  <component :is="is" class="animation"><slot /></component>
</template>

<script setup lang="ts">
const { is } = defineProps<{ is: string }>();
</script>

<style scoped>
.animation {
  translate: 0 -100%;
  opacity: 0;
  animation: fadeUp 0.25s ease-in-out calc(0.1s * var(--order, 0)) forwards;
}

@keyframes fadeUp {
  to {
    translate: 0 0;
    opacity: 1;
  }
}
</style>
