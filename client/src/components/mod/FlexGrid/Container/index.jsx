import React from "react";
import PropTypes from "prop-types";
import styles from "./Container.module.scss";

const Container = ({ children, customClass }) => {
  return (
    <div className={styles.container + (customClass ? " " + customClass : "")}>
      {children}
    </div>
  );
};

Container.propTypes = {
  customClass: PropTypes.string,
};

export default Container;
