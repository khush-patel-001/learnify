import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Routes, Route, HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/learnify" element={<App />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
