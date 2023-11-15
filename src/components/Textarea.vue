<template>
  <label>
    {{ label }}
    <textarea class="w-full rounded-lg border border-text px-4 py-2 active:outline-none" />
  </label>
</template>

<script setup lang="ts">
const { label } = defineProps<{ label: string }>();
</script>
