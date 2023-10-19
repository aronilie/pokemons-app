import { PokemonsConsumer } from "../store/pokemonsContext.js";
import { filterPokemons } from "../utils/dataProcessing.js";
import { getAllPokemons, getDetailedPokemons } from "../utils/pokemonApi.js";

const usePokemons = () => {
  const { updatePokemons } = PokemonsConsumer();

  return {
    getPokemons: async () => {
      const allPokemons = await getAllPokemons();

      const detailedPokemons = await getDetailedPokemons(allPokemons);

      const filteredPokemons = filterPokemons(detailedPokemons);

      updatePokemons(filteredPokemons);
    },
  };
};

export default usePokemons;
