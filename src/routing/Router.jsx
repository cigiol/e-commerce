import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Views/Home.jsx";
import Product from "@pages/Views/Product";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
