<template>
  <button
    @click="() => $emit('toggle')"
    class="button-hamburger relative h-9 w-9 rounded-full p-2 text-secondary 2xl:h-16 2xl:w-16 2xl:p-4 [&>*]:w-8 2xl:[&>*]:w-16"
    aria-controls="primary-navigation"
    ref="button"
  >
    <svg stroke="currentColor" fill="none" class="hamburger" viewBox="-10 -10 120 120">
      <path
        class="line"
        stroke-width="7"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const props = defineProps<{ open: boolean }>();
const button = ref<HTMLButtonElement | null>(null);

watch(
  () => props.open,
  (value) => setState(value)
);

const setState = (newState: boolean) => {
  if (newState) {
    button.value?.setAttribute("data-state", "opened");
    button.value?.setAttribute("aria-expanded", "true");
    return;
  }
  button.value?.setAttribute("data-state", "closed");
  button.value?.setAttribute("aria-expanded", "false");
};

onMounted(() => setState(props.open));
</script>

<style>
.button-hamburger {
  overflow: hidden;
  scale: 1.25;
}

.button-hamburger .hamburger {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  transition:
    translate 0.5s,
    rotate 0.5s;
}

.button-hamburger[aria-expanded="true"] .hamburger {
  translate: -14px -17px;
  rotate: 0.125turn;
}

.button-hamburger .line {
  transition: 0.5s;
  stroke-dasharray: 60 31 60 300;
}

.button-hamburger[aria-expanded="true"] .line {
  stroke-dasharray: 60 105 60 300;
  stroke-dashoffset: -90;
}
</style>
