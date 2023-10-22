import styled from "styled-components";

const FavouriteStyled = styled.div`
  .fav-btn {
    padding: 1em;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
  }

  .filled {
    background-color: #c97c00;
    border: none;
    color: white;
  }

  .unfilled {
    background-color: white;
    border: 2px solid #c97c00;

    color: #c97c00;
  }
`;

export default FavouriteStyled;
