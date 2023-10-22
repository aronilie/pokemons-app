import React from "react";
import usePokemons from "../../hooks/usePokemons";

const Favourite = () => {
  const { makeFavourite } = usePokemons();

  return (
    <>
      <button onClick={() => makeFavourite(true)}>Favourite</button>
      <button onClick={() => makeFavourite(false)}>Unfavourite</button>
    </>
  );
};

export default Favourite;
