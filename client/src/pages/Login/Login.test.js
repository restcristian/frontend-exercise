import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from ".";

describe("<Login>", () => {
  describe("Validation", () => {
    test("When email is invalid, there should be errors", () => {
      const { getByTestId } = render(<Login></Login>);
      const emailInput = getByTestId("input-email");
      const passwordInput = getByTestId("input-password");
      const submit = getByTestId("button-submit");

      fireEvent.change(emailInput, { target: { value: "asdasdsad" } });
      fireEvent.change(passwordInput, { target: { value: "asdasdsad" } });

      fireEvent.click(submit);

      expect(getByTestId("login-error-list")).toBeDefined();
    });

    test("When either email or password are empty there should be errors", () => {
      const { getByTestId } = render(<Login></Login>);
      const emailInput = getByTestId("input-email");
      const passwordInput = getByTestId("input-password");
      const submit = getByTestId("button-submit");

      fireEvent.change(emailInput, { target: { value: "" } });
      fireEvent.change(passwordInput, { target: { value: "" } });
      fireEvent.click(submit);

      expect(getByTestId("login-error-list")).toBeDefined();

      fireEvent.change(emailInput, { target: { value: "23232323" } });
      fireEvent.change(passwordInput, { target: { value: "" } });
      fireEvent.click(submit);

      expect(getByTestId("login-error-list")).toBeDefined();

      fireEvent.change(emailInput, { target: { value: "" } });
      fireEvent.change(passwordInput, { target: { value: "23233" } });
      fireEvent.click(submit);

      expect(getByTestId("login-error-list")).toBeDefined();

      fireEvent.change(emailInput, {
        target: { value: "cristian.restituyo@gmail.com" },
      });
      fireEvent.change(passwordInput, { target: { value: "" } });
      fireEvent.click(submit);

      expect(getByTestId("login-error-list")).toBeDefined();
    });
  });
});
