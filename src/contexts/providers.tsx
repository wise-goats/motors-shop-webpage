import React from "react";
import { AuthProvider } from "./AuthContext";

export interface iProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: iProvidersProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
