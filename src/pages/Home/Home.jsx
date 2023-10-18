import usePokemons from "../../hooks/usePokemons.js";
import React, { useEffect } from "react";
import { PokemonsConsumer } from "../../store/pokemonsContext.js";
import HomeStyled from "./HomeStyled.jsx";
import PokemonsList from "../../components/PokemonsList/PokemonsList.jsx";

const Home = () => {
  const { getPokemons } = usePokemons();
  const { pokemons } = PokemonsConsumer();

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
        <PokemonsList pokemons={pokemons} />
      </div>
    </HomeStyled>
  );
};

export default Home;
