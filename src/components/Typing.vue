<template>
  <div
    class="relative w-fit h-fit after:bg-background"
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

const config = resolveConfig(tailwindConfig);
const secondaryColor = config.theme.colors.secondary;

const { text, delay } = defineProps<{ text: string; delay?: number }>();
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

  /* 10 character per second typing speed */
  --animation-duration: calc(var(--text-length) / 10 * 1s);
  animation:
    typing var(--animation-duration) steps(var(--text-length)) calc(var(--delay) * 1s) forwards,
    blink 500ms calc(var(--delay) * 1s - 1s) infinite,
    disable-caret 1ms linear calc(var(--animation-duration) + 0.5s + var(--delay) * 1s) forwards;
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
    border-left: 2px solid transparent;
  }
  50%,
  100% {
    border-left: 2px solid var(--caret-color);
  }
}
</style>
