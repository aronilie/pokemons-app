import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePokemons from "../../hooks/usePokemons";
import { PokemonsConsumer } from "../../store/pokemonsContext";
import loader from "../../utils/loader/loader";
import PokemonCard from "../../components/PokemonCard/PokemonCard.jsx";

const PokemonDetail = () => {
  const { id: params } = useParams();
  const { getPokemon } = usePokemons();
  const { loading } = PokemonsConsumer();

  const [pokemon, setPokemon] = useState();

  const PokemonWithLoader = loader(PokemonCard, loading);

  useEffect(() => {
    (async () => {
      const receivedPokemon = params && (await getPokemon(params));
      setPokemon(receivedPokemon);
    })();
  }, [params]);

  return pokemon && <PokemonWithLoader />;
};

export default PokemonDetail;
