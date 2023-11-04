import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Styles
import "./libs/bootstrap-5.1.3/bootstrap.min.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
