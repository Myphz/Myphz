<template>
  <label>
    {{ label }}
    <textarea
      required
      :name="name"
      class="w-full rounded-lg border border-text px-4 py-2 focus-visible:outline-none active:outline-none"
    />
  </label>
</template>

<script setup lang="ts">
const { label, name } = defineProps<{ label: string; name: string }>();
</script>
