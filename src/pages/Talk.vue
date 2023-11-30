<template>
  <PageWrapper class="flex flex-col items-center justify-center" v-bind="props">
    <header
      class="relative flex w-fit flex-col items-center text-[8vw] font-extralight leading-none text-primary before:text-secondary after:text-secondary 2xl:text-[5vw]"
    >
      <VariableFontTypingText text="“TALK IS CHEAP." />
      <VariableFontTypingText text="SHOW ME THE CODE”" :delay="2000" />
    </header>
    <Typing class="ml-[40vw] mt-4 text-center" :delay="4800">- Linus Torvalds</Typing>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import Typing from "@/components/Typing.vue";
import VariableFontTypingText from "@/components/VariableFontTypingText.vue";
import type { PageProps } from "@/utils/pages";

const props = defineProps<PageProps>();
</script>

<style scoped>
header {
  text-shadow: 0 0.03em 0.2em currentColor;
}
</style>
