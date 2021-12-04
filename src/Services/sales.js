import api from "./api";

export const create = (data) => {
  return api.post("/sales", data);
};

export const read = (id) => {
  return api.get(`/sales/${id}`);
};

export const readAll = () => {
  return api.get("/sales");
};

export const update = (id, data) => {
  return api.put(`/sales/${id}`, data);
};

export const remove = (id) => {
  return api.delete(`/sales/${id}`);
};
