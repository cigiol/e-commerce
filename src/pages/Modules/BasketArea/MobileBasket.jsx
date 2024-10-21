import React from "react";
import CartImage from "@assets/cart.svg";
import BasketArea from "./BasketArea";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleBasketSelector,
  updateAppField,
} from "@store/features/app/appSlice";

const MobileBasket = ({ className = "" }) => {
  const isOpen = useSelector(toggleBasketSelector);
  const dispatch = useDispatch();
  const toggleBasket = () => {
    dispatch(updateAppField({ field: "toggleBasket", value: !isOpen }));
  };
  return (
    <div className={`${className}`}>
      <img
        onClick={toggleBasket}
        className="bg-primary w-7 cursor-pointer rounded p-1"
        src={CartImage}
      />
      <BasketArea
        className={`${
          isOpen ? "block" : "hidden"
        } bg-white absolute right-0 top-0 z-1`}
      />
    </div>
  );
};

export default MobileBasket;
