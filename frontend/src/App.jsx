import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Layout from "./pages/LandingPage/Layout";
import ResumeTemplates from "./pages/LandingPage/ResumeTemplates";
import Login from "./pages/Auth/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/templates" element={<ResumeTemplates />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
