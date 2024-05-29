import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "@/app/page";

describe("Homepage", () => {
  beforeEach(() => {
    render(<Page />);
  });

  it("Should render properly", () => {
    const header = screen.getByRole("heading");
    const headerText = "WEATHER";

    expect(header).toHaveTextContent(headerText);
  });

  it("Should render all links", () => {
    const buttonList = screen.getAllByRole("link");

    expect(buttonList).toHaveLength(6);
  });

  it("Should be a link list with a button class", () => {
    const buttonElement = screen.getAllByRole("link");

    buttonElement.forEach((button) => {
      expect(button).toHaveClass("button");
    });
  });
});
