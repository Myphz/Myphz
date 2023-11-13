<template>
  <PageWrapper class="flex flex-col justify-center" id="about">
    <header class="mb-8 flex gap-4 text-primary text-responsive-h2 lg:gap-8">
      <span>About</span>
      <span class="font-subheader text-secondary">{{ "{" }}</span>
    </header>
    <div class="flex flex-col gap-8 lg:w-[90%] lg:flex-row lg:gap-32 [&>*]:flex-1">
      <div class="flex flex-col gap-8">
        <div>
          <p>Software engineer with over 6 years of experience.</p>
          <p>Part time wizard & proud bug developer.</p>
        </div>

        <div class="hidden gap-2 text-secondary lg:flex">
          <img src="/icons/arch.png" />
          <span>I use Arch btw</span>
        </div>
      </div>

      <p class="mb-8 lg:mb-0">
        Fueled by a love for computer science since my youth, I've spent over 6 years improving my
        skills through various projects. I'm excel at breaking down complex problems into smaller
        tasks, which is crucial for creating strong and maintainable code in large projects. I
        thrive on challenges and am always looking for ways to improve my abilities. I've mostly
        learned on my own, allowing me to quickly understand and adapt to new technologies
        independently.
      </p>
    </div>
    <div class="mb-8 flex gap-2 text-secondary lg:hidden">
      <img src="/icons/arch.png" />
      <span>I use Arch btw</span>
    </div>

    <span class="font-subheader text-secondary text-responsive-h2">{{ "}" }}</span>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
</script>
