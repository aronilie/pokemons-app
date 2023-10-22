import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "../../utils/testUtils/testUtils.js";
import PokemonSwitch from "./PokemonSwitch";
import usePokemons from "../../hooks/usePokemons";

jest.mock("../../hooks/usePokemons"); // Mock the usePokemons hook

describe("Given a PokemonSwitch component", () => {
  describe("When it is instantiated and showFavourites is false", () => {
    test("Then it should render 'All' button", () => {
      usePokemons.mockReturnValue({
        toggleFavourites: jest.fn(),
        showFavourites: false,
      });

      const { getByText } = render(<PokemonSwitch />);
      const allButton = getByText("All");

      expect(allButton).toBeInTheDocument();
    });
  });

  describe("When it is instantiated and showFavourites is true", () => {
    test("Then it should render 'Favourites' button", () => {
      usePokemons.mockReturnValue({
        toggleFavourites: jest.fn(),
        showFavourites: true,
      });

      const { getByText } = render(<PokemonSwitch />);
      const favouritesButton = getByText("Favourites");

      expect(favouritesButton).toBeInTheDocument();
    });
  });

  describe("When it is instantiated and 'All' button is clicked", () => {
    test("Then it should call toggleFavourites with 'false'", () => {
      const toggleFavouritesMock = jest.fn();

      usePokemons.mockReturnValue({
        toggleFavourites: toggleFavouritesMock,
        showFavourites: true,
      });

      const { getByText } = render(<PokemonSwitch />);
      const allButton = getByText("All");

      fireEvent.click(allButton);

      expect(toggleFavouritesMock).toHaveBeenCalledWith(false);
    });
  });

  describe("When it is instantiated and 'Favourites' button is clicked", () => {
    test("Then it should call toggleFavourites with 'true'", () => {
      const toggleFavouritesMock = jest.fn();

      usePokemons.mockReturnValue({
        toggleFavourites: toggleFavouritesMock,
        showFavourites: false,
      });

      const { getByText } = render(<PokemonSwitch />);
      const favouritesButton = getByText("Favourites");

      fireEvent.click(favouritesButton);

      expect(toggleFavouritesMock).toHaveBeenCalledWith(true);
    });
  });
});
