import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { ErConfigProvider, ErButton, ErAlert } from "er-ui-element";
import "er-ui-element/dist/theme/Button.css";
import "er-ui-element/dist/theme/Alert.css";

type Story = StoryObj<typeof ErConfigProvider> & { argTypes?: ArgTypes };

const meta: Meta<typeof ErConfigProvider> = {
    title: "Example/ConfigProvider",
    component: ErConfigProvider,
    tags: ["autodocs"],
    argTypes: {
        locale: {
            control: "select",
            options: ["zhCn", "en", "ja", "ko", "zhTw"],
        },
    },
};

export const Default: Story = {
    args: {
        locale: "zhCn",
    },
    render: (args) => ({
        components: { ErConfigProvider, ErButton, ErAlert },
        setup() {
            return { args };
        },
        template: `
            <er-config-provider v-bind="args">
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <er-button type="primary">按钮</er-button>
                    <er-alert type="success" title="成功" closable>
                        这是一条成功消息
                    </er-alert>
                </div>
            </er-config-provider>
        `,
    }),
};

export default meta;