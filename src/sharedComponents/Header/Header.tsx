import { FC, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    iNotification,
    notificationContext,
} from "../../contexts/notificationContext";
import bellIcon from "../../assets/notificationsIcons/bell-icon.svg";
import {
    deleteAllNotifications,
    selectNotificationList,
} from "../../notificationSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

const Header: FC = () => {
    const dispatch = useAppDispatch();
    const [showNoti, setShowNoti] = useState(false);
    const [notSeenNotifications, setNotSeenNotifications] = useState(0);
    const [notifications, setNotifications] = useState<iNotification[]>([]);
    const { contextValue, updateContext } = useContext(notificationContext);
    const notificationRedux = useAppSelector(selectNotificationList);

    useEffect(() => {
        setNotifications([...notificationRedux, ...contextValue!]);
        updateContext!([]);
        dispatch(deleteAllNotifications());
    }, []);

    useEffect(() => {
        if (contextValue![0]) {
            const newNotifications = [...notifications, contextValue?.at(-1)!];
            setNotifications(newNotifications);
        }
    }, [contextValue]);

    useEffect(() => {
        if (notificationRedux[0]) {
            const newNotifications = [
                ...notifications,
                notificationRedux.at(-1)!,
            ];
            setNotifications(newNotifications);
        }
    }, [notificationRedux]);

    useEffect(() => {
        const length = notifications.length;
        if (length === 0) {
            setShowNoti(false);
        }
        setNotSeenNotifications(length);
    }, [notifications]);

    const notificationList = notifications.map((notification, i) => {
        if (notification) {
            return (
                <div className="notification" key={i}>
                    <img
                        className="notification-image"
                        src={notification.icon}
                        alt="notification icon"
                    />
                    <p className="notification-text">{notification.text}</p>
                    <button
                        className="delete-notification"
                        onClick={() => {
                            const newNotifications = [...notifications];
                            newNotifications.splice(i, 1);
                            setNotifications(newNotifications);
                        }}
                    >
                        X
                    </button>
                </div>
            );
        }
        return <div key={i}></div>;
    });

    return (
        <header className="header">
            <nav className="navigation">
                <ul className="link-list">
                    <li>
                        <Link to={""}>Home</Link>
                    </li>
                    <li>
                        <Link to={"apiTable"}>Api Table</Link>
                    </li>
                    <li>
                        <Link to={"sendNotiContext"}>Create Notification</Link>
                    </li>
                    <li>
                        <Link to={"sendNotiRedux"}>
                            Create Notification with Redux
                        </Link>
                    </li>
                </ul>
            </nav>
            <button
                className="notification-button"
                onClick={() => {
                    setShowNoti(!showNoti);
                    setNotSeenNotifications(0);
                }}
            >
                <img src={bellIcon} alt="bell Icon" />
                {notSeenNotifications !== 0 && (
                    <div className="notifications-total">
                        {notSeenNotifications}
                    </div>
                )}
            </button>
            {showNoti && (
                <div
                    className="whole"
                    onClick={() => {
                        setShowNoti(!showNoti);
                    }}
                >
                    <div
                        className="notifications"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {notificationList}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
