import styled from "styled-components";

const PokemonSwitchStyled = styled.div`
  display: flex;
  background-color: white;

  .left {
    padding: 0.5em;
    border: 1px solid black;
    border-radius: 5px 0 0 5px;
    user-select: none;
    cursor: pointer;
  }

  .right {
    padding: 0.5em;
    border: 1px solid black;
    border-left: 0;
    border-radius: 0 5px 5px 0;
    user-select: none;
    cursor: pointer;
  }

  .active {
    background-color: #e6e6e6;
  }
`;

export default PokemonSwitchStyled;
