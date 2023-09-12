import React from "react";
import App from "./App";
import "./assets/css/index.css";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
