<template>
  <section
    class="page relative mx-4 h-[100dvh] overflow-hidden py-4 lg:mx-40 lg:py-28"
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
    await new Promise((res) => setTimeout(res, 800));

    console.log("run");
    if (isVisible(pageRef.value!)) {
      activePage.value = pageId;
    }
  }

  window.addEventListener("wheel", onScroll, { passive: true });
  window.addEventListener("touchstart", onScroll, { passive: true });
  window.addEventListener("touchmove", onScroll, { passive: true });
});

defineExpose({ pageRef });
</script>
