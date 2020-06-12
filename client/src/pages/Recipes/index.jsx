import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "../../components/mod/FlexGrid";
import Button from "../../components/ui/Button";
import styles from "./Recipes.module.scss";
import {
  fetchRecipes,
  rateRecipe,
  toggleFavoriteRecipe,
  emptyRecipes,
} from "../../store/Recipes/actions";
import RequiresAuth from "../../components/mod/RequiresAuth";
import RecipeCard from "../../components/ui/RecipeCard";
import CheckBoxInput from "../../components/ui/Input/CheckBoxInput";

const Recipes = () => {
  const [page, setPage] = useState(0);
  const [showFavorites, setShowFavorites] = useState(false);
  const { recipes, allRecipesFetched } = useSelector(
    ({ recipesReducer }) => recipesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    loadRecipes();
    return () => {
      dispatch(emptyRecipes());
    };
  }, []);

  const loadRecipes = () => {
    dispatch(fetchRecipes(page));
    setPage(page + 1);
  };

  const renderRecipes = () => {
    if (showFavorites) {
      return recipes.map((recipe) => {
        return (
          recipe.isFavorite && (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onRateChange={(rating) => {
                dispatch(rateRecipe(recipe.id, rating));
              }}
              toggleFavoriteHandler={() => {
                dispatch(toggleFavoriteRecipe(recipe.id));
              }}
            />
          )
        );
      });
    }
    return recipes.map((recipe) => (
      <RecipeCard
        key={recipe.id}
        recipe={recipe}
        onRateChange={(rating) => {
          dispatch(rateRecipe(recipe.id, rating));
        }}
        toggleFavoriteHandler={() => {
          dispatch(toggleFavoriteRecipe(recipe.id));
        }}
      />
    ));
  };

  const renderLoadMoreBtn = () => {
    return showFavorites
      ? null
      : !allRecipesFetched && recipes.length > 0 && (
          <Col xs={12} textAlign="center">
            <Button testId="load-more" onClick={loadRecipes}>
              Load More
            </Button>
          </Col>
        );
  };
  return (
    <div className={styles.recipesContainer}>
      <Helmet>
        <title>Recipes | HelloFresh Exercise</title>
      </Helmet>
      <Container>
        <h2 data-testid="recipes-header-text" className={styles.headerText}>
          Recipes
        </h2>
        <Row>
          <Col xs={12} textAlignMd="right" textAlign="center">
            <CheckBoxInput
              checked={showFavorites}
              labelText="Show Favorites Only:"
              onChange={() => setShowFavorites(!showFavorites)}
            />
          </Col>
          {renderRecipes()}
          {renderLoadMoreBtn()}
        </Row>
      </Container>
    </div>
  );
};

export default RequiresAuth(Recipes);
