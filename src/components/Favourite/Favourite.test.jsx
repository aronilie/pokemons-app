import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "../../utils/testUtils/testUtils.js";
import Favourite from "./Favourite";
import usePokemons from "../../hooks/usePokemons";

jest.mock("../../hooks/usePokemons");

describe("Given a Favourite component", () => {
  describe("When it is instantiated with isFavourite false", () => {
    test("Then it should render 'Make favourite' button", () => {
      usePokemons.mockReturnValue({ makeFavourite: jest.fn() });

      const { getByText } = render(<Favourite isFavourite={false} />);
      const makeFavouriteButton = getByText("Make favourite");

      expect(makeFavouriteButton).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with isFavourite true", () => {
    test("Then it should render 'Remove favourite' button", () => {
      usePokemons.mockReturnValue({ makeFavourite: jest.fn() });

      const { getByText } = render(<Favourite isFavourite={true} />);
      const removeFavouriteButton = getByText("Remove favourite");

      expect(removeFavouriteButton).toBeInTheDocument();
    });
  });

  describe("When it is instantiated and 'Make favourite' button is clicked", () => {
    test("Then it should call makeFavourite", () => {
      const makeFavouriteMock = jest.fn();

      usePokemons.mockReturnValue({ makeFavourite: makeFavouriteMock });

      const { getByText } = render(<Favourite isFavourite={false} />);
      const makeFavouriteButton = getByText("Make favourite");

      fireEvent.click(makeFavouriteButton);

      expect(makeFavouriteMock).toHaveBeenCalledWith(true);
    });
  });

  describe("When it is instantiated and 'Remove favourite' button is clicked", () => {
    test("Then it should call makeFavourite with 'false'", () => {
      const makeFavouriteMock = jest.fn();

      usePokemons.mockReturnValue({ makeFavourite: makeFavouriteMock });

      const { getByText } = render(<Favourite isFavourite={true} />);
      const removeFavouriteButton = getByText("Remove favourite");

      fireEvent.click(removeFavouriteButton);

      expect(makeFavouriteMock).toHaveBeenCalledWith(false);
    });
  });
});
