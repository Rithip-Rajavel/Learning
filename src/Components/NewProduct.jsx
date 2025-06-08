import React, { useState } from "react";
import { Paper, TextField, Typography, Grid, Button } from "@mui/material";
const NewProduct = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  const handleChange = (e) => {
    let { value, name } = e.target;
    let fieldName = name.split("rating.")[1]; // "rate" or "count"
    console.log(fieldName);
    if (name.includes("rating.")) {
      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then(() => {
        alert("data added successfully");
        setNewProduct({
          title: "",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: {
            rate: 0,
            count: 0,
          },
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <Paper elevation={20} style={paperStyle} onSubmit={handleSubmit}>
        <Typography varient="h5" textAlign={"center"}>
          Create new Form
        </Typography>
        <Grid component="form" style={{ display: "grid", gap: "20px" }}>
          <TextField
            value={newProduct.title}
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            name="category"
            label="Category"
            variant="outlined"
            fullWidth
            value={newProduct.category}
            onChange={handleChange}
          />
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                name="rating.rate"
                type="number"
                label="Rate"
                variant="outlined"
                value={newProduct.rating.rate}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                name="rating.count"
                type="number"
                label="Count"
                variant="outlined"
                value={newProduct.rating.count}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" fullWidth>
            Add
          </Button>
        </Grid>
      </Paper>
    </div>
  );
};

export default NewProduct;
/*
    "id": "1",
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
*/
