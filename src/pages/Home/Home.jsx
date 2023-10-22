import usePokemons from "../../hooks/usePokemons.js";
import React, { useEffect } from "react";
import HomeStyled from "./HomeStyled.jsx";
import PokemonsList from "../../components/PokemonsList/PokemonsList.jsx";
import loader from "../../utils/loader/loader.js";
import PokemonSwitch from "../../components/PokemonSwitch/PokemonSwitch.jsx";
import { filterFavoritePokemons } from "../../utils/dataProcessing/dataProcessing.js";
import Header from "../../components/Header/Header.jsx";

const Home = () => {
  const { getPokemons, pokemons, loading, showFavourites, error } =
    usePokemons();

  const PokemonsListWithLoader = loader(PokemonsList, loading, error);

  const getActualPokemons = () =>
    showFavourites ? filterFavoritePokemons(pokemons) : pokemons;

  useEffect(() => {
    !pokemons.length &&
      (async () => {
        await getPokemons();
      })();
  }, [pokemons]);

  return (
    <HomeStyled>
      <Header pokemons={getActualPokemons()} />
      <PokemonSwitch />
      <PokemonsListWithLoader pokemons={getActualPokemons()} />
    </HomeStyled>
  );
};

export default Home;
