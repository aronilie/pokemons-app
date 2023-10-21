import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "../../utils/testUtils/testUtils.js";
import PokemonsList from "./PokemonsList";

jest.mock("../PokemonItem/PokemonItem.jsx", () => {
  return function MockPokemonItem(props) {
    return <div data-testid="pokemon-item">{props.pokemon.name}</div>;
  };
});

describe("Given a PokemonsList component", () => {
  describe("When it is instantiated with pokemons", () => {
    test("Then it should render a list of Pokemons", () => {
      const pokemons = [
        { name: "Pikachu" },
        { name: "Bulbasaur" },
        { name: "Charmander" },
      ];

      render(<PokemonsList pokemons={pokemons} />);

      const pokemonItems = screen.getAllByTestId("pokemon-item");

      expect(pokemonItems.length).toBe(pokemons.length);

      pokemons.forEach((pokemon, index) => {
        expect(pokemonItems[index]).toHaveTextContent(pokemon.name);
      });
    });
  });
});

describe("When it is instantiated without pokemons", () => {
  test("Then it should render an empty list", () => {
    render(<PokemonsList pokemons={[]} />);

    const emptyList = screen.queryByTestId("pokemon-item");

    expect(emptyList).toBeNull();
  });
});
