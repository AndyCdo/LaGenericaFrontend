import { create } from "apisauce";

const api = create({
  baseURL: "http://locahost:8080",
  timeout: 40000,
  headers: {
    Accept: "aplication/json, text/plain, */*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  mode: "no-cors",
});

export const axios = api.axiosInstance;

export default api;
