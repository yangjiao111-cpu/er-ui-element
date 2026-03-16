import { Directive } from 'vue';
import { LoadingOptions } from './types';
import { LoadingInstance } from './service';

declare const INSTANCE_KEY: unique symbol;
export interface ElementLoading extends HTMLElement {
    [INSTANCE_KEY]?: {
        instance: LoadingInstance;
        options: LoadingOptions;
    };
}
export declare const vLoading: Directive<ElementLoading, boolean>;
export {};
