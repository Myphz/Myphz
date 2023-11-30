<template>
  <footer class="relative overflow-y-clip 2xl:snap-center 2xl:pb-8">
    <div class="pb-8">
      <hr class="absolute left-[-10%] h-2 w-[200vw] text-secondary" />
      <hr class="absolute left-[-10%] h-2 w-[200vw] bg-secondary text-secondary blur-[20px]" />
    </div>

    <section
      class="flex flex-col gap-4 2xl:flex-row 2xl:items-center 2xl:justify-between 2xl:px-40"
    >
      <div class="flex flex-col gap-4">
        <MainText :animated="false" class="2xl:!text-responsive-h2" />
        <div>Powered by Phoexa</div>
        <div>
          Designed by
          <a
            class="text-secondary underline"
            href="https://contra.com/falzo_creations_612dk8w7"
            target="_blank"
          >
            Falzo
          </a>
        </div>
      </div>

      <div class="flex gap-4 2xl:translate-y-1/2 2xl:flex-col">
        <a href="https://github.com/Myphz" target="_blank">
          <img src="/icons/github.png" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/danielscanu/" target="_blank">
          <img src="/icons/linkedin.png" alt="linkedin" />
        </a>
      </div>

      <a
        class="text-secondary underline 2xl:translate-y-1/2"
        href="mailto:danielscanu45@outlook.it"
      >
        danielscanu45@outlook.it
      </a>
    </section>
  </footer>
</template>

<script setup lang="ts">
import MainText from "./MainText.vue";
</script>
