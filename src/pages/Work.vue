<template>
  <PageWrapper class="flex flex-col justify-center" id="work" ref="pageRef" v-bind="props">
    <Header>WORK</Header>

    <div class="flex flex-1 flex-col gap-20 pl-4 lg:w-[90%] lg:pl-8">
      <p>
        I had the opportunity to work for many companies with many different technologies, from
        small startups to bigger companies.
        <br />
        Each experience taught me something and I continously improved in my learning journey.
      </p>

      <Experiences class="flex-1" />
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

const props = defineProps<PageProps>();
</script>
