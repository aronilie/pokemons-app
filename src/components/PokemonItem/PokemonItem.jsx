import React from "react";
import PokemonItemStyled from "./PokemonItemStyled.jsx";
import { useNavigate } from "react-router-dom";
import { uncapitalizeFirstLetter } from "../../utils/dataProcessing/dataProcessing.js";
import usePokemons from "../../hooks/usePokemons.js";

const PokemonItem = ({ pokemon }) => {
  const { updatePokemon } = usePokemons();
  const navigate = useNavigate();

  return (
    <PokemonItemStyled
      onClick={() => {
        navigate(`/pokemon/${uncapitalizeFirstLetter(pokemon.name)}`);
        updatePokemon(pokemon);
      }}
    >
      <img src={pokemon.img} alt={pokemon.name} width={50} />
      <span>{pokemon.name}</span>
    </PokemonItemStyled>
  );
};

export default PokemonItem;
