import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StarIcon } from "../Icon";
import styles from "./Rate.module.scss";

const Rate = ({ initialValue, testId }) => {
  const [value, setValue] = useState(0);
  const size = 5;
  useEffect(() => {
    setValue(initialValue);
  }, []);
  const getStarClasses = (starIdx) => {
    let classes = [styles.rateButton];

    if (starIdx + 1 <= value) {
      classes = [...classes, styles.fullStar];
    }

    return classes.join(" ");
  };
  const renderStars = () => {
    const stars = Array(size)
      .fill(0)
      .map((star, idx) => {
        return (
          <button key={idx} className={getStarClasses(idx)}>
            <StarIcon />
          </button>
        );
      });

    return stars;
  };
  return (
    <div data-testId={testId} className={styles.rateContainer}>
      {renderStars()}
    </div>
  );
};

Rate.propTypes = {
  testId: PropTypes.string,
  initialValue: PropTypes.number,
  onChange: PropTypes.func,
};
export default Rate;
