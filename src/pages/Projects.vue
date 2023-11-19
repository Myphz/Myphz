<template>
  <PageWrapper
    class="flex flex-col justify-center py-20 lg:py-28"
    id="projects"
    ref="page"
    v-bind="props"
  >
    <Header>Projects</Header>

    <Projects class="flex-1" ref="projects" />

    <span class="mt-8 font-subheader text-secondary text-responsive-h2">{{ "}" }}</span>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import Header from "@/components/Header.vue";
import Projects from "@/components/Projects.vue";
import { onMounted, ref } from "vue";
import { useScrollHijacking } from "@/utils/scroll";
import type { PageProps } from "@/utils/pages";

const page = ref(null);
const projects = ref(null);

const props = defineProps<PageProps>();

onMounted(() => {
  // @ts-ignore
  useScrollHijacking(page.value!.pageRef, projects.value.scrollProjects);
});
</script>
