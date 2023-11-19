<template>
  <section
    ref="sectRef"
    class="flex max-h-[60vh] flex-col overflow-scroll px-4 lg:flex-row lg:flex-wrap lg:gap-10 lg:px-8 lg:[&>*]:basis-[calc(50%-2.5rem)]"
  >
    <Project
      img="https://static.vecteezy.com/system/resources/previews/009/273/280/non_2x/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg"
      redirect="/"
    >
      <template #name>NAMOZ 1</template>
      weweasdf
    </Project>
    <Project
      img="https://static.vecteezy.com/system/resources/previews/009/273/280/non_2x/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg"
      redirect="/"
    >
      <template #name>WEMAZ 2</template>
      weweasdf
    </Project>
    <Project
      img="https://static.vecteezy.com/system/resources/previews/009/273/280/non_2x/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg"
      redirect="/"
    >
      <template #name>TREMA Z3</template>
      weweasdf
    </Project>
    <Project
      img="https://static.vecteezy.com/system/resources/previews/009/273/280/non_2x/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg"
      redirect="/"
    >
      <template #name>FRAGOZ 4</template>
      weweasdf
    </Project>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Project from "./Project.vue";

const sectRef = ref<HTMLDivElement | null>(null);

function scrollProjects(scrollDown: boolean) {
  if (scrollDown) {
    sectRef.value?.scrollBy({ top: 100 });
  } else {
    sectRef.value?.scrollBy({ top: -100 });
  }

  const { scrollTop, scrollHeight, clientHeight } = sectRef.value!;

  return {
    scrolledUp: scrollTop === 0,
    scrolledDown: scrollTop + clientHeight >= scrollHeight
  };
}

defineExpose({ sectRef, scrollProjects });
</script>

<style scoped>
section {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

section::-webkit-scrollbar {
  display: none;
}

@media (min-width: 1024px) {
  section {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
  }
}
</style>
