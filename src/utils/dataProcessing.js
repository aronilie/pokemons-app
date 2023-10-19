const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const filterPokemonProperties = (pokemon) => {
  return {
    id: pokemon?.id ?? null,
    img: `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon?.name}.gif`,
    name: capitalizeFirstLetter(pokemon?.name) ?? null,
    weight: pokemon?.weight ?? null,
    height: pokemon?.height ?? null,
    abilities: (pokemon?.abilities ?? []).map(
      (ability) => ability?.ability?.name ?? null
    ),
  };
};

export const filterPokemons = (pokemons) => {
  let filteredPokemons = [];

  for (const pokemon of pokemons) {
    filteredPokemons.push(filterPokemonProperties(pokemon));
  }

  return filteredPokemons.sort((a, b) => a.id - b.id);
};
