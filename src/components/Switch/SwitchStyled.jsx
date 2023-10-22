import styled from "styled-components";

const SwitchStyled = styled.div`
  display: flex;
  background-color: white;

  .left {
    padding: 0.5em;
    border: 1px solid black;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
  }

  .right {
    padding: 0.5em;
    border: 1px solid black;
    border-left: 0;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }

  .active {
    background-color: #e6e6e6;
  }
`;

export default SwitchStyled;
