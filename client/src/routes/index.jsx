import * as constant from "./constant";
import Login from "../pages/Login";
import Recipes from "../pages/Recipes";
export default [
  {
    path: "/",
    exact: true,
    component: Recipes,
  },
  {
    path: constant.RECIPES_PAGE,
    component: Recipes,
  },
  {
    path: constant.LOGIN_PAGE,
    exact: true,
    component: Login,
  },
];
