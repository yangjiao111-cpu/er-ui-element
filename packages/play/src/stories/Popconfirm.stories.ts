import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { ErPopconfirm, ErButton } from "er-ui-element";
import "er-ui-element/dist/theme/Popconfirm.css";
import "er-ui-element/dist/theme/Button.css";

type Story = StoryObj<typeof ErPopconfirm> & { argTypes?: ArgTypes };

const meta: Meta<typeof ErPopconfirm> = {
    title: "Example/Popconfirm",
    component: ErPopconfirm,
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: "text",
        },
        confirmButtonText: {
            control: "text",
        },
        cancelButtonText: {
            control: "text",
        },
        confirmButtonType: {
            control: "select",
            options: ["primary", "success", "warning", "danger", "info", ""],
        },
        cancelButtonType: {
            control: "select",
            options: ["primary", "success", "warning", "danger", "info", ""],
        },
        icon: {
            control: "text",
        },
        iconColor: {
            control: "color",
        },
        hideIcon: {
            control: "boolean",
        },
        hideAfter: {
            control: "number",
        },
        width: {
            control: "number",
        },
        placement: {
            control: "select",
            options: ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end"],
        },
    },
};

export const Default: Story = {
    args: {
        title: "确定要删除吗？",
    },
    render: (args) => ({
        components: { ErPopconfirm, ErButton },
        setup() {
            const handleConfirm = () => {
                console.log("确认操作");
            };
            const handleCancel = () => {
                console.log("取消操作");
            };
            return { args, handleConfirm, handleCancel };
        },
        template: `
            <er-popconfirm
                v-bind="args"
                @confirm="handleConfirm"
                @cancel="handleCancel"
            >
                <template #default>
                    <er-button type="danger">删除</er-button>
                </template>
            </er-popconfirm>
        `,
    }),
};

export const CustomButtons: Story = {
    args: {
        title: "确定要执行此操作吗？",
        confirmButtonText: "确定",
        cancelButtonText: "再想想",
        confirmButtonType: "primary",
        cancelButtonType: "info",
    },
    render: (args) => ({
        components: { ErPopconfirm, ErButton },
        setup() {
            const handleConfirm = () => {
                console.log("确认操作");
            };
            const handleCancel = () => {
                console.log("取消操作");
            };
            return { args, handleConfirm, handleCancel };
        },
        template: `
            <er-popconfirm
                v-bind="args"
                @confirm="handleConfirm"
                @cancel="handleCancel"
            >
                <template #default>
                    <er-button type="primary">操作</er-button>
                </template>
            </er-popconfirm>
        `,
    }),
};

export const CustomIcon: Story = {
    args: {
        title: "确定要禁用此用户吗？",
        icon: "user-slash",
        iconColor: "#ff6b6b",
    },
    render: (args) => ({
        components: { ErPopconfirm, ErButton },
        setup() {
            const handleConfirm = () => {
                console.log("确认禁用");
            };
            const handleCancel = () => {
                console.log("取消操作");
            };
            return { args, handleConfirm, handleCancel };
        },
        template: `
            <er-popconfirm
                v-bind="args"
                @confirm="handleConfirm"
                @cancel="handleCancel"
            >
                <template #default>
                    <er-button type="warning">禁用用户</er-button>
                </template>
            </er-popconfirm>
        `,
    }),
};

export const WithoutIcon: Story = {
    args: {
        title: "确定要提交吗？",
        hideIcon: true,
    },
    render: (args) => ({
        components: { ErPopconfirm, ErButton },
        setup() {
            const handleConfirm = () => {
                console.log("确认提交");
            };
            const handleCancel = () => {
                console.log("取消操作");
            };
            return { args, handleConfirm, handleCancel };
        },
        template: `
            <er-popconfirm
                v-bind="args"
                @confirm="handleConfirm"
                @cancel="handleCancel"
            >
                <template #default>
                    <er-button type="success">提交</er-button>
                </template>
            </er-popconfirm>
        `,
    }),
};

export const CustomWidth: Story = {
    args: {
        title: "确定要执行这个操作吗？这个操作可能会导致一些不可逆的后果，请仔细考虑后再做决定。",
        width: 300,
    },
    render: (args) => ({
        components: { ErPopconfirm, ErButton },
        setup() {
            const handleConfirm = () => {
                console.log("确认操作");
            };
            const handleCancel = () => {
                console.log("取消操作");
            };
            return { args, handleConfirm, handleCancel };
        },
        template: `
            <er-popconfirm
                v-bind="args"
                @confirm="handleConfirm"
                @cancel="handleCancel"
            >
                <template #default>
                    <er-button type="primary">操作</er-button>
                </template>
            </er-popconfirm>
        `,
    }),
};

export const Placements: Story = {
    render: () => ({
        components: { ErPopconfirm, ErButton },
        setup() {
            const placements = ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end"];
            const handleConfirm = () => {
                console.log("确认操作");
            };
            const handleCancel = () => {
                console.log("取消操作");
            };
            return { placements, handleConfirm, handleCancel };
        },
        template: `
            <div style="display: flex; flex-direction: column; gap: 20px; align-items: flex-start;">
                <er-popconfirm
                    v-for="placement in placements"
                    :key="placement"
                    :placement="placement"
                    title="确定要删除吗？"
                    @confirm="handleConfirm"
                    @cancel="handleCancel"
                >
                    <template #default>
                        <er-button type="danger">{{ placement }}</er-button>
                    </template>
                </er-popconfirm>
            </div>
        `,
    }),
};

export default meta;