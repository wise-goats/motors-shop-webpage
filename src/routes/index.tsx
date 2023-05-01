import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProductDescription } from "../pages/ProductDescription";
import { ProfilePage } from "../pages/ProfilePage";

export default () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<Navigate to="/" />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/description" element={<ProductDescription />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
);
