import React from "react";
import { Todos } from "./Todos";

const test_todos = [
  { description: "Do homework", id: "1" },
  { description: "lorem ipsum", id: "2" },
  { description: "dolor sit amet", id: "3" },
];

export const withTodos = () => <Todos todos={test_todos}></Todos>;

export const withoutTodos = () => <Todos />;

export default {
  title: "Todos",
  component: Todos,
};
