import BasketArea from "@pages/Modules/BasketArea/BasketArea";
import Header from "@pages/Modules/Header";
import React from "react";

const Main = ({ children }) => {
  return (
    <div className="bg-secondary h-full">
      <Header />
      <div className="flex flex gap-4 xl:container xl:mx-auto p-4">
        {children}
        <BasketArea className="hidden lg:block" />
      </div>
    </div>
  );
};

export default Main;
