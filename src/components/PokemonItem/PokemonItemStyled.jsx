import styled from "styled-components";

const PokemonItemStyled = styled.div`
  width: 15em;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 10em;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export default PokemonItemStyled;
