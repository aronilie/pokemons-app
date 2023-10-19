import React from "react";
import PokemonsListStyled from "./PokemonsListStyled.jsx";
import PokemonItem from "../PokemonItem/PokemonItem.jsx";
import { PokemonsConsumer } from "../../store/pokemonsContext.js";
import Spinner from "../Spinner/Spinner.jsx";

const PokemonsList = ({ pokemons }) => {
  const { loading } = PokemonsConsumer();

  return (
    <PokemonsListStyled>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {pokemons.map((pokemon) => (
            <PokemonItem pokemon={pokemon} key={pokemon.name} />
          ))}
        </>
      )}
    </PokemonsListStyled>
  );
};

export default PokemonsList;
