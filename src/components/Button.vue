<template>
  <button
    class="flex rounded-lg px-4 transition-all text-responsive-h3 disabled:cursor-not-allowed disabled:opacity-50"
    :class="styles[variant]"
    :disabled="isLoading"
    :style="`--primary: ${primaryColor}`"
  >
    <slot />
    <LoadingIcon class="h-[1.5em] w-[1.5em]" v-if="isLoading" />
  </button>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import LoadingIcon from "./LoadingIcon.vue";
import tailwindConfig from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const config = resolveConfig(tailwindConfig);
const primaryColor = config.theme.colors.primary;

type Variant = "primary" | "secondary";

const props = withDefaults(defineProps<{ variant: Variant; isLoading?: boolean }>(), {
  isLoading: false
});
const { variant, isLoading } = toRefs(props);

const styles: Record<Variant, string> = {
  primary: "bg-primary text-background",
  secondary: "bg-background text-primary border border-primary"
};
</script>

<style scoped>
button:hover {
  box-shadow: 0.35em 0 0.75em 0.05em var(--primary);
}
</style>
