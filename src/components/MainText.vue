<template>
  <div
    class="relative w-fit font-headers leading-none text-primary text-responsive-h1 after:bg-background"
    :class="{ 'text-animation': animated }"
  >
    Daniel
  </div>
</template>

<script setup lang="ts">
const { animated } = withDefaults(defineProps<{ animated?: boolean }>(), { animated: true });
</script>

<style scoped>
.text-animation {
  animation: glow 1s 1.5s forwards;
}
.text-animation::after {
  content: "";
  position: absolute;
  left: -10%;
  top: -20%;
  width: 120%;
  height: 130%;
  animation: reveal 1s ease-in forwards;
  animation-delay: 0.5s;
}

@keyframes reveal {
  to {
    left: 130%;
  }
}

@keyframes glow {
  to {
    text-shadow: 0.05em 0 0.2em currentColor;
  }
}
</style>
