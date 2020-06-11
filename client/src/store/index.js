import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store;

if (process.env.NODE_ENV === "development") {
  store = createStore(reducers, composeEnhancers(middleware));
} else {
  store = createStore(reducers, composeEnhancers(middleware));
}

export default store;
