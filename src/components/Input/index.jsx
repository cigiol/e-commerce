import React from "react";

const Input = ({
  placeholder = "Search",
  labelText = "",
  inputClass = "",
  onChange = () => {},
  id = "",
  inputName = "",
  value = "",
  disabled = false,
  autoComplete = false,
}) => {
  return (
    <div className="flex flex-col p-1">
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input
        className={`p-1 ${inputClass}`}
        id={id}
        name={inputName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoComplete={autoComplete ? "on" : "off"}
      />
    </div>
  );
};

export default Input;
