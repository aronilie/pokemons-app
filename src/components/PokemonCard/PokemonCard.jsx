import React from "react";
import PokemonCardStyled from "./PokemonCardStyled.jsx";
import { useNavigate } from "react-router-dom";
import Favourite from "../Favourite/Favourite.jsx";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <PokemonCardStyled>
      <div className="card-container">
        <span className="close-btn" onClick={() => navigate("/")}>
          X
        </span>
        <img src={pokemon.img} alt={pokemon.name} className="pokemon__img" />
        <span className="pokemon__name">{pokemon.name}</span>
        <div className="properties">
          <PokemonProperty label="ID" value={pokemon.id} />
          <PokemonProperty label="Types" value={pokemon.types} isList />
          <PokemonProperty label="Height" value={pokemon.height} />
          <PokemonProperty label="Abilities" value={pokemon.abilities} isList />
        </div>
        <Favourite />
      </div>
    </PokemonCardStyled>
  );
};

const PokemonProperty = ({ label, value, isList }) => {
  return (
    <div className="property">
      <span className="pokemon__key">{label}: </span>
      {isList ? (
        <ul className="pokemon__key__list">
          {value.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};

export default PokemonCard;
