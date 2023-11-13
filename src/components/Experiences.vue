<template>
  <section
    class="relative flex max-h-[50vh] flex-col gap-4 overflow-y-scroll lg:gap-12"
    ref="section"
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
import { onMounted, ref } from "vue";

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

const section = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const sectRef = section.value;
  if (!sectRef) return;

  window.addEventListener("scroll", () => {
    const top = document.documentElement.scrollTop;
    console.log(top);
  });
});
</script>
