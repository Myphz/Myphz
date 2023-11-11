<template>
  <div
    class="relative w-fit after:bg-background"
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
div {
  white-space: nowrap;
}

div::after {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  border-left: 2px solid var(--caret-color);
  user-select: none;

  /* 91wpm / 457cpm (7.61 cps) typing speed */
  --animation-duration: calc(var(--text-length) / 7.61 * 1s);
  animation:
    typing var(--animation-duration) steps(var(--text-length)) calc(var(--delay) * 1s) forwards,
    blink 500ms infinite,
    disable-caret 1ms linear calc(var(--animation-duration) + 0.5s) forwards;
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
    border-color: transparent;
  }
  50%,
  100% {
    border-color: var(--caret-color);
  }
}
</style>
