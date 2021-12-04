import api from "./api";

export const create = (data) => {
  return api.post("/products", data);
};

export const read = (id) => {
  return api.get(`/products/${id}`);
};

export const readAll = () => {
  return api.get("/products");
};

export const update = (id, data) => {
  return api.put(`/products/${id}`, data);
};

export const remove = (id) => {
  return api.delete(`/products/${id}`);
};
