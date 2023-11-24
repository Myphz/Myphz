export function isVisible(el: Element) {
  const rect = el.getBoundingClientRect();

  const htmlHeight = window.innerHeight || document.documentElement.clientHeight;
  const htmlWidth = window.innerWidth || document.documentElement.clientWidth;

  const verticalVisible = rect.top >= -1 && rect.bottom <= htmlHeight + 2;
  const horizontalVisible = rect.left >= -1 && rect.right <= htmlWidth + 2;

  return verticalVisible && horizontalVisible;
}
