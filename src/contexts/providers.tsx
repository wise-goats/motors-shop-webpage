import React from "react";
import { AuthProvider } from "./AuthContext";
import { AdvertisementProvider } from "./AdvertisementContext";

export interface iProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: iProvidersProps) => {
  return (
    <AuthProvider>
      <AdvertisementProvider>{children}</AdvertisementProvider>
    </AuthProvider>
  );
};

export default Providers;
