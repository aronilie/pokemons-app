import { renderHook, act, waitFor } from "@testing-library/react";
import { PokemonsConsumer, PokemonsProvider } from "./pokemonsContext";

describe("Given a pokemonsContext context", () => {
  describe("When updatePokemons is called with new pokemons", () => {
    test("Then it should update the pokemons store", async () => {
      const pokemonsToUpdate = ["Pikachu", "Charmander"];

      const { result: pokemonsStore } = renderHook(() => PokemonsConsumer(), {
        wrapper: PokemonsProvider,
      });

      await act(async () => {
        await pokemonsStore.current.updatePokemons(pokemonsToUpdate);
      });

      const updatedPokemons = pokemonsStore.current.pokemons;

      expect(updatedPokemons).toEqual(pokemonsToUpdate);
    });
  });
});
