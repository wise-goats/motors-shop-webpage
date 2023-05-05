import axios from "axios";

const token = localStorage.getItem("@MYTOKEN");

export const Api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 15000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
