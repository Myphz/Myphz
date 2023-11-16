<template>
  <PageWrapper class="flex flex-col justify-center" id="work" ref="pageRef">
    <Header>Work</Header>

    <div class="flex flex-col gap-8 pl-4 lg:w-[90%] lg:flex-row lg:gap-60 lg:pl-8 lg:[&>*]:flex-1">
      <p>
        I had the opportunity to work for many companies with many different technologies, from
        small startups to bigger companies.
        <br />
        Each experience taught me something and I continously improved in my learning journey.
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
import { isVisible } from "@/utils/dom";

const experiencesRef = ref(null);
const pageRef = ref(null);

const SCROLL_AMOUNT_MOBILE = 10;
const SCROLL_AMOUNT_DESKTOP = 40;

onMounted(() => {
  const page = (pageRef.value as any).pageRef as HTMLDivElement;
  const scrollFn = (experiencesRef.value! as any).scrollExperiences;

  let { top: pageTop } = page.getBoundingClientRect();

  let scrolledDown = false;
  let scrolledUp = true;

  let mobileY = 0;

  const onWheel = (e: WheelEvent) => {
    hijackScroll(e.deltaY > 0, e, SCROLL_AMOUNT_DESKTOP);
  };

  const onTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    mobileY = touch.clientY;
  };

  const onTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    const hasScrolledTop = touch.clientY - mobileY > 0;
    hijackScroll(!hasScrolledTop, e, SCROLL_AMOUNT_MOBILE);
  };

  const hijackScroll = (scrollDown: boolean, e: Event, amount: number) => {
    const top = document.documentElement.scrollTop;
    if (top >= pageTop && isVisible(page)) {
      if (scrollDown && scrolledDown) return;
      if (!scrollDown && scrolledUp) return;

      e.preventDefault();
      window.scrollTo({ top: pageTop });
      ({ scrolledDown, scrolledUp } = scrollFn(scrollDown, amount));
    }
  };

  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("touchstart", onTouchStart, { passive: true });
  window.addEventListener("touchmove", onTouchMove, { passive: false });
});
</script>
