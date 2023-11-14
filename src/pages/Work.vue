<template>
  <PageWrapper class="flex flex-col justify-center" id="work" ref="pageRef">
    <Header>Work</Header>

    <div class="flex flex-col gap-8 pl-4 lg:w-[90%] lg:flex-row lg:gap-60 lg:pl-8 lg:[&>*]:flex-1">
      <p>
        I excel in dissecting complex problems into manageable tasks, essential for crafting robust,
        maintainable code in large-scale projects. I'm driven by challenges, always seeking
        opportunities to enhance my skills. My self-directed learning approach empowers me to
        quickly grasp and adapt to new technologies with autonomy.
      </p>

      <Experiences ref="experiencesRef" />
    </div>

    <span class="mt-8 font-subheader text-secondary text-responsive-h2">{{ "}" }}</span>
  </PageWrapper>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import Experiences from "@/components/Experiences.vue";
import { onMounted, ref } from "vue";

const experiencesRef = ref(null);
const pageRef = ref(null);

onMounted(() => {
  const page = (pageRef.value as any).pageRef as HTMLDivElement;
  const scrollFn = (experiencesRef.value! as any).scrollExperiences;

  let { top: pageTop } = page.getBoundingClientRect();

  let scrolledDown = false;
  let scrolledUp = true;

  let mobileY = 0;

  const onWheel = (e: WheelEvent) => {
    hijackScroll(e.deltaY > 0, e);
  };

  const onTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    mobileY = touch.clientY;
  };

  const onTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    const hasScrolledTop = touch.clientY - mobileY > 0;
    hijackScroll(!hasScrolledTop, e);
  };

  const hijackScroll = (scrollDown: boolean, e: Event) => {
    const top = document.documentElement.scrollTop;
    if (top >= pageTop) {
      if (scrollDown && scrolledDown) return;
      if (!scrollDown && scrolledUp) return;

      window.scrollTo({ top: pageTop });
      e.preventDefault();
      ({ scrolledDown, scrolledUp } = scrollFn(scrollDown));
    }
  };

  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("touchstart", onTouchStart, { passive: true });
  window.addEventListener("touchmove", onTouchMove, { passive: false });
});
</script>
