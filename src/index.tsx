import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import Global from "./style/Global";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  // react-beautiful-dnd 가 StrictMode일때 작동을 안해서 주석
  // <React.StrictMode>
  <RecoilRoot>
    <Global />
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
  // </React.StrictMode>
);
