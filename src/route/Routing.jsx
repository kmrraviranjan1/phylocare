import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/product/:id" element={<ProductDetailsPage />}></Route>
    </Routes>
  );
};

export default Routing;
