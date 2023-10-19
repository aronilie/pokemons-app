import styled from "styled-components";

const SpinnerStyled = styled.section`
  color: #002e6e;
  width: 3px;
  margin-top: 2.5em;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
  transform: translateX(-38px);
  animation: loader 0.5s infinite alternate linear;
  -webkit-box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
  -webkit-transform: translateX(-38px);
  -webkit-animation: loader 0.5s infinite alternate linear;

  @keyframes loader {
    50% {
      box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px;
    }
    100% {
      box-shadow: 19px 0 0 0, 38px 0 0 3px, 57px 0 0 7px;
    }
  }

  @-webkit-keyframes loader {
    50% {
      box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px;
    }
    100% {
      box-shadow: 19px 0 0 0, 38px 0 0 3px, 57px 0 0 7px;
    }
  }
`;

export default SpinnerStyled;
