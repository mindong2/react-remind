import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./theme";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={DarkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
