import React from "react";
import { render } from "@testing-library/react";
import Container from "./";

describe("<Container>", () => {
  test("renders children without errors", () => {
    const { getByText } = render(<Container>hello</Container>);
    expect(getByText(/hello/i)).toBeInTheDocument();
  });
});
