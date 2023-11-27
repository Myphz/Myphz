<template>
  <div
    ref="divRef"
    class="relative h-fit w-fit after:bg-background"
    :class="{ 'animation-started': animationStarted }"
    :style="`--text-length: ${text.length}; --caret-color: ${secondaryColor}; --delay: ${delay}; --speed: ${speed}`"
  >
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { onMounted, ref, useSlots } from "vue";
import { getSlotText } from "@/utils/slots";

const CPS_DEFUALT = 20;

const config = resolveConfig(tailwindConfig);
const secondaryColor = config.theme.colors.secondary;
const animationStarted = ref(false);
const divRef = ref(null);

const { delay, speed } = withDefaults(defineProps<{ delay?: number; speed?: number }>(), {
  delay: 0,
  speed: CPS_DEFUALT
});
const slots = useSlots();

const text = getSlotText(slots);

onMounted(() => {
  new IntersectionObserver(
    async ([entry]) => {
      if (entry.isIntersecting && !animationStarted.value) {
        animationStarted.value = true;
      }
    },
    { threshold: 0.5 }
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
  --animation-duration: calc(var(--text-length) / var(--speed) * 1s);
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
