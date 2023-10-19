import React, { createContext, useContext, useState } from "react";

const usePokemonsStore = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoadaing] = useState(false);

  return {
    updatePokemons(pokemons) {
      console.log("asdf", pokemons);
      setPokemons(pokemons);
    },

    restorePokemons() {
      setPokemons([]);
    },

    load() {
      setLoadaing(true);
    },

    unload() {
      setLoadaing(false);
    },

    pokemons,
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
