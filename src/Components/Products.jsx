import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Button from "react-bootstrap/Button";

const Products = ({ products }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("This Effect will run only on state render");
  }, [count]);
  //console.log("inital Render");
  return (
    <div>
      <h2>Products Page</h2>
      <p>{count}</p>
      <Button
        variant="primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </Button>
      <Outlet />
    </div>
  );
};

export default Products;
