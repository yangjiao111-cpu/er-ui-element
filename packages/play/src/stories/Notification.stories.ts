import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { ErNotification, ErButton } from "er-ui-element";
import "er-ui-element/dist/theme/Notification.css";
import "er-ui-element/dist/theme/Button.css";

type Story = StoryObj<typeof ErNotification> & { argTypes?: ArgTypes };

const meta: Meta<typeof ErNotification> = {
    title: "Example/Notification",
    component: ErNotification,
    tags: ["autodocs"],
};

export const Default: Story = {
    render: () => ({
        components: { ErButton },
        setup() {
            const showNotification = () => {
                ErNotification({
                    title: "通知标题",
                    message: "这是一条通知消息",
                });
            };
            return { showNotification };
        },
        template: `
            <er-button type="primary" @click="showNotification">显示通知</er-button>
        `,
    }),
};

export const Types: Story = {
    render: () => ({
        components: { ErButton },
        setup() {
            const showSuccess = () => {
                ErNotification.success({
                    title: "成功",
                    message: "操作成功",
                });
            };
            const showWarning = () => {
                ErNotification.warning({
                    title: "警告",
                    message: "请注意查看",
                });
            };
            const showInfo = () => {
                ErNotification.info({
                    title: "信息",
                    message: "这是一条信息",
                });
            };
            const showDanger = () => {
                ErNotification.danger({
                    title: "危险",
                    message: "操作失败",
                });
            };

            return { showSuccess, showWarning, showInfo, showDanger };
        },
        template: `
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <er-button type="success" @click="showSuccess">Success</er-button>
                <er-button type="warning" @click="showWarning">Warning</er-button>
                <er-button type="info" @click="showInfo">Info</er-button>
                <er-button type="danger" @click="showDanger">Danger</er-button>
            </div>
        `,
    }),
};

export const Positions: Story = {
    render: () => ({
        components: { ErButton },
        setup() {
            const positions = ["top-right", "top-left", "bottom-right", "bottom-left"];

            const showNotification = (position: string) => {
                ErNotification({
                    title: "通知",
                    message: `位置: ${position}`,
                    position: position as any,
                });
            };

            return { positions, showNotification };
        },
        template: `
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <er-button
                    v-for="position in positions"
                    :key="position"
                    type="primary"
                    @click="showNotification(position)"
                >
                    {{ position }}
                </er-button>
            </div>
        `,
    }),
};

export const WithIcon: Story = {
    render: () => ({
        components: { ErButton },
        setup() {
            const showWithIcon = () => {
                ErNotification({
                    title: "带图标的通知",
                    message: "这条通知带有一个自定义图标",
                    icon: "bell",
                });
            };
            return { showWithIcon };
        },
        template: `
            <er-button type="primary" @click="showWithIcon">带图标的通知</er-button>
        `,
    }),
};

export const Closable: Story = {
    render: () => ({
        components: { ErButton },
        setup() {
            const showClosable = () => {
                ErNotification({
                    title: "可关闭的通知",
                    message: "这条通知可以手动关闭",
                    showClose: true,
                });
            };
            return { showClosable };
        },
        template: `
            <er-button type="primary" @click="showClosable">可关闭的通知</er-button>
        `,
    }),
};

export const CustomDuration: Story = {
    render: () => ({
        components: { ErButton },
        setup() {
            const showLongDuration = () => {
                ErNotification({
                    title: "长时间通知",
                    message: "这条通知将在 10 秒后关闭",
                    duration: 10000,
                });
            };
            const showNoClose = () => {
                ErNotification({
                    title: "不自动关闭",
                    message: "这条通知不会自动关闭",
                    duration: 0,
                });
            };
            return { showLongDuration, showNoClose };
        },
        template: `
            <div style="display: flex; gap: 10px;">
                <er-button type="primary" @click="showLongDuration">10秒关闭</er-button>
                <er-button type="primary" @click="showNoClose">不自动关闭</er-button>
            </div>
        `,
    }),
};

export const WithClick: Story = {
    render: () => ({
        components: { ErButton },
        setup() {
            const showWithClick = () => {
                ErNotification({
                    title: "可点击的通知",
                    message: "点击此通知会触发事件",
                    onClick: () => {
                        console.log("通知被点击");
                        alert("通知被点击了！");
                    },
                });
            };
            return { showWithClick };
        },
        template: `
            <er-button type="primary" @click="showWithClick">可点击的通知</er-button>
        `,
    }),
};

export const CloseAll: Story = {
    render: () => ({
        components: { ErButton },
        setup() {
            const showMultiple = () => {
                ErNotification.success({ title: "通知 1", message: "第一条通知" });
                setTimeout(() => {
                    ErNotification.warning({ title: "通知 2", message: "第二条通知" });
                }, 300);
                setTimeout(() => {
                    ErNotification.info({ title: "通知 3", message: "第三条通知" });
                }, 600);
            };
            const closeAll = () => {
                ErNotification.closeAll();
            };
            return { showMultiple, closeAll };
        },
        template: `
            <div style="display: flex; gap: 10px;">
                <er-button type="primary" @click="showMultiple">显示多条通知</er-button>
                <er-button type="danger" @click="closeAll">关闭所有通知</er-button>
            </div>
        `,
    }),
};

export default meta;