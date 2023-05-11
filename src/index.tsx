import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// react18부터 일반 리액트쿼리 사용안된다..
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import App from "./App";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </RecoilRoot>
        </BrowserRouter>
    </React.StrictMode>
);
