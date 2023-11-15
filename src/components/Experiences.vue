<template>
  <section
    class="relative flex max-h-[30vh] flex-col gap-4 overflow-y-scroll lg:max-h-[50vh] lg:gap-12"
    ref="sectRef"
  >
    <template v-for="experience in EXPERIENCES" :key="experience.title">
      <Experience :title="experience.title" :note="experience.note">
        {{ experience.text }}
      </Experience>
      <div class="relative">
        <hr class="absolute h-px w-full bg-secondary text-secondary lg:h-1" />
        <hr
          class="absolute h-1 w-full bg-secondary text-secondary blur-[10px] lg:h-3 lg:blur-[20px]"
        />
      </div>
    </template>

    <Button variant="primary" class="flex items-center justify-center gap-4" @click="openResume">
      <span>See full resume</span>
      <ArrowIcon class="aspect-square w-[1em]" />
    </Button>
  </section>
</template>

<script setup lang="ts">
import Experience from "@/components/Experience.vue";
import Button from "@/components/Button.vue";
import ArrowIcon from "@/assets/arrow.svg";

import { ref } from "vue";

const EXPERIENCES = [
  {
    title: "ContinuumLab",
    text: "As a senior front-end developer at a venture firm, I designed a web interface for a social-media-like platform. I set up back-end communication with Strapi CMS using GraphQL, displayed real-time data with SSE and WebSockets, and integrated authentication providers like Keycloak.",
    note: "USA | Nov 2022 - Current"
  },
  {
    title: "Way AS",
    text: "Worked for a simulator-based driving school, implementing real-time GraphQL for user data, architecting booking and payment infrastructure, and creating a cross-platform mobile app for automated bookings and payments. Contributed to business growth by integrating with payment providers, Google Firebase, and Google Cloud platforms.",
    note: "Norway | Aug 2022 - Jun 2023"
  },

  {
    title: "pianobit s.r.l",
    text: "Led the development of a NodeJS full-stack web application for a SaaS company, implementing a secure microservices architecture and contributing to real-time trading features. Achieved 100% customer satisfaction through the delivery of robust back-end solutions and a seamless Vue.js front-end interface for file sharing.",
    note: "Italy | Jun 2020 - Jul 2022"
  },
  {
    title: "Freelancer",
    text: "I've worked for hundreds of clients as a freelancer in many different fields of programming, from GUI development to Machine Learning & AI",
    note: "Worldwide | Jan 2018 - Feb 2022"
  }
];

const openResume = () => window.open("google.com");

const sectRef = ref<HTMLDivElement | null>(null);

function scrollExperiences(scrollDown: boolean, amount: number) {
  const offset = scrollDown ? amount : -amount;
  sectRef.value?.scrollBy({ top: offset });

  const { scrollTop, scrollHeight, clientHeight } = sectRef.value!;

  return {
    scrolledUp: scrollTop === 0,
    scrolledDown: scrollTop + clientHeight >= scrollHeight
  };
}

defineExpose({ sectRef, scrollExperiences });
</script>

<style scoped>
section {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

section::-webkit-scrollbar {
  display: none;
}
</style>
