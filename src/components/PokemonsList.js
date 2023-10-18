import usePokemons from "../hooks/usePokemons.js";
import React, { useEffect } from "react";
import { PokemonsConsumer } from "../store/pokemonsContext.js";

const PokemonsList = () => {
  const { getPokemons } = usePokemons();
  const { pokemons } = PokemonsConsumer();

  useEffect(() => {
    (async () => {
      await getPokemons();
    })();
  }, []);

  if (pokemons) console.log(pokemons);
  return (
    <div>
      <img src="pokemon_logo.png" width={350} />
    </div>
  );
};

export default PokemonsList;
