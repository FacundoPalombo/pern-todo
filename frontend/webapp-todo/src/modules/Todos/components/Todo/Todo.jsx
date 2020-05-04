import React from "react";
import styles from "./Todo.module.scss";
import { Card } from "common";

export const Todo = ({ description = "" }) => {
  return (
    <Card>
      <p className={styles.paragraph}>{description}</p>
    </Card>
  );
};
