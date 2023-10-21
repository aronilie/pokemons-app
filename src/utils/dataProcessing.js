const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const uncapitalizeFirstLetter = (string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export const filterPokemonProperties = (pokemon) => {
  return {
    id: pokemon?.id ?? null,
    name: capitalizeFirstLetter(pokemon?.name) ?? null,
    img: `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon?.name}.gif`,
    height: pokemon?.height ?? null,
    types: pokemon?.weight ?? null,
    types: (pokemon?.types ?? []).map((type) => type?.type?.name ?? null),
    abilities: (pokemon?.abilities ?? []).map(
      (ability) => ability?.ability?.name ?? null
    ),
    favourite: false,
  };
};

export const filterPokemons = (pokemons) => {
  let filteredPokemons = [];

  for (const pokemon of pokemons) {
    filteredPokemons.push(filterPokemonProperties(pokemon));
  }

  return filteredPokemons.sort((a, b) => a.id - b.id);
};
