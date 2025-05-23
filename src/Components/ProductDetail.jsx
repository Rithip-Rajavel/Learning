import React, { useContext } from "react";
//import PropTypes from 'prop-types'

import { userContext } from "../App";

// eslint-disable-next-line no-unused-vars
const ProductDetail = ({ deepName, deepPrice, deepDescription }) => {
  //   console.log(deepName, deepPrice, deepDescription);

  const received = useContext(userContext);
  return (
    <div>
      <section>
        <h3>Price: ${deepPrice}</h3>
        <h3>Name: {received.uName}</h3>
        <p>Description: {deepDescription}</p>
      </section>
    </div>
  );
};

export default ProductDetail;
