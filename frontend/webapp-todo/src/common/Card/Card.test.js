import React from "react";
import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("GIVEN Card common component", () => {
  const { asFragment } = render(<Card />);
  const firstRender = asFragment();

  it("THEN should render", () => {
    expect(firstRender).toMatchSnapshot();
  });
  it("THEN should render with children", () => {
    const { asFragment } = render(
      <Card>
        <div id="testSelector"></div>
      </Card>
    );
    expect(asFragment().querySelector("#testSelector")).not.toBeNull();
  });
});
