<template>
  <Navbar />
  <PageIndicator />

  <component
    :is="component"
    :key="i"
    :pageId="id"
    v-for="({ component, id }, i) in PAGES.filter((p) => p.component)"
  />

  <Footer class="hidden lg:block" />
</template>

<script setup lang="ts">
import "./assets/fonts.css";
import "./assets/main.css";

import { initializeOGLAnimation } from "./utils/ogl";
import { onMounted } from "vue";

import { PAGES } from "./utils/pages";

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import PageIndicator from "./components/PageIndicator.vue";
import { activePage } from "./utils/store";

onMounted(() => {
  initializeOGLAnimation();

  const hash = location.hash;
  if (!hash) return;
  activePage.value = hash.slice(1);
});
</script>
