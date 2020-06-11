import axios from "axios";
import {
  FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILED,
  RATE_RECIPE,
  RATE_RECIPE_SUCCESS,
  RATE_RECIPE_FAILED,
} from "./types";

const getRecipes = async () => {
  const recipes = (await axios.get("/api/v1/recipes")).data;
  return recipes;
};

const updateRating = async (id, rating) => {
  const recipe = (
    await axios.put(`/api/v1/recipes/rate/${id}`, {
      payload: {
        rating,
      },
    })
  ).data;
  return recipe;
};
export const fetchRecipes = () => {
  return async (dispatch) => {
    await dispatch({
      type: FETCH_RECIPES,
    });

    try {
      const payload = await getRecipes();
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
