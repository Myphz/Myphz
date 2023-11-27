import type { useSlots } from "vue";

export function getSlotText(slots: ReturnType<typeof useSlots>): string {
  let tree = slots.default?.()?.[0] ?? {};
  while (typeof tree === "object" && "children" in tree) {
    // @ts-ignore
    tree = tree.children;
    if (Array.isArray(tree)) tree = tree[0];
  }
  return tree.toString();
}
