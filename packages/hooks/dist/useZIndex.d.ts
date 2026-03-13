export default function useZIndex(initialValue?: number): {
    initialValue: import('vue').Ref<number, number>;
    currentZindex: import('vue').ComputedRef<number>;
    nextZIndex: () => number;
};
