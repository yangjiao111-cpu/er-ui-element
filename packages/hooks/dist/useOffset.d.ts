import { Ref } from 'vue';

interface useOffsetOptions {
    offset: number;
    boxHeight: Ref<number>;
    getLastBottomOffset: () => number;
}
interface useOffsetResult {
    topOffset: Ref<number>;
    bottomOffset: Ref<number>;
}
export declare function useOffset(opts: useOffsetOptions): useOffsetResult;
export default useOffset;
