import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// ThemeProvider에 props를 내려주고 App 에서는 해당 테마들의 색상들을 받을수 있다 (toggle)
const DarkTheme = {
  textColor: "#fff",
  backgroundColor: "#333",
};

const LightTheme = {
  textColor: "#333",
  backgroundColor: "#fff",
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={DarkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
