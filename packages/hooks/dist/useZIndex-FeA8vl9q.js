import { ref, computed } from "vue";
const zIndex = ref(0);
function useZIndex(initialValue = 2e3) {
  const _initialValue = ref(initialValue);
  const currentZindex = computed(() => zIndex.value + _initialValue.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZindex.value;
  };
  return {
    initialValue: _initialValue,
    currentZindex,
    nextZIndex
  };
}
export {
  useZIndex as u
};
