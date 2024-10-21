import React from "react";

const Button = ({
  id = "",
  buttonText = "",
  buttonClass = "",
  onClick = () => {},
}) => {
  return (
    <div
      id={id}
      className={`flex items-center justify-center bg-primary text-white cursor-pointer ${buttonClass} `}
      onClick={onClick}
    >
      <span className={`${buttonText ? "block" : "hidden"}`}>
        {buttonText ?? null}
      </span>
    </div>
  );
};

export default Button;
