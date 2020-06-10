import React from "react";
import PropTypes from "prop-types";

import styles from "./Row.module.scss";

const Row = ({ justifyContent, alignItems, customClass, children }) => {
  return (
    <div
      className={
        styles.row +
        (justifyContent
          ? " " + styles["justify-content-" + justifyContent]
          : "") +
        (alignItems ? " " + styles["align-items-" + justifyContent] : "") +
        (customClass ? " " + customClass : "")
      }
    >
      {children}
    </div>
  );
};

Row.propTypes = {
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  customClass: PropTypes.string,
};

export default Row;
