import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProductDescription } from "../pages/ProductDescription";
import { ProfilePage } from "../pages/ProfilePage";
import ProfileAdminPage from "../pages/ProfileAdminPage";
import UpdateAdForm from "../components/UpdateAdForm";

export default () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<Navigate to="/" />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/description" element={<ProductDescription />} />
    <Route path="/profile/:id" element={<ProfilePage />} />
    <Route path="/profileadm" element={<ProfileAdminPage />} />
    <Route
      path="/teste"
      element={<UpdateAdForm id="6d6b2dc2-8f2f-4908-835b-ce6dc19e73a0" />}
    />
  </Routes>
);
