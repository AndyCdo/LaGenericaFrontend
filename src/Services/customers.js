import api from "./api";

export const create = (data) => {
  return api.post("/customers", data);
};

export const read = (id) => {
  return api.get(`/customers/${id}`);
};

export const readAll = () => {
  return api.get("/customers");
};

export const update = (id, data) => {
  return api.put(`/customers/${id}`, data);
};

export const remove = (id) => {
  return api.delete(`/customers/${id}`);
};
