<template>
  <div ref="element" @mouseover="startAnimation">
    {{ displayText }}
  </div>
</template>

<script setup lang="ts">
import { isVisible } from "@/utils/dom";
import { onMounted, ref, useSlots } from "vue";

const slots = useSlots();

// @ts-ignore
const text: string = (slots.default?.()?.[0].children?.[0]?.children || "").toString();

const element = ref<HTMLElement | null>(null);
const animationStarted = ref(false);

const ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789/&$%£€ÈÒLÀ+.";
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
  window.addEventListener(
    "scroll",
    () => {
      const visible = isVisible(element.value!);
      if (visible) startAnimation();
    },
    { passive: true }
  );
});
</script>
