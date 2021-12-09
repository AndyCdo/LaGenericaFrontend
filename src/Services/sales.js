import api from "./api";

export const create = (data) => {
  return api.post("/sales", data);
};

export const readAll = () => {
  return api.get("/sales");
};

export const readAllSalesByCustomer = () => {
  return api.get("/sales/customer");
};

export const getLast = () => {
  return api.get(`/sales/last`);
};
