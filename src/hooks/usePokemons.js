import { PokemonsConsumer } from "../store/pokemonsContext.js";
import { filterPokemonsProperties } from "../utils/dataProcessing.js";
import { getAllPokemons, getDetailedPokemons } from "../utils/pokemonApi.js";

const usePokemons = () => {
  const { updatePokemons } = PokemonsConsumer();

  return {
    getPokemons: async () => {
      const allPokemons = await getAllPokemons();

      const detailedPokemons = await getDetailedPokemons(allPokemons);

      const filteredPokemons = filterPokemonsProperties(detailedPokemons);

      updatePokemons(filteredPokemons);
    },
  };
};

export default usePokemons;
