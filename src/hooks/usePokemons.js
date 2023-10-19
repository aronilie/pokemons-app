import { PokemonsConsumer } from "../store/pokemonsContext.js";
import { filterPokemons } from "../utils/dataProcessing.js";
import { getAllPokemons, getDetailedPokemons } from "../utils/pokemonApi.js";

const usePokemons = () => {
  const { updatePokemons, load, unload } = PokemonsConsumer();

  return {
    getPokemons: async () => {
      load();

      const allPokemons = await getAllPokemons();

      const detailedPokemons = await getDetailedPokemons(allPokemons);

      const filteredPokemons = filterPokemons(detailedPokemons);

      updatePokemons(filteredPokemons);

      unload();
    },
  };
};

export default usePokemons;
