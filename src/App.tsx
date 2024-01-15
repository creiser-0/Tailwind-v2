import { FC } from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ApiTable from "./components/ApiTable/ApiTable";
import Home from "./components/Home/Home";
import CreateNoti from "./components/CreateNoti/CreateNoti";
import "./style.css";

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="apiTable" element={<ApiTable />} />
                <Route path="sendNoti" element={<CreateNoti />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
};

export default App;
