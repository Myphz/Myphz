<template>
  <article class="h-full rounded-lg text-left">
    <a
      :href="redirect"
      target="_blank"
      class="flex h-full flex-col justify-center rounded-lg lg:gap-2"
    >
      <img class="mb-2 max-h-[80%] rounded-lg" :src="img" />
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
