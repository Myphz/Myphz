<template>
  <div
    class="blob-container relative h-full w-full 2xl:absolute 2xl:right-[5vw] 2xl:top-1/2 2xl:h-[50vh] 2xl:w-[30vw] 2xl:-translate-y-1/2 [&>*]:blur-[50px] 2xl:[&>*]:blur-[70px]"
  >
    <!-- Primary blob -->
    <div class="blob-primary absolute left-0 top-0 hidden h-[70%] w-[70%] rounded-full 2xl:block" />
    <div
      class="blob-primary-mobile absolute left-1/2 top-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full 2xl:hidden"
    />
    <!-- Secondary blob -->
    <div
      class="blob-secondary absolute bottom-0 right-[10%] h-[50%] w-[50%] rounded-full 2xl:right-0 2xl:h-[70%] 2xl:w-[70%]"
    />
    <!-- Shadow -->
    <div
      class="blob-shadow absolute bottom-[10%] left-0 h-[50%] w-[50%] blur-[80px] 2xl:bottom-[15%] 2xl:left-[-10%] 2xl:h-[50%] 2xl:w-[60%] 2xl:!blur-[80px]"
    ></div>
  </div>
</template>

<style scoped>
.blob-container {
  opacity: 0;
  animation: fade 0.4s ease-in-out 1.5s forwards;
}
.blob-primary {
  background: radial-gradient(circle, rgba(243, 255, 0, 1) 0%, rgba(12, 12, 12, 1) 100%);
  animation: rotate 2s ease-in-out infinite alternate;
}

.blob-primary-mobile {
  background: radial-gradient(circle, rgba(243, 255, 0, 1) 0%, rgba(12, 12, 12, 1) 100%);
  animation: rotate-mobile 2s ease-in-out infinite alternate;
}

.blob-secondary {
  background: radial-gradient(circle, #89ff69 0%, rgba(12, 12, 12, 1) 100%);
  animation: rotate-secondary 2s ease-in-out infinite alternate;
}

.blob-shadow {
  background: radial-gradient(
    circle,
    rgba(8, 8, 8, 1) 0%,
    rgba(12, 12, 12, 1) 78%,
    rgba(12, 12, 12, 1) 100%
  );
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

@keyframes rotate-mobile {
  50% {
    left: 40%;
  }
  100% {
    left: 70%;
    top: 70%;
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

@keyframes fade {
  to {
    opacity: 1;
  }
}
</style>
