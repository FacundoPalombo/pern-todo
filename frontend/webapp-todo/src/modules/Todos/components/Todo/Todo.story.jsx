import React from "react";
import { Todo } from "./Todo";

export const withDescription = () => <Todo description="asdasldkña" />;
export const withoutDescription = () => <Todo />;

export default {
  title: "Todo",
  component: Todo,
};
