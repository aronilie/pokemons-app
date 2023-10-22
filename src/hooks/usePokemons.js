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
    updatePokemon: updateSinglePokemon,
    updateError,
    updateFavourites,
    load,
    unload,
    pokemons,
    pokemon,
    loading,
    showFavourites,
    error,
  } = PokemonsConsumer();

  const handleFavourite = (isFavourite) => {
    return { ...pokemon, isFavourite: isFavourite };
  };

  const updatePokemon = (updatedPokemon) => {
    const updatedPokemons = pokemons.map((pokemon) =>
      pokemon.name === updatedPokemon.name ? updatedPokemon : pokemon
    );

    updatePokemons(updatedPokemons);
    updateSinglePokemon(updatedPokemon);
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

      updatePokemon(updatedPokemon);
    },

    toggleFavourites: (isLeft) => {
      if ((isLeft && !showFavourites) || (!isLeft && showFavourites)) {
        updateFavourites(!showFavourites);
      }
    },

    updatePokemon,
    showFavourites,
    pokemons,
    pokemon,
    loading,
    error,
  };
};

export default usePokemons;
