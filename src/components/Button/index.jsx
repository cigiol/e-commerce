import React from "react";

const Button = ({
  id = "",
  buttonIcon = null,
  buttonText = "",
  buttonClass = "",
  onClick = () => {},
  disabled = false,
}) => {
  const handleOnClick = () => {
    if (disabled) {
      return;
    } else {
      onClick();
    }
  };
  return (
    <div
      id={id}
      className={`flex items-center justify-center bg-primary text-white ${
        disabled ? "cursor-not-allowed opacity-75" : "opacity-100"
      } ${buttonClass} `}
      onClick={handleOnClick}
      disabled={disabled}
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
