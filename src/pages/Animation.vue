<template>
  <PageWrapper page-id="Animation" class="flex flex-col gap-2 font-terminal text-secondary">
    <div class="flex gap-4">
      <div>myphz@archlinux: ~$</div>
      <Typing :delay="1000" :speed="7">exec ./ddaniel.dev</Typing>
    </div>

    <div v-show="timers.firstLog">Server starting...</div>
    <div v-show="timers.secondLog">Server listening on 127.0.0.1:5173</div>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import Typing from "@/components/Typing.vue";
import { onMounted, reactive } from "vue";

const emit = defineEmits(["endAnimation"]);

const TOTAL_TIME = 5621;

type ToBoolean<T> = {
  [K in keyof T]: boolean;
};

const TIMES = {
  firstLog: 4121,
  secondLog: 5321
};

const timers = reactive(
  Object.keys(TIMES).reduce(
    (acc, curr) => {
      acc[curr as keyof typeof TIMES] = false;
      return acc;
    },
    {} as ToBoolean<typeof TIMES>
  )
);
onMounted(() => {
  for (const [key, delay] of Object.entries(TIMES)) {
    setTimeout(() => (timers[key as keyof typeof timers] = true), delay);
  }

  setTimeout(() => emit("endAnimation"), TOTAL_TIME);
});
</script>
