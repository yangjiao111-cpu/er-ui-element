import { Ref } from 'vue';

export default function useClickOutside(elementRef: Ref<HTMLElement | void>, callback: (e: MouseEvent) => void): void;
