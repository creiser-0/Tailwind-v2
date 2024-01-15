import { createRoot } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
    <StrictMode>
        {/* <Provider store={}> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
        {/* </Provider> */}
    </StrictMode>
);
