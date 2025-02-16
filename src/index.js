import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot from ReactDOM
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
