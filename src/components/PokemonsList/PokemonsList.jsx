import React from "react";
import PokemonsListStyled from "./PokemonsListStyled.jsx";
import PokemonItem from "../PokemonItem/PokemonItem.jsx";

const PokemonsList = ({ pokemons }) => {
  return (
    <PokemonsListStyled>
      {pokemons.map((pokemon) => (
        <PokemonItem pokemon={pokemon} key={pokemon.name} />
      ))}
    </PokemonsListStyled>
  );
};

export default PokemonsList;
