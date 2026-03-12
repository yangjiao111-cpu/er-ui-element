export declare const ErTooltip: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        transition: {
            type: import('vue').PropType<string>;
            default: string;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        virtualRef: {
            type: import('vue').PropType<void | import('packages/core').ButtonInstance | HTMLElement>;
        };
        virtualTriggering: {
            type: import('vue').PropType<boolean>;
        };
        content: {
            type: import('vue').PropType<string>;
        };
        trigger: {
            type: import('vue').PropType<"click" | "hover" | "contextmenu">;
            default: string;
        };
        placement: {
            type: import('vue').PropType<import('@popperjs/core').Placement>;
            default: string;
        };
        manual: {
            type: import('vue').PropType<boolean>;
        };
        popperOptions: {
            type: import('vue').PropType<Partial<import('@popperjs/core').Options>>;
        };
        showTimeout: {
            type: import('vue').PropType<number>;
            default: number;
        };
        hideTimeout: {
            type: import('vue').PropType<number>;
            default: number;
        };
    }>> & Readonly<{
        "onVisible-change"?: ((value: boolean) => any) | undefined;
        "onClick-outside"?: (() => any) | undefined;
    }>, {
        show(): void;
        hide(): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "visible-change": (value: boolean) => void;
        "click-outside": () => void;
    }, import('vue').PublicProps, {
        transition: string;
        trigger: "hover" | "click" | "contextmenu";
        placement: import('@popperjs/core').Placement;
        showTimeout: number;
        hideTimeout: number;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        transition: {
            type: import('vue').PropType<string>;
            default: string;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        virtualRef: {
            type: import('vue').PropType<void | import('packages/core').ButtonInstance | HTMLElement>;
        };
        virtualTriggering: {
            type: import('vue').PropType<boolean>;
        };
        content: {
            type: import('vue').PropType<string>;
        };
        trigger: {
            type: import('vue').PropType<"click" | "hover" | "contextmenu">;
            default: string;
        };
        placement: {
            type: import('vue').PropType<import('@popperjs/core').Placement>;
            default: string;
        };
        manual: {
            type: import('vue').PropType<boolean>;
        };
        popperOptions: {
            type: import('vue').PropType<Partial<import('@popperjs/core').Options>>;
        };
        showTimeout: {
            type: import('vue').PropType<number>;
            default: number;
        };
        hideTimeout: {
            type: import('vue').PropType<number>;
            default: number;
        };
    }>> & Readonly<{
        "onVisible-change"?: ((value: boolean) => any) | undefined;
        "onClick-outside"?: (() => any) | undefined;
    }>, {
        show(): void;
        hide(): void;
    }, {}, {}, {}, {
        transition: string;
        trigger: "hover" | "click" | "contextmenu";
        placement: import('@popperjs/core').Placement;
        showTimeout: number;
        hideTimeout: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    transition: {
        type: import('vue').PropType<string>;
        default: string;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    virtualRef: {
        type: import('vue').PropType<void | import('packages/core').ButtonInstance | HTMLElement>;
    };
    virtualTriggering: {
        type: import('vue').PropType<boolean>;
    };
    content: {
        type: import('vue').PropType<string>;
    };
    trigger: {
        type: import('vue').PropType<"click" | "hover" | "contextmenu">;
        default: string;
    };
    placement: {
        type: import('vue').PropType<import('@popperjs/core').Placement>;
        default: string;
    };
    manual: {
        type: import('vue').PropType<boolean>;
    };
    popperOptions: {
        type: import('vue').PropType<Partial<import('@popperjs/core').Options>>;
    };
    showTimeout: {
        type: import('vue').PropType<number>;
        default: number;
    };
    hideTimeout: {
        type: import('vue').PropType<number>;
        default: number;
    };
}>> & Readonly<{
    "onVisible-change"?: ((value: boolean) => any) | undefined;
    "onClick-outside"?: (() => any) | undefined;
}>, {
    show(): void;
    hide(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "visible-change": (value: boolean) => void;
    "click-outside": () => void;
}, string, {
    transition: string;
    trigger: "hover" | "click" | "contextmenu";
    placement: import('@popperjs/core').Placement;
    showTimeout: number;
    hideTimeout: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        content?(_: {}): any;
    };
}) & import('vue').Plugin;
export * from './types';
