import React, { createContext, useContext, useState } from "react";

const usePokemonsStore = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoadaing] = useState(false);

  return {
    updatePokemons(pokemons) {
      setPokemons(pokemons);
    },

    restorePokemons() {
      setPokemons([]);
    },

    updatePokemon(pokemon) {
      setPokemon(pokemon);
    },

    load() {
      setLoadaing(true);
    },

    unload() {
      setLoadaing(false);
    },

    pokemons,
    pokemon,
    loading,
  };
};

const PokemonsContext = createContext();

export const PokemonsConsumer = () => useContext(PokemonsContext);

export const PokemonsProvider = ({ children }) => {
  const pokemonsStore = usePokemonsStore();

  return (
    <PokemonsContext.Provider value={pokemonsStore}>
      {children}
    </PokemonsContext.Provider>
  );
};
