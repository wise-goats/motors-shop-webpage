import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 15000,
});
