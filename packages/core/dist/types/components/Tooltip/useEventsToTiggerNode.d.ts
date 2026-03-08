import { ComputedRef, Ref } from 'vue';
import { TooltipProps } from './types';

export declare function useEvenstToTiggerNode(props: TooltipProps & {
    virtualTriggering?: boolean;
}, triggerNode: ComputedRef<HTMLElement | undefined>, events: Ref<Record<string, EventListener>>, closeMethod: () => void): void;
export default useEvenstToTiggerNode;
