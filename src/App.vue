<template>
  <Transition name="fade">
    <Animation v-show="!showContent" @endAnimation="showContent = true" />
  </Transition>

  <template v-if="showContent">
    <Navbar />
    <PageIndicator />

    <component
      :is="component"
      :key="i"
      :pageId="id"
      v-for="({ component, id }, i) in PAGES.filter((p) => p.component)"
    />

    <Footer class="hidden 2xl:block" />
  </template>
</template>

<script setup lang="ts">
import "./assets/fonts.css";
import "./assets/main.css";

import { initializeOGLAnimation } from "./utils/ogl";
import { onMounted, ref } from "vue";

import { PAGES } from "./utils/pages";

import Animation from "./pages/Animation.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import PageIndicator from "./components/PageIndicator.vue";
import { activePage } from "./utils/store";

const showContent = ref(false);

onMounted(() => {
  initializeOGLAnimation();

  const hash = location.hash;
  if (!hash) return;
  activePage.value = hash.slice(1);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
