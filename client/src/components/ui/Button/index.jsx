import React from "react";
import Proptypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ onClick, testId, primary, children, customClass, full }) => {
  const getStyleClass = () => {
    let classes = [styles.button];

    if (primary) {
      classes = [...classes, styles.primary];
    }
    if (full) {
      classes = [...classes, styles.full];
    }

    return classes.join(" ");
  };
  return (
    <button
      className={customClass + " " + getStyleClass()}
      onClick={onClick}
      data-testid={`button-${testId}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: Proptypes.func.isRequired,
  testId: Proptypes.string,
  primary: Proptypes.bool,
  full: Proptypes.bool,
  customClass: Proptypes.string,
};
export default Button;
