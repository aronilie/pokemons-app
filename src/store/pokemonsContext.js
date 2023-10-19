import React, { createContext, useContext, useState } from "react";

const usePokemonsStore = () => {
  const [pokemons, setPokemons] = useState([]);

  return {
    updatePokemons(pokemons) {
      console.log("asdf", pokemons);
      setPokemons(pokemons);
    },

    restorePokemons() {
      setPokemons([]);
    },
    pokemons,
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
