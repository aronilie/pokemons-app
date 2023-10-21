import React from "react";
import {
  ErrorAlertStyled,
  InfoAlertStyled,
  SuccessAlertStyled,
  WarningAlertStyled,
} from "./AlertStyled.jsx";

const Alert = ({ severity, children }) => {
  switch (severity) {
    case "info":
      return <InfoAlertStyled>{children}</InfoAlertStyled>;
    case "success":
      return <SuccessAlertStyled>{children}</SuccessAlertStyled>;
    case "warning":
      return <WarningAlertStyled>{children}</WarningAlertStyled>;
    case "error":
      return <ErrorAlertStyled>{children}</ErrorAlertStyled>;
  }
};

export default Alert;
