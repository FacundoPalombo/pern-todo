import React from "react";
import styles from "./Home.module.scss";

export const Home = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};
