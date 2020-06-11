import React, { useState } from "react";
import PropTypes from "prop-types";
import { StarIcon } from "../Icon";
import styles from "./Rate.module.scss";

const Rate = ({ initialValue, testId, onRateChange }) => {
  const [value, setValue] = useState(initialValue);
  const size = 5;
  const getStarClasses = (starIdx) => {
    let classes = [styles.rateButton];

    if (starIdx + 1 <= value) {
      classes = [...classes, styles.fullStar];
    }

    return classes.join(" ");
  };
  const onClickHandler = (idx) => {
    setValue(idx + 1);
    // onRateChange(idx + 1);
  };
  const renderStars = () => {
    const stars = Array(size)
      .fill(0)
      .map((star, idx) => {
        return (
          <button
            key={idx}
            className={getStarClasses(idx)}
            onClick={() => onClickHandler(idx)}
            data-testid={`rate-button`}
          >
            <StarIcon />
          </button>
        );
      });

    return stars;
  };
  return (
    <div data-testid={`rate-${testId}`} className={styles.rateContainer}>
      {renderStars()}
    </div>
  );
};

Rate.propTypes = {
  testId: PropTypes.string,
  initialValue: PropTypes.number,
  onRateChange: PropTypes.func,
};
export default Rate;
