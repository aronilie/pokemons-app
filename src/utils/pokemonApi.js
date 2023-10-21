export const getAllPokemons = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/generation/1");

    const { pokemon_species: pokemons } = await response.json();

    return pokemons;
  } catch {
    throw new Error("Se ha producido un error al obtener los pokemons 😟");
  }
};

export const getDetailedPokemon = async (pokemonName) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    const detailedPokemon = await response.json();

    return detailedPokemon;
  } catch {
    throw new Error(
      `Se ha producido un error al obtener los datos de ${pokemonName} 😟`
    );
  }
};
