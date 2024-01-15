import { FC, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { notificationContext } from "../../contexts/notifications/notificationContext";
import bellIcon from "../../assets/notificationsIcons/bell-icon.svg";

const Header: FC = () => {
    const [showNoti, setShowNoti] = useState(false);
    const [notSeenNotifications, setNotSeenNotifications] = useState(0);
    const { contextValue, updateContext } = useContext(notificationContext)

    useEffect(()=>{
        const length = contextValue!.length
        if (length === 0){
            setShowNoti(false)
        }
        setNotSeenNotifications(length)
    },[contextValue])

    const notificationList = contextValue!.map((notification, i) => {
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
                        const newContext = [...contextValue!]
                        newContext.splice(i, 1)
                        updateContext!(newContext);
                    }}
                >
                    X
                </button>
            </div>
        );
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
                        <Link to={"SendNoti"}>Create Notification</Link>
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
                <div className="notifications">{notificationList}</div>
            )}
        </header>
    );
};

export default Header;
