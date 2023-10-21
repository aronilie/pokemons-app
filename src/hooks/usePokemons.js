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
    updateError,
    load,
    unload,
    pokemons,
    pokemon,
    loading,
    error,
  } = PokemonsConsumer();

  return {
    getPokemons: async () => {
      load();

      try {
        const allPokemons = await getAllPokemons(updateError);

        const filteredPokemons = filterPokemons(allPokemons);

        updatePokemons(filteredPokemons);
        updateError("");
      } catch (error) {
        updateError(error);
      }

      unload();
    },

    getPokemon: async (pokemonName) => {
      load();

      try {
        const unfilteredPokemon = await getDetailedPokemon(pokemonName);

        const filteredPokemon = filterPokemonProperties(unfilteredPokemon);

        updatePokemon(filteredPokemon);
        updateError("");
      } catch (error) {
        updateError(error);
      }

      unload();
    },

    pokemons,
    pokemon,
    loading,
    error,
  };
};

export default usePokemons;
