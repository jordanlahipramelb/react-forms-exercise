import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", () => {
  render(<BoxList />);
});

it("it matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new box", () => {
  const { queryByText, getByLabelText } = render(<BoxList />);
  const heightInput = getByLabelText("Height");
  const widthInput = getByLabelText("Width");
  const colorInput = getByLabelText("Background Color");
  const addBtn = queryByText("Add new box");
  const removeBtn = queryByText("X");

  // Item not in document yet
  expect(queryByText(removeBtn)).not.toBeInTheDocument();

  // fill out the form; target value is what we want the value to be in the input variable selected
  // should update the state in our form component that should call the onChange handler
  fireEvent.change(colorInput, { target: { value: "blue" } });
  fireEvent.change(widthInput, { target: { value: 4 } });
  fireEvent.change(heightInput, { target: { value: 4 } }); //Fill out form
  fireEvent.click(addBtn); //Submit the form

  // check to see if item exists now
  expect(queryByText(removeBtn)).toBeInTheDocument();
});

it("should remove a box", () => {
  const { queryByText } = render(<BoxList />);
  const removeBtn = queryByText("X");

  // click the remove button and the box should be gone
  fireEvent.click(removeBtn);
  expect(removeBtn).not.toBeInTheDocument();
});
