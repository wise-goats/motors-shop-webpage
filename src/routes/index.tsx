import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProductDescription } from "../pages/ProductDescription";
import { ProfilePage } from "../pages/ProfilePage";
import ProfileAdminPage from "../pages/ProfileAdminPage";
import UpdateAdForm from "../components/UpdateAdForm";
import UserUpdateForm from "../components/UserUpdateForm";
import CreateAdForm from "../components/CreateAdForm";

export default () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<Navigate to="/" />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/description/:id" element={<ProductDescription />} />
    <Route path="/profile/:id" element={<ProfilePage />} />
    <Route path="/description" element={<ProductDescription />} />
    <Route path="/profile" element={<ProfilePage />} />
    {/* <Route path="/update" element={<CreateAdForm />} /> */}
  </Routes>
);
