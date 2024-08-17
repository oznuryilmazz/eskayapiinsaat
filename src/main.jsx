import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./route.jsx";

import ScrollToTop from "./components/scrollToTop";
import WhatsappSticky from "./components/whatsapp";
import LoadingScreen from "./components/loading-screen";

import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <LoadingScreen />
    <AppRouter />
    <WhatsappSticky />
    <ScrollToTop />
  </BrowserRouter>
);
