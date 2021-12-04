import api from "./api";

export const create = (data) => {
  return api.post("/provider", data);
};

export const read = (id) => {
  return api.get(`/provider/${id}`);
};

export const readAll = () => {
  return api.get("/provider");
};

export const update = (id, data) => {
  return api.put(`/provider/${id}`, data);
};

export const remove = (id) => {
  return api.delete(`/providers/${id}`);
};
