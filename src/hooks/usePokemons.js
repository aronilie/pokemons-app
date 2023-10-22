import { PokemonsConsumer } from "../store/pokemonsContext.js";
import {
  filterPokemonProperties,
  filterPokemons,
} from "../utils/dataProcessing/dataProcessing.js";
import {
  getAllPokemons,
  getDetailedPokemon,
} from "../utils/pokemonApi/pokemonApi.js";

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

  const handleFavourite = (isFavourite) => {
    return { ...pokemon, favourite: isFavourite };
  };

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

    makeFavourite: (isFavourite) => {
      const updatedPokemon = handleFavourite(isFavourite);
      const updatedPokemons = pokemons.map((pokemon) =>
        pokemon.name === updatedPokemon.name ? updatedPokemon : pokemon
      );
      updatePokemon({ ...pokemon, favourite: isFavourite });
      updatePokemons(updatedPokemons);
    },

    pokemons,
    pokemon,
    loading,
    error,
  };
};

export default usePokemons;
