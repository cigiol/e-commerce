import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@components/Button";

test("renders button with label", () => {
  render(<Button buttonText="Click me" />);

  const buttonElement = screen.getByText("Click me");
  expect(buttonElement).toBeInTheDocument();
});

test("calls onClick function when clicked", () => {
  const handleClick = jest.fn();

  render(<Button buttonText="Click me" onClick={handleClick} />);

  const buttonElement = screen.getByText("Click me");
  fireEvent.click(buttonElement);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("applies the provided buttonClass", () => {
  const customClass = "custom-class";
  render(<Button buttonText="Add To Cart" buttonClass={customClass} />);

  const buttonElement = screen.getByText("Add To Cart");
  expect(buttonElement.parentElement).toHaveClass(customClass);
});
