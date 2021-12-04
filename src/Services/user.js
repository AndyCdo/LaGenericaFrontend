import api from "./api";

export const create = (data) => {
  return api.post("/users", data);
};

export const read = (id) => {
  return api.get(`/users/${id}`);
};

export const readAll = () => {
  return api.get("/users");
};

export const auth = (username, password) => {
  return api.post("users/auth", { username, password });
};

export const update = (id, data) => {
  return api.put(`/users/${id}`, data);
};

export const remove = (id) => {
  return api.delete(`/users/${id}`);
};
