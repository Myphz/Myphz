<template>
  <PageWrapper page-id="Animation" class="flex flex-col gap-2 font-terminal text-secondary">
    <button
      class="absolute bottom-12 right-0 flex items-center gap-2 text-responsive-h6 2xl:bottom-auto 2xl:top-20"
      @click="endAnimation"
    >
      <span>Skip Animation</span>
      <img src="/icons/chevrons-right.svg" class="aspect-square h-[1.25em]" alt="skip" />
    </button>

    <div class="flex flex-col gap-2" v-if="timers.history">
      <div class="flex gap-4">
        <div class="font-bold">{{ BASE_PROMPT }}</div>
        <div>pwd</div>
      </div>

      <div>/home/daniel/Documents</div>

      <div class="flex gap-4">
        <div class="font-bold">{{ BASE_PROMPT }}</div>
        <div>cd portfolio</div>
      </div>

      <div class="flex gap-4">
        <div class="font-bold">{{ BASE_PROMPT }}</div>
        <div>ls</div>
      </div>

      <div>
        node_modules/ package-lock.json public/ src/ index.html package.json postcss.config.js
        README.md tailwind.config.ts tsconfig.json vite.config.ts ddaniel.dev
      </div>

      <div class="flex gap-4">
        <div class="font-bold">{{ BASE_PROMPT }}</div>
        <Typing :delay="500" :speed="10" :disable-caret-after="0">cleak</Typing>
      </div>

      <div v-if="timers.typeClear">bash: cleak: command not found</div>

      <div class="flex gap-4" v-if="timers.typeClear">
        <div class="font-bold">{{ BASE_PROMPT }}</div>
        <Typing :delay="500" :speed="10">clear</Typing>
      </div>
    </div>

    <div class="flex gap-4" v-if="!timers.history">
      <div class="font-bold">{{ BASE_PROMPT }}</div>
      <Typing :delay="500" :speed="10">exec ./ddaniel.dev</Typing>
    </div>

    <div v-show="timers.firstLog">Server starting...</div>
    <div v-show="timers.secondLog">Server listening on http://localhost:5173</div>
    <div v-show="timers.firstLog" class="h-[1em] w-px bg-secondary"></div>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import Typing from "@/components/Typing.vue";

import { onMounted, reactive } from "vue";

const emit = defineEmits(["endAnimation"]);

const TOTAL_TIME = 8300;

const BASE_PROMPT = "myphz@archlinux:$";

type ToBoolean<T> = {
  [K in keyof T]: boolean;
};

// Logic:
// After 0.5s -> start typing 'cleak'
// 'cleak' takes 0.7s.
// After 2s -> start typing 'clear'.
// 'clear' takes 1s.
// After 3s -> clear history
// After 3.5s -> start typing 'exec ./ddaniel.dev'
// 'exec ./ddaniel.dev' takes 2.3s.
// After 5.8s -> logs first log.
// After 7.8s -> logs second log.
// After 8.3s -> disappears.

const TIMES: Record<string, { delay: number; defaultValue?: boolean }> = {
  typeClear: { delay: 1200 },
  history: { delay: 3000, defaultValue: true },
  firstLog: { delay: 5800 },
  secondLog: { delay: 7800 }
};

const timers = reactive(
  Object.entries(TIMES).reduce(
    (acc, [key, value]) => {
      acc[key as keyof typeof TIMES] = value.defaultValue || false;
      return acc;
    },
    {} as ToBoolean<typeof TIMES>
  )
);

const endAnimation = () => emit("endAnimation");

onMounted(() => {
  for (const [key, value] of Object.entries(TIMES)) {
    const { delay, defaultValue = false } = value;
    setTimeout(() => (timers[key as keyof typeof timers] = !defaultValue), delay);
  }

  setTimeout(endAnimation, TOTAL_TIME);
});
</script>
