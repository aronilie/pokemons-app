export const getAllPokemons = async (errorHandler) => {
  let response;
  try {
    response = await fetch("https://pokepi.co/api/v2/generation/1");

    const { pokemon_species: pokemons } = await response.json();

    return pokemons;
  } catch (error) {
    throw new Error("Se ha producido un error al obtener los pokemons 😟");
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
