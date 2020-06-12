import React from "react";
import PropTypes from "prop-types";
import styles from "./CheckBoxInput.module.scss";

const CheckBoxInput = ({ checked, onChange, labelText }) => {
  return (
    <div className={styles.checkboxContainer}>
      <label>
        <span>{labelText}</span>
        <input type="checkbox" checked={checked} onChange={onChange} />
      </label>
    </div>
  );
};

CheckBoxInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
};
export default CheckBoxInput;
