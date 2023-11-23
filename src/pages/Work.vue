<template>
  <PageWrapper class="flex flex-col justify-center" id="work" ref="pageRef" v-bind="props">
    <Header>WORK</Header>

    <div
      class="relative flex h-[70%] flex-col gap-8 pl-4 lg:h-auto lg:w-[90%] lg:flex-1 lg:gap-20 lg:pl-8"
    >
      <p :class="textVisible ? 'visible' : 'invisible opacity-0'" class="transition-all">
        I had the opportunity to work for many companies with many different technologies, from
        small startups to bigger companies.
        <br />
        Each experience taught me something and I continously improved in my learning journey.
      </p>

      <div
        class="timeline-container absolute top-1/2 flex h-full w-full flex-1 -translate-y-1/2 flex-col overflow-auto lg:overflow-visible"
      >
        <Experiences class="flex-1" />
      </div>
    </div>

    <CloseBracket />
  </PageWrapper>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import Experiences from "@/components/Experiences.vue";
import CloseBracket from "@/components/CloseBracket.vue";
import type { PageProps } from "@/utils/pages";
import { ref } from "vue";

const props = defineProps<PageProps>();
const textVisible = ref(true);
</script>

<style scoped>
.timeline-container {
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}
</style>
