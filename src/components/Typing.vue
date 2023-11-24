<template>
  <div
    ref="divRef"
    class="relative h-fit w-fit after:bg-background"
    :class="{ 'animation-started': animationStarted }"
    :style="`--text-length: ${text.length}; --caret-color: ${secondaryColor}; --delay: ${
      delay || 0
    };`"
  >
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { onMounted, ref } from "vue";

const config = resolveConfig(tailwindConfig);
const secondaryColor = config.theme.colors.secondary;
const animationStarted = ref(false);
const divRef = ref(null);

const { text, delay } = defineProps<{ text: string; delay?: number }>();

onMounted(() => {
  new IntersectionObserver(
    async ([entry]) => {
      if (entry.isIntersecting && !animationStarted.value) {
        animationStarted.value = true;
      }
    },
    { threshold: 1 }
  ).observe(divRef.value!);
});
</script>

<style scoped>
div::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  user-select: none;
}

.animation-started::after {
  /* 10 character per second typing speed */
  --animation-duration: calc(var(--text-length) / 10 * 1s);
  animation:
    typing var(--animation-duration) steps(var(--text-length)) calc(var(--delay) * 1ms) forwards,
    blink 500ms calc(var(--delay) * 1ms - 1s) infinite,
    disable-caret 1ms linear calc(var(--animation-duration) + 0.5s + var(--delay) * 1ms) forwards;
}

@keyframes typing {
  to {
    left: 100%;
  }
}

@keyframes disable-caret {
  to {
    border-left: none;
  }
}

@keyframes blink {
  0%,
  45% {
    border-left: 0.05em solid transparent;
  }
  50%,
  100% {
    border-left: 0.05em solid var(--caret-color);
  }
}
</style>
