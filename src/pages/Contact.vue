<template>
  <PageWrapper class="flex flex-col justify-center" id="contact">
    <Header>Contact</Header>
    <section class="flex gap-20 pl-4 lg:pl-8 [&>*]:flex-1">
      <div>
        <header class="text-secondary text-responsive-h3">Have a project in mind?</header>
        <div>
          My inbox is always open for new opportunities.
          <br />
          Feel free to contact me for any inquiries you may have!
        </div>

        <div class="mt-16 flex flex-col gap-4">
          <a href="https://github.com/Myphz" target="_blank" class="flex w-fit items-center gap-2">
            <img src="/icons/github.png" />
            <span>Myphz</span>
          </a>
          <a
            href="mailto:danielscanu45@outlook.it"
            target="_blank"
            class="flex w-fit items-center gap-2"
          >
            <img src="/icons/email.svg" class="scale-[0.8]" />
            <span>danielscanu45@outlook.it</span>
          </a>
          <a
            href="https://www.linkedin.com/in/danielscanu/"
            target="_blank"
            class="flex w-fit items-center gap-2"
          >
            <img src="/icons/linkedin.png" />
            <span>Daniel Scanu</span>
          </a>
        </div>
      </div>

      <form class="flex max-w-[40rem] flex-col gap-8 pr-16" @submit.prevent>
        <Input label="Email" type="email" />
        <Input label="Subject" />
        <Textarea label="Message" />
        <Button variant="primary" type="submit">Submit</Button>
      </form>
    </section>
    <span class="mt-8 font-subheader text-secondary text-responsive-h2">{{ "}" }}</span>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import Header from "@/components/Header.vue";
import Input from "@/components/Input.vue";
import Textarea from "@/components/Textarea.vue";
import Button from "@/components/Button.vue";
</script>

<style scoped>
img {
  width: 3rem;
  aspect-ratio: 1;
}
</style>
