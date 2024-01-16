import { FC } from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ApiTable from "./components/ApiTable/ApiTable";
import Home from "./components/Home/Home";
import CreateNoti from "./components/CreateNotiContext/CreateNotiContext";
import "./style.css";
import CreateNotiRedux from "./components/CreateNotiRedux/CreateNotiRedux";

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="apiTable" element={<ApiTable />} />
                <Route path="sendNotiContext" element={<CreateNoti />} />
                <Route path="sendNotiRedux" element={<CreateNotiRedux />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
};

export default App;
