import React from 'react'

const ProductDetail = ({ deepName, deepPrice, deepDescription }) => {
  console.log(deepName, deepPrice, deepDescription);
  return (
    <div>
      <section>
        <h3>Price: ${deepPrice}</h3>
        <h3>Name: {deepName}</h3>
        <p>Description: {deepDescription}</p>
      </section>
    </div>
  );
};

export default ProductDetail;
