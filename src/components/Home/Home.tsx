import { FC, useContext } from "react";
import notificationContext from "../../contexts/notifications/notificationContext";

const Home: FC = () => {
    const text = useContext(notificationContext)
    return <h1>HOME </h1>;
};

export default Home;
