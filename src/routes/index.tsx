import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/RegisterPage";
import ProfileAdminPage from "../pages/ProfileAdminPage";
import CreateAdForm from "../components/CreateAdForm";

export default () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<Navigate to="/" />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/profile" element={<ProfileAdminPage />} />
    <Route path="/teste" element={<CreateAdForm />} />
  </Routes>
);
