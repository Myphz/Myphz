<template>
  <PageWrapper>
    <div class="container-centered">
      <h1 class="h1 main-text">Daniel</h1>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
</script>

<style scoped>
.container-centered {
  height: 100%;
  display: flex;
  align-items: center;
}

.main-text {
  color: var(--primary);
}
</style>
