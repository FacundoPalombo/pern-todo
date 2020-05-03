import React from "react";
import { Home } from "./Home";

export const withOutChildren = () => <Home />;
export const withChildren = () => (
  <Home>
    <h1>Hello world!</h1>
  </Home>
);

export default {
  title: "Home",
  component: Home,
};
