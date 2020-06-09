import React from "react";
import { render } from "@testing-library/react";
import Row from "./";

describe("<Row>", () => {
  test("renders children without errors", () => {
    const { getByText } = render(<Row>hello</Row>);
    expect(getByText(/hello/i)).toBeInTheDocument();
  });
});
