import React from "react";
import Header from "../Header";
import styles from "./Layout.module.scss";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>{children}</main>
    </>
  );
};

export default Layout;
