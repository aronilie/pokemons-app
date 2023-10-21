import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "../../utils/testUtils/testUtils.js";
import PokemonCard from "./PokemonCard";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

const pokemon = {
  id: 25,
  name: "Pikachu",
  img: "pikachu.jpg",
  types: ["electric"],
  height: "4",
  abilities: ["static", "lightning-rod"],
};

describe("Given a PokemonCard component", () => {
  describe("When it is instantiated", () => {
    test("Then it should render PokemonCard component with the provided data", () => {
      render(<PokemonCard pokemon={pokemon} />);

      expect(screen.getByText(pokemon.name)).toBeInTheDocument();

      const imgElement = screen.getByAltText(pokemon.name);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement.getAttribute("src")).toBe(pokemon.img);
    });

    test("Then it should call navigate when the close button is clicked", () => {
      const mockNavigate = jest.fn();
      jest
        .spyOn(require("react-router-dom"), "useNavigate")
        .mockReturnValue(mockNavigate);

      render(<PokemonCard pokemon={pokemon} />);

      const closeButton = screen.getByText("X");
      fireEvent.click(closeButton);

      expect(mockNavigate).toHaveBeenCalledWith("/");
    });
  });
});
