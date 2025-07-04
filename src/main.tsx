import { FC } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
