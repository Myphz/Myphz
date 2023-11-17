<template>
  <PageWrapper class="flex flex-col justify-center" id="work" ref="pageRef">
    <Header>Work</Header>

    <div class="flex flex-col gap-8 pl-4 lg:w-[90%] lg:flex-row lg:gap-60 lg:pl-8 lg:[&>*]:flex-1">
      <p>
        I had the opportunity to work for many companies with many different technologies, from
        small startups to bigger companies.
        <br />
        Each experience taught me something and I continously improved in my learning journey.
      </p>

      <Experiences ref="experiencesRef" />
    </div>

    <span class="mt-8 font-subheader text-secondary text-responsive-h2">{{ "}" }}</span>
  </PageWrapper>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import Experiences from "@/components/Experiences.vue";
import { onMounted, ref } from "vue";
import { useScrollHijacking } from "@/utils/scroll";

const experiencesRef = ref(null);
const pageRef = ref(null);

onMounted(() => {
  const page = (pageRef.value as any).pageRef as HTMLDivElement;
  const scrollFn = (experiencesRef.value! as any).scrollExperiences;

  useScrollHijacking(page, scrollFn);
});
</script>
