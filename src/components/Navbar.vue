<template>
  <header
    class="fixed left-0 top-0 z-10 hidden w-full items-center justify-between px-4 py-4 text-responsive-h6 lg:flex lg:px-40 lg:py-12"
  >
    <div>DRAG ANYWHERE</div>
    <nav>
      <ul class="flex gap-6 uppercase">
        <li
          v-for="(tab, i) in tabs"
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
    class="fixed left-0 top-0 z-10 flex w-full items-center justify-between px-4 py-4 text-responsive-h6 lg:hidden"
  >
    <span>DRAG ANYWHERE</span>
    <Hamburger />
  </header>
</template>

<script setup lang="ts">
import Hamburger from "./Hamburger.vue";

type Tab = {
  name: string;
  href: string;
};

const tabs: Tab[] = [
  {
    name: "About",
    href: "#about"
  },
  {
    name: "Skills",
    href: "#skills"
  },
  {
    name: "Projects",
    href: "#projects"
  },
  {
    name: "Contact",
    href: "#contact"
  },
  {
    name: "Resume",
    href: ""
  }
];
</script>
