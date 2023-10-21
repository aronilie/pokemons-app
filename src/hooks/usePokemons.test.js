import { PokemonsConsumer, PokemonsProvider } from "../store/pokemonsContext";
import usePokemons from "./usePokemons";
import { renderHook, act, waitFor } from "@testing-library/react";

const pokemonMock = {
  id: 25,
  name: "Pikachu",
  img: "pikachu.jpg",
  types: ["electric"],
  height: "4",
  abilities: ["static", "lightning-rod"],
};

describe("Given a usePokemons hook", () => {
  describe("When is called the getPokemons function", () => {
    test("Then it should return an array of pokemons on a successful API call", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({ pokemon_species: ["Pikachu", "Charmander"] }),
      });

      const expectedPokemons = ["Pikachu", "Charmander"];

      const { result: pokemonsStore } = renderHook(() => PokemonsConsumer(), {
        wrapper: PokemonsProvider,
      });

      const { result } = renderHook(() => usePokemons(), {
        wrapper: PokemonsProvider,
      });

      await act(async () => {
        await result.current.getPokemons();
      });

      waitFor(() => {
        const pokemons = pokemonsStore.current.pokemons;

        expect(pokemons).toEqual(expectedPokemons);
      });

      expect(fetch).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/generation/1"
      );
    });

    describe("And the api call is wrong", () => {
      test("Then it should throw an error on failed API call", async () => {
        global.fetch = jest.fn().mockResolvedValue({
          ok: false,
          status: 404,
        });

        const expectedError = new Error("Error-HTTP: 404");

        const { result } = renderHook(() => usePokemons(), {
          wrapper: PokemonsProvider,
        });

        try {
          await act(async () => {
            await result.current.getPokemons();
          });
        } catch (error) {
          expect(error).toEqual(expectedError);
        }

        expect(fetch).toHaveBeenCalledWith(
          "https://pokeapi.co/api/v2/generation/1"
        );
      });
    });
  });

  describe("When is called the getPokemon function", () => {
    test("Then it should return an object of a pokemon on a successful API call", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(pokemonMock),
      });

      const expectedPokemon = pokemonMock;

      const { result: pokemonsStore } = renderHook(() => PokemonsConsumer(), {
        wrapper: PokemonsProvider,
      });

      const { result } = renderHook(() => usePokemons(), {
        wrapper: PokemonsProvider,
      });

      await act(async () => {
        await result.current.getPokemon();
      });

      waitFor(() => {
        const pokemon = pokemonsStore.current.pokemon;

        expect(pokemon).toEqual(expectedPokemon);
      });
    });

    describe("And the api call is wrong", () => {
      test("Then it should throw an error on failed API call", async () => {
        global.fetch = jest.fn().mockResolvedValue({
          ok: false,
          status: 404,
        });

        const expectedError = new Error("Error-HTTP: 404");

        const { result } = renderHook(() => usePokemons(), {
          wrapper: PokemonsProvider,
        });

        try {
          await act(async () => {
            await result.current.getPokemon();
          });
        } catch (error) {
          expect(error).toEqual(expectedError);
        }
      });
    });
  });
});
