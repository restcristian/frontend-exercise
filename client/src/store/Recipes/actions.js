import axios from "axios";
import {
  FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILED,
  RATE_RECIPE,
  RATE_RECIPE_SUCCESS,
  RATE_RECIPE_FAILED,
  TOGGLE_FAVORITE_RECIPE,
  TOGGLE_FAVORITE_RECIPE_SUCCESS,
  TOGGLE_FAVORITE_RECIPE_FAILED,
} from "./types";

import recipesReducer from "../../store/Recipes";

const getRecipes = async (state) => {
  try {
    const recipes = (
      await axios.get(`/api/v1/recipes?page=${state[recipesReducer.NAME].page}`)
    ).data;
    return recipes;
  } catch (error) {
    throw new Error(error);
  }
};

const updateRating = async (id, rating) => {
  try {
    const recipe = (
      await axios.put(`/api/v1/recipes/rate/${id}`, {
        payload: {
          rating,
        },
      })
    ).data;
    return recipe;
  } catch (error) {
    throw new Error(error);
  }
};

const updateFavorite = async (id) => {
  try {
    const recipe = await (await axios.put(`/api/v1/recipes/favorite/${id}`))
      .data;
    return recipe;
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchRecipes = () => {
  return async (dispatch, getState) => {
    await dispatch({
      type: FETCH_RECIPES,
    });

    try {
      const payload = await getRecipes(getState());
      await dispatch({
        type: FETCH_RECIPES_SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: FETCH_RECIPES_FAILED,
      });
    }
  };
};

export const rateRecipe = (id, rating) => {
  return async (dispatch) => {
    await dispatch({
      type: RATE_RECIPE,
    });

    try {
      const payload = await updateRating(id, rating);
      await dispatch({
        type: RATE_RECIPE_SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: RATE_RECIPE_FAILED,
      });
    }
  };
};

export const toggleFavoriteRecipe = (id) => {
  return async (dispatch) => {
    await dispatch({
      type: TOGGLE_FAVORITE_RECIPE,
    });

    try {
      const payload = await updateFavorite(id);
      await dispatch({
        type: TOGGLE_FAVORITE_RECIPE_SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: TOGGLE_FAVORITE_RECIPE_FAILED,
      });
    }
  };
};
