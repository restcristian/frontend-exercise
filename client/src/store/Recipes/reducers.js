import {
  FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILED,
  RATE_RECIPE,
  RATE_RECIPE_FAILED,
  RATE_RECIPE_SUCCESS,
} from "./types";

const initialState = {
  recipes: [],
  loading: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
    case RATE_RECIPE:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: [...action.payload],
        loading: false,
      };
    case FETCH_RECIPES_FAILED:
    case RATE_RECIPE_FAILED:
      return {
        ...state,
        loading: false,
      };

    case RATE_RECIPE_SUCCESS: {
      const clonedRecipes = [...state.recipes];
      const recipe = clonedRecipes.find(
        (currentRecipe) => currentRecipe.id === action.payload.id
      );

      console.log(recipe);

      recipe.rating = action.payload.rating;

      return {
        ...state,
        recipes: [...clonedRecipes],
      };
    }

    default:
      return state;
  }
};

export default reducers;
