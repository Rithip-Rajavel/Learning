import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

const Products = ({ products }) => {
  return (
    <div>
      <h2>Products Page</h2>
      <Outlet />
    </div>
  );
};

export default Products;
