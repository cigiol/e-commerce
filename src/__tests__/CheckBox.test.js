import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckBox from "@components/CheckBox";

describe("CheckBox Component", () => {
  test("renders checkbox with label", () => {
    render(
      <CheckBox type="checkbox" label="Accept Terms" id="terms-checkbox" />
    );

    const checkboxElement = screen.getByLabelText("Accept Terms");
    expect(checkboxElement).toBeInTheDocument();
  });

  test("is unchecked by default", () => {
    render(<CheckBox type="checkbox" id="terms-checkbox" />);

    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).not.toBeChecked();
  });

  test("is checked when checked prop is true", () => {
    render(<CheckBox checked={true} type="checkbox" id="terms-checkbox" />);

    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeChecked();
  });

  test("calls onChange function when checkbox is clicked", () => {
    const handleChange = jest.fn();
    render(
      <CheckBox
        label="Accept Terms"
        id="terms-checkbox"
        type="checkbox"
        onChange={handleChange}
      />
    );

    const checkboxElement = screen.getByLabelText("Accept Terms");
    fireEvent.click(checkboxElement);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
