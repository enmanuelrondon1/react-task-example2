import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TaskContexProvider } from "./contex/TaskContex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContexProvider>
      <App />
    </TaskContexProvider>
  </React.StrictMode>
);
