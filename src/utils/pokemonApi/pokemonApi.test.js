import { getAllPokemons, getDetailedPokemon } from "./pokemonApi";

describe("Given a pokemonApi module", () => {
  describe("When getAllPokemons function is called", () => {
    test("Then it should fetch and return an array of pokemons on a successful API call", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({ pokemon_species: ["Pikachu", "Charmander"] }),
      });

      const expectedPokemons = ["Pikachu", "Charmander"];

      const result = await getAllPokemons();

      expect(result).toEqual(expectedPokemons);
      expect(fetch).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/generation/1"
      );
    });

    test("Then it should throw an error on failed API call", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 404,
      });

      try {
        await getAllPokemons();
      } catch (error) {
        expect(error).toEqual(
          new Error("Se ha producido un error al obtener los pokemons 😟")
        );
      }

      expect(fetch).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/generation/1"
      );
    });
  });

  describe("When getDetailedPokemon function is called", () => {
    test("Then it should fetch and return detailed Pokemon data on a successful API call", async () => {
      const pokemonName = "pikachu";
      const mockPokemon = {
        id: 25,
        name: "Pikachu",
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockPokemon),
      });

      const result = await getDetailedPokemon(pokemonName);

      expect(result).toEqual(mockPokemon);
      expect(fetch).toHaveBeenCalledWith(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
    });

    test("Then it should throw an error on failed API call", async () => {
      const pokemonName = "pikachu";

      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 404,
      });

      try {
        await getDetailedPokemon(pokemonName);
      } catch (error) {
        expect(error).toEqual(
          new Error(
            `Se ha producido un error al obtener los datos de ${pokemonName} 😟`
          )
        );
      }

      expect(fetch).toHaveBeenCalledWith(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
    });
  });
});
