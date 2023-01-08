import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import APIProvider from "./api/Provider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <APIProvider>
      <App />
    </APIProvider>
  </React.StrictMode>
);
