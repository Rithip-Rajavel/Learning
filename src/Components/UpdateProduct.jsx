import React, { useEffect, useState } from "react";
import { Paper, TextField, Typography, Grid, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./CustomHooks/useFetch";
import axios from "axios";
const UpdateProduct = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [newProduct, setNewProduct] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:4000/products/${id}`).then((response) => {
      setNewProduct(response.data);
    });
  }, []);

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
    fetch(`http://localhost:4000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then(() => {
        alert("data Updated successfully");
        navigate("/products");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      {newProduct ? (
        <Paper elevation={20} style={paperStyle} onSubmit={handleSubmit}>
          <Typography varient="h5" textAlign={"center"}>
            Update Product
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
            <Button type="submit" variant="contained" fullWidth color="success">
              Save
            </Button>
          </Grid>
        </Paper>
      ) : (
        <Typography variant="h6" textAlign="center">
          Loading...
        </Typography>
      )}
    </div>
  );
};

export default UpdateProduct;
