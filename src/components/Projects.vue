<template>
  <section class="h-[60vh]">
    <Carousel :items-to-show="2" :items-to-scroll="2" :snapAlign="'end'" class="h-full">
      <Slide v-for="slide in 4" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import Project from "./Project.vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const projectsContainer = ref<HTMLDivElement | null>(null);
const sectRef = ref<HTMLDivElement | null>(null);

const lastVisibleIdx = ref(1);

function scrollProjects(direction: "right" | "left") {
  const container = projectsContainer.value!;
  const children = Array.from(container.children);
  if (direction === "right") {
    if (lastVisibleIdx.value === children.length - 1) return;
    lastVisibleIdx.value += 1;
  } else {
    if (lastVisibleIdx.value === 1) return;
    lastVisibleIdx.value -= 1;
  }

  const toScroll = children[lastVisibleIdx.value] as HTMLElement;

  sectRef.value!.scrollBy({ left: toScroll.offsetLeft });
}

defineExpose({ scrollProjects });
</script>

<style>
.carousel__item {
  height: 100%;
  width: 100%;
  background-color: green;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__viewport,
.carousel__track {
  height: 100%;
}
</style>
