import { PokemonsConsumer, PokemonsProvider } from "../store/pokemonsContext";
import usePokemons from "./usePokemons";
import { renderHook, act, waitFor } from "@testing-library/react";

describe("Given a usePokemons hook", () => {
  describe("When is called the getPokemons function", () => {
    it("Then it should return an array of pokemons on a successful API call", async () => {
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

      setTimeout(() => {
        const pokemons = pokemonsStore.current.pokemons;

        expect(pokemons).toEqual(expectedPokemons);
      }, 0);

      expect(fetch).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/generation/1"
      );
    });

    describe("And the api call is wrong", () => {
      it("Then it should throw an error on failed API call", async () => {
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
});
