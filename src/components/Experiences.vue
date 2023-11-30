<template>
  <div
    class="timeline-container absolute top-1/2 flex h-full w-full flex-1 -translate-y-1/2 flex-col overflow-auto 2xl:overflow-visible"
    @scroll="onMobileScroll"
  >
    <section
      class="relative flex w-[250vh] flex-1 items-center gap-4 text-primary 2xl:w-full"
      :style="`
      --experiences: ${EXPERIENCES.length};
      --primary: ${primaryColor};
      --secondary: ${secondaryColor};
      --mobile-experience: ${mobileExperience}`"
    >
      <div class="scroll-snap">{{ Math.min(...EXPERIENCES.map((exp) => exp.start)) }}</div>
      <div class="relative w-full">
        <hr class="line absolute h-1 w-full rounded-md bg-secondary text-secondary" />

        <hr
          class="line-secondary line-secondary-mobile line-secondary-width-mobile absolute left-0 h-1 rounded-md bg-primary text-primary transition-all duration-[0.35s]"
          :class="activeExperience ? 'line-animation' : 'line-still'"
          :style="`--experience-idx: ${activeExperienceIdx}`"
        />
      </div>
      <div class="scroll-snap pr-4 2xl:p-0">{{ new Date().getFullYear() }}</div>

      <div class="absolute left-0 flex w-full items-center justify-evenly">
        <div
          v-for="(experience, i) in EXPERIENCES"
          class="dot-border after:transition-all"
          :class="{
            '2xl:after:!border-primary': activeExperienceIdx === i,
            '2xl:after:!border-secondary': activeExperienceIdx !== i,
            'after:border-primary': mobileExperience - 1 === i
          }"
          :key="experience.title"
        />
      </div>

      <div class="absolute left-0 flex w-full items-center justify-evenly text-responsive-h3">
        <div
          v-for="(experience, i) in EXPERIENCES"
          :key="experience.title"
          :style="`--text: '${experience.title}'`"
          :class="{
            'hidden-dot-important': activeExperience && experience.title === activeExperience,
            'mobile-only:hidden-dot-important': i % 2 === 0,
            'top-title': i % 2 !== 0
          }"
          class="dot-title"
        />
      </div>

      <div class="dot-container absolute left-0 flex w-full items-center justify-evenly">
        <button
          v-for="(experience, i) in EXPERIENCES"
          class="dot scroll-snap"
          aria-label="Work Experience"
          :key="experience.title"
          @mouseover="() => setActiveExperience(experience.title)"
          @mouseleave="() => setActiveExperience('')"
        >
          <article
            class="dot-article"
            :class="{
              '2xl:hidden-dot': !activeExperience || experience.title !== activeExperience,
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
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import tailwindConfig from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const config = resolveConfig(tailwindConfig);
const primaryColor = config.theme.colors.primary;
const secondaryColor = config.theme.colors.secondary;

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
    text: "Designed booking & payment infrastructure and created a mobile app for automated bookings at a simulator-based driving school.",
    note: "Norway | Aug 2022 - Jun 2023"
  },

  {
    start: 2020,
    title: "pianobit s.r.l",
    text: "Led NodeJS full-stack development for a SaaS firm, with robust microservices and real-time trading features. Developed secure solutions and a seamless Vue.js interface for file sharing.",
    note: "Italy | Jun 2020 - Jul 2022"
  },
  {
    start: 2018,
    title: "Freelancer",
    text: "I've worked for hundreds of clients as a freelancer in many different fields of programming, from GUI development to Machine Learning & AI",
    note: "Worldwide | Jan 2018 - Feb 2022"
  }
].sort((exp1, exp2) => exp1.start - exp2.start);

const mobileExperience = ref(1);

const activeExperience = ref("");
const activeExperienceIdx = ref(-1);

let timeout: number;

function setActiveExperience(title: string) {
  activeExperience.value = title;
  if (!title) emit("experienceUnfocus");
  else emit("experienceFocus");
}

watch(
  () => activeExperience.value,
  (val) => {
    const idx = EXPERIENCES.findIndex((exp) => exp.title === val);

    if (idx === -1) return (timeout = setTimeout(() => (activeExperienceIdx.value = -1), 500));
    clearTimeout(timeout);
    activeExperienceIdx.value = idx;
  }
);

function onMobileScroll(e: Event) {
  const factor = (EXPERIENCES.length + 2) * EXPERIENCES.length;
  const element = e.target as HTMLElement;
  const scrollPercentage = (100 * element.scrollLeft) / (element.scrollWidth - element.clientWidth);

  mobileExperience.value = Math.min(Math.floor(scrollPercentage / factor) + 1, EXPERIENCES.length);
}
</script>

<style scoped>
.timeline-container {
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

div,
article {
  @apply transition-all;
}

.scroll-snap {
  scroll-snap-align: center;
}

.line {
  box-shadow: 0 0 1em 0.05em var(--secondary);
}

.line-secondary {
  --padding: calc((var(--experience-idx) - 1) * 4.5rem);
  --left-pos: calc(
    calc(var(--experience-idx) * (100% / (var(--experiences) + 2))) + var(--padding)
  );

  --width: calc((100% / var(--experiences) - 1.5rem) + var(--left-pos));

  --animation-duration: 0.375s;
  box-shadow: 0 0 1em 0.05em var(--secondary);
}
.dot {
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

  @apply aspect-square h-10 rounded-full border-4;
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

.dot-article {
  @apply absolute left-1/2 flex w-[90vw] -translate-x-1/2 flex-col gap-1 rounded-xl p-2 2xl:w-[30vw] 2xl:gap-2;
}

.article-top {
  @apply -top-[13.5rem] 2xl:-top-[18rem];
}

.article-bottom {
  @apply top-[2rem] 2xl:top-[3rem];
}

.top-title {
  @apply hidden-dot 2xl:visible 2xl:opacity-100;
}

.line-animation {
  animation: line-anim var(--animation-duration) ease-in forwards;
}

@keyframes line-anim {
  0% {
    left: 0;
    width: 0;
  }
  100% {
    width: var(--width);
    left: 0;
  }
}

@keyframes line-anim-reverse {
  0% {
    width: var(--width);
    left: 0;
  }

  100% {
    left: var(--width);
    width: 0;
  }
}

.line-still {
  animation: line-anim-reverse var(--animation-duration) ease-in forwards;
}

@keyframes line-anim-mobile {
  100% {
    width: 20% !important;
  }
}

@media (max-width: 1535px) {
  .line-secondary-mobile {
    --base-pct: calc(100% / (var(--experiences) + 2));
    --mobile-width: calc(
      (var(--base-pct) + 1.5rem) * var(--mobile-experience) + 4rem * (var(--mobile-experience) - 1)
    );

    width: 0 !important;
  }

  .line-secondary-width-mobile {
    width: var(--mobile-width) !important;
  }

  .line-animation {
    animation: none;
  }

  .line-still {
    animation: none;
  }
}
</style>
