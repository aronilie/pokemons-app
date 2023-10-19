import React from "react";
import PokemonItemStyled from "./PokemonItemStyled.jsx";

const PokemonItem = ({ pokemon }) => {
  return (
    <PokemonItemStyled>
      <img
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
        alt={pokemon.name}
        width={50}
      />
      <span>{pokemon.name}</span>
    </PokemonItemStyled>
  );
};

export default PokemonItem;
