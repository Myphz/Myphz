<template>
  <PageWrapper class="flex flex-col justify-center" id="about" v-bind="props">
    <Header>ABOUT</Header>

    <div class="flex flex-col gap-8 pl-4 2xl:w-[90%] 2xl:flex-row 2xl:gap-60 2xl:pl-8 [&>*]:flex-1">
      <div class="flex flex-col gap-8">
        <div>
          <p>Software engineer with over 6 years of experience.</p>
          <p>Part time wizard & proud bug developer.</p>
        </div>

        <div class="hidden gap-2 text-secondary 2xl:flex">
          <img src="/icons/arch.png" alt="archlinux" />
          <span>I use Arch btw</span>
        </div>
      </div>

      <p class="mb-8 2xl:mb-0">
        Passionate about computer science since childhood, I've spent over 6 years refining my
        skills through diverse projects.
        <br />
        I thoroughly enjoying computers & computer science ever since I was a kid. I remember
        messing with computers when I was just 9 years old!
        <br />
        Ever since then, I've been learning anything that interested me on my own. I had the
        opportunity to learn several technologies and languages that stuck with me and made me
        better understand how everything works.
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
