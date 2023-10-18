import styled from "styled-components";

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  .subtitle {
    font-size: 20px;

    &__container {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

export default HomeStyled;
