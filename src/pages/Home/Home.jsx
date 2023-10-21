import usePokemons from "../../hooks/usePokemons.js";
import React, { useEffect } from "react";
import { PokemonsConsumer } from "../../store/pokemonsContext.js";
import HomeStyled from "./HomeStyled.jsx";
import PokemonsList from "../../components/PokemonsList/PokemonsList.jsx";
import loader from "../../utils/loader/loader.js";

const Home = () => {
  const { getPokemons } = usePokemons();
  const { pokemons, loading } = PokemonsConsumer();

  const PokemonsListWithLoader = loader(PokemonsList, loading);

  useEffect(() => {
    (async () => {
      await getPokemons();
    })();
  }, []);

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
