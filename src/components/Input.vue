<template>
  <label>
    {{ label }}
    <input
      class="w-full resize-y rounded-lg border border-text px-4 py-2 placeholder:text-text-secondary active:outline-none"
      :type="type || 'text'"
      :placeholder="placeholder || ''"
    />
  </label>
</template>

<script setup lang="ts">
const { label, type, placeholder } = defineProps<{
  label: string;
  type?: string;
  placeholder?: string;
}>();
</script>
