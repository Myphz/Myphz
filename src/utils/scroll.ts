import { isVisible } from "./dom";

const SCROLL_AMOUNT_MOBILE = 10;
const SCROLL_AMOUNT_DESKTOP = 40;

type ScrollReturn = {
  scrolledUp: boolean;
  scrolledDown: boolean;
};

export const useScrollHijacking = (
  page: HTMLDivElement,
  scrollFn: (scrollDown: boolean, amount: number) => ScrollReturn
) => {
  const { top: pageTop } = page.getBoundingClientRect();
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
};
