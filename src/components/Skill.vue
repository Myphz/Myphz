<template>
  <div class="flex gap-4 transition-all">
    <img :src="`/icons/${skill.icon}.svg`" class="w-6 2xl:w-8" :alt="skill.name" />
    <span>{{ skill.name }}</span>
  </div>
</template>

<script setup lang="ts">
const { skill } = defineProps<{ skill: { name: string; icon: string } }>();
</script>

<style scoped>
div:hover {
  padding-right: 40%;
  scale: 1.5;
}
</style>
