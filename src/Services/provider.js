import api from "./api";

export const create = (data) => {
  return api.post("/providers", data);
};

export const read = (id) => {
  return api.get(`/providers/${id}`);
};

export const readAll = () => {
  return api.get("/providers");
};

export const update = (id, data) => {
  return api.put(`/providers/${id}`, data);
};

export const remove = (id) => {
  return api.delete(`/providers/${id}`);
};
