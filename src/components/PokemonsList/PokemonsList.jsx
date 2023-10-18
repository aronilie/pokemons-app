import usePokemons from "../../hooks/usePokemons.js";
import React, { useEffect } from "react";
import { PokemonsConsumer } from "../../store/pokemonsContext.js";
import PokemonsListStyled from "./PokemonsListStyled.jsx";

const PokemonsList = () => {
  const { getPokemons } = usePokemons();
  const { pokemons } = PokemonsConsumer();

  useEffect(() => {
    (async () => {
      await getPokemons();
    })();
  }, []);

  return (
    <PokemonsListStyled>
      <img src="pokemon_logo.png" width={350} />
      <div className="subtitle__container">
        <h2 className="subtitle">Generation 1</h2>
        <span>{pokemons.length} pokemon</span>
      </div>
    </PokemonsListStyled>
  );
};

export default PokemonsList;
