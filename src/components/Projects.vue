<template>
  <Carousel
    :items-to-show="1"
    :items-to-scroll="1"
    :snapAlign="'end'"
    :breakpoints="breakpoints"
    wrapAround
    class="lg:mx-10 lg:h-[40vh]"
  >
    <Slide v-for="project in PROJECTS" :key="project.name">
      <Project :img="project.image" :redirect="project.redirect">
        <template #name>{{ project.name }}</template>
        {{ project.description }}
      </Project>
    </Slide>

    <template #addons>
      <Navigation />
      <!-- <Pagination /> -->
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
    redirect: "/",
    description: "Trips is good",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Trips!",
    redirect: "/",
    description: "Trips is good",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Trips!",
    redirect: "/",
    description: "Trips is good",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
  }
] as const;
</script>

<style>
.carousel__item {
  background-color: green;
  @apply h-full w-full lg:mx-8;
}

.carousel__slide {
  padding: 0 2rem;
}

.carousel__prev,
.carousel__next {
  @apply scale-[1.5] text-primary transition-all hover:text-primary lg:scale-[2.5];
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
