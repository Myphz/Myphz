<template>
  <div
    class="text-responsive-h1 font-headers leading-none text-primary relative w-fit text-animation after:bg-background"
  >
    Daniel
  </div>
</template>

<style scoped>
.text-animation {
  animation:
    glow 1s 1.5s forwards,
    shadow-move 3s 3s infinite alternate;
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
    left: 130%;
  }
}

@keyframes glow {
  to {
    text-shadow: -0.1em 0.03em 0.2em currentColor;
  }
}

@keyframes shadow-move {
  from {
    text-shadow: -0.1em 0.03em 0.2em currentColor;
  }
  to {
    text-shadow: 0.1em 0.03em 0.2em currentColor;
  }
}
</style>
