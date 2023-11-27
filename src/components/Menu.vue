<template>
  <Transition>
    <aside v-show="open" class="fixed inset-0 z-20 h-full w-full bg-background px-4 pt-[5vh]">
      <div class="content flex h-full w-full flex-col justify-center">
        <div class="relative w-fit">
          <ul class="flex flex-col gap-4 uppercase text-responsive-h2">
            <li v-for="(tab, i) in PAGES.filter((page) => page.name)" :key="tab.name">
              <a
                :href="tab.href"
                class="flex gap-2"
                @click="$emit('close')"
                :target="tab.href?.startsWith('/') ? '_blank' : '_self'"
              >
                <span class="text-secondary">{{ i }}.</span>
                <span :class="{ 'text-secondary': activePage === tab.id }">{{ tab.name }}</span>
              </a>
            </li>
          </ul>

          <div
            class="absolute right-0 top-0 aspect-square h-full w-2 bg-secondary blur-[50px]"
          ></div>
        </div>

        <Footer class="mt-6" />
      </div>
    </aside>
  </Transition>
</template>

<script setup lang="ts">
import { PAGES } from "@/utils/pages";
import Footer from "./Footer.vue";
import { activePage } from "@/utils/store";

const { open } = defineProps<{ open: boolean }>();
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: height 0.5s cubic-bezier(0.35, 1.9, 0.61, 0.94);
}

.v-enter-active .content,
.v-leave-active .content {
  transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  height: 0;
}

.v-enter-from .content,
.v-leave-to .content {
  opacity: 0;
}
</style>
