import { FC } from "react";
import Header from "../../sharedComponents/Header/Header";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
    return (
        <div className="layout">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
