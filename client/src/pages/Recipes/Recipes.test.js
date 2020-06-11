import React from "react";
import { render, fireEvent } from "../../utils/test-utils";
import Recipes from ".";

describe("<Recipes />", () => {
  test("Renders without errrors", () => {
    const { getByTestId } = render(<Recipes />);
    const headerTxt = getByTestId("recipes-header-text");

    expect(headerTxt).toBeDefined();
  });
});
