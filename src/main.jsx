import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/learnify">
      <Routes>
        <Route path="/learnify" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
