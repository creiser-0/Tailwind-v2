import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
    return (
        <header className="header">
            <nav>
                <ul>
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
        </header>
    );
};

export default Header;
