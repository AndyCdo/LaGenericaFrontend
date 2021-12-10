import { create } from "apisauce";

const api = create({
  baseURL: "http://localhost:8080",
  timeout: 40000,
});

api.axiosInstance?.interceptors?.request.use(
  async (currentConfig) => {
    const config = currentConfig;
    config.headers.city = localStorage.getItem("city");
    return config;
  },
  (error) => Promise.reject(error)
);

export const axios = api.axiosInstance;

export default api;
