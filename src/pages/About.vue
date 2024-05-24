<template>
  <PageWrapper class="flex flex-col justify-center" id="about" v-bind="props">
    <Header>ABOUT</Header>

    <div class="flex flex-col gap-8 pl-4 2xl:w-[90%] 2xl:flex-row 2xl:gap-60 2xl:pl-8 [&>*]:flex-1">
      <div class="flex flex-col gap-8">
        <div>
          <p>Software engineer with over 7 years of experience.</p>
          <p>Part time wizard & proud bug developer.</p>
        </div>

        <div class="hidden gap-2 text-secondary 2xl:flex">
          <img src="/icons/arch.png" alt="archlinux" />
          <span>I use Arch btw</span>
        </div>
      </div>

      <p class="mb-8 2xl:mb-0">
        Passionate about computer science since childhood, I've spent over 7 years refining my
        skills through diverse projects.
        <br />
        Ever since I was 9 years old, I've loved computer science. This interest has grown into a
        full career where I keep learning and staying up-to-date with technology.
        <br />
        I like to learn by doing, not watching tutorials. Over the years, I have independently
        developed numerous open-source projects to experiment with a wide range of technologies
      </p>
    </div>
    <div class="ml-4 flex gap-2 text-secondary 2xl:hidden">
      <img src="/icons/arch.png" alt="archlinux" />
      <span>I use Arch btw</span>
    </div>

    <CloseBracket />
  </PageWrapper>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import CloseBracket from "@/components/CloseBracket.vue";
import type { PageProps } from "@/utils/pages";

const props = defineProps<PageProps>();
</script>
