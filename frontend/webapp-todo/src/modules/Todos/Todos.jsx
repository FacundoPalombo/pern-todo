import React from "react";
import { Todo } from "./components";
export const Todos = ({ todos = [] }) => {
  return (
    <article>
      {todos.map((t) => (
        <Todo description={t.description} key={t.id} />
      ))}
    </article>
  );
};
