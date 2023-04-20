import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { LoginPage } from "../pages/loginPage";

export default () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
