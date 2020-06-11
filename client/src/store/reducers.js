import { combineReducers } from "redux";
import Recipes from "./Recipes";
export default combineReducers({
  [Recipes.NAME]: Recipes.reducers,
});
