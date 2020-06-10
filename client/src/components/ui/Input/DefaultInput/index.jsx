import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";
import { isEmpty } from "../../../../utils/utils";

const DefaultInput = ({
  testId,
  placeholder,
  regex,
  inputOnChange,
  value,
  hasError,
  password,
  customClass,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const getStyleClasses = () => {
    let classes = [styles.inputContainer];
    if (hasError) {
      classes = [...classes, styles.hasError];
    }
    if (password) {
      classes = [...classes, styles.password];
    }
    if (isFocused) {
      classes = [...classes, styles.isFocused];
    }
    return classes.join(" ");
  };
  const handleInputChange = (event) => {
    event.preventDefault();

    if (regex) {
      if (regex.test(event.target.value) || event.target.value.trim() === "") {
        inputOnChange(event.target.value);
      }
    } else {
      inputOnChange(event.target.value);
    }
  };

  const onBlurHandler = () => {
    if (isEmpty(value)) {
      setIsFocused(false);
    }
  };

  return (
    <div className={getStyleClasses()}>
      <input
        className={customClass + " " + styles.defaultInput}
        data-test-id={`input-${testId}`}
        onChange={handleInputChange}
        type={password ? "password" : "text"}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={onBlurHandler}
      />
      <span className={styles.label}>{placeholder}</span>
    </div>
  );
};

DefaultInput.defaultProps = {
  placeholder: "",
  customClass: "",
};

DefaultInput.propTypes = {
  placeholder: PropTypes.string,
  testId: PropTypes.string,
  inputOnChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  regex: PropTypes.instanceOf(RegExp),
  hasError: PropTypes.bool,
  customClass: PropTypes.string,
  password: PropTypes.bool,
};

export default DefaultInput;
