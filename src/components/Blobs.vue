<template>
  <div class="absolute top-1/2 -translate-y-1/2 right-[5vw] w-[30vw] h-[50vh]">
    <div class="absolute w-[70%] h-[70%] left-0 top-0 blob-primary rounded-full"></div>
    <div
      class="bg-secondary absolute w-[70%] h-[70%] right-0 bottom-0 blob-secondary rounded-full"
    ></div>
    <!-- Shadow -->
    <div class="absolute w-[60%] h-[50%] left-[-10%] bottom-[15%] blob-shadow"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.blob-primary {
  background: radial-gradient(circle, rgba(243, 255, 0, 1) 0%, rgba(12, 12, 12, 1) 100%);
  filter: blur(70px);
  animation: rotate 2s ease-in-out infinite alternate;
}

.blob-secondary {
  background: radial-gradient(circle, #89ff69 0%, rgba(12, 12, 12, 1) 100%);
  filter: blur(70px);
  animation: rotate-secondary 2s ease-in-out infinite alternate;
}

.blob-shadow {
  background: radial-gradient(
    circle,
    rgba(8, 8, 8, 1) 0%,
    rgba(12, 12, 12, 1) 78%,
    rgba(12, 12, 12, 1) 100%
  );
  filter: blur(80px);
}

@keyframes rotate {
  from {
    rotate: -15deg;
  }
  to {
    rotate: -180deg;
    left: 30%;
    top: 30%;
  }
}

@keyframes rotate-secondary {
  from {
    rotate: 15deg;
  }
  to {
    rotate: 180deg;
    right: 30%;
    bottom: 20%;
  }
}
</style>
