import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "../../components/mod/FlexGrid";
import { PlusIcon, HeartIcon } from "../../components/ui/Icon";
import Button from "../../components/ui/Button";
import styles from "./Recipes.module.scss";
import { getPreparationTime } from "../../utils/utils";
import Rate from "../../components/ui/Rate";
import { fetchRecipes } from "../../store/Recipes/actions";

const Recipes = () => {
  const recipeRefs = useRef([]);
  const { recipes } = useSelector(({ recipesReducer }) => recipesReducer);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  const dispatch = useDispatch();
  const loadRecipes = () => {
    console.log("recipies loaded");
  };

  const getToggleFavoriteClasses = (recipeIdx) => {
    const classes = [styles.toggleFavoriteButton];

    return classes.join(" ");
  };

  const toggleRecipeExtrainfo = (recipeRef) => {
    recipeRef.classList.toggle(styles.openCard);
  };

  const renderRecipes = () => {
    return recipes.map((recipe, idx) => (
      <Col key={recipe.id} md={4} sm={6} xs={12}>
        <div
          className={styles.recipeCard}
          ref={(ref) => recipeRefs.current.push(ref)}
        >
          <div className={styles.recipeImageContainer}>
            <button
              className={styles.toggleButton}
              onClick={() => toggleRecipeExtrainfo(recipeRefs.current[idx])}
            >
              <PlusIcon />
            </button>
            <button className={getToggleFavoriteClasses(idx)}>
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
                <span>{recipe.calories}</span>
                <span>/</span>
                <span>{getPreparationTime(recipe.time)}</span>
              </div>
            </div>
          </div>
          <div className={styles.recipeContent}>
            <h3 className={styles.recipeName}>{recipe.name}</h3>
            <p className={styles.recipeHeadline}>{recipe.headline}</p>
            <Rate
              initialValue={recipe.rating}
              onRateChange={(value) => {
                const clonedRecipes = [...recipes];
                clonedRecipes[idx].rating = value;
                // setRecipes(clonedRecipes);
              }}
            />
          </div>
        </div>
      </Col>
    ));
  };
  return (
    <div className={styles.recipesContainer}>
      <Container>
        <Row>
          {renderRecipes()}
          <Col xs={12} textAlign="center">
            <Button onClick={loadRecipes}>Load More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Recipes;