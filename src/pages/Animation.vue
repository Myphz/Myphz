<template>
  <PageWrapper page-id="Animation" class="flex flex-col gap-2 font-terminal text-secondary">
    <div class="flex flex-col gap-2" v-if="timers.history">
      <div class="flex gap-4">
        <div>myphz@archlinux: ~$</div>
        <div>pwd</div>
      </div>

      <div>/home/daniel/Documents</div>

      <div class="flex gap-4">
        <div>myphz@archlinux: ~$</div>
        <div>cd portfolio</div>
      </div>

      <div class="flex gap-4">
        <div>myphz@archlinux: ~$</div>
        <div>ls</div>
      </div>

      <div>
        node_modules/ package-lock.json public/ src/ index.html package.json postcss.config.js
        README.md tailwind.config.ts tsconfig.json vite.config.ts ddaniel.dev
      </div>

      <div class="flex gap-4">
        <div>myphz@archlinux: ~$</div>
        <!-- Takes 1.21 seconds (without delay) -->
        <Typing :delay="1000" :speed="7">clear</Typing>
      </div>
    </div>

    <div class="flex gap-4" v-if="!timers.history">
      <div>myphz@archlinux: ~$</div>
      <!-- Takes 3.07 seconds (without delay) -->
      <Typing :delay="1000" :speed="7">exec ./ddaniel.dev</Typing>
    </div>

    <div v-show="timers.firstLog">Server starting...</div>
    <div v-show="timers.secondLog">Server listening on 127.0.0.1:5173</div>
    <div v-show="timers.firstLog" class="h-[1em] w-px bg-secondary"></div>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import Typing from "@/components/Typing.vue";
import { onMounted, reactive } from "vue";

const emit = defineEmits(["endAnimation"]);

const TOTAL_TIME = 8881;

type ToBoolean<T> = {
  [K in keyof T]: boolean;
};

const TIMES: Record<string, { delay: number; defaultValue?: boolean }> = {
  history: { delay: 2210, defaultValue: true },
  firstLog: { delay: 6381 },
  secondLog: { delay: 8581 }
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
onMounted(() => {
  for (const [key, value] of Object.entries(TIMES)) {
    const { delay, defaultValue = false } = value;
    setTimeout(() => (timers[key as keyof typeof timers] = !defaultValue), delay);
  }

  setTimeout(() => emit("endAnimation"), TOTAL_TIME);
});
</script>
