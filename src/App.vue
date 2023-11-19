<template>
  <Navbar />
  <PageIndicator />

  <component
    :is="component"
    :key="i"
    :pageId="id"
    v-for="({ component, id }, i) in PAGES.filter((p) => p.component)"
  />
</template>

<script setup lang="ts">
import "./assets/fonts.css";
import "./assets/main.css";

import { initializeOGLAnimation } from "./utils/ogl";
import { onMounted } from "vue";

import { PAGES } from "./utils/pages";

import Navbar from "./components/Navbar.vue";
import PageIndicator from "./components/PageIndicator.vue";

onMounted(() => initializeOGLAnimation());
</script>
