<template>
  <PageWrapper>
    <section class="h-full flex flex-col justify-center gap-6">
      <MainText />
      <!-- <Typing
        class="max-w-[50vw] font-subheader text-responsive-sub-h1 leading-none text-secondary"
        text="PROFESSIONAL GOOGLE SEARCHER"
        :delay="1.5"
      /> -->
      <TypingAlternate :tokens="HEADLINES" />
      <div class="-mt-3 max-w-[40vw]">
        Self-taught programmer motivated by passion and personal projects. Expert of searching bugs
        on Google and quickly scanning the best StackOverflow answers.
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

const HEADLINES = [
  "Software Engineer",
  "Web Developer",
  "Expert Google Searcher",
  "Bug Developer",
  "Code Wizard",
  "Rust Enjoyer"
];
</script>
