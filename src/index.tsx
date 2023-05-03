import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from 'react-router-dom'
import App from "./App";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Global from "./style/Global";
import { theme } from './theme';
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Global />
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </React.StrictMode>
  </BrowserRouter>
);
