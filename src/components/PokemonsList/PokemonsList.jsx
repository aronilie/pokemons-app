import React from "react";
import PokemonsListStyled from "./PokemonsListStyled.jsx";
import PokemonItem from "../PokemonItem/PokemonItem.jsx";

const PokemonsList = ({ pokemons }) => {
  return (
    <PokemonsListStyled>
      {pokemons.length ? (
        pokemons?.map((pokemon) => (
          <PokemonItem pokemon={pokemon} key={pokemon.name} />
        ))
      ) : (
        <span>There are no pokemons yet! 😟</span>
      )}
    </PokemonsListStyled>
  );
};

export default PokemonsList;
