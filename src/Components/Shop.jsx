/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProductItem from "./ProductItem";

const Shop = () => {
  const [product, setProduct] = useState({
    name: "iPhone 16",
    price: 100000,
    description: "8GB with 256 GB",
  });

  return (
    <div>
      <h1>Welcome to My Shop</h1>
      <ProductItem product={product} />
    </div>
  );
};

export default Shop;
