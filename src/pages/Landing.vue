<template>
  <PageWrapper>
    <div class="h-full flex flex-col justify-center gap-6">
      <MainText />
      <Typing
        class="font-subheader text-responsive-sub-h1 leading-none text-secondary"
        text="PROGRAMMER AND WEB DEVELOPER"
        :delay="2"
      />
      <div class="-mt-3 max-w-[40vw]">
        Self-taught programmer motivated by passion and personal projects. Expert of searching bugs
        on Google and quickly scanning the best StackOverflow answers.
      </div>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import MainText from "@/components/MainText.vue";
import Typing from "@/components/Typing.vue";
</script>
