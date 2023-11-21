<template>
  <section
    class="relative flex w-[200vh] items-center gap-4 overflow-y-hidden overflow-x-scroll text-primary lg:w-full lg:overflow-hidden"
    :style="`
    --experiences: ${EXPERIENCES.length};
    --primary: ${primaryColor};
    --secondary: ${secondaryColor}`"
  >
    <div>{{ Math.min(...EXPERIENCES.map((exp) => exp.start)) }}</div>
    <hr class="line h-1 w-full rounded-md bg-secondary text-secondary" />
    <div>{{ new Date().getFullYear() }}</div>

    <div class="absolute inset-0 z-20 flex w-full items-center justify-around lg:justify-evenly">
      <div
        v-for="experience in EXPERIENCES"
        class="dot"
        :class="activeExperience && experience.title !== activeExperience && 'hidden-dot'"
        :key="experience.title"
        @mouseover="activeExperience = experience.title"
        @mouseleave="activeExperience = ''"
      />
    </div>

    <div class="absolute inset-0 flex w-full items-center justify-around lg:justify-evenly">
      <div
        v-for="experience in EXPERIENCES"
        class="dot-border"
        :class="activeExperience && experience.title !== activeExperience && 'hidden-dot'"
        :key="experience.title"
      />
    </div>

    <div
      class="absolute inset-0 flex w-full items-center justify-around text-responsive-h3 lg:justify-evenly"
    >
      <div
        v-for="experience in EXPERIENCES"
        :key="experience.title"
        :style="`--text: '${experience.title}'`"
        class="dot-title"
        :class="activeExperience && experience.title !== activeExperience && 'hidden-dot'"
      />
    </div>

    <div class="absolute inset-0 w-full">
      <article
        v-for="(experience, i) in EXPERIENCES"
        :key="experience.title"
        :style="`--order: ${i + 1}`"
        class="dot-description"
        :class="(!activeExperience || experience.title !== activeExperience) && 'hidden-dot'"
      >
        <header class="text-primary text-responsive-h3">
          {{ experience.title }}
        </header>
        <div class="mt-4 w-full text-text text-responsive-h5">{{ experience.text }}</div>
        <footer>{{ experience.note }}</footer>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import tailwindConfig from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const EXPERIENCES = [
  {
    start: 2023,
    title: "ContinuumLab",
    text: "As a senior front-end developer, I designed a social-media platform interface, connecting to Strapi CMS with GraphQL, implementing real-time data display, and integrating authentication providers like Keycloak.",
    note: "USA | Nov 2022 - Current"
  },
  {
    start: 2022,
    title: "Way AS",
    text: "Implemented real-time GraphQL, designed booking/payment infrastructure, and created a mobile app for automated bookings at a simulator-based driving school.",
    note: "Norway | Aug 2022 - Jun 2023"
  },

  {
    start: 2020,
    title: "pianobit s.r.l",
    text: "Led NodeJS full-stack web app development for a SaaS firm, with robust microservices and real-time trading features. Developed secure solutions and a seamless Vue.js interface for file sharing.",
    note: "Italy | Jun 2020 - Jul 2022"
  },
  {
    start: 2018,
    title: "Freelancer",
    text: "I've worked for hundreds of clients as a freelancer in many different fields of programming, from GUI development to Machine Learning & AI",
    note: "Worldwide | Jan 2018 - Feb 2022"
  }
].sort((exp1, exp2) => exp1.start - exp2.start);

const config = resolveConfig(tailwindConfig);
const primaryColor = config.theme.colors.primary;
const secondaryColor = config.theme.colors.secondary;

const activeExperience = ref("");
</script>

<style scoped>
div,
article {
  @apply transition-all;
}
.line {
  box-shadow: 0 0 1em 0.1em var(--secondary);
}
.dot {
  box-shadow: 0 0 1em 0.3em var(--primary);
  @apply aspect-square h-6 rounded-full bg-primary;
}

.dot-border {
  @apply relative aspect-square h-6 rounded-full;
}

.dot-border::after {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  @apply aspect-square h-10 rounded-full border-4 border-secondary;
}

.dot-title {
  @apply relative aspect-square h-6 rounded-full;
}

.dot-title::after {
  position: absolute;
  content: var(--text);
  top: 50%;
  left: 50%;
  translate: -50% calc(-50% + 4rem);

  @apply w-max;
}

.hidden-dot {
  opacity: 0;
  visibility: hidden;
}

.dot-description {
  @apply absolute flex w-[30vw] flex-col gap-2 rounded-xl bg-background p-8;
  left: calc(100% / (var(--experiences) + 2) * var(--order) + 1.5rem * var(--order) * 2);
  translate: -50% -15rem;
}
</style>
