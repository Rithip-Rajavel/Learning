import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ThreeDot } from "react-loading-indicators";
import useFetch from "./CustomHooks/useFetch";
import { MdAddShoppingCart } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdFolderDelete } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/cartSlice";

const Products = ({ products }) => {
  let navigate = useNavigate();
  const { data, error, isLoading, setData } = useFetch(
    "http://localhost:4000/products"
  );
  if (isLoading) {
    return (
      <div>
        <center>
          <ThreeDot color="#32cd32" size="large" text="loading" textColor="" />
        </center>
      </div>
    );
  }

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/products/${id}`)
      .then(() => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
    let newProductList = data.filter((product) => product.id != id);
    setData(newProductList);
  };
  //console.log("inital Render");
  const dispatch = useDispatch();
  const addItemToCart = (product) => {
    dispatch(addItem(product));
    Swal.fire({
      title: "Item Added Successfully",
      icon: "success",
      draggable: true,
    });
  };
  return (
    <div>
      <span>
        <span>to create new product</span>
        <Button
          onClick={() => {
            navigate("/newProduct");
          }}
        >
          click me!
        </Button>
        <h1>Product List</h1>
      </span>
      {data.length !== 0 && (
        <section className="Products">
          {data.map((product, idx) => {
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
                  <Button
                    variant="primary"
                    onClick={() => addItemToCart(product)}
                  >
                    <MdAddShoppingCart />
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      navigate(`/updateProduct/${product.id}`);
                    }}
                  >
                    <FaEdit />{" "}
                  </Button>
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
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Products;
