import axios from "axios";

const token = localStorage.getItem("@MYTOKEN");

export const Api = axios.create({
  baseURL: "https://motors-shop-api-mu.vercel.app/",
  timeout: 15000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
