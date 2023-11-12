<template>
  <button class="px-4 text-responsive-h3 rounded-lg" :class="styles[variant]">
    <slot />
  </button>
</template>

<script setup lang="ts">
const { variant } = defineProps<{ variant: "primary" | "secondary" }>();

const styles: Record<typeof variant, string> = {
  primary: "bg-primary text-background",
  secondary: "bg-background text-primary border border-primary"
};
</script>
