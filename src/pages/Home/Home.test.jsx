import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor } from "../../utils/testUtils/testUtils.js";
import Home from "./Home";
import usePokemons from "../../hooks/usePokemons";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../hooks/usePokemons");

describe("Given a Home Component", () => {
  describe("When the Home component is instantiated", () => {
    test("Then it should render the Header, PokemonSwitch, and PokemonsList components", async () => {
      usePokemons.mockReturnValue({
        getPokemons: jest.fn(),
        pokemons: [],
        loading: false,
        showFavourites: false,
        error: "",
      });

      const { getByText } = render(<Home />);

      const headerElement = getByText("Generation 1");
      const switchElement = getByText("All");

      expect(headerElement).toBeInTheDocument();
      expect(switchElement).toBeInTheDocument();
    });

    describe("And there are no pokemons", () => {
      test("Then it should call getPokemons", async () => {
        usePokemons.mockReturnValue({
          getPokemons: jest.fn(),
          pokemons: [],
          loading: false,
          showFavourites: false,
          error: "",
        });

        render(<Home />);

        await waitFor(() => {
          expect(usePokemons().getPokemons).toHaveBeenCalled();
        });
      });
    });

    describe("And showFavourites is true", () => {
      test("Then it should render the PokemonsList component with the filtered pokemons", async () => {
        const mockPokemons = [
          { name: "Pikachu", isFavourite: true },
          { name: "Charmander", isFavourite: false },
        ];

        usePokemons.mockReturnValue({
          getPokemons: jest.fn(),
          pokemons: mockPokemons,
          loading: false,
          showFavourites: true,
          error: "",
        });

        const { getByText } = render(
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        );

        await waitFor(() => {
          const pikachuElement = getByText("Pikachu");

          expect(pikachuElement).toBeInTheDocument();
        });
      });
    });
  });
});
