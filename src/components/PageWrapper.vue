<template>
  <section
    class="page relative mx-4 h-[100dvh] overflow-hidden py-4 2xl:mx-40 2xl:py-28"
    ref="pageRef"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import { isVisible } from "@/utils/dom";
import type { PageProps } from "@/utils/pages";
import { activePage } from "@/utils/store";
import { onMounted, ref } from "vue";

const { pageId } = defineProps<PageProps>();

const pageRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  async function onScroll() {
    // Wait for scroll to complete
    await new Promise((res) => setTimeout(res, 700));

    if (isVisible(pageRef.value!)) {
      activePage.value = pageId;
    }
  }

  function onHashChange(e: HashChangeEvent) {
    const hash = e.newURL.split("#")[1];
    if (!hash) return;
    activePage.value = hash;
  }

  window.addEventListener("wheel", onScroll, { passive: true });
  window.addEventListener("touchstart", onScroll, { passive: true });
  window.addEventListener("touchmove", onScroll, { passive: true });
  window.addEventListener("hashchange", onHashChange, { passive: true });
});

defineExpose({ pageRef });
</script>
