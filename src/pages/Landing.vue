<template>
  <PageWrapper>
    <div class="h-full flex flex-col justify-center gap-12">
      <MainText />
      <Typing
        class="font-subheader text-responsive-sub-h1 leading-none text-secondary"
        text="PROGRAMMER AND WEB DEVELOPER"
      />
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/PageWrapper.vue";
import MainText from "@/components/MainText.vue";
import Typing from "@/components/Typing.vue";
</script>
