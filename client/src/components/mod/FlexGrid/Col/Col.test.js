import React from "react";
import { render } from "@testing-library/react";
import Col from ".";

describe("<Col>", () => {
  test("renders children without errors", () => {
    const { getByText } = render(<Col>hello</Col>);
    expect(getByText(/hello/i)).toBeInTheDocument();
  });
});
