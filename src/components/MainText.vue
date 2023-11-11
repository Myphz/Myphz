<template>
  <div
    class="text-responsive-h1 font-headers leading-none text-primary relative w-fit text-animation after:bg-background"
  >
    Daniel
  </div>
</template>

<style scoped>
.text-animation::after {
  content: "";
  position: absolute;
  left: 0;
  width: 120%;
  height: 100%;
  animation: reveal 0.75s ease-in forwards;
  animation-delay: 0.2s;
}

@keyframes reveal {
  to {
    left: 100%;
  }
}
</style>
