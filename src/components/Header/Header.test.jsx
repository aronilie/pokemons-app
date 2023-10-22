import React from "react";
import "@testing-library/jest-dom";
import { render } from "../../utils/testUtils/testUtils.js";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is instantiated", () => {
    test("Then it should render the header with the correct title and Pokemon count", () => {
      const pokemons = [
        { name: "Pikachu" },
        { name: "Bulbasaur" },
        { name: "Charmander" },
      ];

      const { getByText } = render(<Header pokemons={pokemons} />);
      const titleElement = getByText("Generation 1");
      const pokemonCountElement = getByText("3 pokemon");

      expect(titleElement).toBeInTheDocument();
      expect(pokemonCountElement).toBeInTheDocument();
    });
  });
});
