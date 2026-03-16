import { LoadingOptions, LoadingOptionsResolved } from './types';

declare function createLoadingComponent(options: LoadingOptionsResolved): {
    readonly $el: HTMLElement;
    vm: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import('vue').ComponentProvideOptions>, {}, {}, "", {}, any>;
    close: () => void;
    visible: import('vue').Ref<boolean, boolean>;
    setText: (text: string) => string;
};
export type LoadingInstance = ReturnType<typeof createLoadingComponent>;
export declare function Loading(options?: LoadingOptions): LoadingInstance;
export {};
