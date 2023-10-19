export const getAllPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/generation/1");

  if (response.ok) {
    const { pokemon_species: pokemons } = await response.json();
    return pokemons;
  } else {
    throw new Error("Error-HTTP: " + response.status);
  }
};

export const getDetailedPokemons = async (pokemons) => {
  let detailedPokemons = [];

  for (const pokemon of pokemons) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
    );

    if (response.ok) {
      const detailedPokemon = await response.json();

      detailedPokemons.push(detailedPokemon);
    } else {
      throw new Error("Error-HTTP: " + response.status);
    }
  }

  return detailedPokemons;
};
