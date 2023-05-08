import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Global from "./style/Global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { theme } from "./theme";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const client = new QueryClient();

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <RecoilRoot>
        <QueryClientProvider client={client}>
          {/* <ReactQueryDevtools /> */}
          <ThemeProvider theme={theme}>
            <Global />
            <App />
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </React.StrictMode>
  </BrowserRouter>
);
