import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage";
import Project from "./pages/project";
import Layout from "./layout/layout";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contact";
import Projects from "./pages/projects";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="proje/:slug" element={<Project />} />
        <Route path="projeler" element={<Projects />} />
        <Route path="hakkimizda" element={<AboutUs />} />
        <Route path="iletisim" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}
