<template>
  <PageWrapper class="flex flex-col justify-center" id="contact" v-bind="props">
    <Header>CONTACT</Header>
    <section class="flex flex-col gap-6 pl-4 lg:flex-row lg:gap-20 lg:pl-8 [&>*]:flex-1">
      <div>
        <header class="text-secondary text-responsive-h3">Have a project in mind?</header>
        <div>My inbox is always open for new opportunities.</div>

        <div class="mt-16 hidden flex-col gap-4 lg:flex">
          <a href="https://github.com/Myphz" target="_blank" class="flex w-fit items-center gap-2">
            <img src="/icons/github.png" class="img" />
            <span>Myphz</span>
          </a>
          <a
            href="mailto:danielscanu45@outlook.it"
            target="_blank"
            class="flex w-fit items-center gap-2"
          >
            <img src="/icons/email.svg" class="img scale-[0.8]" />
            <span>danielscanu45@outlook.it</span>
          </a>
          <a
            href="https://www.linkedin.com/in/danielscanu/"
            target="_blank"
            class="flex w-fit items-center gap-2"
          >
            <img src="/icons/linkedin.png" class="img" />
            <span>Daniel Scanu</span>
          </a>
        </div>
      </div>

      <form class="flex max-w-[40rem] flex-col gap-2 lg:gap-8 lg:pr-16" @submit.prevent>
        <Input label="Email" type="email" />
        <Input label="Subject" />
        <Textarea label="Message" />
        <Button variant="primary" type="submit">Submit</Button>
      </form>

      <div class="flex flex-col gap-2 lg:hidden">
        <a href="https://github.com/Myphz" target="_blank" class="flex w-fit items-center gap-2">
          <img src="/icons/github.png" class="img" />
          <span>Myphz</span>
        </a>
        <a
          href="mailto:danielscanu45@outlook.it"
          target="_blank"
          class="flex w-fit items-center gap-2"
        >
          <img src="/icons/email.svg" class="img scale-[0.8]" />
          <span>danielscanu45@outlook.it</span>
        </a>
        <a
          href="https://www.linkedin.com/in/danielscanu/"
          target="_blank"
          class="flex w-fit items-center gap-2"
        >
          <img src="/icons/linkedin.png" class="img" />
          <span>Daniel Scanu</span>
        </a>
      </div>
    </section>
    <CloseBracket />
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import Header from "@/components/Header.vue";
import Input from "@/components/Input.vue";
import Textarea from "@/components/Textarea.vue";
import Button from "@/components/Button.vue";
import CloseBracket from "@/components/CloseBracket.vue";
import type { PageProps } from "@/utils/pages";

const props = defineProps<PageProps>();
</script>

<style scoped>
.img {
  @apply aspect-square w-8 lg:w-12;
}
</style>
