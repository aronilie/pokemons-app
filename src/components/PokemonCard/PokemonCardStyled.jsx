import styled from "styled-components";

const PokemonCardStyled = styled.div`
  padding: 1em;
  border: 1px solid black;
  width: 320px;
  background-color: white;

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
  }

  .close-btn {
    margin: 0;
    align-self: flex-end;
    cursor: pointer;
  }

  .pokemon {
    &__img {
      width: 120px;
      height: auto;
    }

    &__name {
      font-size: 19px;
    }

    &__key {
      font-weight: bold;
      font-size: 17px;
    }
  }

  .properties {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .property {
    margin: 0;
  }
`;

export default PokemonCardStyled;
