import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "../../utils/testUtils/testUtils.js";
import PokemonItem from "./PokemonItem";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
useNavigate.mockReturnValue(mockNavigate);

const pokemon = {
  name: "Pikachu",
  img: "pikachu.jpg",
};

describe("Given a PokemonItem component", () => {
  describe("When it is instantiated", () => {
    test("Then it should render a Pokemon item", () => {
      render(<PokemonItem pokemon={pokemon} />);

      const pokemonItem = screen.getByText("Pikachu");
      const pokemonImage = screen.getByAltText("Pikachu");

      expect(pokemonItem).toBeInTheDocument();
      expect(pokemonImage).toBeInTheDocument();
    });

    describe("And the item is clicked", () => {
      test("Then it should call navigate with the pokemon route", () => {
        render(<PokemonItem pokemon={pokemon} />);

        const pokemonItem = screen.getByText("Pikachu");

        fireEvent.click(pokemonItem);

        expect(mockNavigate).toHaveBeenCalledWith("/pokemon/pikachu");
      });
    });
  });
});
