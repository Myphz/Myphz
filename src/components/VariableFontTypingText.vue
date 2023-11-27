<template>
  <div ref="headerRef" class="h-[1em] w-fit pr-px font-subheader" :class="{ caret: showCaret }">
    <span
      v-for="(letter, i) in content"
      :key="i"
      :class="(letter === '“' || letter === '”') && 'text-secondary'"
    >
      {{ letter }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const { text, delay } = defineProps<{ text: string; delay?: number }>();
// How much time to type 1 character
const TYPING_SPEED = 100;
// How long to wait before starting to write tokens
const INITIAL_DELAY = delay ?? 200;
// How long to wait just with the caret when the animation has started (after INITIAL_DELAY)
const CARET_ANIMATION_TIME = 200;

const content = ref("");
const headerRef = ref<HTMLDivElement | null>(null);
const showCaret = ref(false);

const animationPlayed = ref(false);

function writeToken(token: string) {
  let idx = 0;

  return new Promise<void>((res) => {
    const interval = setInterval(() => {
      content.value += token[idx];
      if (idx === token.length - 1) {
        clearInterval(interval);
        res();
      }
      idx++;
    }, TYPING_SPEED);
  });
}

function setFontWeight(x: number, y: number) {
  if (!headerRef.value) return;
  Array.from(headerRef.value.children).forEach((span) => {
    const position = span.getBoundingClientRect();
    // Distance between cursor and this span
    const distance = Math.ceil(Math.sqrt((position.x - x) ** 2 + (position.y - y) ** 2));
    span.setAttribute("style", `font-variation-settings: 'wght' ${900 - distance * 2};`);
  });
}

function onMouseMove({ clientX, clientY }: { clientX: number; clientY: number }) {
  setFontWeight(clientX, clientY);
}

function onTouchMove({ changedTouches }: { changedTouches: TouchList }) {
  setFontWeight(changedTouches[0].clientX, changedTouches[0].clientY);
}

onMounted(async () => {
  document.addEventListener("mousemove", onMouseMove, { passive: true });
  document.addEventListener("touchmove", onTouchMove, { passive: true });

  new IntersectionObserver(
    async ([entry]) => {
      if (entry.isIntersecting && !animationPlayed.value) {
        animationPlayed.value = true;
        await new Promise((res) => setInterval(res, INITIAL_DELAY));
        showCaret.value = true;
        await new Promise((res) => setInterval(res, CARET_ANIMATION_TIME));
        await writeToken(text);
        await new Promise((res) => setInterval(res, CARET_ANIMATION_TIME));
        showCaret.value = false;
      }
    },
    { threshold: 0.5 }
  ).observe(headerRef.value!);
});
</script>

<style scoped>
.caret {
  animation: blink 200ms 500ms infinite alternate;
}

@keyframes blink {
  from {
    box-shadow: 2px 0 0 currentColor;
  }
  to {
    box-shadow: 2px 0 0 transparent;
  }
}
</style>
