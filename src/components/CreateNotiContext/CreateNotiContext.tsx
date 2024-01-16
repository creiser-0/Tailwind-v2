import { FC, useContext } from "react";
import notificationContext, {
    iNotification,
} from "../../contexts/notificationContext";
import messageIcon from "../../assets/notificationsIcons/message-icon.svg";
import newIcon from "../../assets/notificationsIcons/new-icon.svg";

const CreateNoti: FC = () => {
    const { contextValue, updateContext } = useContext(notificationContext);

    const messageNotification: iNotification = {
        icon: messageIcon,
        text: "You received a new message",
    };
    const newNotification: iNotification = {
        icon: newIcon,
        text: "A new product is available",
    };
    const currentNotifications = [messageNotification, newNotification];

    const notifications = currentNotifications.map((notification, i) => {
        return (
            <div className="create-notification" key={i}>
                <p className="create-text">
                    Create notification: {notification.text}
                </p>
                <button
                    className="create-button"
                    onClick={() => {
                        updateContext!([...contextValue!, notification]);
                    }}
                >
                    Create
                </button>
            </div>
        );
    });

    return (
        <div className="create-div">
            <h1 className="title">Create Notifications With useContext</h1>
            {notifications}
        </div>
    );
};

export default CreateNoti;
