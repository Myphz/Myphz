<template>
  <PageWrapper class="flex flex-col justify-center" id="contact" v-bind="props">
    <Header>CONTACT</Header>
    <section class="flex flex-col gap-6 pl-4 2xl:flex-row 2xl:gap-20 2xl:pl-8 [&>*]:flex-1">
      <div>
        <header class="text-secondary text-responsive-h3">Have a project in mind?</header>
        <div>My inbox is always open for new opportunities.</div>

        <div class="mt-16 hidden flex-col gap-4 2xl:flex">
          <a href="https://github.com/Myphz" target="_blank" class="flex w-fit items-center gap-2">
            <img src="/icons/github.png" class="img" alt="github" />
            <span>Myphz</span>
          </a>
          <a
            href="mailto:danielscanu45@outlook.it"
            target="_blank"
            class="flex w-fit items-center gap-2"
          >
            <img src="/icons/email.svg" class="img scale-[0.8]" alt="email" />
            <span>danielscanu45@outlook.it</span>
          </a>
          <a
            href="https://www.linkedin.com/in/danielscanu/"
            target="_blank"
            class="flex w-fit items-center gap-2"
          >
            <img src="/icons/linkedin.png" class="img" alt="linkedin" />
            <span>Daniel Scanu</span>
          </a>
        </div>
      </div>

      <form
        class="flex max-w-[40rem] flex-col gap-2 2xl:gap-8 2xl:pr-16"
        @submit.prevent="onSubmit"
      >
        <Input label="Email" type="email" name="email" />
        <Input label="Subject" name="subject" />
        <Textarea label="Message" name="body" />
        <Button
          variant="primary"
          class="flex items-center justify-center gap-4"
          :isLoading="isLoading"
          type="submit"
        >
          Submit
        </Button>
      </form>

      <div class="flex flex-col gap-2 2xl:hidden">
        <a href="https://github.com/Myphz" target="_blank" class="flex w-fit items-center gap-2">
          <img src="/icons/github.png" class="img" alt="github" />
          <span>Myphz</span>
        </a>
        <a
          href="mailto:danielscanu45@outlook.it"
          target="_blank"
          class="flex w-fit items-center gap-2"
        >
          <img src="/icons/email.svg" class="img scale-[0.8]" alt="email" />
          <span>danielscanu45@outlook.it</span>
        </a>
        <a
          href="https://www.linkedin.com/in/danielscanu/"
          target="_blank"
          class="flex w-fit items-center gap-2"
        >
          <img src="/icons/linkedin.png" class="img" alt="linkedin" />
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
import { ref, getCurrentInstance } from "vue";

const props = defineProps<PageProps>();

const $toast = getCurrentInstance()?.appContext.config.globalProperties.$toast!;
const isLoading = ref(false);

const onSubmit = async (e: Event) => {
  if (isLoading.value) return;
  isLoading.value = true;
  const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement));
  const res = await fetch("/email", { method: "POST", body: JSON.stringify(formData) });
  if (res.ok) {
    $toast.success("I will reply soon!");
  } else {
    $toast.error("Unknown error. Please send the email manually");
  }

  isLoading.value = false;
};
</script>

<style scoped>
.img {
  @apply aspect-square w-8 2xl:w-12;
}
</style>
