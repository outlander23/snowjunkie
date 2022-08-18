import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Assets
import "antd/dist/antd.min.css";
import "./assets/general.css";

// Layouts
import Admin from "./layouts/Admin";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);
