<template>
  <PageWrapper class="flex flex-col pt-[20vh] lg:block lg:pt-0">
    <section class="flex h-full flex-col justify-center gap-3 lg:gap-6">
      <MainText />
      <TypingAlternate class="leading-none lg:max-w-[50vw]" :tokens="HEADLINES" />
      <div class="lg:-mt-3 lg:max-w-[40vw]">
        Self-taught programmer motivated by passion and personal projects. Expert of searching bugs
        on Google and quickly scanning the best StackOverflow answers.
      </div>

      <div class="mt-6 flex gap-3 lg:gap-6">
        <Button variant="primary">Contact Me</Button>
        <Button variant="secondary" class="flex items-center gap-2 lg:gap-4">
          <span>Learn More</span>
          <img src="/icons/arrow.svg" />
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

const HEADLINES = [
  "SOFTWARE ENGINEER",
  "WEB DEVELOPER",
  "EXPERT GOOGLE SEARCHER",
  "BUG DEVELOPER",
  "CODE WIZARD",
  "RUST ENJOYER"
];
</script>
