import { createContext, useContext, useState } from "react";
import { Api } from "../services/api";
import { Advertisement } from "../components/ProductDescriptionComponent";
import { IComment, iCommentRegister } from "../interfaces";
import { useAuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export interface iAdvertisementProviderProps {
  children: React.ReactNode;
}

export interface iAdvertisementContext {
  registerComment: (data: iCommentRegister, advertiseId: string) => void;
  getAdvertisementByIdService: (id: string) => void;
  getAdvertiseComments: (id: string) => void;
  advertisementDescription: Advertisement;
  setAdvertisementDescription: React.Dispatch<
    React.SetStateAction<Advertisement>
  >;
  comments: IComment[];
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}

export const AdvertisementContext = createContext<iAdvertisementContext>(
  {} as iAdvertisementContext
);

export const AdvertisementProvider = ({
  children,
}: iAdvertisementProviderProps) => {
  const [advertisementDescription, setAdvertisementDescription] =
    useState<Advertisement>({} as Advertisement);
  const [comments, setComments] = useState<IComment[]>([]);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const getAdvertisementByIdService = async (id: string) => {
    try {
      return await Api.get(`advertisement/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res);
        setAdvertisementDescription(res.data);
        return;
      });
    } catch (error) {
      console.log(error, "description");
    }
  };

  const getAdvertiseComments = async (id: string) => {
    try {
      return await Api.get(`advertisement/${id}/comment`).then((res) => {
        setComments(res.data[0].comments);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const registerComment = async (
    data: iCommentRegister,
    advertiseId: string
  ) => {
    try {
      if (user == null) {
        navigate("/login");
      }
      const res = await Api.post(`/advertisement/${advertiseId}/comment`, data);
      setComments([...comments, res.data]);
      return res;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.message);
      }
    }
  };

  return (
    <AdvertisementContext.Provider
      value={{
        registerComment,
        getAdvertiseComments,
        getAdvertisementByIdService,
        advertisementDescription,
        setAdvertisementDescription,
        comments,
        setComments,
        // user,
        // userLogin,
      }}
    >
      {children}
    </AdvertisementContext.Provider>
  );
};

export function useAdvertisementContext(): iAdvertisementContext {
  const context = useContext(AdvertisementContext);
  return context;
}
