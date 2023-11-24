<template>
  <article class="project-article flex h-full flex-col lg:gap-2" ref="articleRef">
    <img class="mb-2 rounded-lg" :src="img" />
    <a :href="redirect" class="flex gap-2 text-primary">
      <h2>
        <slot name="name" />
      </h2>
    </a>
    <div><slot /></div>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { img, redirect } = defineProps<{ img: string; redirect: string }>();
const articleRef = ref(null);

defineExpose({ articleRef });
</script>
