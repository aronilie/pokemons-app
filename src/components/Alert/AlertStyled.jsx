import styled from "styled-components";

const BaseAlertStyled = styled.div`
  padding: 0.5em;
  border-radius: 5px;
  margin: 2em;
`;

export const InfoAlertStyled = styled(BaseAlertStyled)`
  color: #059;
  background-color: #bef;
`;

export const SuccessAlertStyled = styled(BaseAlertStyled)`
  color: #270;
  background-color: #dff2bf;
`;

export const WarningAlertStyled = styled(BaseAlertStyled)`
  color: #9f6000;
  background-color: #feefb3;
`;

export const ErrorAlertStyled = styled(BaseAlertStyled)`
  color: #d8000c;
  background-color: #ffbaba;
`;
