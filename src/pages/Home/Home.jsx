import usePokemons from "../../hooks/usePokemons.js";
import React, { useEffect } from "react";
import HomeStyled from "./HomeStyled.jsx";
import PokemonsList from "../../components/PokemonsList/PokemonsList.jsx";
import loader from "../../utils/loader/loader.js";

const Home = () => {
  const { getPokemons, pokemons, loading } = usePokemons();

  const PokemonsListWithLoader = loader(PokemonsList, loading);

  useEffect(() => {
    !pokemons.length &&
      (async () => {
        await getPokemons();
      })();
  }, [pokemons]);

  return (
    <HomeStyled>
      <img src="pokemon_logo.png" width={350} />
      <div className="subtitle__container">
        <h2 className="subtitle">Generation 1</h2>
        <span>{pokemons.length} pokemon</span>
        <PokemonsListWithLoader pokemons={pokemons} />
      </div>
    </HomeStyled>
  );
};

export default Home;
