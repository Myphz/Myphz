import type { ObjectDirective } from "vue";

type HTMLElementWithClickOutsideEvent = HTMLElement & {
  clickOutsideEvent?: (event: Event) => void;
};

export const clickOutside: ObjectDirective<HTMLElementWithClickOutsideEvent> = {
  beforeMount(el, binding) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target as Node))) {
        if (binding.value) {
          binding.value(event);
        }
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el) {
    document.removeEventListener("click", el.clickOutsideEvent!);
  }
};
