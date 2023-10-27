import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Wishlist from "./Wishlist";
import { CartProvider } from "react-use-cart"; // Update the import path
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
