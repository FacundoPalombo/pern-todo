import React from "react";
import { Todo } from "./Todo";
import { render } from "@testing-library/react";

describe("GIVEN Todo component", () => {
  it("THEN should render", () => {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("THEN should render correctly when description is provided", () => {
    const { getByText } = render(<Todo description="Lol" />);
    const assert = getByText("Lol");
    expect(assert).not.toBeNull();
  });
});
