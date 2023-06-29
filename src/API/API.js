import axios from "axios";

export default axios.create({
  baseURL: "https://note-app-server-vpd7.onrender.com",
  withCredentials: true,
  credentials: "include",
  timeout: 30000
})