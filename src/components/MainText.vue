<template>
  <div
    class="text-responsive-h1 font-headers leading-none text-primary relative w-fit text-animation after:bg-background"
  >
    Daniel
  </div>
</template>

<style scoped>
.text-animation {
  text-shadow: -0.1em 0.03em 0.3em currentColor;
}
.text-animation::after {
  content: "";
  position: absolute;
  left: -10%;
  top: -20%;
  width: 120%;
  height: 130%;
  animation: reveal 1s ease-in forwards;
  animation-delay: 0.5s;
}

@keyframes reveal {
  to {
    left: 100%;
  }
}
</style>
