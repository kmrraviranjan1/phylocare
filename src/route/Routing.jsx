import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Footer from "../components/Footer";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import Navbar from "../components/Navbar";
const Routing = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <Navbar />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route path="/" index element={<HomePage />}></Route>
        <Route path="/product/:id" element={<ProductDetailsPage />}></Route>
      </Route>
    </Routes>
  );
};

export default Routing;
