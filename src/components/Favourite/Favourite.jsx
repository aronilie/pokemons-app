import React from "react";
import usePokemons from "../../hooks/usePokemons";

const Favourite = ({ isFavourite }) => {
  const { makeFavourite } = usePokemons();

  return (
    <>
      {isFavourite ? (
        <button onClick={() => makeFavourite(false)}>Unfavourite</button>
      ) : (
        <button onClick={() => makeFavourite(true)}>Favourite</button>
      )}
    </>
  );
};

export default Favourite;
