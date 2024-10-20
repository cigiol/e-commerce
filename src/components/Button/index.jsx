import React from "react";

const Button = ({
  id = "",
  buttonIcon = null,
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
      {/* {isIcon ? (
        buttonIcon
      ) : (
        <img className="" width={25} src={buttonIcon} alt="Icon" />
      )} */}
      <span className={`${buttonText ? "block" : "hidden"}`}>
        {buttonText ?? null}
      </span>
    </div>
  );
};

export default Button;
