import { create } from "apisauce";

const api = create({
  baseURL: "http://locahost:8080",
  timeout: 40000,
});

export const axios = api.axiosInstance;

export default api;
