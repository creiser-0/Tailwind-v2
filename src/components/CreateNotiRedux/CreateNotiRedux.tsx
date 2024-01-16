import { FC, useCallback } from "react";
import { iNotification } from "../../contexts/notificationContext";
import messageIcon from "../../assets/notificationsIcons/message-icon.svg";
import newIcon from "../../assets/notificationsIcons/new-icon.svg";
import { useAppDispatch } from "../../hooks";
import { addNotification } from "../../notificationSlice";

const CreateNotiRedux: FC = () => {
    const messageNotification: iNotification = {
        icon: messageIcon,
        text: "You received a new message",
    };
    const newNotification: iNotification = {
        icon: newIcon,
        text: "A new product is available",
    };
    const currentNotifications = [messageNotification, newNotification];

    const dispatch = useAppDispatch();

    const handleClick = useCallback((notification:iNotification)=>{
        dispatch(addNotification(notification))
    }, [dispatch])

    const notifications = currentNotifications.map((notification, i) => {
        return (
            <div className="create-notification" key={i}>
                <p className="create-text">
                    Create notification: {notification.text}
                </p>
                <button
                    className="create-button"
                    onClick={() => {
                        // dispatch(addNotification(notification));
                        handleClick(notification);
                    }}
                >
                    Create
                </button>
            </div>
        );
    });

    return <div className="create-div">
        <h1 className="title">Create Notifications With Redux</h1>
        {notifications}</div>;
};

export default CreateNotiRedux;
