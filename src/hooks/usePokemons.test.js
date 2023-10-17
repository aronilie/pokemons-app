import usePokemons from "./usePokemons";

describe("Given a usePokemons hook", () => {
  describe("When is called the getPokemons function", () => {
    it("Then it should return an array of pokemons on successful API call", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({ pokemon_species: ["Pikachu", "Charmander"] }),
      });
      const expectedPokemons = ["Pikachu", "Charmander"];

      const pokemonService = usePokemons();
      const pokemons = await pokemonService.getPokemons();

      expect(pokemons).toEqual(expectedPokemons);

      expect(fetch).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/generation/1"
      );
    });
  });

  it("should throw an error on failed API call", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 404,
    });

    const pokemonService = usePokemons();

    await expect(pokemonService.getPokemons()).rejects.toThrow(
      "Error-HTTP: 404"
    );

    expect(fetch).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/generation/1"
    );
  });
});
