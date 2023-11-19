<template>
  <header
    class="fixed left-0 top-0 z-30 hidden w-full items-center justify-between px-4 py-4 text-responsive-h6 lg:flex lg:px-40 lg:py-12"
  >
    <div>DRAG ANYWHERE</div>
    <nav>
      <ul class="flex gap-6 uppercase">
        <li
          v-for="(tab, i) in PAGES.filter((p) => p.name)"
          :key="tab.name"
          class="border-r border-text pr-6 transition-all last:border-0 hover:text-secondary"
          :class="{ 'text-secondary': activePage === tab.id }"
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
    <Hamburger :open="navOpen" @toggle="navOpen = !navOpen" />
  </header>

  <Menu :open="navOpen" @close="navOpen = false" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Hamburger from "./Hamburger.vue";
import Menu from "./Menu.vue";
import { PAGES } from "@/utils/pages";
import { activePage } from "@/utils/store";

const navOpen = ref(false);
</script>
