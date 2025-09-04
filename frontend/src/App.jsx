import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Layout from "./pages/LandingPage/Layout";
import ResumeTemplates from "./pages/LandingPage/ResumeTemplates";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import { RequireAuth } from "./RequireAuth";
import Dashboard from "./pages/Home/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/templates" element={<ResumeTemplates />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
