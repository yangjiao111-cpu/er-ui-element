import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { ErIcon } from "er-ui-element";
import "er-ui-element/dist/theme/Icon.css";

type Story = StoryObj<typeof ErIcon> & { argTypes?: ArgTypes };

const meta: Meta<typeof ErIcon> = {
    title: "Example/Icon",
    component: ErIcon,
    tags: ["autodocs"],
    argTypes: {
        icon: {
            control: "text",
        },
        size: {
            control: "select",
            options: ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x"],
        },
        type: {
            control: "select",
            options: ["primary", "success", "warning", "danger", "info", ""],
        },
        color: {
            control: "color",
        },
        spin: {
            control: "boolean",
        },
        rotation: {
            control: "select",
            options: [90, 180, 270],
        },
        flip: {
            control: "select",
            options: ["horizontal", "vertical", "both"],
        },
        border: {
            control: "boolean",
        },
        fixedWidth: {
            control: "boolean",
        },
        pulse: {
            control: "boolean",
        },
        beat: {
            control: "boolean",
        },
        shake: {
            control: "boolean",
        },
        bounce: {
            control: "boolean",
        },
        fade: {
            control: "boolean",
        },
    },
};

export const Default: Story = {
    args: {
        icon: "search",
        size: "2x",
    },
    render: (args) => ({
        components: { ErIcon },
        setup() {
            return { args };
        },
        template: `
            <er-icon v-bind="args" />
        `,
    }),
};

export const Types: Story = {
    render: () => ({
        components: { ErIcon },
        setup() {
            const types = ["primary", "success", "warning", "danger", "info"];
            return { types };
        },
        template: `
            <div style="display: flex; gap: 20px; align-items: center;">
                <er-icon v-for="type in types" :key="type" icon="heart" :type="type" size="2x" />
            </div>
        `,
    }),
};

export const Sizes: Story = {
    render: () => ({
        components: { ErIcon },
        setup() {
            const sizes = ["xs", "sm", "lg", "xl", "2xl", "3x", "5x"];
            return { sizes };
        },
        template: `
            <div style="display: flex; gap: 20px; align-items: center;">
                <er-icon v-for="size in sizes" :key="size" icon="star" :size="size" />
            </div>
        `,
    }),
};

export const Animations: Story = {
    render: () => ({
        components: { ErIcon },
        setup() {
            return {};
        },
        template: `
            <div style="display: flex; gap: 30px; align-items: center;">
                <div>
                    <p>Spin</p>
                    <er-icon icon="spinner" spin size="2x" />
                </div>
                <div>
                    <p>Pulse</p>
                    <er-icon icon="heart" pulse size="2x" type="danger" />
                </div>
                <div>
                    <p>Beat</p>
                    <er-icon icon="heart" beat size="2x" type="danger" />
                </div>
                <div>
                    <p>Shake</p>
                    <er-icon icon="bell" shake size="2x" />
                </div>
                <div>
                    <p>Bounce</p>
                    <er-icon icon="arrow-down" bounce size="2x" />
                </div>
            </div>
        `,
    }),
};

export const CommonIcons: Story = {
    render: () => ({
        components: { ErIcon },
        setup() {
            const icons = [
                "search",
                "home",
                "user",
                "settings",
                "envelope",
                "bell",
                "star",
                "heart",
                "check",
                "times",
                "edit",
                "trash",
                "download",
                "upload",
                "file",
                "folder",
                "lock",
                "unlock",
                "eye",
                "eye-slash",
            ];
            return { icons };
        },
        template: `
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; align-items: center;">
                <er-icon v-for="icon in icons" :key="icon" :icon="icon" size="2x" />
            </div>
        `,
    }),
};

export default meta;