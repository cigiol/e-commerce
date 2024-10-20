import React from "react";

const CheckBox = ({
  className = "",
  checkRowClassName = "",
  id = "",
  name = "",
  value = "",
  type = "",
  checked = false,
  label = "",
  onChange = () => {},
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div
        className={`flex justify-start items-center space-x-2 ${checkRowClassName}`}
      >
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="cursor-pointer"
        />

        <label className="cursor-pointer" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
