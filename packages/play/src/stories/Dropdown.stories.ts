import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { ErDropdown, ErDropdownItem } from "er-ui-element";
import "er-ui-element/dist/theme/Dropdown.css";

type Story = StoryObj<typeof ErDropdown> & { argTypes?: ArgTypes };

const meta: Meta<typeof ErDropdown> = {
    title: "Example/Dropdown",
    component: ErDropdown,
    subcomponents: { ErDropdownItem },
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: "select",
            options: ["primary", "success", "warning", "danger", "info", ""],
        },
        size: {
            control: "select",
            options: ["large", "default", "small", ""],
        },
        splitButton: {
            control: "boolean",
        },
        placement: {
            control: "select",
            options: ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end"],
        },
        trigger: {
            control: "select",
            options: ["hover", "click"],
        },
    },
};

export const Default: Story = {
    args: {
        type: "primary",
        placement: "bottom",
    },
    render: (args) => ({
        components: { ErDropdown, ErDropdownItem },
        setup() {
            const items = [
                { command: "1", label: "选项一" },
                { command: "2", label: "选项二" },
                { command: "3", label: "选项三", divided: true },
                { command: "4", label: "禁用选项", disabled: true },
            ];
            return { args, items };
        },
        template: `
            <div style="display: flex; gap: 20px;">
                <er-dropdown v-bind="args" @command="console.log">
                    <template #default>
                        <span>下拉菜单</span>
                    </template>
                    <template #dropdown>
                        <er-dropdown-item
                            v-for="item in items"
                            :key="item.command"
                            :command="item.command"
                            :label="item.label"
                            :divided="item.divided"
                            :disabled="item.disabled"
                        />
                    </template>
                </er-dropdown>
            </div>
        `,
    }),
};

export const SplitButton: Story = {
    args: {
        type: "primary",
        splitButton: true,
        placement: "bottom",
    },
    render: (args) => ({
        components: { ErDropdown, ErDropdownItem },
        setup() {
            const items = [
                { command: "1", label: "查看" },
                { command: "2", label: "编辑", divided: true },
                { command: "3", label: "删除" },
            ];
            return { args, items };
        },
        template: `
            <er-dropdown v-bind="args" @command="console.log" @click="console.log('button click')">
                <template #default>
                    <span>分割按钮</span>
                </template>
                <template #dropdown>
                    <er-dropdown-item
                        v-for="item in items"
                        :key="item.command"
                        :command="item.command"
                        :label="item.label"
                        :divided="item.divided"
                    />
                </template>
            </er-dropdown>
        `,
    }),
};

export const Placements: Story = {
    render: () => ({
        components: { ErDropdown, ErDropdownItem },
        setup() {
            const placements = ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end"];
            const items = [
                { command: "1", label: "选项一" },
                { command: "2", label: "选项二" },
                { command: "3", label: "选项三" },
            ];
            return { placements, items };
        },
        template: `
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <er-dropdown
                    v-for="placement in placements"
                    :key="placement"
                    :placement="placement"
                    @command="console.log"
                >
                    <template #default>
                        <span>{{ placement }}</span>
                    </template>
                    <template #dropdown>
                        <er-dropdown-item
                            v-for="item in items"
                            :key="item.command"
                            :command="item.command"
                            :label="item.label"
                        />
                    </template>
                </er-dropdown>
            </div>
        `,
    }),
};

export default meta;