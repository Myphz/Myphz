<template>
  <div ref="element">
    {{ displayText }}
  </div>
</template>

<script setup lang="ts">
import { isVisible } from "@/utils/dom";
import { onMounted, ref } from "vue";

const { text } = defineProps<{ text: string }>();
const element = ref<HTMLElement | null>(null);
const animationStarted = ref(false);

const ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789/&$%£€ÈÒLÀ+.";
const ALPHABET_LENGTH = ALPHABET.length;

const ANIMATION_DURATION_MIN = 400;
const ANIMATION_DURATION_MAX = 1000;

const RANDOMIZE_TIME = 70;

const displayText = ref(text);

function randomChar() {
  const random = Math.round(Math.random() * ALPHABET_LENGTH) % ALPHABET_LENGTH;
  return ALPHABET[random];
}

function startLetterAnimation(letter: string, i: number) {
  const duration =
    ANIMATION_DURATION_MIN +
    ((ANIMATION_DURATION_MAX - ANIMATION_DURATION_MIN) / text.length) * (i + 1);

  const interval = setInterval(() => {
    displayText.value =
      displayText.value.slice(0, i) + randomChar() + displayText.value.slice(i + 1);
  }, RANDOMIZE_TIME);

  setTimeout(() => {
    clearInterval(interval);
    displayText.value = displayText.value.slice(0, i) + letter + displayText.value.slice(i + 1);
  }, duration);
}

function startAnimation() {
  animationStarted.value = true;
  Array.from(text).forEach((letter, i) => {
    if (letter === " ") return;
    startLetterAnimation(letter, i);
  });
}

onMounted(() => {
  window.addEventListener(
    "scroll",
    () => {
      const visible = isVisible(element.value!);
      if (!animationStarted.value && visible) startAnimation();
      else if (!visible) animationStarted.value = false;
    },
    { passive: true }
  );
});
</script>
