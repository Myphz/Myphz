<template>
  <article class="flex h-full flex-col text-left lg:gap-2">
    <img class="mb-2 max-h-[80%] rounded-lg" :src="img" />
    <a :href="redirect" class="flex gap-2 text-primary">
      <h2>
        <slot name="name" />
      </h2>
    </a>
    <div><slot /></div>
  </article>
</template>

<script setup lang="ts">
const { img, redirect } = defineProps<{ img: string; redirect: string }>();
</script>
