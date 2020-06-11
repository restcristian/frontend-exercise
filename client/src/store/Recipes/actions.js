import axios from "axios";
import {
  FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILED,
} from "./types";

const getRecipes = async () => {
  const recipes = (await axios.get("/api/v1/recipes")).data;
  return recipes;
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
