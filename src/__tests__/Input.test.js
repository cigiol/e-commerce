import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "@components/Input";

describe("Input Component", () => {
  test("renders input with placeholder", () => {
    render(<Input placeholder="Search" />);

    const inputElement = screen.getByPlaceholderText("Search");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders label when labelText is provided", () => {
    render(<Input labelText="Search Label" id="search-input" />);

    const labelElement = screen.getByText("Search Label");
    expect(labelElement).toBeInTheDocument();
  });

  test("does not render label when labelText is not provided", () => {
    render(<Input />);

    const labelElement = screen.queryByText("Search Label");
    expect(labelElement).not.toBeInTheDocument();
  });

  test("calls onChange function when input value changes", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);

    const inputElement = screen.getByPlaceholderText("Search");
    fireEvent.change(inputElement, { target: { value: "New Value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("input is disabled when disabled prop is true", () => {
    render(<Input disabled={true} />);

    const inputElement = screen.getByPlaceholderText("Search");
    expect(inputElement).toBeDisabled();
  });
});
