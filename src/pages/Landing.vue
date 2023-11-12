<template>
  <PageWrapper>
    <section class="h-full flex flex-col justify-center gap-6">
      <MainText />
      <TypingAlternate class="max-w-[50vw] leading-none" :tokens="HEADLINES" />
      <div class="-mt-3 max-w-[40vw]">
        Self-taught programmer motivated by passion and personal projects. Expert of searching bugs
        on Google and quickly scanning the best StackOverflow answers.
      </div>

      <div class="mt-6 flex gap-6">
        <Button variant="primary">Contact Me</Button>
        <Button variant="secondary" class="flex items-center gap-4">
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
  "Software Engineer",
  "Web Developer",
  "Expert Google Searcher",
  "Bug Developer",
  "Code Wizard",
  "Rust Enjoyer"
];
</script>
