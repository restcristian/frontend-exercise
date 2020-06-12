import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "../store";
import { createBrowserHistory } from "history";
import { render } from "@testing-library/react";

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory()}>{children}</Router>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
