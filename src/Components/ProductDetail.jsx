import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h3>{product.name}</h3>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
    </div>
  );
};

export default ProductDetail;
