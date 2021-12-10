import api from "./api";

export const readAll = () => {
  return api.get("/consolidated");
};
