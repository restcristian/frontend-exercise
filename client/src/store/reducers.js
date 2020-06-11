import { combineReducers } from "redux";
import Recipes from "./Recipes";
import Auth from "./Auth";
export default combineReducers({
  [Recipes.NAME]: Recipes.reducers,
  [Auth.NAME]: Auth.reducers,
});
