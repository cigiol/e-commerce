import Header from "@pages/Modules/Header";
import React from "react";

const Main = ({ children }) => {
  return (
    <div className="bg-secondary">
      <Header />
      <div className="flex flex gap-4 xl:container xl:mx-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default Main;
