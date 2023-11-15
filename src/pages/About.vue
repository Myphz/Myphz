<template>
  <PageWrapper class="flex flex-col justify-center" id="about">
    <Header>About</Header>

    <div class="flex flex-col gap-8 pl-4 lg:w-[90%] lg:flex-row lg:gap-60 lg:pl-8 [&>*]:flex-1">
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
        skills through various projects.
        <br />
        I thoroughly enjoying computers & computer science ever since I was a kid. I remember
        messing with computers when I was just 9 years old!
        <br />
        Ever since then, I've been learning anything that interested me on my own. I had the
        opportunity to learn several technologies and languages that stuck with me and made me
        better understand how everything works.
      </p>
    </div>
    <div class="ml-4 flex gap-2 text-secondary lg:hidden">
      <img src="/icons/arch.png" />
      <span>I use Arch btw</span>
    </div>

    <span class="mt-8 font-subheader text-secondary text-responsive-h2">{{ "}" }}</span>
  </PageWrapper>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import PageWrapper from "@/components/PageWrapper.vue";
</script>
