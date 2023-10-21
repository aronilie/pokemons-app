import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "../testUtils/testUtils.js";
import loader from "./loader";

const MockComponent = ({ children }) => <div>{children}</div>;

describe("Given a loader function", () => {
  describe("When it is called with loading true", () => {
    test("Then it should render the Spinner component", () => {
      const WrappedComponent = loader(MockComponent, true, null);
      render(<WrappedComponent>Test</WrappedComponent>);

      const spinnerElement = screen.getByTestId("spinner-component");

      expect(spinnerElement).toBeInTheDocument();
    });
  });

  describe("Given a loader function", () => {
    describe("When it is called when error is present", () => {
      test("Then it should render the Alert component with an error", () => {
        const error = "An error occurred";
        const WrappedComponent = loader(MockComponent, false, error);
        render(<WrappedComponent>Hello, World!</WrappedComponent>);

        const alertElement = screen.getByText(/An error occurred/i);

        expect(alertElement).toBeInTheDocument();
        expect(alertElement).toHaveTextContent(error);
      });
    });
  });

  describe("Given a loader function", () => {
    describe("When it is called when loading and error are false", () => {
      test("Then it should render the wrapped component", () => {
        const WrappedComponent = loader(MockComponent, false, null);
        render(<WrappedComponent>Test</WrappedComponent>);

        const componentElement = screen.getByText("Test");

        expect(componentElement).toBeInTheDocument();
      });
    });
  });

  describe("Given a loader function", () => {
    describe("When it is called when loading and error are undefined", () => {
      test("Then it should render the wrapped component", () => {
        const WrappedComponent = loader(MockComponent);
        render(<WrappedComponent>Test</WrappedComponent>);

        const componentElement = screen.getByText("Test");

        expect(componentElement).toBeInTheDocument();
      });
    });
  });
});
