import React, { createContext, useContext, useState } from "react";

const usePokemonsStore = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoadaing] = useState(false);
  const [showFavourites, setShowFavourites] = useState(false);
  const [error, setError] = useState();

  return {
    updatePokemons(pokemons) {
      setPokemons(pokemons);
    },

    updatePokemon(pokemon) {
      setPokemon(pokemon);
    },

    updateError(error) {
      setError(error.message);
    },

    updateFavourites() {
      setShowFavourites((prevState) => !prevState);
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
    showFavourites,
    error,
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
