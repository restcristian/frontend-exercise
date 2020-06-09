import React from "react";
import PropTypes from "prop-types";

import styles from "./Row.module.scss";

const Row = ({ justifyContent, customClass, children }) => {
  return (
    <div
      className={
        styles.row +
        (justifyContent
          ? " " + styles["justify-content-" + justifyContent]
          : "") +
        (customClass ? " " + customClass : "")
      }
    >
      {children}
    </div>
  );
};

Row.propTypes = {
  justifyContent: PropTypes.string,
  customClass: PropTypes.string,
};

export default Row;
