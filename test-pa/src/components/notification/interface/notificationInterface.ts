import { NotificationPlacement } from "antd/es/notification/interface";
import { ReactNode } from "react";

type NotificationType = 'success' | 'info' | 'warning' | 'error';
export default interface NotificationOptions {
    placement?: NotificationPlacement;
    message?: string;
    description?: string | JSX.Element | ReactNode;
    icon?: JSX.Element;
    type?: NotificationType | undefined;
    [key: string]: any;
}
