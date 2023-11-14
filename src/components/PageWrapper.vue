<template>
  <section
    class="page relative mx-4 h-[100dvh] overflow-hidden py-4 lg:mx-40 lg:py-12"
    ref="pageRef"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const pageRef = ref(null);

defineExpose({ pageRef });
</script>
