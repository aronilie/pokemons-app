import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePokemons from "../../hooks/usePokemons";
import loader from "../../utils/loader/loader";
import PokemonCard from "../../components/PokemonCard/PokemonCard.jsx";

const PokemonDetail = () => {
  const { id: params } = useParams();
  const { getPokemon, pokemon, loading } = usePokemons();

  const PokemonWithLoader = loader(PokemonCard, loading);

  useEffect(() => {
    (async () => {
      params && (await getPokemon(params));
    })();
  }, [params]);

  return pokemon && <PokemonWithLoader pokemon={pokemon} />;
};

export default PokemonDetail;
