const usePokemons = () => {
  return {
    getPokemons: async () => {
      const response = await fetch("https://pokeapi.co/api/v2/generation/1");
      if (response.ok) {
        const { pokemon_species: pokemons } = await response.json();
        return pokemons;
      } else {
        throw new Error("Error-HTTP: " + response.status);
      }
    },
  };
};

export default usePokemons;
