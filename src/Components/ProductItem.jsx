import React from "react";
import ProductDetail from "./ProductDetail";

const ProductItem = ({ product }) => {
  return (
    <div className="product">
        <h2>Display Product Item</h2>
        <ProductDetail
        deepName = {product.name}
        deepPrice ={product.price}
        deepDescription ={product.description}
        />
    </div>
  );
};

export default ProductItem;
