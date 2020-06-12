import React, { useRef } from "react";
import PropTypes from "prop-types";
import { PlusIcon, HeartIcon } from "../Icon";
import { Col } from "../../mod/FlexGrid";
import Rate from "../Rate";
import { getPreparationTime } from "../../../utils/utils";
import styles from "./RecipeCard.module.scss";
const RecipeCard = ({ recipe, toggleFavoriteHandler, onRateChange }) => {
  const recipeCardRef = useRef(null);
  const toggleRecipeExtrainfo = () => {
    recipeCardRef.current.classList.toggle(styles.openCard);
  };
  const getToggleFavoriteClasses = (recipe) => {
    let classes = [styles.toggleFavoriteButton];

    if (recipe.isFavorite) {
      classes = [...classes, styles.isFilled];
    }

    return classes.join(" ");
  };
  return (
    <Col md={4} sm={6} xs={12}>
      <div className={styles.recipeCard} ref={recipeCardRef}>
        <div className={styles.recipeImageContainer}>
          <button
            className={styles.toggleButton}
            onClick={toggleRecipeExtrainfo}
          >
            <PlusIcon />
          </button>
          <button
            className={getToggleFavoriteClasses(recipe)}
            onClick={toggleFavoriteHandler}
          >
            <HeartIcon />
          </button>
          <img
            className={styles.recipeImage}
            src={recipe.image}
            data-image={recipe.image}
            alt={recipe.headline}
          />
          <div className={styles.recipeExtaContent}>
            <div className={styles.recipeExtaContentWrapper}>
              {recipe.calories ? (
                <>
                  <span>{recipe.calories}</span>
                  <span>/</span>
                </>
              ) : null}
              <span>{getPreparationTime(recipe.time)}</span>
            </div>
          </div>
        </div>
        <div className={styles.recipeContent}>
          <h3 className={styles.recipeName}>{recipe.name}</h3>
          <p className={styles.recipeHeadline}>{recipe.headline}</p>
          <Rate initialValue={recipe.rating} onRateChange={onRateChange} />
        </div>
      </div>
    </Col>
  );
};

RecipeCard.propTypes = {
  toggleFavoriteHandler: PropTypes.func.isRequired,
  onRateChange: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
};

export default RecipeCard;
