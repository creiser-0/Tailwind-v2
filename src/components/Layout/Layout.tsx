import { FC } from "react";
import Header from "../../sharedComponents/Header/Header";
import { Outlet } from "react-router-dom";
import { NotificationContextProvider } from "../../contexts/notifications/notificationContext";

const Layout: FC = () => {
    return (
        <NotificationContextProvider>
            <div className="layout">
                <Header />
                <Outlet />
            </div>
        </NotificationContextProvider>
    );
};

export default Layout;
