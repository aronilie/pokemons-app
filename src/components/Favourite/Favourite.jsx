import React from "react";
import usePokemons from "../../hooks/usePokemons";
import FavouriteStyled from "./FavouriteStyled.jsx";

const Favourite = ({ isFavourite }) => {
  const { makeFavourite } = usePokemons();

  return (
    <FavouriteStyled>
      {isFavourite ? (
        <button
          onClick={() => makeFavourite(false)}
          className="fav-btn unfilled"
        >
          Remove favourite
        </button>
      ) : (
        <button onClick={() => makeFavourite(true)} className="fav-btn filled">
          Make favourite
        </button>
      )}
    </FavouriteStyled>
  );
};

export default Favourite;
