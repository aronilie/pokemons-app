import React from "react";

const Header = ({ pokemons }) => {
  return (
    <>
      <img src="/pokemon_logo.png" height={128} />
      <div className="subtitle__container">
        <h2 className="subtitle">Generation 1</h2>
        <span>{pokemons.length} pokemon</span>
      </div>
    </>
  );
};

export default Header;
