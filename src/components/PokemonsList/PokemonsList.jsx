import React from "react";
import PokemonsListStyled from "./PokemonsListStyled.jsx";

const PokemonsList = ({ pokemons }) => {
  return (
    <PokemonsListStyled>
      {pokemons.map((pokemon) => (
        <div></div>
      ))}
    </PokemonsListStyled>
  );
};

export default PokemonsList;
