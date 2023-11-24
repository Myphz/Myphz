<template>
  <PageWrapper class="flex flex-col justify-center" id="skills" v-bind="props">
    <Header>SKILLS</Header>

    <div class="flex flex-col gap-8 pl-4 lg:w-[90%] lg:flex-row lg:gap-60 lg:pl-8">
      <p>
        I excel in dissecting complex problems into manageable tasks, essential for crafting robust,
        maintainable code in large-scale projects. I'm driven by challenges, always seeking
        opportunities to enhance my skills. My self-directed learning approach empowers me to
        quickly grasp and adapt to new technologies autonomously.
      </p>

      <div class="flex justify-between lg:gap-40">
        <div class="flex flex-col justify-center gap-3 lg:gap-6">
          <div class="flex gap-4" v-for="language in LANGUAGES" :key="language.name">
            <img :src="`/icons/${language.icon}.svg`" class="w-6 lg:w-8" />
            <span>{{ language.name }}</span>
          </div>
        </div>
        <div class="relative">
          <hr class="absolute h-full w-px bg-secondary lg:-top-[20%] lg:h-[140%] lg:w-1" />
          <hr
            class="absolute h-full w-1 bg-secondary blur-[10px] lg:-top-[20%] lg:h-[140%] lg:w-3 lg:blur-[20px]"
          />
        </div>
        <div class="flex flex-col justify-center gap-3 lg:gap-6">
          <div class="flex gap-4" v-for="technology in TECHNOLOGIES" :key="technology.name">
            <img :src="`/icons/${technology.icon}.svg`" class="w-6 lg:w-8" />
            <span>{{ technology.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <CloseBracket />
  </PageWrapper>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import CloseBracket from "@/components/CloseBracket.vue";
import type { PageProps } from "@/utils/pages";

const props = defineProps<PageProps>();

const LANGUAGES = [
  {
    name: "TypeScript",
    icon: "ts"
  },
  {
    name: "JavaScript",
    icon: "js"
  },
  {
    name: "Python",
    icon: "python"
  },
  {
    name: "Rust",
    icon: "rust"
  },
  {
    name: "C",
    icon: "c"
  }
];

const TECHNOLOGIES = [
  {
    name: "HTML",
    icon: "html"
  },
  {
    name: "Vue.js",
    icon: "vue"
  },
  {
    name: "React",
    icon: "react"
  },
  {
    name: "Node.js",
    icon: "node"
  },
  {
    name: "Tailwind",
    icon: "tailwind"
  }
];
</script>
