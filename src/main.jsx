import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TaskContextPorvider from "./taskContext/TaskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextPorvider>
      <App />
    </TaskContextPorvider>
  </React.StrictMode>
);
