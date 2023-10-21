import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "../../utils/testUtils/testUtils.js";
import Spinner from "./Spinner";

describe("Given a Spinner component", () => {
  describe("When it is instantiated", () => {
    test("Then it should be rendered", () => {
      render(<Spinner />);

      const spinnerElement = screen.getByTestId("spinner-component");

      expect(spinnerElement).toBeInTheDocument();
    });
  });
});
