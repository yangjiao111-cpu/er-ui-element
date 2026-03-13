import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { ErTooltip, ErButton } from "er-ui-element";
import "er-ui-element/dist/theme/Tooltip.css";
import "er-ui-element/dist/theme/Button.css";

type Story = StoryObj<typeof ErTooltip> & { argTypes?: ArgTypes };

const meta: Meta<typeof ErTooltip> = {
    title: "Example/Tooltip",
    component: ErTooltip,
    tags: ["autodocs"],
    argTypes: {
        content: {
            control: "text",
        },
        placement: {
            control: "select",
            options: ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"],
        },
        trigger: {
            control: "select",
            options: ["hover", "click", "contextmenu"],
        },
        manual: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
        showTimeout: {
            control: "number",
        },
        hideTimeout: {
            control: "number",
        },
    },
};

export const Default: Story = {
    args: {
        content: "这是一段提示文字",
        placement: "top",
    },
    render: (args) => ({
        components: { ErTooltip, ErButton },
        setup() {
            return { args };
        },
        template: `
            <er-tooltip v-bind="args">
                <template #default>
                    <er-button type="primary">鼠标悬停</er-button>
                </template>
            </er-tooltip>
        `,
    }),
};

export const Placements: Story = {
    render: () => ({
        components: { ErTooltip, ErButton },
        setup() {
            const placements = [
                "top", "top-start", "top-end",
                "bottom", "bottom-start", "bottom-end",
                "left", "left-start", "left-end",
                "right", "right-start", "right-end"
            ];
            return { placements };
        },
        template: `
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 100px;">
                <er-tooltip
                    v-for="placement in placements"
                    :key="placement"
                    :content="placement"
                    :placement="placement"
                >
                    <template #default>
                        <er-button type="primary">{{ placement }}</er-button>
                    </template>
                </er-tooltip>
            </div>
        `,
    }),
};

export const Triggers: Story = {
    render: () => ({
        components: { ErTooltip, ErButton },
        setup() {
            return {};
        },
        template: `
            <div style="display: flex; gap: 20px;">
                <er-tooltip content="Hover 触发" placement="top" trigger="hover">
                    <template #default>
                        <er-button type="primary">Hover</er-button>
                    </template>
                </er-tooltip>
                <er-tooltip content="Click 触发" placement="top" trigger="click">
                    <template #default>
                        <er-button type="success">Click</er-button>
                    </template>
                </er-tooltip>
                <er-tooltip content="右键触发" placement="top" trigger="contextmenu">
                    <template #default>
                        <er-button type="warning">Contextmenu</er-button>
                    </template>
                </er-tooltip>
            </div>
        `,
    }),
};

export const ManualControl: Story = {
    render: () => ({
        components: { ErTooltip, ErButton },
        setup() {
            return {};
        },
        template: `
            <er-tooltip content="手动控制显示隐藏" placement="top" manual>
                <template #default>
                    <er-button type="info">手动控制</er-button>
                </template>
            </er-tooltip>
        `,
    }),
};

export const Disabled: Story = {
    args: {
        content: "禁用的提示",
        placement: "top",
        disabled: true,
    },
    render: (args) => ({
        components: { ErTooltip, ErButton },
        setup() {
            return { args };
        },
        template: `
            <er-tooltip v-bind="args">
                <template #default>
                    <er-button type="danger">禁用</er-button>
                </template>
            </er-tooltip>
        `,
    }),
};

export const CustomTimeout: Story = {
    args: {
        content: "延迟显示和隐藏",
        placement: "top",
        showTimeout: 1000,
        hideTimeout: 1000,
    },
    render: (args) => ({
        components: { ErTooltip, ErButton },
        setup() {
            return { args };
        },
        template: `
            <er-tooltip v-bind="args">
                <template #default>
                    <er-button type="primary">延迟提示</er-button>
                </template>
            </er-tooltip>
        `,
    }),
};

export const WithRichContent: Story = {
    args: {
        placement: "bottom",
    },
    render: (args) => ({
        components: { ErTooltip, ErButton },
        setup() {
            return { args };
        },
        template: `
            <er-tooltip v-bind="args">
                <template #content>
                    <div style="max-width: 200px;">
                        <p style="margin: 0 0 8px 0; font-weight: bold;">详细信息</p>
                        <p style="margin: 0;">这是一段较长的提示文字，可以包含多行内容，用于展示更详细的信息。</p>
                    </div>
                </template>
                <template #default>
                    <er-button type="primary">富文本内容</er-button>
                </template>
            </er-tooltip>
        `,
    }),
};

export default meta;