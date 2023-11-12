<template>
  <header
    class="fixed left-0 top-0 z-30 hidden w-full items-center justify-between px-4 py-4 text-responsive-h6 lg:flex lg:px-40 lg:py-12"
  >
    <div>DRAG ANYWHERE</div>
    <nav>
      <ul class="flex gap-6 uppercase">
        <li
          v-for="(tab, i) in TABS"
          :key="tab.name"
          class="border-r border-text pr-6 transition-all last:border-0 hover:text-secondary"
        >
          <a :href="tab.href" class="flex gap-2">
            <span class="text-secondary">{{ i }}.</span>
            <span>{{ tab.name }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>

  <header
    class="fixed left-0 top-0 z-30 flex w-full items-center justify-between px-4 py-4 text-responsive-h6 lg:hidden"
  >
    <span>DRAG ANYWHERE</span>
    <Hamburger @click="() => (navOpen = !navOpen)" />
  </header>

  <Menu :open="navOpen" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Hamburger from "./Hamburger.vue";
import Menu from "./Menu.vue";

import { TABS } from "@/utils/tabs";

const navOpen = ref(false);
</script>
