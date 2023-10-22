import usePokemons from "../../hooks/usePokemons.js";
import React, { useEffect } from "react";
import HomeStyled from "./HomeStyled.jsx";
import PokemonsList from "../../components/PokemonsList/PokemonsList.jsx";
import loader from "../../utils/loader/loader.js";
import Switch from "../../components/Switch/Switch.jsx";

const Home = () => {
  const { getPokemons, pokemons, loading, error } = usePokemons();

  const PokemonsListWithLoader = loader(PokemonsList, loading, error);

  useEffect(() => {
    !pokemons.length &&
      (async () => {
        await getPokemons();
      })();
  }, [pokemons]);

  return (
    <HomeStyled>
      <img src="/pokemon_logo.png" height={128} />
      <div className="subtitle__container">
        <h2 className="subtitle">Generation 1</h2>
        <span>{pokemons.length} pokemon</span>
      </div>
      <Switch textOne={"All"} textTwo={"Favourites"} />
      <PokemonsListWithLoader pokemons={pokemons} />
    </HomeStyled>
  );
};

export default Home;
