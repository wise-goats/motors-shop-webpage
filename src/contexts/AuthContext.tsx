import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../services/api";
import {
  iAddress,
  iCommentRegister,
  iUser,
  iUserProfile,
  iUserRegister,
  iUserUpdate,
} from "../interfaces";
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
  address: iAddress;
  userLogin: (data: ILogin) => void;
  registerUser: (data: iUserRegister) => void;
  setAddress: React.Dispatch<React.SetStateAction<iAddress>>;
  exit: () => void;
  selectedCarId: string;
  setSelectedCarId: React.Dispatch<React.SetStateAction<string>>;
  updateUser: (data: iUserUpdate) => void;
  selectedCarDescriptionId: string;
  setSelectedCarDescriptionId: React.Dispatch<React.SetStateAction<string>>;
  handleModalResetPassword: boolean;
  setHandleModalResetPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<iAuthContext>({} as iAuthContext);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [selectedCarId, setSelectedCarId] = useState("");
  const [selectedCarDescriptionId, setSelectedCarDescriptionId] = useState("");
  const [user, setUser] = useState<iUserProfile | null>(null);
  const [address, setAddress] = useState<iAddress>({} as iAddress);
  const [handleModalResetPassword, setHandleModalResetPassword] =
    useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function clientAutoLogin() {
      const token = localStorage.getItem("@MYTOKEN");
      if (token) {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        try {
          const res = await Api.get("/profile");
          const addressRes = await Api.get("/address");
          setAddress(addressRes.data);
          setUser(res.data);
          toast.success(`Bem vindo(a) ${res.data.name}`);
          // navigate("/");
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
      const addressRes = await Api.get("/address");
      setAddress(addressRes.data);
      setUser(profile.data);
      toast.success(`Bem vindo(a) ${profile.data.name}`, { autoClose: 1 });
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.message, { autoClose: 2 });
      }
    }
  };

  const updateUser = async (data: iUserUpdate) => {
    try {
      const res = await Api.patch("/users", data);
      const profile = await Api.get("/profile");
      setUser(profile.data);
      console.log(res.data);
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
        toast.error(error.response?.data.message, { autoClose: 2 });
      }
    }
  };

  const exit = () => {
    localStorage.removeItem("@MYTOKEN");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        address,
        setAddress,
        user,
        userLogin,
        registerUser,
        selectedCarId,
        setSelectedCarId,
        exit,
        updateUser,
        selectedCarDescriptionId,
        setSelectedCarDescriptionId,
        handleModalResetPassword,
        setHandleModalResetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext(): iAuthContext {
  const context = useContext(AuthContext);
  return context;
}
