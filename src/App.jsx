import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Products from "./Components/Products";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";
import Todoapp from "./Components/Todoapp";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const user = "Rithip";
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
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to={`/login/${user}`}>Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/todo">TodoList</Link>
          </li>
        </ol>
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
