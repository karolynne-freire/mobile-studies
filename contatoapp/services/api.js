import axios from "axios";

const api = axios.create({
  baseURL: "COLOQUE_A_URL_DA_API_AQUI",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
