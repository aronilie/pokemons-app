import { renderHook, act, waitFor } from "@testing-library/react";
import { PokemonsConsumer, PokemonsProvider } from "./pokemonsContext";

const pokemonMock = {
  id: 25,
  name: "Pikachu",
  img: "pikachu.jpg",
  types: ["electric"],
  height: "4",
  abilities: ["static", "lightning-rod"],
};

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

  describe("When updatePokemon is called with a new pokemon", () => {
    test("Then it should update the pokemon store", async () => {
      const { result: pokemonsStore } = renderHook(() => PokemonsConsumer(), {
        wrapper: PokemonsProvider,
      });

      await act(async () => {
        await pokemonsStore.current.updatePokemon(pokemonMock);
      });

      const updatedPokemon = pokemonsStore.current.pokemon;

      expect(updatedPokemon).toEqual(pokemonMock);
    });
  });
});
