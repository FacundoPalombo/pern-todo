import React from "react";
import styles from "./Home.module.scss";
import { connect } from "react-redux";

export const Home = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};
