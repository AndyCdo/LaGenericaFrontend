import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Welcome from "../Views/Welcome";
import Login from "../Views/Login";
import Home from "../Views/Home";
import User from "../Views/User";
import Provider from "../Views/Provider";
import Sales from "../Views/Sales";
import Products from "../Views/Products";
import Customers from "../Views/Customers";
import Reports from "../Views/Reports";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login/:sede" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/provider" element={<Provider />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" render={() => <Navigate to="/welcome" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
