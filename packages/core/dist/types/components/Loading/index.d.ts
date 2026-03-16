import { vLoading } from './directive';
import { Loading } from './service';
import { App } from 'vue';

export declare const ErLoading: {
    name: string;
    install(app: App): void;
    directive: import('vue').Directive<import('./directive').ElementLoading, boolean>;
    service: typeof Loading;
};
export default ErLoading;
export { vLoading, vLoading as ErLoadingDirective, Loading as ErLoadingService, };
export * from './types';
