import React from "react";
import PokemonItemStyled from "./PokemonItemStyled.jsx";

const PokemonItem = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <PokemonItemStyled>
      <img src={pokemon.img} alt={pokemon.name} width={50} />
      <span>{pokemon.name}</span>
    </PokemonItemStyled>
  );
};

export default PokemonItem;
