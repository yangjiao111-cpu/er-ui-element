import { NotificationFn, Notification, NotificationProps, notificationType } from './types';

export declare const notificationDefaults: {
    readonly type: "info";
    readonly position: "top-right";
    readonly duration: 3000;
    readonly offset: 20;
    readonly transitionName: "fade";
    readonly showClose: true;
};
export declare const notification: NotificationFn & Partial<Notification>;
export declare function closeAll(type?: notificationType): void;
export declare function getLastBottomOffset(this: NotificationProps): any;
declare const _default: Notification;
export default _default;
