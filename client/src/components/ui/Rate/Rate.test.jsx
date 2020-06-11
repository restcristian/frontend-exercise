import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Rate from "./";

describe("<Rate />", () => {
  test("Renders without errors", () => {
    const { getAllByTestId } = render(
      <Rate onRateChange={jest.fn()} initialValue={5}></Rate>
    );
    const rateButtons = getAllByTestId("rate-button");
    expect(rateButtons).toBeDefined();
  });
  test("When value is passed, stars corresponding classes are styled", () => {
    const { getAllByTestId } = render(
      <Rate onRateChange={jest.fn()} initialValue={3}></Rate>
    );
    const rateButtons = getAllByTestId("rate-button");
    const fullStarClassPattern = /fullStar/;

    expect(fullStarClassPattern.test(rateButtons[0].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[1].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[2].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[3].className)).toBe(false);
    expect(fullStarClassPattern.test(rateButtons[4].className)).toBe(false);
  });

  test("When a star is clicked, the star corresponding classes are styled", () => {
    const { getAllByTestId } = render(
      <Rate onRateChange={jest.fn()} initialValue={3}></Rate>
    );
    const rateButtons = getAllByTestId("rate-button");
    const fullStarClassPattern = /fullStar/;

    fireEvent.click(rateButtons[0]);

    expect(fullStarClassPattern.test(rateButtons[0].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[1].className)).toBe(false);
    expect(fullStarClassPattern.test(rateButtons[2].className)).toBe(false);
    expect(fullStarClassPattern.test(rateButtons[3].className)).toBe(false);
    expect(fullStarClassPattern.test(rateButtons[4].className)).toBe(false);

    fireEvent.click(rateButtons[1]);

    expect(fullStarClassPattern.test(rateButtons[0].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[1].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[2].className)).toBe(false);
    expect(fullStarClassPattern.test(rateButtons[3].className)).toBe(false);
    expect(fullStarClassPattern.test(rateButtons[4].className)).toBe(false);

    fireEvent.click(rateButtons[2]);

    expect(fullStarClassPattern.test(rateButtons[0].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[1].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[2].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[3].className)).toBe(false);
    expect(fullStarClassPattern.test(rateButtons[4].className)).toBe(false);

    fireEvent.click(rateButtons[3]);

    expect(fullStarClassPattern.test(rateButtons[0].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[1].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[2].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[3].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[4].className)).toBe(false);

    fireEvent.click(rateButtons[4]);

    expect(fullStarClassPattern.test(rateButtons[0].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[1].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[2].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[3].className)).toBe(true);
    expect(fullStarClassPattern.test(rateButtons[4].className)).toBe(true);
  });
});
