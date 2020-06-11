import {
  FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILED,
} from "./types";

const initialState = {
  recipes: [],
  loading: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
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
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducers;
