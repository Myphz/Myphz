<template>
  <header
    class="flex justify-between items-center px-4 py-4 lg:px-40 lg:py-12 fixed w-full left-0 top-0"
  >
    <div class="text-responsive-h6">DRAG ANYWHERE</div>
    <nav>
      <ul class="flex gap-6 uppercase">
        <li
          v-for="(tab, i) in tabs"
          :key="tab.name"
          class="pr-6 border-r last:border-0 border-text hover:text-secondary transition-all"
        >
          <a :href="tab.href" class="flex gap-2">
            <span class="text-secondary">{{ i }}.</span>
            <span>{{ tab.name }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
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
