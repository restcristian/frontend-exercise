import React from "react";
import PropTypes from "prop-types";
import styles from "./Col.module.scss";

const Col = (props) => {
  return (
    <div
      className={
        styles.col +
        (props.xs ? " " + styles["col-" + props.xs] : "") +
        (props.sm ? " " + styles["col-sm-" + props.sm] : "") +
        (props.md ? " " + styles["col-md-" + props.md] : "") +
        (props.lg ? " " + styles["col-lg-" + props.lg] : "") +
        (props.xl ? " " + styles["col-xl-" + props.xl] : "") +
        (props.textAlign ? " text-" + props.textAlign : "") +
        (props.textAlignSm ? " text-sm-" + props.textAlignSm : "") +
        (props.textAlignMd ? " text-md-" + props.textAlignMd : "") +
        (props.textAlignLg ? " text-lg-" + props.textAlignLg : "") +
        (props.textAlignXl ? " text-xl-" + props.textAlignXl : "") +
        (props.customClass ? " " + props.customClass : "")
      }
    >
      {props.children}
    </div>
  );
};

Col.propTypes = {
  xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textAlign: PropTypes.string,
  textAlignSm: PropTypes.string,
  textAlignMd: PropTypes.string,
  textAlignLg: PropTypes.string,
  textAlignXl: PropTypes.string,
  customClass: PropTypes.string,
};

export default Col;
