import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../page/HomePage";

export default () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
