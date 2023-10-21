export const getAllPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/generation/1");

  if (response.ok) {
    const { pokemon_species: pokemons } = await response.json();
    return pokemons;
  } else {
    throw new Error("Error-HTTP: " + response.status);
  }
};

export const getDetailedPokemon = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  if (response.ok) {
    const detailedPokemon = await response.json();
    return detailedPokemon;
  } else {
    throw new Error("Error-HTTP: " + response.status);
  }
};
