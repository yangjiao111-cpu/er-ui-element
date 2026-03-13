import { Plugin } from 'vue';

type SFCWithInstall<T> = T & Plugin;
export declare const withInstall: <T>(component: T) => SFCWithInstall<T>;
export declare const withInstallFunction: <T>(fn: T, name: string) => SFCWithInstall<T>;
export {};
