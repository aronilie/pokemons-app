import React from "react";
import PokemonSwitchStyled from "./PokemonSwitchStyled.jsx";
import usePokemons from "../../hooks/usePokemons.js";

const PokemonSwitch = () => {
  const { toggleFavourites, showFavourites } = usePokemons();

  return (
    <PokemonSwitchStyled>
      <div
        className={`left ${showFavourites ? "" : "active"}`}
        onClick={() => toggleFavourites(false)}
      >
        All
      </div>
      <div
        className={`right ${showFavourites ? "active" : ""}`}
        onClick={() => toggleFavourites(true)}
      >
        Favourites
      </div>
    </PokemonSwitchStyled>
  );
};

export default PokemonSwitch;
