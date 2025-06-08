import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ThreeDot } from "react-loading-indicators";

const Products = ({ products }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/products", { method: "GET" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Item Not found");
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <center>
          <ThreeDot color="#32cd32" size="large" text="loading" textColor="" />
        </center>
      </div>
    );
  }
  //console.log("inital Render");
  return (
    <div>
      <h1>Product List</h1>
      {data.length !== 0 && (
        <section className="Products">
          {data.map((product, idx) => {
            return (
              <Card
                key={product.id || idx}
                style={{ width: "18rem" }}
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
                    <Card.Text style={{ overflow: "scroll", height: "200px" }}>
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
                  <Button variant="primary">Add to Card</Button>
                </Card.Footer>
              </Card>
            );
          })}
        </section>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Products;
