<template>
  <section
    class="timeline-container relative flex w-[180vh] flex-1 items-center gap-4 text-primary lg:w-full"
    :style="`
    --experiences: ${EXPERIENCES.length};
    --primary: ${primaryColor};
    --secondary: ${secondaryColor}`"
  >
    <div>{{ Math.min(...EXPERIENCES.map((exp) => exp.start)) }}</div>
    <div class="relative w-full">
      <hr class="line absolute h-1 w-full rounded-md bg-secondary text-secondary" />
      <Transition
        @enter="lineAnimationRunning = true"
        @leave="lineAnimationRunning = false"
        :css="false"
      >
        <hr
          v-show="activeExperienceIdx !== -1"
          class="line-secondary absolute left-0 h-1 rounded-md bg-primary text-primary"
          :class="{ 'line-animation': lineAnimationRunning }"
          :style="`--experience-idx: ${activeExperienceIdx}`"
        />
      </Transition>
    </div>
    <div class="pr-4 lg:p-0">{{ new Date().getFullYear() }}</div>

    <div class="absolute left-0 flex w-full items-center justify-evenly">
      <div v-for="experience in EXPERIENCES" class="dot-border" :key="experience.title" />
    </div>

    <div class="absolute left-0 flex w-full items-center justify-evenly text-responsive-h3">
      <div
        v-for="experience in EXPERIENCES"
        :key="experience.title"
        :style="`--text: '${experience.title}'`"
        class="dot-title"
      />
    </div>

    <div class="dot-container absolute left-0 flex w-full items-center justify-evenly">
      <button
        v-for="(experience, i) in EXPERIENCES"
        class="dot"
        :key="experience.title"
        @mouseover="() => setActiveExperience(experience.title)"
        @mouseleave="() => setActiveExperience('')"
        @click="() => toggleExperience(experience.title)"
        v-click-outside="() => disableExperience(experience.title)"
      >
        <article
          class="dot-article"
          :class="{
            'hidden-dot': !activeExperience || experience.title !== activeExperience,
            'article-top': i % 2 !== 0,
            'article-bottom': i % 2 === 0
          }"
        >
          <header class="text-primary text-responsive-h3">
            {{ experience.title }}
          </header>
          <div class="w-full text-text text-responsive-h5">{{ experience.text }}</div>
          <footer>{{ experience.note }}</footer>
        </article>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import tailwindConfig from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

import { clickOutside as vClickOutside } from "@/utils/clickoutside";

const emit = defineEmits(["experienceFocus", "experienceUnfocus"]);

const EXPERIENCES = [
  {
    start: 2023,
    title: "ContinuumLab",
    text: "As a senior front-end developer, I designed a social-media platform interface, connecting to Strapi CMS with GraphQL & real-time capabilities, and integrating authentication providers",
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
const activeExperienceIdx = computed(() =>
  EXPERIENCES.findIndex((exp) => exp.title === activeExperience.value)
);
const lineAnimationRunning = ref(false);

function setActiveExperience(title: string) {
  activeExperience.value = title;
  if (!title) emit("experienceUnfocus");
  else emit("experienceFocus");
}

function toggleExperience(experience: string) {
  if (activeExperience.value === experience) {
    activeExperience.value = "";
    emit("experienceUnfocus");
  } else {
    activeExperience.value = experience;
    emit("experienceFocus");
  }
}

function disableExperience(experience: string) {
  if (activeExperience.value === experience) {
    activeExperience.value = "";
    emit("experienceUnfocus");
  }
}
</script>

<style scoped>
div,
article {
  @apply transition-all;
}

.line {
  box-shadow: 0 0 1em 0.05em var(--secondary);
}

.line-secondary {
  box-shadow: 0 0 1em 0.05em var(--secondary);
}
.dot {
  scroll-snap-align: center;
  box-shadow: 0 0 1em 0.3em var(--primary);
  @apply relative aspect-square h-6 rounded-full bg-primary;
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
  translate: -50% calc(-50% + 3rem);

  @apply w-max;
}

.hidden-dot {
  opacity: 0;
  visibility: hidden;
}

.dot-article {
  @apply absolute left-1/2 flex w-[80vw] -translate-x-1/2 flex-col gap-1 rounded-xl border border-secondary bg-background p-2 lg:w-[30vw] lg:gap-2;
}

.article-top {
  @apply -top-[15rem] lg:-top-[18rem];
}

.article-bottom {
  @apply top-[3rem];
}

.line-animation {
  --padding: calc((var(--experience-idx) - 1) * 4.5rem);
  --left-pos: calc(
    calc(var(--experience-idx) * (100% / (var(--experiences) + 2))) + var(--padding)
  );

  --width: calc((100% / var(--experiences) - 1.5rem) + var(--left-pos));

  animation: line-anim 0.75s ease-in forwards;
}

@keyframes line-anim {
  0% {
    left: 0;
    width: 0;
  }
  50% {
    width: var(--width);
    left: 0;
  }
  100% {
    width: 0;
    left: var(--width);
  }
}
</style>
