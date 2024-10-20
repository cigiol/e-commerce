import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Views/Home.jsx";
import Product from "@pages/Views/Product";
import { useDispatch, useSelector } from "react-redux";
import { basketSelector, updateAppField } from "@store/features/app/appSlice";
import { getStoragedItem, storageItem } from "@utils/localStorage";

const Router = () => {
  const dispatch = useDispatch();
  const basket = useSelector(basketSelector);
  const oldBasket = getStoragedItem("basket");

  useEffect(() => {
    oldBasket.value &&
      dispatch(updateAppField({ field: "basket", value: oldBasket.value }));
  }, []);

  useEffect(() => {
    basket.length > 0 && storageItem("basket", basket);
  }, [basket, dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
