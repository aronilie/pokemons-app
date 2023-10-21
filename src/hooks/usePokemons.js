import { PokemonsConsumer } from "../store/pokemonsContext.js";
import {
  filterPokemonProperties,
  filterPokemons,
} from "../utils/dataProcessing.js";
import { getAllPokemons, getDetailedPokemon } from "../utils/pokemonApi.js";

const usePokemons = () => {
  const {
    updatePokemons,
    updatePokemon,
    load,
    unload,
    pokemons,
    pokemon,
    loading,
  } = PokemonsConsumer();

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

      updatePokemon(filteredPokemon);

      unload();
    },

    pokemons,
    pokemon,
    loading,
  };
};

export default usePokemons;
