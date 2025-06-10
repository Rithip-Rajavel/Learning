import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdAddShoppingCart } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdFolderDelete } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../Store/cartSlice";
const WishList = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => {
    return state.Cart;
  });

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <div>
        <h1>Your WishList</h1>
      </div>
      <div>
        {cartProduct.length !== 0 ? (
          <section className="Products">
            {cartProduct.map((product, idx) => {
              return (
                <Card
                  key={product.id || idx}
                  style={{ width: "24rem" }}
                  className="Product"
                >
                  <center>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ width: "9rem", height: "12rem" }}
                    />
                  </center>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      <Card.Text
                        style={{ overflow: "scroll", height: "200px" }}
                      >
                        {product.description}
                      </Card.Text>
                      <br />
                      <h3>Category:</h3> {product.category}
                      <h4>Rating:</h4>
                      {product.rating.rate}
                      <h4>Customers:</h4>
                      {product.rating.count}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Card.Text>
                      <h3>Price</h3>: ${product.price}
                    </Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      <MdFolderDelete />
                    </Button>
                  </Card.Footer>
                </Card>
              );
            })}
          </section>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h3>No Item is Selected</h3>
            <Button onClick={() => navigate("/products")}>
              Select Product
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default WishList;
