import axios from "axios";

export default axios.create({
  baseURL: "https://note-dusk-server.herokuapp.com",
  withCredentials: true,
  credentials: "include",
  timeout: 30000
})