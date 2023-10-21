import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "../../utils/testUtils/testUtils.js";
import Alert from "./Alert.jsx";

describe("Given an Alert component", () => {
  describe("When it is instantiated with 'info' severity and 'Info alert.' text", () => {
    test("Then it renders an InfoAlertStyled component with the text 'Info alert.'", () => {
      render(<Alert severity="info">Info alert.</Alert>);

      const infoAlert = screen.getByText("Info alert.");

      expect(infoAlert).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with 'success' severity and 'Success alert.' text", () => {
    test("Then it renders an SuccessAlertStyled component with the text 'Success alert.'", () => {
      render(<Alert severity="success">Success alert.</Alert>);

      const successAlert = screen.getByText("Success alert.");

      expect(successAlert).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with 'warning' severity and 'Warning alert.' text", () => {
    test("Then it renders an WarningAlertStyled component with the text 'Warning alert.'", () => {
      render(<Alert severity="warning">Warning alert.</Alert>);

      const warningAlert = screen.getByText("Warning alert.");

      expect(warningAlert).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with 'error' severity and 'Error alert.' text", () => {
    test("Then it renders an ErrorAlertStyled component with the text 'Error alert.'", () => {
      render(<Alert severity="error">Error alert.</Alert>);

      const errorAlert = screen.getByText("Error alert.");

      expect(errorAlert).toBeInTheDocument();
    });
  });
});
