import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { ErMessage, ErButton } from "er-ui-element";
import "er-ui-element/dist/theme/Message.css";
import "er-ui-element/dist/theme/Button.css";

type Story = StoryObj<typeof ErMessage> & { argTypes?: ArgTypes };

const meta: Meta<typeof ErMessage> = {
    title: "Example/Message",
    component: ErMessage,
    tags: ["autodocs"],
};

export const Default: Story = {
    render: () => ({
        components: { ErButton },
        setup() {
            const showMessage = () => {
                ErMessage("这是一条消息");
            };
            return { showMessage };
        },
        template: `
            <er-button type="primary" @click="showMessage">显示消息</er-button>
        `,
    }),
};

export const Types: Story = {
    render: () => ({
        components: { ErButton },
        setup() {
            const showSuccess = () => ErMessage.success("这是一条成功消息");
            const showWarning = () => ErMessage.warning("这是一条警告消息");
            const showInfo = () => ErMessage.info("这是一条信息消息");
            const showDanger = () => ErMessage.danger("这是一条危险消息");
            const showError = () => ErMessage.error("这是一条错误消息");

            return { showSuccess, showWarning, showInfo, showDanger, showError };
        },
        template: `
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <er-button type="success" @click="showSuccess">Success</er-button>
                <er-button type="warning" @click="showWarning">Warning</er-button>
                <er-button type="info" @click="showInfo">Info</er-button>
                <er-button type="danger" @click="showDanger">Danger</er-button>
                <er-button type="danger" @click="showError">Error</er-button>
            </div>
        `,
    }),
};

export const Closable: Story = {
    render: () => ({
        components: { ErButton },
        setup() {
            const showClosable = () => {
                ErMessage({
                    message: "这是一条可关闭的消息",
                    showClose: true,
                });
            };
            return { showClosable };
        },
        template: `
            <er-button type="primary" @click="showClosable">可关闭的消息</er-button>
        `,
    }),
};

export const CustomDuration: Story = {
    render: () => ({
        components: { ErButton },
        setup() {
            const showLongDuration = () => {
                ErMessage({
                    message: "这条消息将在 5 秒后关闭",
                    duration: 5000,
                });
            };
            const showShortDuration = () => {
                ErMessage({
                    message: "这条消息将在 1 秒后关闭",
                    duration: 1000,
                });
            };
            return { showLongDuration, showShortDuration };
        },
        template: `
            <div style="display: flex; gap: 10px;">
                <er-button type="primary" @click="showLongDuration">5秒关闭</er-button>
                <er-button type="primary" @click="showShortDuration">1秒关闭</er-button>
            </div>
        `,
    }),
};

export const Center: Story = {
    render: () => ({
        components: { ErButton },
        setup() {
            const showCenter = () => {
                ErMessage({
                    message: "这是一条居中的消息",
                    center: true,
                    type: "success",
                });
            };
            return { showCenter };
        },
        template: `
            <er-button type="primary" @click="showCenter">居中显示</er-button>
        `,
    }),
};

export const CloseAll: Story = {
    render: () => ({
        components: { ErButton },
        setup() {
            const showMultiple = () => {
                ErMessage.success("消息 1");
                setTimeout(() => ErMessage.warning("消息 2"), 300);
                setTimeout(() => ErMessage.info("消息 3"), 600);
            };
            const closeAll = () => {
                ErMessage.closeAll();
            };
            return { showMultiple, closeAll };
        },
        template: `
            <div style="display: flex; gap: 10px;">
                <er-button type="primary" @click="showMultiple">显示多条消息</er-button>
                <er-button type="danger" @click="closeAll">关闭所有消息</er-button>
            </div>
        `,
    }),
};

export default meta;