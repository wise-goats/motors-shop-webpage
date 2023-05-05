import axios from "axios";

export const FipeApi = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/cars",
  timeout: 15000,
});
