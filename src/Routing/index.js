import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Welcome from "../Views/Welcome";
import Login from "../Views/Login";
import User from "../Views/User";
import Provider from "../Views/Provider";
import Sales from "../Views/Sales";
import Products from "../Views/Products";
import Customers from "../Views/Customers";
import Reports from "../Views/Reports";
import Consolidated from "../Views/Consolidated";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login/:sede" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/provider" element={<Provider />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/consolidated" element={<Consolidated />} />
        <Route path="*" element={<Navigate replace to="/welcome" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
