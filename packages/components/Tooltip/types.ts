import type { Placement, Options } from '@popperjs/core'

export interface TooltipProps {
    content?: string;
    //触发方式
    trigger?: "hover" | "click" | "contextmenu";
    //弹出位置
    placement?: Placement;
    //手动控制
    manual?: boolean;
    disabled?: boolean;
    popperOptions?: Partial<Options>;
    transition?: string;
    showTimeout?: number;
    hideTimeout?: number
}

export interface TooltipEmits {
    (e: "visible-change", value: boolean): void;
    (e: 'click-outside'): void
}

export interface TooltipInstance {
    show(): void;
    hide(): void;
}