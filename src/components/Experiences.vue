<template>
  <section
    class="relative flex max-h-[30vh] flex-col gap-4 overflow-y-scroll lg:max-h-[50vh] lg:gap-12"
    ref="sectRef"
  >
    <template v-for="experience in EXPERIENCES" :key="experience.title">
      <Experience :title="experience.title" :footer="experience.footer">
        {{ experience.text }}
      </Experience>
      <div class="relative">
        <hr class="absolute h-px w-full bg-secondary text-secondary lg:h-1" />
        <hr
          class="absolute h-1 w-full bg-secondary text-secondary blur-[10px] lg:h-3 lg:blur-[20px]"
        />
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import Experience from "@/components/Experience.vue";
import { ref } from "vue";

const EXPERIENCES = [
  {
    title: "Freelancer",
    text: "I've worked for hundreds of clients as a freelancer in many different fields of programming, from GUI development to Machine Learning & AI",
    footer: "yes"
  },
  {
    title: "Freelancer",
    text: "I've worked for hundreds of clients as a freelancer in many different fields of programming, from GUI development to Machine Learning & AI",
    footer: "yes"
  },
  {
    title: "Freelancer",
    text: "I've worked for hundreds of clients as a freelancer in many different fields of programming, from GUI development to Machine Learning & AI",
    footer: "yes"
  }
];
const SCROLL_OFFSET = 10;

const sectRef = ref<HTMLDivElement | null>(null);

function scrollExperiences(scrollDown: boolean) {
  const offset = scrollDown ? SCROLL_OFFSET : -SCROLL_OFFSET;
  sectRef.value?.scrollBy({ top: offset });

  const { scrollTop, scrollHeight, clientHeight } = sectRef.value!;

  return {
    scrolledUp: scrollTop === 0,
    scrolledDown: scrollTop + clientHeight >= scrollHeight
  };
}

defineExpose({ sectRef, scrollExperiences });
</script>
