
import NotificationOptions from './interface/notificationInterface';
import notification from 'antd/lib/notification';

const Notification = (props: NotificationOptions) => {

    const { placement, message, description, icon, type, ...rest } = props;

    return notification[type ? type : "info"]({
        message: message,
        description: description,
        placement,
        icon: icon,
        ...rest
    });
}

export default Notification;