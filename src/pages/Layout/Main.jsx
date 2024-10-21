import BasketArea from "@pages/Modules/BasketArea/BasketArea";
import MobileBasket from "@pages/Modules/BasketArea/MobileBasket";
import Header from "@pages/Modules/Header";
import React from "react";

const Main = ({ children }) => {
  return (
    <div className="bg-secondary min-h-screen">
      <Header />
      <div className="relative flex flex gap-1 md:gap-4 xl:container xl:mx-auto p-4">
        {children}
        <BasketArea className="hidden lg:block" />
        <MobileBasket className="block lg:hidden" />
      </div>
    </div>
  );
};

export default Main;
