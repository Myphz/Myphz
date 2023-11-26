<template>
  <footer class="relative overflow-y-clip">
    <hr class="absolute left-[-10%] h-2 w-[200vw] text-secondary" />
    <hr class="absolute left-[-10%] h-2 w-[200vw] bg-secondary text-secondary blur-[20px]" />

    <section class="mt-8 flex flex-col gap-6">
      <MainText :animated="false" />
      <div>Powered by Phoexa</div>
      <a class="text-secondary underline">danielscanu45@outlook.it</a>
      <div class="flex gap-4">
        <a href="https://github.com/Myphz" target="_blank">
          <img src="/icons/github.png" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/danielscanu/" target="_blank">
          <img src="/icons/linkedin.png" alt="linkedin" />
        </a>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import MainText from "./MainText.vue";
</script>
