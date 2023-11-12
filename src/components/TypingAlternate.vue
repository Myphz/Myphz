<template>
  <div
    class="flex h-[1em] w-fit items-center justify-start pr-[1px] font-subheader text-secondary text-responsive-sub-h1"
  >
    {{ content }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
// How much time to type 1 character
const TYPING_SPEED = 100;
// How much time to delete 1 character
const CLEAR_SPEED = 25;
// How long to wait before starting deleting token
const TOKENS_SWITCH_TIME = 750;
// How long to wait before starting to write tokens
const INITIAL_DELAY = 1500;

const { tokens } = defineProps<{
  tokens: string[];
}>();

const content = ref("");

function writeToken(token: string) {
  let idx = 0;

  return new Promise<void>((res) => {
    const interval = setInterval(() => {
      content.value += token[idx];
      if (idx === token.length - 1) {
        clearInterval(interval);
        res();
      }
      idx++;
    }, TYPING_SPEED);
  });
}

function clearToken() {
  return new Promise<void>((res) => {
    const interval = setInterval(() => {
      content.value = content.value.slice(0, -1);
      if (!content.value) {
        clearInterval(interval);
        res();
      }
    }, CLEAR_SPEED);
  });
}

onMounted(async () => {
  await new Promise((res) => setInterval(res, INITIAL_DELAY));

  let tokenIdx = 0;
  // eslint-disable-next-line no-constant-condition
  while (1) {
    await writeToken(tokens[tokenIdx]);
    await new Promise((res) => setInterval(res, TOKENS_SWITCH_TIME));
    await clearToken();
    tokenIdx = (tokenIdx + 1) % tokens.length;
  }
});
</script>

<style scoped>
div {
  animation: blink 200ms 500ms infinite alternate;
}

@keyframes blink {
  from {
    box-shadow: 2px 0 0 currentColor;
  }
  to {
    box-shadow: 2px 0 0 transparent;
  }
}
</style>
