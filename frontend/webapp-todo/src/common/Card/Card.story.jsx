import React from "react";
import { Card } from "./Card";

export const withChildren = () => (
  <Card>
    <div style={{ width: "200px", height: "200px" }}>
      <div
        style={{ background: "rebeccapurple", width: "95%", height: "95%" }}
      />
    </div>
  </Card>
);
export const withoutChildren = () => <Card />;

export default {
  title: "Card",
  component: Card,
};
