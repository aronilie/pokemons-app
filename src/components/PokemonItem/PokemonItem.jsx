import React from "react";
import PokemonItemStyled from "./PokemonItemStyled.jsx";
import { useNavigate } from "react-router-dom";
import { uncapitalizeFirstLetter } from "../../utils/dataProcessing.js";

const PokemonItem = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <PokemonItemStyled
      onClick={() =>
        navigate(`/pokemon/${uncapitalizeFirstLetter(pokemon.name)}`)
      }
    >
      <img src={pokemon.img} alt={pokemon.name} width={50} />
      <span>{pokemon.name}</span>
    </PokemonItemStyled>
  );
};

export default PokemonItem;
