import axios from "axios";

const api = axios.create({
  baseURL: "https://json-server-hamburgueria-hf.herokuapp.com",
});

export default api;
