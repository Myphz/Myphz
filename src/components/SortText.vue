<template>
  <div ref="element" @mouseover="startAnimation">
    {{ displayText }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useSlots } from "vue";

const slots = useSlots();

// @ts-ignore
const text: string = (slots.default?.()?.[0].children?.[0]?.children || "").toString();

const element = ref<HTMLElement | null>(null);
const animationStarted = ref(false);

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890/&$%£€ÈÒLÀ";
const RANDOMIZE_TIME = 30;

const displayText = ref(text);

function randomChar() {
  const random = Math.round(Math.random() * ALPHABET.length) % ALPHABET.length;
  return ALPHABET[random];
}

function startAnimation() {
  if (animationStarted.value) return;
  animationStarted.value = true;
  let iterations = 0;

  const interval = setInterval(() => {
    displayText.value = displayText.value
      .split("")
      .map((_, i) => {
        if (i < iterations) return text[i];
        return randomChar();
      })
      .join("");

    if (iterations >= text.length) {
      clearInterval(interval);
      animationStarted.value = false;
    }

    iterations += 1 / 4;
  }, RANDOMIZE_TIME);
}

onMounted(() => {
  new IntersectionObserver(
    async ([entry]) => {
      if (entry.isIntersecting) {
        startAnimation();
      }
    },
    { threshold: 1 }
  ).observe(element.value!);
});
</script>
