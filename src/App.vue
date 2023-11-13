<template>
  <Navbar />
  <PageIndicator />

  <Landing />
  <About />
  <Skills />
</template>

<script setup lang="ts">
import "./assets/fonts.css";
import "./assets/main.css";

import Navbar from "./components/Navbar.vue";
import PageIndicator from "./components/PageIndicator.vue";
import Landing from "./pages/Landing.vue";
import About from "./pages/About.vue";
import Skills from "./pages/Skills.vue";

import { initializeOGLAnimation } from "./utils/ogl";

initializeOGLAnimation();
</script>
