<template>
  <div class="h-[60vh]">
    <Carousel :items-to-show="2" :items-to-scroll="2" :snapAlign="'end'" class="mx-10 h-full">
      <Slide v-for="project in PROJECTS" :key="project.name">
        <Project :img="project.image" :redirect="project.redirect">
          <template #name>{{ project.name }}</template>
          {{ project.description }}
        </Project>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import Project from "./Project.vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const PROJECTS = [
  {
    name: "Trips!",
    redirect: "",
    description: "Trips is good",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Trips!",
    redirect: "",
    description: "Trips is good",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Trips!",
    redirect: "",
    description: "Trips is good",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
  }
] as const;
</script>

<style>
.carousel__item {
  height: 100%;
  width: 100%;
  background-color: green;
  margin: 0 2rem;
}

.carousel__slide {
  padding: 0 2rem;
}

.carousel__prev,
.carousel__next {
  scale: 2.5;
  @apply text-primary transition-all hover:text-primary;
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
