<template>
  <article class="mt-2 h-full rounded-lg text-left">
    <a
      :href="redirect"
      target="_blank"
      class="flex h-full flex-col justify-center rounded-lg 2xl:gap-2"
    >
      <div
        class="img-container relative mb-2 rounded-lg text-secondary after:rounded-lg after:transition-all 2xl:max-h-[75%]"
      >
        <picture>
          <source
            media="(max-width: 1023px)"
            :srcset="`/images/mobile/${img}`"
            class="h-full w-full rounded-lg"
          />

          <img :src="`images/desktop/${img}`" alt="Project" class="h-full w-full rounded-lg" />
        </picture>
      </div>
      <h3 class="text-primary text-responsive-h3">
        <SortText><slot name="name" /></SortText>
      </h3>
      <Typing><slot /></Typing>
    </a>
  </article>
</template>

<script setup lang="ts">
import Typing from "./Typing.vue";
import SortText from "./SortText.vue";

const { img, redirect } = defineProps<{ img: string; redirect: string }>();
</script>

<style scoped>
.img-container::after {
  content: "";
  position: absolute;
  inset: 0;
}
.img-container:hover::after {
  box-shadow: 0 0 0.1em 0.1em currentColor inset;
}
</style>
