export function isVisible(el: HTMLElement) {
  const rect = el.getBoundingClientRect();

  const htmlHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top >= -1 && rect.bottom <= htmlHeight + 2;
}
