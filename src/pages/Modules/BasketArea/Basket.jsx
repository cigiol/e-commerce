import Button from "@components/Button";
import {
  basketSelector,
  decreaseBasket,
  increaseBasket,
  sortSelector,
  updateAppField,
} from "@store/features/app/appSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Basket = () => {
  const dispatch = useDispatch();
  const basket = useSelector(basketSelector);
  console.log(basket);

  const handleIncreaseBasket = (id) => {
    dispatch(increaseBasket({ id }));
  };
  const handleDecreaseBasket = (id) => {
    dispatch(decreaseBasket({ id }));
  };

  return (
    <div className="flex flex-col gap-4 w-60">
      <div className="flex flex-col gap-4 p-4 bg-white shadow">
        {basket.length > 0 ? (
          basket?.map((b) => (
            <div key={b.id} className="flex items-center justify-between gap-4">
              <div className="flex flex-col min-w-24">
                <div className="text-sm">{b.name}</div>
                <div className="text-primary text-xs">{b.price} ₺</div>
              </div>
              <div className="flex h-8">
                <Button
                  onClick={() => handleDecreaseBasket(b.id)}
                  buttonClass="bg-slate-200 !text-black p-2 rounded-l"
                  buttonText="-"
                />
                <div className="flex bg-primary text-white p-2 items-center w-7 justify-center">
                  {b.quantity}
                </div>
                <Button
                  onClick={() => handleIncreaseBasket(b.id)}
                  buttonClass="bg-slate-200 !text-black p-2 rounded-r"
                  buttonText="+"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-primary">Your Cart Is Empty</div>
        )}
      </div>
      <div className="flex flex-col gap-4 p-4 bg-white shadow">
        <div>
          <label className="text-sm">Total Price:</label>
          <label className="text-primary font-bold text-sm"> 117.000 ₺</label>
        </div>
        <Button buttonText="Go To Checkout" buttonClass="text-sm p-1 rounded" />
      </div>
    </div>
  );
};

export default Basket;
