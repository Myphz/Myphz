<template>
  <PageWrapper class="flex flex-col justify-center" id="work">
    <Header>Work</Header>

    <div class="flex flex-col gap-8 pl-4 lg:w-[90%] lg:flex-row lg:gap-60 lg:pl-8">
      <p class="flex-1">
        I excel in dissecting complex problems into manageable tasks, essential for crafting robust,
        maintainable code in large-scale projects. I'm driven by challenges, always seeking
        opportunities to enhance my skills. My self-directed learning approach empowers me to
        quickly grasp and adapt to new technologies with autonomy.
      </p>

      <div class="flex flex-1 flex-col">
        <div>aa</div>
        <div>aa</div>
      </div>
    </div>

    <span class="mt-8 font-subheader text-secondary text-responsive-h2">{{ "}" }}</span>
  </PageWrapper>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import PageWrapper from "@/components/PageWrapper.vue";
</script>
