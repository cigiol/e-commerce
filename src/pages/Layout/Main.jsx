import Header from "@pages/Modules/Header";
import React from "react";

const Main = ({ children }) => {
  return (
    <div className="bg-secondary">
      <Header />
      <div className="flex flex xl:container xl:mx-auto">{children}</div>
    </div>
  );
};

export default Main;
