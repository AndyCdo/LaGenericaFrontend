import api from "./api";

export const create = (data) => {
  return api.post("/reports", data);
};

export const read = (id) => {
  return api.get(`/reports/${id}`);
};

export const readAll = () => {
  return api.get("/reports");
};

export const update = (id, data) => {
  return api.put(`/reports/${id}`, data);
};

export const remove = (id) => {
  return api.delete(`/reports/${id}`);
};
