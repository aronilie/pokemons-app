const filterPokemonProperties = (pokemon) => {
  const filteredPokemon = {
    id: pokemon?.id,
    name: pokemon?.name,
    img: `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon?.name}.gif`,
    weight: pokemon?.weight,
    height: pokemon?.height,
    abilities: (pokemon?.abilities ?? []).map(
      (ability) => ability?.ability?.name ?? null
    ),
  };

  return filteredPokemon;
};

export const filterPokemons = (pokemons) => {
  let filteredPokemons = [];

  for (const pokemon of pokemons) {
    filteredPokemons.push(filterPokemonProperties(pokemon));
  }

  return filteredPokemons.sort((a, b) => a.id - b.id);
};
