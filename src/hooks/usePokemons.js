import { PokemonsConsumer } from "../store/pokemonsContext.js";
import {
  filterPokemonProperties,
  filterPokemons,
} from "../utils/dataProcessing.js";
import { getAllPokemons, getDetailedPokemon } from "../utils/pokemonApi.js";

const usePokemons = () => {
  const { updatePokemons, load, unload } = PokemonsConsumer();

  return {
    getPokemons: async () => {
      load();

      const allPokemons = await getAllPokemons();

      const filteredPokemons = filterPokemons(allPokemons);

      updatePokemons(filteredPokemons);

      unload();
    },

    getPokemon: async (pokemonName) => {
      load();

      const unfilteredPokemon = await getDetailedPokemon(pokemonName);

      const filteredPokemon = filterPokemonProperties(unfilteredPokemon);

      unload();

      return filteredPokemon;
    },
  };
};

export default usePokemons;
