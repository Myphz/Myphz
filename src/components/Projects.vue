<template>
  <Carousel
    :items-to-show="1"
    :items-to-scroll="1"
    :snapAlign="'end'"
    :breakpoints="breakpoints"
    wrapAround
    class="2xl:mx-10 2xl:h-[40vh]"
  >
    <Slide v-for="project in PROJECTS" :key="project.name">
      <Project :img="project.image" :redirect="project.redirect">
        <template #name>{{ project.name }}</template>
        {{ project.description }}
      </Project>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import Project from "./Project.vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const breakpoints = {
  1024: {
    itemsToShow: 2,
    itemsToScroll: 2
  }
};

const PROJECTS = [
  {
    name: "Trips!",
    redirect: "https://play.google.com/store/apps/details?id=com.tripsphoexa.app",
    description: "Mobile app to plan & organize trips and photos",
    image: "/trips.webp"
  },
  {
    name: "Sort Visualizer",
    redirect: "https://sortvisualizer.com",
    description: "Web application to display and animate 15+ sorting algorithms",
    image: "/sortvisualizer.webp"
  },
  {
    name: "wwwallet",
    redirect: "https://wwwallet.app/",
    description: "Real-time crypto tracking web & mobile app",
    image: "/wwwallet.webp"
  }
] as const;
</script>

<style>
.carousel__item {
  background-color: green;
  @apply h-full w-full 2xl:mx-8;
}

.carousel__slide {
  padding: 0 2rem;
}

.carousel__prev,
.carousel__next {
  @apply -translate-y-12 scale-[1.5] text-primary transition-all hover:text-primary 2xl:scale-[2.5];
}

.carousel__prev {
  @apply -translate-x-3 2xl:-translate-x-6;
}

.carousel__next {
  @apply translate-x-3 2xl:translate-x-6;
}

.carousel__prev--disabled,
.carousel__next--disabled {
  opacity: 0;
}

.carousel__viewport,
.carousel__track {
  height: 100%;
}
</style>
