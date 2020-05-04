import React from "react";
import { render } from "@testing-library/react";
import { Home } from "./Home";

describe("GIVEN Home component", () => {
  const { asFragment } = render(<Home />);
  const firstRender = asFragment();

  it("THEN should render", () => {
    expect(firstRender).toMatchSnapshot();
  });
  it("THEN should render with children", () => {
    const { asFragment } = render(
      <Home>
        <div id="testSelector"></div>
      </Home>
    );
    expect(asFragment().querySelector("#testSelector")).not.toBeNull();
  });
});
