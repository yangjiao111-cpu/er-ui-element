import { computed } from "vue";
function useOffset(opts) {
  const lastBottomOffset = computed(() => opts.getLastBottomOffset());
  const topOffset = computed(() => opts.offset + lastBottomOffset.value);
  const bottomOffset = computed(() => topOffset.value + opts.boxHeight.value);
  return {
    topOffset,
    bottomOffset
  };
}
export {
  useOffset as u
};
