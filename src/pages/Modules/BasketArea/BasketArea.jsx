import React from "react";
import Basket from "./Basket";

const BasketArea = ({ className = "" }) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <Basket />
    </div>
  );
};

export default BasketArea;
