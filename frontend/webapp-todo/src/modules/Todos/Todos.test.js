import React from "react";
import { render } from "@testing-library/react";
import { Todos } from "./Todos";

describe("GIVEN Todos component", () => {
  it("THEN should render", () => {
    const { asFragment } = render(<Todos />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("THEN should render with todos when todos is provided", () => {
    const mockedTodos = [
      { id: "0", description: "test1" },
      { id: "2", description: "test2" },
      { id: "3", description: "test4" },
    ];
    const { getByText } = render(<Todos todos={mockedTodos} />);
    expect(getByText("test1")).not.toBeNull();
    expect(getByText("test2")).not.toBeNull();
    expect(getByText("test4")).not.toBeNull();
  });
});
