<template>
  <PageWrapper class="flex flex-col justify-center" id="work" ref="pageRef" v-bind="props">
    <Header>WORK</Header>

    <div
      class="relative flex h-[70%] flex-col gap-8 pl-4 2xl:h-auto 2xl:w-[90%] 2xl:flex-1 2xl:gap-20 2xl:pl-8"
    >
      <p
        class="hidden transition-all"
        :class="textVisible ? '2xl:block' : '2xl:hidden-dot 2xl:block'"
      >
        I had the opportunity to work for many companies with many different technologies, from
        small startups to bigger companies.
        <br />
        Each experience taught me something and I continuously improved in my learning journey.
      </p>

      <p class="absolute 2xl:hidden">DRAG TO EXPLORE</p>

      <Experiences
        @experience-focus="textVisible = false"
        @experience-unfocus="textVisible = true"
      />
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
