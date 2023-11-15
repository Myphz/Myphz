<template>
  <article class="flex h-full flex-col gap-6 bg-primary">
    <a :href="redirect" class="flex gap-2 text-primary">
      <slot name="name" />
    </a>
    <div><slot /></div>
    <div>ahahha</div>
  </article>
</template>

<script setup lang="ts">
const { img, redirect } = defineProps<{ img: string; redirect: string }>();
</script>

<style scoped>
article {
  background-image: url("https://static.vecteezy.com/system/resources/previews/009/273/280/non_2x/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg");
  background-size: cover;
}
</style>
