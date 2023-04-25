import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../services/api";
import { iUser, iUserProfile, iUserRegister } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export interface iAuthProviderProps {
  children: React.ReactNode;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface iAuthContext {
  user: iUserProfile | null;
  userLogin: (data: ILogin) => void;
  registerUser: (data: iUserRegister) => void;
}

export const AuthContext = createContext<iAuthContext>({} as iAuthContext);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [user, setUser] = useState<iUserProfile | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function clientAutoLogin() {
      const token = localStorage.getItem("@MYTOKEN");
      if (token) {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        try {
          const res = await Api.get("/profile");
          setUser(res.data);
          toast.success(`Bem vindo(a) ${res.data.name}`);
          navigate("/");
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.log(error);
            toast.error(error.response?.data.message);
            localStorage.removeItem("@MYTOKEN");
          }
        }
      }
    }
    clientAutoLogin();
  }, []);

  const userLogin = async (data: ILogin) => {
    try {
      const res = await Api.post("/login", data);
      localStorage.setItem("@MYTOKEN", res.data.token);
      Api.defaults.headers.authorization = `Bearer ${res.data.token}`;
      const profile = await Api.get("/profile");
      setUser(profile.data);
      toast.success(`Bem vindo(a) ${profile.data.name}`);
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.message);
      }
    }
  };

  const registerUser = async (data: iUserRegister) => {
    typeof data.addresses.number === "string" &&
      parseInt(data.addresses.number);
    data?.isSeller === "true"
      ? (data.isSeller = true)
      : (data.isSeller = false);

    try {
      const newUser = await Api.post("users", data);
      newUser.data.name &&
        toast.success("Registro realizado com sucesso!", {
          position: "top-center",
          autoClose: 2,
        });
      userLogin({ email: data.email, password: data.password });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.message);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, userLogin, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext(): iAuthContext {
  const context = useContext(AuthContext);
  return context;
}