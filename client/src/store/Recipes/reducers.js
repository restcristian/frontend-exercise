import {
  FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILED,
  RATE_RECIPE,
  RATE_RECIPE_FAILED,
  RATE_RECIPE_SUCCESS,
  TOGGLE_FAVORITE_RECIPE,
  TOGGLE_FAVORITE_RECIPE_FAILED,
  TOGGLE_FAVORITE_RECIPE_SUCCESS,
} from "./types";

const initialState = {
  recipes: [],
  loading: null,
  page: 0,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
    case RATE_RECIPE:
    case TOGGLE_FAVORITE_RECIPE:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: [...state.recipes, ...action.payload],
        loading: false,
        page: state.page + 1,
      };
    case TOGGLE_FAVORITE_RECIPE_FAILED:
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

      recipe.rating = action.payload.rating;

      return {
        ...state,
        recipes: [...clonedRecipes],
      };
    }

    case TOGGLE_FAVORITE_RECIPE_SUCCESS: {
      const clonedRecipes = [...state.recipes];
      const recipe = clonedRecipes.find(
        (currentRecipe) => currentRecipe.id === action.payload.id
      );
      recipe.isFavorite = action.payload.isFavorite;
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
