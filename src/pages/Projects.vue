<template>
  <PageWrapper
    class="flex flex-col justify-center !py-20 2xl:py-28"
    id="projects"
    ref="page"
    v-bind="props"
  >
    <Header>PROJECTS</Header>

    <Projects class="flex-1" ref="projects" />

    <CloseBracket />
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import Header from "@/components/Header.vue";
import Projects from "@/components/Projects.vue";
import { ref } from "vue";
import CloseBracket from "@/components/CloseBracket.vue";
import type { PageProps } from "@/utils/pages";

const page = ref(null);
const projects = ref(null);

const props = defineProps<PageProps>();
</script>
