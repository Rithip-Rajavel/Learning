import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Products from "./Components/Products";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";
import Todoapp from "./Components/Todoapp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 999,
      description: "A high-performance laptop.",
    },
    {
      id: 2,
      name: "Phone",
      price: 699,
      description: "A powerful smartphone.",
    },
    {
      id: 3,
      name: "Headphones",
      price: 199,
      description: "Noise-cancelling headphones.",
    },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} />}>
            <Route index element={<ProductList products={products} />} />
            <Route
              path=":productId"
              element={<ProductDetail products={products} />}
            />
          </Route>
          <Route path="/login/:newUser" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<Todoapp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
