<template>
  <PageWrapper class="flex flex-col pt-[10vh] 2xl:block 2xl:pt-0" v-bind="props" id="landing">
    <section class="flex h-full flex-col justify-center gap-3 2xl:gap-6">
      <MainText />
      <TypingAlternate class="leading-none 2xl:max-w-[50vw]" :tokens="HEADLINES" />
      <p class="2xl:-mt-3 2xl:max-w-[40vw]">
        Self-taught programmer motivated by passion and personal projects. Expert of searching bugs
        on Google and quickly scanning the best StackOverflow answers.
      </p>

      <div class="button-container mt-6 flex gap-3 2xl:gap-6">
        <Button variant="primary" @click="redirect('contact')">Contact Me</Button>
        <Button
          variant="secondary"
          class="flex items-center gap-2 2xl:gap-4"
          @click="redirect('about')"
        >
          <span>Learn More</span>
          <ArrowIcon />
        </Button>
      </div>
    </section>

    <Blobs />
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import MainText from "@/components/MainText.vue";
import Blobs from "@/components/Blobs.vue";
import TypingAlternate from "@/components/TypingAlternate.vue";
import Button from "@/components/Button.vue";
import ArrowIcon from "@/assets/arrow.svg";
import type { PageProps } from "@/utils/pages";

const redirect = (to: string) => {
  window.location.hash = to;
};

const props = defineProps<PageProps>();

const HEADLINES = [
  "SOFTWARE ENGINEER",
  "WEB DEVELOPER",
  "FULL STACK DEVELOPER",
  "EXPERT GOOGLE SEARCHER",
  "BUG DEVELOPER",
  "CODE WIZARD",
  "RUST ENJOYER"
];
</script>

<style scoped>
p,
.button-container {
  translate: 0 40%;
  opacity: 0;
  animation: fadeUp 0.25s ease-in-out 1.5s forwards;
}

@keyframes fadeUp {
  to {
    translate: 0 0;
    opacity: 1;
  }
}
</style>
