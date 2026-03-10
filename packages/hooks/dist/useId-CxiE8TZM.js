import { computed } from "vue";
const defaultIdInjection = {
  profix: Math.floor(Math.random() * 1e4),
  current: 0
};
function useId(namespace = "er") {
  const idRef = computed(
    () => `${namespace}-${defaultIdInjection.profix}-${defaultIdInjection.current++}`
  );
  return idRef;
}
export {
  useId as u
};
